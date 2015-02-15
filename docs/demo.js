'use strict';

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

require([
  'jquery',
  'btoa',
  'app/lib/codemirror/lib/codemirror',
  'app/lib/codemirror/mode/javascript/javascript',
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
