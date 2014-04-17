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
        var umd = new Btoa();
        var res = umd.handle();
        res.should.be.a('object');
        res.a.should.equal('');
        done();
      });
      it('Correct param "Hello world" for b', function (done) {
        var umd = new Btoa();
        var res = umd.handle('Hello world');
        res.a.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
  });
  
  if (typeof exports !== 'object') {
    mocha.run();
  }
}));
