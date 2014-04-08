/**
 *
 * @author: 橘子<daxingplay@gmail.com>
 * @time: 12/19/13 18:58
 * @description:
 */

var fs = require('fs');
var path = require('path');
var should = require('should');
var fileUtils = require('../lib/file-utils');

var XTemplate = require('../index');
var srcPath = path.resolve(__dirname, './src');
var destPath = path.resolve(__dirname, './dest');
var expectedPath = path.resolve(__dirname, './expected');

function removeDistDir(){
    if(fs.existsSync(destPath)){
        fileUtils.rmdirsSync(destPath);
    }
}

//before(function(){
//    removeDistDir();
//});

after(function(){
    removeDistDir();
});

describe('compile empty file', function(){
    var compiler = new XTemplate();

    var inputPath = path.resolve(srcPath, './empty.html');
    var outputPath = path.resolve(destPath, './empty.html');
    var error = false;

    try{
        compiler.compileSync(inputPath, outputPath);
    }catch(e){
        error = true;
    }

    it('should not have error', function(){
        error.should.equal(false);
    });
});

['1.4.1', '1.5.0'].forEach(function(version){
    describe('compile using KISSY ' + version, function(){

//        var version = '1.4.1';
        var compiler = new XTemplate({
            version: version
        });

        describe('compileSync', function(){
            var inputPath = path.resolve(srcPath, version);
            var outputPath = path.resolve(destPath, version);
            compiler.compileSync(inputPath, outputPath);

            var destA = path.resolve(outputPath, './a-xtpl.js');
            var destB = path.resolve(outputPath, './b-xtpl.js');
            it('should have proper file generated', function(){
                fs.existsSync(destA).should.equal(true);
                fs.existsSync(destB).should.equal(true);
            });

            it('should have proper file content generated', function(){
                fs.readFileSync(destA).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './a-xtpl.js')).toString());
                fs.readFileSync(destB).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './b-xtpl.js')).toString());
            });
        });

    });
});

//describe('compile using KISSY ~1.4.0', function(){
//
//    var version = '1.4.1';
//    var compiler = new XTemplate({
//        version: version
//    });
//
//    describe('compileSync', function(){
//        var inputPath = path.resolve(srcPath, version);
//        var outputPath = path.resolve(destPath, version);
//        compiler.compileSync(inputPath, outputPath);
//
//        var destA = path.resolve(outputPath, './a-xtpl.js');
//        var destB = path.resolve(outputPath, './b-xtpl.js');
//        it('should have proper file generated', function(){
//            fs.existsSync(destA).should.equal(true);
//            fs.existsSync(destB).should.equal(true);
//        });
//
//        it('should have proper file content generated', function(){
//            fs.readFileSync(destA).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './a-xtpl.js')).toString());
//            fs.readFileSync(destB).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './b-xtpl.js')).toString());
//        });
//    });
//
//});
//
//describe('compile using KISSY 1.5.0', function(){
//
//    var version = '1.5.0';
//    var compiler = new XTemplate({
//        version: version
//    });
//
//    describe('compileSync', function(){
//        var inputPath = path.resolve(srcPath, version);
//        var outputPath = path.resolve(destPath, version);
//        compiler.compileSync(inputPath, outputPath);
//
//        var destA = path.resolve(outputPath, './a-xtpl.js');
//        var destB = path.resolve(outputPath, './b-xtpl.js');
//        it('should have proper file generated', function(){
//            fs.existsSync(destA).should.equal(true);
//            fs.existsSync(destB).should.equal(true);
//        });
//
//        it('should have proper file content generated', function(){
//            fs.readFileSync(destA).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './a-xtpl.js')).toString());
//            fs.readFileSync(destB).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, version, './b-xtpl.js')).toString());
//        });
//    });
//
//});