/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (window, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    require.config({
      baseUrl: '',
      paths: {
        jquery: 'lib/jquery',
        mocha: 'lib/mocha',
        chai: 'lib/chai',
        chaijquery: 'lib/chai-jquery',
        bootstrap: 'lib/bootstrap.min',
        btoa: 'lib/btoa-umd'
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
    /* global Btoa */
    window.Btoa = factory(chai, Btoa);
  }
}(this, function (chai, Btoa) {

  if (typeof exports !== 'object') {
    mocha.setup('bdd');
  }
  var should = chai.should();
  
  var browser = false;
  if (typeof define === 'function' && define.amd) {
    browser = true;
  } else if (typeof exports === 'object') {
    browser = false;
  } else {
    browser = true;
  }
  
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
          var btoa = function (b) {
            var umd = new Btoa();
            return umd.handle(b).a;
          };
          /* global window */
          btoa('SGVsbG8gd29ybGQ=').should.equal(window.btoa('SGVsbG8gd29ybGQ='));
          done();
        });
      });
    }
  });
  
  if (typeof exports !== 'object') {
    mocha.run();
  }
}));
