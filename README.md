# kissy-xtemplate

[![Build Status](https://travis-ci.org/daxingplay/kissy-xtemplate.png?branch=master)](https://travis-ci.org/daxingplay/kissy-xtemplate)

Independent XTemplate compiler for KISSY

## Usage

### NodeJS

```js
var XTemplate = require('kissy-xtemplate');
new XTemplate().compileSync('xxx.xtpl.html', 'xxx.xtpl.js');
```

or use the async version:

```js
var XTemplate = require('kissy-xtemplate');
new XTemplate().compile('xxx.xtpl.html', 'xxx.xtpl.js');
```

### shell

to use shell version, you'd better install it using `-g`

```
npm install kissy-xtemplate -g
```

then, you can compile using `xtemplate` bin.

```
xtemplate a.xtpl.html a.js
```

for more information, please refer to help.

```
xtemplate -h
```

## Options

```
var XTemplate = require('kissy-xtemplate');
var compiler = new XTemplate({
    version: '1.5.0', // config your KISSY version
    inputCharset: 'gbk', // your tpl src charset
    outputCharset: 'gbk', // compiled charset
    type: 'xtpl', // template type. default is XTemplate
});
compiler.compile('xxx.xtpl.html', 'xxx.xtpl.js');
```

## Current Supported Versions

* 1.4.0
* 1.4.1
* 1.4.2
* 1.5.0
* 5.0.0-alpha.1
* 5.0.0-alpha.2