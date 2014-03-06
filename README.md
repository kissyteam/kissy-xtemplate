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