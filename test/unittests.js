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
        res.should.be.a('object');
        res.a.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
    describe('tests against encode', function () {
      it('No param for b', function (done) {
        var res = Btoa.encode();
        res.should.equal('');
        done();
      });
      it('Correct param "Hello world" for b', function (done) {
        var res = Btoa.encode('Hello world');
        res.should.equal('SGVsbG8gd29ybGQ=');
        done();
      });
    });
  });
  
  if (typeof exports !== 'object') {
    mocha.run();
  }
}));
