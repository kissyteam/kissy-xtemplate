/**
 *
 * @author: 橘子<daxingplay@gmail.com>
 * @time: 12/19/13 15:52
 * @description:
 */

var should = require('should');

var XTemplate = require('../index');

describe('config', function(){

    describe('When version was not found', function(){
        it('should throw error', function(){
            var hasError = false;
            try{
                new XTemplate({
                    version: '1.1.6'
                });
            }catch (e){
                hasError = true;
            }
            hasError.should.equal(true);
        });
    });

    describe('When version was not specified', function(){
        it('should use 1.4.2 as default', function(){
            new XTemplate().cfg.version.should.equal('1.4.2');
        });
    });

    describe('When version was specified', function(){
        it('should set kissy version as well', function(){
            var xtpl = new XTemplate({
                version: '1.4.2'
            });
            xtpl.kissy.version.should.equal('1.42');
            xtpl.cfg.version.should.equal('1.4.2');
        });
    });

    describe('When type was not specified', function(){
        it('should be xtpl', function(){
            new XTemplate().cfg.type.should.equal('xtpl');
        });
    });
});