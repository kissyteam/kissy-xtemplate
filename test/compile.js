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

describe('compile', function(){

    var compiler = new XTemplate();

    describe('compileSync', function(){
        compiler.compileSync(srcPath, destPath);

        var destA = path.resolve(destPath, './a-xtpl.js');
        var destB = path.resolve(destPath, './b-xtpl.js');
        it('should have proper file generated', function(){
            fs.existsSync(destA).should.equal(true);
            fs.existsSync(destB).should.equal(true);
        });

        it('should have proper file content generated', function(){
            fs.readFileSync(destA).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, './a-xtpl.js')).toString());
            fs.readFileSync(destB).toString().should.equal(fs.readFileSync(path.resolve(expectedPath, './b-xtpl.js')).toString());
        });
    });

});