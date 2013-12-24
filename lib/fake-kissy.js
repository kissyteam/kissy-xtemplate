/**
 *
 * @author: 橘子<daxingplay@gmail.com>
 * @time: 12/19/13 16:31
 * @description:
 */

var fs = require('fs');
var path = require('path');

var MIX_CIRCULAR_DETECTION = '__MIX_CIRCULAR',
    COMPARE_MARKER = '__~ks_compared',
    TRUE = true,
    EMPTY = '',
    Obj = Object,

    objectCreate = Obj.create,
// error in native ie678, not in simulated ie9
    hasEnumBug = !({toString: 1}.propertyIsEnumerable('toString')),
    enumProperties = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toString',
        'toLocaleString',
        'valueOf'
    ],
    htmlEntities = {
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&#x60;': '`',
        '&#x2F;': '/',
        '&quot;': '"',
        '&#x27;': "'"
    },
    reverseEntities = {},
    escapeReg;

var S = {
    startsWith: function (str, prefix) {
        return str.lastIndexOf(prefix, 0) === 0;
    },
    keys: Object.keys,
    isArray: Array.isArray,
    each: function (object, fn, context) {
        if (object) {
            var key,
                val,
                keys,
                i = 0,
                length = object && object.length,
            // do not use typeof obj == 'function': bug in phantomjs
                isObj = length === undefined || typeof object === 'function';

            context = context || null;

            if (isObj) {
                keys = this.keys(object);
                for (; i < keys.length; i++) {
                    key = keys[i];
                    // can not use hasOwnProperty
                    if (fn.call(context, object[key], key, object) === false) {
                        break;
                    }
                }
            } else {
                for (val = object[0];
                     i < length; val = object[++i]) {
                    if (fn.call(context, val, i, object) === false) {
                        break;
                    }
                }
            }
        }
        return object;
    },
    mix: function (r, s, ov, wl, deep) {
        if (typeof ov === 'object') {
            wl = /**
             @ignore
             @type {String[]|Function}
             */ov.whitelist;
            deep = ov.deep;
            ov = ov.overwrite;
        }

        if (wl && (typeof wl !== 'function')) {
            var originalWl = wl;
            wl = function (name, val) {
                return this.inArray(name, originalWl) ? val : undefined;
            };
        }

        if (ov === undefined) {
            ov = TRUE;
        }

        var cache = [],
            c,
            i = 0;
        mixInternal(r, s, ov, wl, deep, cache);
        while ((c = cache[i++])) {
            delete c[MIX_CIRCULAR_DETECTION];
        }
        return r;
    },
    merge: function (varArgs) {
        varArgs = this.makeArray(arguments);
        var o = {},
            i,
            l = varArgs.length;
        for (i = 0; i < l; i++) {
            this.mix(o, varArgs[i]);
        }
        return o;
    },
    inArray: function (item, arr) {
        return arr.indexOf(item) > -1;
    },
    makeArray: function (o) {
        if (o == null) {
            return [];
        }
        if (this.isArray(o)) {
            return o;
        }
        var lengthType = typeof o.length,
            oType = typeof o;
        // The strings and functions also have 'length'
        if (lengthType !== 'number' ||
            // form.elements in ie78 has nodeName 'form'
            // then caution select
            // o.nodeName
            // window
            o.alert ||
            oType === 'string' ||
            // https://github.com/ariya/phantomjs/issues/11478
            (oType === 'function' && !( 'item' in o && lengthType === 'number'))) {
            return [o];
        }
        var ret = [];
        for (var i = 0, l = o.length; i < l; i++) {
            ret[i] = o[i];
        }
        return ret;
    },
    error: function(msg){
        throw new Error(msg);
    },
    escapeHtml: function(str){
        return (str + '').replace(getEscapeReg(), function (m) {
            return reverseEntities[m];
        });
    },
    getLogger: function(prefix){
        return console;
    },
    log: console.log,
    equals: function (a, b, /*internal use*/mismatchKeys, /*internal use*/mismatchValues) {
        // inspired by jasmine
        mismatchKeys = mismatchKeys || [];
        mismatchValues = mismatchValues || [];

        if (a === b) {
            return TRUE;
        }
        if (a === undefined || a === null || b === undefined || b === null) {
            // need type coercion
            return a == null && b == null;
        }
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return (a === b);
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return (a === b);
        }
        if (typeof a === 'object' && typeof b === 'object') {
            return compareObjects(a, b, mismatchKeys, mismatchValues);
        }
        // Straight check
        return (a === b);
    },
    require: require,
    Path: path
};

function mixInternal(r, s, ov, wl, deep, cache) {
    if (!s || !r) {
        return r;
    }
    var i, p, keys, len;

    // 记录循环标志
    s[MIX_CIRCULAR_DETECTION] = r;

    // 记录被记录了循环标志的对像
    cache.push(s);

    // mix all properties
    keys = S.keys(s);
    len = keys.length;
    for (i = 0; i < len; i++) {
        p = keys[i];
        if (p !== MIX_CIRCULAR_DETECTION) {
            // no hasOwnProperty judge!
            _mix(p, r, s, ov, wl, deep, cache);
        }
    }

    return r;
}

function _mix(p, r, s, ov, wl, deep, cache) {
    // 要求覆盖
    // 或者目的不存在
    // 或者深度mix
    if (ov || !(p in r) || deep) {
        var target = r[p],
            src = s[p];
        // prevent never-end loop
        if (target === src) {
            // S.mix({},{x:undefined})
            if (target === undefined) {
                r[p] = target;
            }
            return;
        }
        if (wl) {
            src = wl.call(s, p, src);
        }
        // 来源是数组和对象，并且要求深度 mix
        if (deep && src && (S.isArray(src) || S.isPlainObject(src))) {
            if (src[MIX_CIRCULAR_DETECTION]) {
                r[p] = src[MIX_CIRCULAR_DETECTION];
            } else {
                // 目标值为对象或数组，直接 mix
                // 否则 新建一个和源值类型一样的空数组/对象，递归 mix
                var clone = target && (S.isArray(target) || S.isPlainObject(target)) ?
                    target :
                    (Array.isArray(src) ? [] : {});
                r[p] = clone;
                mixInternal(clone, src, ov, wl, TRUE, cache);
            }
        } else if (src !== undefined && (ov || !(p in r))) {
            r[p] = src;
        }
    }
}

function getEscapeReg() {
    if (escapeReg) {
        return escapeReg
    }
    var str = EMPTY;
    htmlEntities.forEach(function (entity) {
        str += entity + '|';
    });
    str = str.slice(0, -1);
    return escapeReg = new RegExp(str, 'g');
}

function compareObjects(a, b, mismatchKeys, mismatchValues) {
    // 两个比较过了，无需再比较，防止循环比较
    if (a[COMPARE_MARKER] === b && b[COMPARE_MARKER] === a) {
        return TRUE;
    }
    a[COMPARE_MARKER] = b;
    b[COMPARE_MARKER] = a;
    var hasKey = function (obj, keyName) {
        return (obj !== null && obj !== undefined) && obj[keyName] !== undefined;
    };
    for (var property in b) {

        if (!hasKey(a, property) && hasKey(b, property)) {
            mismatchKeys.push('expected has key ' + property + '", but missing from actual.');
        }

    }
    for (property in a) {

        if (!hasKey(b, property) && hasKey(a, property)) {
            mismatchKeys.push('expected missing key "' + property + '", but present in actual.');
        }

    }
    for (property in b) {

        if (property === COMPARE_MARKER) {
            continue;
        }
        if (!S.equals(a[property], b[property], mismatchKeys, mismatchValues)) {
            mismatchValues.push('"' + property + '" was "' +
                (b[property] ? (b[property].toString()) : b[property]) +
                '" in expected, but was "' +
                (a[property] ? (a[property].toString()) : a[property]) + '" in actual.');
        }

    }
    if (S.isArray(a) && S.isArray(b) && a.length !== b.length) {
        mismatchValues.push('arrays were not the same length');
    }
    delete a[COMPARE_MARKER];
    delete b[COMPARE_MARKER];
    return (mismatchKeys.length === 0 && mismatchValues.length === 0);
}

module.exports = S;