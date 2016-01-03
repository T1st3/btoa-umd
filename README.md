btoa-umd
==================


[![NPM version](https://img.shields.io/npm/v/btoa-umd.svg)](https://www.npmjs.com/package/btoa-umd)
[![Dependency Status](https://img.shields.io/david/T1st3/btoa-umd.svg)](https://david-dm.org/t1st3/btoa-umd)
[![Build Status](https://img.shields.io/travis/T1st3/btoa-umd.svg)](https://travis-ci.org/T1st3/btoa-umd)
[![Coverage Status](https://img.shields.io/coveralls/T1st3/btoa-umd.svg)](https://coveralls.io/r/T1st3/btoa-umd)
[![Code Climate](https://img.shields.io/codeclimate/github/T1st3/btoa-umd.svg)](https://codeclimate.com/github/T1st3/btoa-umd)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/t1st3/btoa-umd.svg)](http://isitmaintained.com/project/t1st3/btoa-umd "Percentage of issues still open")



About
---

`btoa-umd` is a Javascript UMD module for btoa().




Installation for production
---

**with Node.js**

`btoa-umd` is available on [NPM](https://www.npmjs.com/package/btoa-umd)

You can install it with the following command:

    npm install btoa-umd


**Browser globals and AMD**


`btoa-umd` is available on [Bower](http://bower.io/search/?q=btoa-umd)

To install it from Bower, just run 

    bower install btoa-umd


Usage
---

Usage is pretty straightforward; in the following example, a function `btoa` is created to mimic the native function with the same name:

    var btoa = function (b) {
      var umd = new Btoa();
      return umd.handle(b).a;
    };
    var res = btoa('Hello World');


Then, `res` will return `SGVsbG8gV29ybGQ=`.



Installation for development
---


You also can download the whole project (and build it from its source; see below).

Either use `git clone` command to get it:

    git clone https://github.com/T1st3/btoa-umd.git

Or download the latest version of [the whole project](https://github.com/T1st3/btoa-umd/archive/master.zip).

Then, get the dependencies of the project from both Bower and NPM:

    npm install
    bower install



Build from source
---


First, see "Installation for development" above. 
Do not forget to get the dependencies!

Then, you also need to install [Gulp](http://gulpjs.com/) globally to build the project.

    npm install -g gulp

See more at the ["Getting started with Gulp" page](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started).

Once you got the dependencies and installed Gulp globally, to get info about the package from the command line, just run:

    gulp info


---

You are now ready to build!

The source is located in the "src" folder; the built target is located in the "dist" folder.

To build, just run:

    gulp build

---

**Tests**

To test, you can use either the `npm test` command or the `gulp test` command:

    npm test

or

    gulp test



---

**Serve and livereload**

You can also use the `serve` task to load the `test/` HTML pages in your browser.

    gulp serve

Once it has loaded the page in the browser, this task watches for any modification in the source.
If changes happen in the source, the task automatically reloads the page in the browser (livereload).






License
---


This piece of code is triple-licensed: [MIT / BSD / GPL licenses](https://github.com/T1st3/btoa-umd/blob/master/LICENSE.md)




Initial author
---

[T1st3](https://github.com/T1st3/) 
