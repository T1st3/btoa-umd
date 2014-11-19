'use strict';

require.config({
  baseUrl: '',
  paths: {
    jquery: 'assets/lib/jquery/dist/jquery.min',
    mocha: 'assets/lib/mocha/mocha',
    chai: 'assets/lib/chai/chai',
    chaijquery: 'assets/lib/chai-jquery/chai-jquery',
    bootstrap: 'assets/lib/bootstrap/dist/js/bootstrap.min',
    btoa: 'assets/lib/btoa-umd'
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

require([
  'jquery',
  'btoa',
  'assets/lib/codemirror/lib/codemirror',
  'assets/lib/codemirror/mode/javascript/javascript',
  'bootstrap'
], function ($, Btoa, CodeMirror) {
  $(document).ready(function () {
    $('#in').on('click', function () {
      var btoa = function (b) {
        var umd = new Btoa();
        return umd.handle(b).a;
      };
      $('#out > code').html(btoa('Hello world'));
    });
    $('#reset').on('click', function () {
      $('#out > code').html('No result yet!');
    });
    
    $('pre.js > code.js').each(function () {
      var self = $(this).parent();
      self.find('code.js').hide(),
      CodeMirror(self[0], {
        value: self.find('code.js').html(),
        mode: 'javascript',
        tabSize: 2,
        lineNumbers: true,
        readOnly: true
      });
    });
  });
});
