/** Compiled By KISSY-XTemplate */
/*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/
KISSY.add(function (S, require, exports, module) {
    var a = function (scope, buffer, undefined) {
        var tpl = this, nativeCommands = tpl.root.nativeCommands, utils = tpl.root.utils;
        var callFnUtil = utils['callFn'], callCommandUtil = utils['callCommand'], eachCommand = nativeCommands['each'], withCommand = nativeCommands['with'], ifCommand = nativeCommands['if'], setCommand = nativeCommands['set'], includeCommand = nativeCommands['include'], parseCommand = nativeCommands['parse'], extendCommand = nativeCommands['extend'], blockCommand = nativeCommands['block'], macroCommand = nativeCommands['macro'], debuggerCommand = nativeCommands['debugger'];
        buffer.write('<div id="J_Item_', 0);
        var id0 = scope.resolve(['cartId'], 0);
        buffer.write(id0, true);
        buffer.write('" class="J_ItemBody item-body clearfix item-', 0);
        var id1 = scope.resolve(['type'], 0);
        buffer.write(id1, true);
        buffer.write(' ', 0);
        var option2 = { escape: 1 };
        var params3 = [];
        var id4 = scope.resolve(['services'], 0);
        params3.push(id4);
        option2.params = params3;
        option2.fn = function (scope, buffer) {
            buffer.write('item-with-services', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option2, buffer, 1);
        buffer.write(' ', 0);
        var option5 = { escape: 1 };
        var params6 = [];
        var id7 = scope.resolve(['isFirstOne'], 0);
        params6.push(id7);
        option5.params = params6;
        option5.fn = function (scope, buffer) {
            buffer.write('first-item', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option5, buffer, 1);
        buffer.write(' ', 0);
        var option8 = { escape: 1 };
        var params9 = [];
        var id10 = scope.resolve(['isLastOne'], 0);
        params9.push(id10);
        option8.params = params9;
        option8.fn = function (scope, buffer) {
            buffer.write(' last-item ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option8, buffer, 1);
        buffer.write(' ', 0);
        var option11 = { escape: 1 };
        var params12 = [];
        var id13 = scope.resolve(['isValid'], 0);
        var exp14 = id13;
        exp14 = id13 === false;
        var exp17 = exp14;
        if (exp14) {
            var id15 = scope.resolve(['type'], 0);
            var exp16 = id15;
            exp16 = id15 !== ' ju11';
            exp17 = exp16;
        }
        params12.push(exp17);
        option11.params = params12;
        option11.fn = function (scope, buffer) {
            buffer.write(' item-invalid ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option11, buffer, 1);
        buffer.write(' ', 0);
        var option18 = { escape: 1 };
        var params19 = [];
        var id20 = scope.resolve(['model'], 0);
        var exp22 = id20;
        if (id20) {
            var id21 = scope.resolve([
                    'model',
                    'isSelected'
                ], 0);
            exp22 = id21;
        }
        params19.push(exp22);
        option18.params = params19;
        option18.fn = function (scope, buffer) {
            buffer.write(' selected item-selected ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option18, buffer, 1);
        buffer.write('">\n<div class="item-content table">\n    <div class="td td-chk">\n        <div class="td-inner">\n            ', 0);
        var option23 = { escape: 1 };
        var params24 = [];
        var id25 = scope.resolve(['isValid'], 0);
        params24.push(id25);
        option23.params = params24;
        option23.fn = function (scope, buffer) {
            buffer.write('\n            ', 0);
            var option26 = { escape: 1 };
            var params27 = [];
            var id28 = scope.resolve(['type'], 0);
            var exp29 = id28;
            exp29 = id28 === 'combo';
            var exp32 = exp29;
            if (!exp29) {
                var id30 = scope.resolve(['orderType'], 0);
                var exp31 = id30;
                exp31 = id30 === 'combo';
                exp32 = exp31;
            }
            params27.push(exp32);
            option26.params = params27;
            option26.fn = function (scope, buffer) {
                buffer.write('\n            ', 0);
                return buffer;
            };
            option26.inverse = function (scope, buffer) {
                buffer.write('\n            ', 0);
                var option33 = { escape: 1 };
                var params34 = [];
                var id35 = scope.resolve(['type'], 0);
                var exp36 = id35;
                exp36 = id35 === 'redemption';
                params34.push(exp36);
                option33.params = params34;
                option33.fn = function (scope, buffer) {
                    buffer.write('\n            <em class="icon-redemption">\u6362\u8D2D</em>\n            ', 0);
                    return buffer;
                };
                option33.inverse = function (scope, buffer) {
                    buffer.write('\n            <span class="s-checkbox J_CheckBoxItem"></span>\n            ', 0);
                    return buffer;
                };
                buffer = ifCommand.call(tpl, scope, option33, buffer, 8);
                buffer.write('\n            ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option26, buffer, 6);
            buffer.write('\n            ', 0);
            return buffer;
        };
        option23.inverse = function (scope, buffer) {
            buffer.write('\n            ', 0);
            var option37 = { escape: 1 };
            var params38 = [];
            var id39 = scope.resolve(['type'], 0);
            var exp40 = id39;
            exp40 = id39 === 'ju11';
            params38.push(exp40);
            option37.params = params38;
            option37.fn = function (scope, buffer) {
                buffer.write('\n            <a class="icon-ju11" title="\u8BE5\u5546\u54C1\u4E3A\u805A\u5212\u7B97\u5B9D\u8D1D\uFF0C\u76EE\u524D\u6B63\u5728\u9884\u70ED\uFF0C\u663E\u793A\u5546\u54C1\u539F\u4EF7\uFF0C\u6682\u65F6\u65E0\u6CD5\u8D2D\u4E70\uFF0C\u5F00\u56E2\u540E\u53EF\u6062\u590D\u6B63\u5E38\u8D2D\u4E70\uFF01" href="javascript: void(0);">\u805A\u5212\u7B97</a>\n            ', 0);
                return buffer;
            };
            option37.inverse = function (scope, buffer) {
                buffer.write('\n            <a class="icon-invalid" title="\u5546\u54C1\u88AB\u4E0B\u67B6\u3001\u5220\u9664\u3001\u5E93\u5B58\u4E0D\u8DB3\uFF0C\u6216\u5546\u5BB6\u5904\u4E8E\u88AB\u76D1\u7BA1\u6216\u51BB\u7ED3\u72B6\u6001" target="_blank"\n               href="http://service.taobao.com/support/knowledge-1116245.htm">invalid</a>\n            ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option37, buffer, 15);
            buffer.write('\n            ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option23, buffer, 5);
        buffer.write('\n        </div>\n    </div>\n    <div class="td td-item">\n        <div class="td-inner">\n            <div class="item-pic cart-pic s70 J_ItemPic">\n                <a href="', 0);
        var id41 = scope.resolve(['url'], 0);
        buffer.write(id41, true);
        buffer.write('" target="_blank" class="J_MakePoint" data-point="tbcart.8.12">\n                    ', 0);
        var option42 = { escape: 1 };
        var params43 = [];
        var id44 = scope.resolve(['pic'], 0);
        var exp45 = id44;
        exp45 = id44 === '';
        params43.push(exp45);
        option42.params = params43;
        option42.fn = function (scope, buffer) {
            buffer.write('\n                    <img src="http://a.tbcdn.cn/app/tc/img/nopic_s50.gif" class="itempic J_ItemImg" />\n                    ', 0);
            return buffer;
        };
        option42.inverse = function (scope, buffer) {
            buffer.write('\n                    <img src="http://a.tbcdn.cn/s.gif" lazyload="', 0);
            var id46 = scope.resolve(['pic'], 0);
            buffer.write(id46, true);
            buffer.write('_80x80.jpg" class="itempic J_ItemImg" />\n                    ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option42, buffer, 28);
        buffer.write('\n                </a>\n            </div>\n            <div class="item-info">\n                <a href="', 0);
        var id47 = scope.resolve(['url'], 0);
        buffer.write(id47, true);
        buffer.write('" target="_blank" class="item-title J_MakePoint" data-point="tbcart.8.11" />', 0);
        var id48 = scope.resolve(['title'], 0);
        buffer.write(id48, true);
        buffer.write('</a>\n                ', 0);
        var option49 = { escape: 1 };
        var params50 = [];
        var id51 = scope.resolve(['skus'], 0);
        params50.push(id51);
        option49.params = params50;
        option49.fn = function (scope, buffer) {
            buffer.write('\n                <div class="item-props">\n                    ', 0);
            var option52 = { escape: 1 };
            var params53 = [];
            var id54 = scope.resolve(['skus'], 0);
            params53.push(id54);
            option52.params = params53;
            option52.fn = function (scope, buffer) {
                buffer.write('<span>', 0);
                var id55 = scope.resolve(['this'], 0);
                buffer.write(id55, true);
                buffer.write('</span>', 0);
                return buffer;
            };
            buffer = eachCommand.call(tpl, scope, option52, buffer, 39);
            buffer.write('\n                </div>\n                ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option49, buffer, 37);
        buffer.write('\n                ', 0);
        var option56 = { escape: 1 };
        var params57 = [];
        var id58 = scope.resolve(['type'], 0);
        var exp59 = id58;
        exp59 = id58 === 'combo';
        var exp62 = exp59;
        if (!exp59) {
            var id60 = scope.resolve(['type'], 0);
            var exp61 = id60;
            exp61 = id60 === 'campaign';
            exp62 = exp61;
        }
        var exp65 = exp62;
        if (!exp62) {
            var id63 = scope.resolve(['orderType'], 0);
            var exp64 = id63;
            exp64 = id63 === 'act';
            exp65 = exp64;
        }
        var exp68 = exp65;
        if (!exp65) {
            var id66 = scope.resolve(['orderType'], 0);
            var exp67 = id66;
            exp67 = id66 === 'combo';
            exp68 = exp67;
        }
        params57.push(exp68);
        option56.params = params57;
        option56.fn = function (scope, buffer) {
            buffer.write('\n                <div class="shop-info">\n                    ', 0);
            var option69 = { escape: 1 };
            var params70 = [];
            var id71 = scope.resolve(['shopName'], 0);
            params70.push(id71);
            option69.params = params70;
            option69.fn = function (scope, buffer) {
                buffer.write('\n                    <a title="', 0);
                var id72 = scope.resolve(['shopName'], 0);
                buffer.write(id72, true);
                buffer.write('" class="shop-title J_MakePoint" data-point="tbcart.8.15" target="_blank" href="', 0);
                var id73 = scope.resolve(['shopUrl'], 0);
                buffer.write(id73, true);
                buffer.write('">', 0);
                var id74 = scope.resolve(['shopName'], 0);
                buffer.write(id74, true);
                buffer.write('</a>\n                    ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option69, buffer, 44);
            buffer.write('\n                    ', 0);
            var option75 = { escape: 1 };
            var params76 = [];
            var id77 = scope.resolve(['host'], 0);
            var exp78 = id77;
            exp78 = id77 !== 'C';
            params76.push(exp78);
            option75.params = params76;
            option75.fn = function (scope, buffer) {
                buffer.write('<span class="host-icon icon-', 0);
                var id79 = scope.resolve(['host'], 0);
                buffer.write(id79, true);
                buffer.write('"></span>', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option75, buffer, 47);
            buffer.write('\n                    <span class="J_WangWang" data-icon="small" data-nick="', 0);
            var id80 = scope.resolve(['seller'], 0);
            buffer.write(id80, true);
            buffer.write('" data-display="inline"></span>\n                </div>\n                ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option56, buffer, 42);
        buffer.write('\n            </div>\n        </div>\n    </div>\n    <div class="td td-price">\n        <div class="td-inner">\n            <div class="item-price">\n                ', 0);
        var option81 = { escape: 1 };
        var params82 = [];
        var id83 = scope.resolve([
                'price',
                'now'
            ], 0);
        var exp85 = id83;
        var id84 = scope.resolve([
                'price',
                'origin'
            ], 0);
        exp85 = id83 < id84;
        params82.push(exp85);
        option81.params = params82;
        option81.fn = function (scope, buffer) {
            buffer.write('\n                <div class="price-line"><em class="price-original">', 0);
            var id86 = scope.resolve([
                    'price',
                    'origin_str'
                ], 0);
            buffer.write(id86, true);
            buffer.write('</em></div>\n                ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option81, buffer, 57);
        buffer.write('\n                <div class="price-line"><em class="price-now" tabindex="0">', 0);
        var id87 = scope.resolve([
                'price',
                'now_str'
            ], 0);
        buffer.write(id87, true);
        buffer.write('</em></div>\n                ', 0);
        var option88 = { escape: 1 };
        var params89 = [];
        var id90 = scope.resolve(['isValid'], 0);
        params89.push(id90);
        option88.params = params89;
        option88.fn = function (scope, buffer) {
            buffer.write('\n                ', 0);
            var option91 = { escape: 1 };
            var params92 = [];
            var id93 = scope.resolve(['promotions'], 0);
            var exp95 = id93;
            if (id93) {
                var id94 = scope.resolve([
                        'promotions',
                        'type'
                    ], 0);
                exp95 = id94;
            }
            params92.push(exp95);
            option91.params = params92;
            option91.fn = function (scope, buffer) {
                buffer.write('\n                ', 0);
                var option96 = { escape: 1 };
                var params97 = [];
                var id98 = scope.resolve([
                        'promotions',
                        'hideTitle'
                    ], 0);
                var exp99 = id98;
                exp99 = id98 === false;
                params97.push(exp99);
                option96.params = params97;
                option96.fn = function (scope, buffer) {
                    buffer.write('\n                <div class="promo-main promo-', 0);
                    var id100 = scope.resolve([
                            'promotions',
                            'type'
                        ], 0);
                    buffer.write(id100, true);
                    buffer.write('">\n                    <div class="promo-content ', 0);
                    var option101 = { escape: 1 };
                    var params102 = [];
                    var id103 = scope.resolve([
                            'promotions',
                            'endTime'
                        ], 0);
                    params102.push(id103);
                    option101.params = params102;
                    option101.fn = function (scope, buffer) {
                        buffer.write(' promo-limited ', 0);
                        return buffer;
                    };
                    buffer = ifCommand.call(tpl, scope, option101, buffer, 65);
                    buffer.write('">\n                        ', 0);
                    var id104 = scope.resolve([
                            'promotions',
                            'name'
                        ], 0);
                    buffer.write(id104, true);
                    buffer.write('\n                    </div>\n                </div>\n                ', 0);
                    return buffer;
                };
                buffer = ifCommand.call(tpl, scope, option96, buffer, 63);
                buffer.write('\n                ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option91, buffer, 62);
            buffer.write('\n                ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option88, buffer, 61);
        buffer.write('\n            </div>\n        </div>\n    </div>\n    <div class="td td-amount">\n        <div class="td-inner">\n            ', 0);
        var option105 = { escape: 1 };
        var params106 = [];
        var id107 = scope.resolve(['type'], 0);
        var exp108 = id107;
        exp108 = id107 === 'combo';
        var exp111 = exp108;
        if (!exp108) {
            var id109 = scope.resolve(['type'], 0);
            var exp110 = id109;
            exp110 = id109 === 'redemption';
            exp111 = exp110;
        }
        var exp114 = exp111;
        if (!exp111) {
            var id112 = scope.resolve(['orderType'], 0);
            var exp113 = id112;
            exp113 = id112 === 'combo';
            exp114 = exp113;
        }
        params106.push(exp114);
        option105.params = params106;
        option105.fn = function (scope, buffer) {
            buffer.write('\n            ', 0);
            var id115 = scope.resolve([
                    'amount',
                    'now'
                ], 0);
            buffer.write(id115, true);
            buffer.write('\n            ', 0);
            return buffer;
        };
        option105.inverse = function (scope, buffer) {
            buffer.write('\n            <div class="item-amount ', 0);
            var option116 = { escape: 1 };
            var params117 = [];
            var id118 = scope.resolve(['isValid'], 0);
            var exp121 = id118;
            if (id118) {
                var id119 = scope.resolve([
                        'amount',
                        'max'
                    ], 0);
                var exp120 = id119;
                exp120 = id119 <= 3;
                exp121 = exp120;
            }
            var exp124 = exp121;
            if (exp121) {
                var id122 = scope.resolve(['type'], 0);
                var exp123 = id122;
                exp123 = id122 === 'redemption';
                exp124 = exp123;
            }
            params117.push(exp124);
            option116.params = params117;
            option116.fn = function (scope, buffer) {
                buffer.write(' s-lack ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option116, buffer, 80);
            buffer.write('">\n            ', 0);
            var option125 = { escape: 1 };
            var params126 = [];
            var id127 = scope.resolve(['isValid'], 0);
            var exp130 = id127;
            if (id127) {
                var id128 = scope.resolve(['type'], 0);
                var exp129 = id128;
                exp129 = id128 !== 'redemption';
                exp130 = exp129;
            }
            params126.push(exp130);
            option125.params = params126;
            option125.fn = function (scope, buffer) {
                buffer.write('\n            <input type="text" value="', 0);
                var id131 = scope.resolve([
                        'amount',
                        'now'
                    ], 0);
                buffer.write(id131, true);
                buffer.write('" class="text text-amount J_ItemAmount" data-max="', 0);
                var id132 = scope.resolve([
                        'amount',
                        'max'
                    ], 0);
                buffer.write(id132, true);
                buffer.write('" data-now="', 0);
                var id133 = scope.resolve([
                        'amount',
                        'now'
                    ], 0);
                buffer.write(id133, true);
                buffer.write('" autocomplete="off" />\n            ', 0);
                return buffer;
            };
            option125.inverse = function (scope, buffer) {
                buffer.write('\n            ', 0);
                var id134 = scope.resolve([
                        'amount',
                        'now'
                    ], 0);
                buffer.write(id134, true);
                buffer.write('\n            ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option125, buffer, 81);
            buffer.write('\n        </div>\n        ', 0);
            var option135 = { escape: 1 };
            var params136 = [];
            var id137 = scope.resolve(['isValid'], 0);
            params136.push(id137);
            option135.params = params136;
            option135.fn = function (scope, buffer) {
                buffer.write('\n        <div class="amount-msg J_AmountMsg">\n            ', 0);
                var option138 = { escape: 1 };
                var params139 = [];
                var id140 = scope.resolve([
                        'amount',
                        'max'
                    ], 0);
                var exp141 = id140;
                exp141 = id140 < 1;
                params139.push(exp141);
                option138.params = params139;
                option138.fn = function (scope, buffer) {
                    buffer.write('\n            <em class="error-msg">\u8BE5\u5B9D\u8D1D\u5E93\u5B58\u4E0D\u8DB3,\u8BF7\u8054\u7CFB\u5356\u5BB6</em>\n            ', 0);
                    return buffer;
                };
                option138.inverse = function (scope, buffer) {
                    buffer.write('\n            ', 0);
                    var option142 = { escape: 1 };
                    var params143 = [];
                    var id144 = scope.resolve([
                            'amount',
                            'max'
                        ], 0);
                    var exp146 = id144;
                    var id145 = scope.resolve([
                            'amount',
                            'now'
                        ], 0);
                    exp146 = id144 < id145;
                    params143.push(exp146);
                    option142.params = params143;
                    option142.fn = function (scope, buffer) {
                        buffer.write('\n            <em class="error-msg">\u6700\u591A\u53EA\u80FD\u8D2D\u4E70', 0);
                        var id147 = scope.resolve([
                                'amount',
                                'max'
                            ], 0);
                        buffer.write(id147, true);
                        buffer.write('\u4EF6</em>\n            ', 0);
                        return buffer;
                    };
                    option142.inverse = function (scope, buffer) {
                        buffer.write('\n            ', 0);
                        var option148 = { escape: 1 };
                        var params149 = [];
                        var id150 = scope.resolve([
                                'amount',
                                'limit'
                            ], 0);
                        var exp152 = id150;
                        var id151 = scope.resolve([
                                'amount',
                                'max'
                            ], 0);
                        exp152 = id150 <= id151;
                        params149.push(exp152);
                        option148.params = params149;
                        option148.fn = function (scope, buffer) {
                            buffer.write('\n            <em class="s-danger-text">\u9650\u8D2D', 0);
                            var id153 = scope.resolve([
                                    'amount',
                                    'limit'
                                ], 0);
                            buffer.write(id153, true);
                            buffer.write('\u4EF6</em>\n            ', 0);
                            return buffer;
                        };
                        option148.inverse = function (scope, buffer) {
                            buffer.write('\n            ', 0);
                            var option154 = { escape: 1 };
                            var params155 = [];
                            var id156 = scope.resolve([
                                    'amount',
                                    'max'
                                ], 0);
                            var exp157 = id156;
                            exp157 = id156 <= 3;
                            params155.push(exp157);
                            option154.params = params155;
                            option154.fn = function (scope, buffer) {
                                buffer.write('\n            <em class="s-danger-text" title="\u8BE5\u5546\u54C1\u53EA\u6709', 0);
                                var id158 = scope.resolve([
                                        'amount',
                                        'max'
                                    ], 0);
                                buffer.write(id158, true);
                                buffer.write('\u4EF6\u4E86\u54E6\uFF0C\u8981\u4E70\u7684\u8D76\u7D27\u554A">\u5E93\u5B58\u7D27\u5F20</em>\n            ', 0);
                                return buffer;
                            };
                            option154.inverse = function (scope, buffer) {
                                buffer.write('\n            ', 0);
                                var option159 = { escape: 1 };
                                var params160 = [];
                                var id161 = scope.resolve([
                                        'amount',
                                        'supply'
                                    ], 0);
                                var exp163 = id161;
                                var id162 = scope.resolve([
                                        'amount',
                                        'demand'
                                    ], 0);
                                exp163 = id161 < id162;
                                params160.push(exp163);
                                option159.params = params160;
                                option159.fn = function (scope, buffer) {
                                    buffer.write('\n            <em class="error-msg" title="\u8BE5\u5546\u54C1\u53EA\u6709', 0);
                                    var id164 = scope.resolve([
                                            'amount',
                                            'supply'
                                        ], 0);
                                    buffer.write(id164, true);
                                    buffer.write('\u4EF6\u4E86\u54E6\uFF0C\u4F46\u662F\u6709', 0);
                                    var id165 = scope.resolve([
                                            'amount',
                                            'demand'
                                        ], 0);
                                    buffer.write(id165, true);
                                    buffer.write('\u4EBA\u5DF2\u7ECF\u52A0\u5165\u8D2D\u7269\u8F66\u6253\u7B97\u8D2D\u4E70">\u5E93\u5B58\u7D27\u5F20</em>\n            ', 0);
                                    return buffer;
                                };
                                buffer = ifCommand.call(tpl, scope, option159, buffer, 101);
                                buffer.write('\n            ', 0);
                                return buffer;
                            };
                            buffer = ifCommand.call(tpl, scope, option154, buffer, 98);
                            buffer.write('\n            ', 0);
                            return buffer;
                        };
                        buffer = ifCommand.call(tpl, scope, option148, buffer, 95);
                        buffer.write('\n            ', 0);
                        return buffer;
                    };
                    buffer = ifCommand.call(tpl, scope, option142, buffer, 92);
                    buffer.write('\n            ', 0);
                    return buffer;
                };
                buffer = ifCommand.call(tpl, scope, option138, buffer, 89);
                buffer.write('\n        </div>\n        ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option135, buffer, 87);
            buffer.write('\n        ', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option105, buffer, 77);
        buffer.write('\n    </div>\n</div>\n<div class="td td-sum">\n    <div class="td-inner">\n        <em tabindex="0" class="number">', 0);
        var id166 = scope.resolve([
                'price',
                'sum_str'
            ], 0);
        buffer.write(id166, true);
        buffer.write('</em>\n    </div>\n</div>\n</div>\n<div class="item-operations J_ItemOps">\n    <a title="\u79FB\u81F3\u6536\u85CF\u5939" class="btn-item-fav J_Fav J_MakePoint"  data-point-url="http://www.atpanel.com/jsclick?cache=', 0);
        var id167 = scope.resolve(['randomNum'], 0);
        buffer.write(id167, true);
        buffer.write('1&mycart=collect" href="#">\u79FB\u5165\u6536\u85CF\u5939</a>\n    <a href="javascript:;" data-point-url="http://www.atpanel.com/jsclick?cache=', 0);
        var id168 = scope.resolve(['randomNum'], 0);
        buffer.write(id168, true);
        buffer.write('2&cartlist=delete" class="btn-item-del J_Del J_MakePoint">\u5220\u9664</a>\n</div>\n', 0);
        var option169 = { escape: 1 };
        var params170 = [];
        var id171 = scope.resolve(['services'], 0);
        params170.push(id171);
        option169.params = params170;
        option169.fn = function (scope, buffer) {
            buffer.write('\n<div class="item-services ', 0);
            var option172 = { escape: 1 };
            var params173 = [];
            var id174 = scope.resolve(['model'], 0);
            var exp177 = id174;
            if (id174) {
                var id175 = scope.resolve([
                        'model',
                        'serviceCollapsed'
                    ], 0);
                var exp176 = id175;
                exp176 = id175 !== false;
                exp177 = exp176;
            }
            params173.push(exp177);
            option172.params = params173;
            option172.fn = function (scope, buffer) {
                buffer.write(' services-collapsed ', 0);
                return buffer;
            };
            buffer = ifCommand.call(tpl, scope, option172, buffer, 124);
            buffer.write('">\n    <div class="service-wp">\n        <span class="service-header">\u552E\u540E\u670D\u52A1</span>\n        <ul class="services-list">\n            ', 0);
            var option178 = { escape: 1 };
            var params179 = [];
            var id180 = scope.resolve(['services'], 0);
            params179.push(id180);
            option178.params = params179;
            option178.fn = function (scope, buffer) {
                buffer.write('\n            <li class="service-list table ', 0);
                var option181 = { escape: 1 };
                var params182 = [];
                var id183 = scope.resolve(['collapseShow'], 0);
                params182.push(id183);
                option181.params = params182;
                option181.fn = function (scope, buffer) {
                    buffer.write('collapse-show', 0);
                    return buffer;
                };
                buffer = ifCommand.call(tpl, scope, option181, buffer, 129);
                buffer.write('">\n                <div class="td td-item service-name">\n                    <div class="item-info"><img class="service-icon" src="', 0);
                var id184 = scope.resolve(['icon'], 0);
                buffer.write(id184, true);
                buffer.write('" alt="', 0);
                var id185 = scope.resolve(['title'], 0);
                buffer.write(id185, true);
                buffer.write('" /><a class="service-title J_MakePoint" href="', 0);
                var id186 = scope.resolve(['url'], 0);
                buffer.write(id186, true);
                buffer.write('" data-point="tbcart.8.27" target="_blank">', 0);
                var id187 = scope.resolve(['title'], 0);
                buffer.write(id187, true);
                buffer.write('</a></div>\n                </div>\n                <div class="td td-price"><span class="price">', 0);
                var option188 = { escape: 1 };
                var params189 = [];
                var id190 = scope.resolve(['promo'], 0);
                params189.push(id190);
                option188.params = params189;
                option188.fn = function (scope, buffer) {
                    buffer.write('', 0);
                    var id191 = scope.resolve(['promo'], 0);
                    buffer.write(id191, true);
                    buffer.write('', 0);
                    return buffer;
                };
                option188.inverse = function (scope, buffer) {
                    buffer.write('', 0);
                    var id192 = scope.resolve(['price_str'], 0);
                    buffer.write(id192, true);
                    buffer.write('', 0);
                    return buffer;
                };
                buffer = ifCommand.call(tpl, scope, option188, buffer, 133);
                buffer.write('</span></div>\n                <div class="td td-amount service-amount"><span class="number">', 0);
                var id193 = scope.resolve(['quantity'], 0);
                buffer.write(id193, true);
                buffer.write('</span></div>\n                <div class="td td-sum service-sum"><span class="price">', 0);
                var id194 = scope.resolve(['sum_str'], 0);
                buffer.write(id194, true);
                buffer.write('</span></div>\n            </li>\n            ', 0);
                return buffer;
            };
            buffer = eachCommand.call(tpl, scope, option178, buffer, 128);
            buffer.write('\n        </ul>\n    </div>\n</div>\n', 0);
            return buffer;
        };
        buffer = ifCommand.call(tpl, scope, option169, buffer, 123);
        buffer.write('\n</div>', 0);
        return buffer;
    };
    a.TPL_NAME = module.name;
    a.version = '5.0.0';
    return a;
});