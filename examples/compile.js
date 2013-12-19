/**
 *
 * @author: 橘子<daxingplay@gmail.com>
 * @time: 12/19/13 20:00
 * @description:
 */

var path = require('path');

var XTemplate = require('../index');
var srcPath = path.resolve(__dirname, '../test/src');
var destPath = path.resolve(__dirname, '../test/dest');
var compiler = new XTemplate();
compiler.compileSync(srcPath, destPath);