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
sorry, the shell version is under development.
```
npm install kissy-xtemplate
```