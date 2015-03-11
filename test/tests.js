/*!
* btoa-umd
*
* @link https://github.com/T1st3/btoa-umd
* @author T1st3
* @version 0.7.6
* @license https://github.com/T1st3/btoa-umd/blob/master/LICENSE
*
*/

/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    require.config({
      baseUrl: '',
      paths: {
        /* dependencies */
        jquery: 'app/lib/jquery/dist/jquery.min',
        mocha: 'app/lib/mocha/mocha',
        chai: 'app/lib/chai/chai',
        chaijquery: 'app/lib/chai-jquery/chai-jquery',
        bootstrap: 'app/lib/bootstrap/dist/js/bootstrap.min',
        /* this project */
        btoa: 'app/lib/btoa-umd/dist/btoa-umd'
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
  } else if (typeof exports === 'object') {
    module.exports = factory(require('chai'), require('../src/btoa-umd'));
  } else {
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

  if (browser === true) {
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
}));
