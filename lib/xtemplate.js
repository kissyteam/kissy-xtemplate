/**
 *
 * @author: 橘子<daxingplay@gmail.com>
 * @time: 12/18/13 18:08
 * @description:
 */

var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var jsBeautify = require('js-beautify').js_beautify;
var mkdirp = require('mkdirp');
var pkgInfo = require('../package.json');
var esprima = require('esprima');
var escodegen = require('escodegen');

function XTemplate(cfg){
    cfg = cfg || {};
    var defVersion = '1.4.2';
    cfg.version = cfg.version || defVersion;
    cfg.type = cfg.type === 'tpl' ? 'tpl' : 'xtpl';
    if(!fs.existsSync(path.resolve(__dirname, './xtemplate/', cfg.version))){
        throw new Error('version ' + cfg.version + ' not supported yet. Please submit a new issue at ' + pkgInfo.bugs.url);
    }
    cfg.inputCharset = cfg.inputCharset || 'utf8';
    cfg.outputCharset = cfg.outputCharset || 'utf8';
    this.kissy = require('./kissy/seed');
    this.kissy.Config.packages = {};
    this.kissy.version = cfg.version.replace(/(\d\.\d)\.(\d)/, '$1$2');
    if(this.kissy.Env && this.kissy.Env.mods){
        for(var modName in this.kissy.Env.mods){
            if(this.kissy.Env.mods.hasOwnProperty(modName) && /^xtemplate\//.test(modName)){
                delete this.kissy.Env.mods[modName];
            }
        }
    }
    this.kissy.config({
        packages: {
            xtemplate: {
                base: path.resolve(__dirname, './xtemplate/' + cfg.version),
                ignorePackageNameInUri: true
            }
        }
    });
    this.compiler = this.kissy.nodeRequire('xtemplate/compiler');
    this.cfg = cfg;
}

XTemplate.prototype._beautify = function (str) {
    var opts = {
        'indent_size': '4',
        'indent_char': ' ',
        'preserve_newlines': true,
        'brace_style': 'collapse',
        'keep_array_indentation': false,
        'space_after_anon_function': true
    };
    return jsBeautify(str, opts);
};
XTemplate.prototype._escodegen = function(str){
    try {
        return escodegen.generate(esprima.parse(str));
    } catch (e) {
        console.log('syntax error: ');
        console.log(str);
        throw e;
    }
};

XTemplate.prototype._getFunctionName = function(path) {
    var name = path;
    if (name.indexOf('/') !== -1) {
        name = name.substring(name.lastIndexOf('/') + 1);
    }
    name = name.replace(/-([a-z])/ig, function () {
        return arguments[1].toUpperCase();
    });
    name = name.replace(/\..+$/, '');
    return name;
};

XTemplate.prototype._compile = function (tplContent, filePath, inputCharset, outputCharset) {
    if(tplContent == ''){
        return '';
    }
    tplContent = iconv.decode(tplContent, inputCharset);
    var versionNumber = parseInt(this.cfg.version.replace(/\./g, ''), 10);
    var moduleCode = '';
    var functionName = '';
    var kissyVersion = this.cfg.version.replace(/\-.+$/, '');
    if(versionNumber < 150){
        moduleCode = this._beautify(
                '/** Compiled By KISSY-XTemplate */\n' +
                'KISSY.add(function(S,require,exports,module){\n' +
                '/*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/\n' +
                'return ' + this.compiler.compileToStr(tplContent)
        ) + ';\n});';
    }else if(versionNumber === 150){
        moduleCode = this._beautify(
                '/** Compiled By KISSY-XTemplate */\n' +
                'KISSY.add(function(S,require,exports,module){\n' +
                '/*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/\n' +
                'var t = ' + this.compiler.compileToStr(tplContent)
        ) + ';\n' + 't.TPL_NAME = module.name;\nreturn t;\n});';
    }else if(this.cfg.version === '5.0.0-alpha.1'){
        functionName = this._getFunctionName(filePath);
        moduleCode = this._beautify(
                '/** Compiled By KISSY-XTemplate */\n' +
                'KISSY.add(function(S,require,exports,module){\n' +
                '/*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/\n' +
                'var ' + functionName + ' = ' +
                this.compiler.compileToStr(tplContent, filePath, true)) + ';\n' +
            functionName + '.TPL_NAME = module.name;\n' +
            functionName + '.version = "' + kissyVersion + '";\n' +
            'return ' + functionName + '\n' +
            '});';
    }else if(this.cfg.version === '5.0.0-alpha.2'){
        functionName = this._getFunctionName(filePath);
        moduleCode = '/** Compiled By KISSY-XTemplate */\n' +
            '/*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/\n' +
            this._escodegen(
                    'KISSY.add(function(S,require,exports,module){\n' +

                    'var ' + functionName + ' = ' +
                    this.compiler.compileToStr(tplContent, filePath, true) + ';\n' +
                    functionName + '.TPL_NAME = module.name;\n' +
                    functionName + '.version = "' + kissyVersion + '";\n' +
                    'return ' + functionName + '\n' +
                    '});');
    }
    return iconv.encode(moduleCode, outputCharset);
};
XTemplate.prototype._tpl2mod = function (tplContent, inputCharset, outputCharset){
    tplContent = iconv.decode(tplContent, inputCharset);
    tplContent = tplContent.replace(/\\/g, '\\')
        .replace(/\r?\n/g, '\\n')
        .replace(/'/g, '\\\'');
    var moduleCode = '' +
        '/*\n' +
        '  Generated by kissy-tpl2mod.' +
        '*/\n' +
        "KISSY.add('" + tplContent + "');";
    return iconv.encode(moduleCode, outputCharset);
};

XTemplate.prototype.compile = function(src, dest){
    var self = this;
    if(Array.isArray(src)){
        src.forEach(function(s){
            self.compile(s, dest);
        });
    }else{
        fs.exists(src, function(exists){
            if(!exists){
                throw new Error('file ' + src + ' not exists.');
            }else{
                fs.stat(src, function(err, stat){
                    if(stat.isDirectory()){
                        fs.readdir(src, function(err, files){
                            if(err) throw new Error(err);
                            files.forEach(function(file){
                                self.compile(path.resolve(src, file), dest);
                            });
                        });
                    }else{
                        fs.readFile(src, function(err, moduleCode){
                            if (self.cfg.type === 'xtpl' || src.match(/\.xtpl\.html$/)) {
                                moduleCode = self._compile(moduleCode, src, self.cfg.inputCharset, self.cfg.outputCharset);
                            } else if (src.match(/\.tpl\.html$/)) {
                                moduleCode = self._tpl2mod(moduleCode, self.cfg.inputCharset, self.cfg.outputCharset);
                            }
                            fs.exists(dest, function(destExists){
                                var generate = function(destPath){
                                    fs.stat(destPath, function(err, destStat){
                                        var modulePath;
                                        if(path.extname(dest) !== '.js' && destStat.isDirectory()){
                                            modulePath = path.resolve(dest, path.basename(src, '.html').replace(/\.(x?tpl)$/, '-$1') + '.js');
                                        }else{
                                            modulePath = destPath;
                                        }
                                        fs.writeFile(modulePath, moduleCode);
                                    });
                                };
                                if(path.extname(dest) !== '.js' && !destExists){
                                    mkdirp(dest, function(err){
                                        if(err) throw new Error(err);
                                        generate(dest);
                                    });
                                }else{
                                    generate(dest);
                                }
                            });
                        });
                    }
                });
            }
        });
    }
};

XTemplate.prototype.compileSync = function(src, dest){
    var self = this;
    if(Array.isArray(src)){
        src.forEach(function(s){
            self.compileSync(s, dest);
        });
    }else{
        if(fs.existsSync(src)){
            if(fs.statSync(src).isDirectory()){
                var files = fs.readdirSync(src);
                if(files.length){
                    files.forEach(function(filePath){
                        self.compileSync(path.resolve(src, filePath), dest);
                    });
                }
            }else{
                var moduleCode = fs.readFileSync(src);
                if (self.cfg.type === 'xtpl' || src.match(/\.xtpl\.html$/)) {
                    moduleCode = self._compile(moduleCode, src, self.cfg.inputCharset, self.cfg.outputCharset);
                } else if (src.match(/\.tpl\.html$/)) {
                    moduleCode = self._tpl2mod(moduleCode, self.cfg.inputCharset, self.cfg.outputCharset);
                }
                var modulePath;
                if(path.extname(dest) !== '.js' && !fs.existsSync(dest)){
                    mkdirp.sync(dest);
                }
                if(path.extname(dest) !== '.js' && fs.statSync(dest).isDirectory()){
                    modulePath = path.resolve(dest, path.basename(src, '.html').replace(/\.(x?tpl)$/, '-$1') + '.js');
                }else{
                    modulePath = dest;
                }
                fs.writeFileSync(modulePath, moduleCode);
                console.info('generate module: ' + modulePath);
            }
        }else{
            throw new Error('file ' + src + ' not exists.');
        }
    }
};

module.exports = XTemplate;