/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (root, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    require.config({
      baseUrl: '',
      paths: {
        jquery: 'assets/js/lib/jquery.min',
        mocha: 'assets/js/lib/mocha',
        chai: 'assets/js/lib/chai',
        chaijquery: 'assets/js/lib/chai-jquery',
        bootstrap: 'assets/js/lib/bootstrap.min',
        btoa: 'assets/js/lib/btoa-umd'
      },
      shim: {
        jquery: {
          exports: '$'
        },
        chaijquery: ['jquery', 'chai'],
        bootstrap: ['jquery'],
        btoa: {
          exports: 'Btoa'
        }
      },
      scriptType: 'text/javascript'
    });
    define([
      'chai',
      'btoa',
      'jquery',
      'mocha',
      'bootstrap'
    ], factory);
  // Test for Node.js
  } else if (typeof exports === 'object') {
    // Node
    module.exports = factory(require('chai'), require('../src/btoa-umd'));
  // Browser globals
  } else {
    // Browser globals
    root.BtoaTests = factory(root.chai, root.Btoa);
  }
}(this, function (chai, Btoa) {

  var should = chai.should(),
  browser = false;

  if (typeof define === 'function' && define.amd) {
    browser = true;
  } else if (typeof exports === 'object') {
    browser = false;
  } else {
    browser = true;
  }

  if (browser === true) {
    mocha.setup('bdd');
    mocha.reporter('html');
  }

  describe('btoa-umd unit tests', function () {
    describe('tests against constructor', function () {
      it('No param for b', function (done) {
        var res = new Btoa();
        res.should.be.a('object');
        res.a.should.equal('');
        done();
      });
      it('Correct param "Hello world" for b', function (done) {
        var res = new Btoa('Hello world');
        res.a.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
    describe('tests against handle', function () {
      it('No param for b', function (done) {
        var umd = new Btoa(),
        res = umd.handle();
        res.should.be.a('object');
        res.a.should.equal('');
        done();
      });
      it('Correct param "Hello world" for b', function (done) {
        var umd = new Btoa(),
        res = umd.handle('Hello world');
        res.should.be.a('object');
        res.a.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
      if (browser === false) {
        it('Correct param Buffer for b', function (done) {
          var umd = new Btoa(),
          res = null,
          buffer = new Buffer('Hello world', 'binary');
          res = umd.handle(buffer);
          res.should.be.a('object');
          res.a.should.equal('SGVsbG8gd29ybGQ=');
          done();
        });
      }
    });
    describe('tests against encode', function () {
      it('No param for b', function (done) {
        var res = Btoa.encode();
        res.should.equal('');
        done();
      });
      it('Correct param "z" for b', function (done) {
        var res = Btoa.encode('b');
        res.should.equal('Yg==');
        done();
      });
      it('Correct param "Hello world" for b', function (done) {
        var res = Btoa.encode('Hello world');
        res.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
  });

  describe('btoa-umd functional tests', function () {
    describe('test general behaviour (browser test)', function () {
      it('Should behave like native function', function (done) {
        var btoa = function (b) {
          var umd = new Btoa();
          return umd.handle(b).a;
        };
        btoa('Hello world').should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
    if (browser === true) {
      describe('test general behaviour (browser test)', function () {
        it('Should behave like native function', function (done) {
          var bToA = function (b) {
            var umd = new Btoa();
            return umd.handle(b).a;
          };
          /* global window */
          bToA('SGVsbG8gd29ybGQ=').should.equal(window.btoa('SGVsbG8gd29ybGQ='));
          done();
        });
      });
      describe('tests with no window.btoa', function () {
        it('Correct param "Hello world" for b', function (done) {
          var bToA = function (b) {
            var umd = new Btoa();
            return umd.handle(b).a;
          };
          bToA('Hello world').should.equal('SGVsbG8gd29ybGQ=');
          /* last test callback */
          console.log(window.__coverage__);
          done();
        });
      });
    }
  });

  if (typeof exports !== 'object') {
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
}));
