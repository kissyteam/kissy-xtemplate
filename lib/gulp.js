var es = require('event-stream');
var XTemplate = require('./xtemplate');

module.exports = function(options) {
  var xt = new XTemplate(options);

  var compile = function(file, callback) {
    var isStream = file.contents && typeof file.contents.on === 'function' && typeof file.contents.pipe === 'function';
    var isBuffer = file.contents instanceof Buffer;

    if (isStream) {
      return callback(new Error('kissy-xtemplate: Cannot do compile on a stream'), file);
    }
    var regTail = /\.xtpl\.html$/;

    if (!regTail.test(file.path)) {
      return callback(null, file);
    }

    if (isBuffer) {
      file.contents = xt._compile(file.contents, 'utf8', 'utf8');
      file.path = file.path.replace(regTail, '.xtpl.js');
      return callback(null, file);
    }

    callback(null, file);
  };

  return es.map(compile);
};