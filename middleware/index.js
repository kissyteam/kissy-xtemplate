"use strict";

var extend = require('node.extend');
var fs = require('fs');

var mkdirp = require('mkdirp');
var path = require('path');

var XTemplate = require('../lib/xtemplate');
var utilities = require('./utilities');

/**
 * Return Connect middleware with the given `options`.
 */
module.exports = function(source, options, templateSettings) {

    // Source dir is required.
    if (!source) {
        throw new Error('jst.middleware() requires `source` directory');
    }

    // Override the defaults for the middleware.
    options = extend(true, {
        debug: false,
        dest: source,
        force: false,
        once: false,
        pathRoot: null
    }, options || {});

    // Override the defaults for the parser.
    templateSettings = extend(true, {}, templateSettings || {});

    var xtpl = new XTemplate(templateSettings);

    // The log function is determined by the debug option.
    var log = (options.debug ? utilities.logDebug : utilities.log);

    // Parse and compile the CSS from the source string.
    var render = function(str, callback) {
        try {
            var result = xtpl._compile(str, 'utf8', 'utf8');
        } catch (e) {
            return callback(err);
        }

        callback(null, result);

    };

    // Actual middleware.
    return function(req, res, next) {
        if ('GET' != req.method.toUpperCase() && 'HEAD' != req.method.toUpperCase()) { return next(); }

        var pathname = req.path;

        // Only handle the matching files in this middleware.
        if (utilities.isValidPath(pathname)) {
            var jsPath = path.join(options.dest, pathname);
            var tplPath = path.join(source, utilities.maybeCompressedSource(pathname));

            if (options.pathRoot) {
                pathname = pathname.replace(options.dest, '');
                jsPath = path.join(options.pathRoot, options.dest, pathname);
                tplPath = path.join(options.pathRoot, source, utilities.maybeCompressedSource(pathname));
            }


            log('source', tplPath);
            log('dest', jsPath);

            // Ignore ENOENT to fall through as 404.
            var error = function(err) {
                return next('ENOENT' == err.code ? null : err);
            };

            var compile = function() {
                log('read', tplPath);

                fs.readFile(tplPath, function(err, jstSrc) {
                    if (err) {
                        return error(err);
                    }

                    try {
                        render(jstSrc, function(err, code) {
                            if (err) {
                                console.log(error);
                                return next(err);
                            }

                            mkdirp(path.dirname(jsPath), 511 /* 0777 */, function(err){
                                if (err) return next(err);

                                fs.writeFile(jsPath, code, next);
                            });

                            log('render', jsPath);

                        });
                    } catch (err) {
                        console.log(err);
                        return next(err);
                    }
                });
            };

            // Force recompile of all files.
            if (options.force) {
                return compile();
            }

            // Compare mtimes to determine if changed.
            fs.stat(tplPath, function(err, srcStat){
                if (err) {
                    return error(err);
                }

                fs.stat(jsPath, function(err, buildStat){
                    // CSS has not been compiled, compile it!
                    if (err) {
                        if ('ENOENT' == err.code) {
                            log('not found', jsPath);

                            // No CSS file found in dest
                            return compile();
                        } else {
                            return next(err);
                        }
                    } else if (srcStat.mtime > buildStat.mtime){
                        // Source has changed, compile it
                        log('modified', jsPath);

                        return compile();
                    } else {
                        return next();
                    }
                });
            });
        } else {
            return next();
        }
    };
};
