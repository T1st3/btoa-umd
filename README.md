btoa-umd
==================


[![NPM version](https://badge.fury.io/js/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)
[![Dependency Status](https://david-dm.org/t1st3/btoa-umd.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd)
[![Build Status](https://travis-ci.org/T1st3/btoa-umd.svg?branch=master)](https://travis-ci.org/T1st3/btoa-umd)
[![Coverage Status](https://coveralls.io/repos/T1st3/btoa-umd/badge.png)](https://coveralls.io/r/T1st3/btoa-umd)



About
---

`btoa-umd` is a Javascript UMD module for btoa().

You'll find all about this project on its **[project pages](http://t1st3.github.io/btoa-umd/)**




Installation for production
---

**with Node.js**

`btoa-umd` is available on [NPM](https://www.npmjs.org/package/btoa-umd)
[![NPM](http://t1st3.github.io/btoa-umd/assets/img/vendor/npm-16x16.png)](https://www.npmjs.org/package/btoa-umd).

[![NPM version](https://badge.fury.io/js/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)

You can install it with the following command:

    npm install btoa-umd


**Browser globals and AMD**


`btoa-umd` is available on [Bower](http://bower.io/search/?q=btoa-umd)
[![Bower](http://t1st3.github.io/btoa-umd/assets/img/vendor/bower-16x16.png)](http://bower.io/search/?q=btoa-umd).

[![Bower version](https://badge.fury.io/bo/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)

To install it from Bower, just run 

    bower install btoa-umd

Note that published versions on both NPM and Bower should stay in sync.



Installation for development
---


You also can download the whole project (and build it from its source; see below).

Either use `git clone` command to get it:

    git clone https://github.com/T1st3/btoa-umd.git

Or download the latest version of [the whole project](https://github.com/T1st3/btoa-umd/archive/master.zip).

Then, get the dependencies of the project from both Bower and NPM:

    npm install
    bower install



Documentation
---


You can find fully functional examples, tests and a documentation in the [JSDoc](http://usejsdoc.org/) format in the `docs` folder.

You can also browse these documents and tests online:

- [Demo](http://t1st3.github.io/btoa-umd/demo.html)
- [this README and more info](http://t1st3.github.io/btoa-umd)
- [JSDoc](http://t1st3.github.io/btoa-umd/jsdoc.html)
- [Credits](http://t1st3.github.io/btoa-umd/credits.html)
- [Tests](http://t1st3.github.io/btoa-umd/tests.html)




Build from source
---


First, see "Installation for development" above. 
Do not forget to get the dependencies!

Then, you also need to install [Grunt](http://gruntjs.com/) globally to build the project.

    npm install -g grunt-cli

See more at the ["Getting started with Grunt" page](http://gruntjs.com/getting-started).


---

You are now ready to build!

The source is located in the "src" folder; the built target is located in the "dist" folder.

To build, just run:

    grunt build

To test, you can use Grunt:

    npm test




**Serve and livereload**

You can also use the `serve` task to load the `docs` pages in your browser.

    grunt serve

Once it has loaded the page in the browser, this task watches for any modification in the source.
If changes happen in the source, the task automatically reloads the page in the browser (livereload).


This project is [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/).



Dependencies
---

Status of dependencies:

[![Dependency Status](https://david-dm.org/t1st3/btoa-umd.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd)
[![devDependency Status](https://david-dm.org/t1st3/btoa-umd/dev-status.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd#info=devDependencies)



Build the docs and Github pages
---

Please note that this task has a few more dependencies:

* [Ruby](https://www.ruby-lang.org/) and [RubyGems](https://rubygems.org/)
* [Jekyll](http://jekyllrb.com/)
* [Kramdown](http://kramdown.gettalong.org/)


Check [the build-docs page](http://t1st3.github.io/btoa-umd/build_docs.html) for more info.




Credits
---


See [the credits page](http://t1st3.github.io/btoa-umd/credits.html) to see more.


License
---


This piece of code is triple-licensed: [MIT / BSD / GPL licenses](https://github.com/T1st3/btoa-umd/blob/master/LICENSE.md)

You can also view it in a re-formatted fashion: [MIT / BSD / GPL licenses](http://t1st3.github.io/btoa-umd/license.html).



Initial author
---

[T1st3](https://github.com/T1st3/) 
[![T1st3](http://t1st3.github.io/btoa-umd/assets/img/gravatar-16x16.png)](https://github.com/T1st3/)

