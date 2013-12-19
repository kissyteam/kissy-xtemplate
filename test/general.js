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
        it('should throw error.', function(){
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
        it('should use 1.4.1 as default.', function(){
            new XTemplate().cfg.version.should.equal('1.4.1');
        });
    });
});