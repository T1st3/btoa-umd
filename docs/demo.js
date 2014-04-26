'use strict';

require.config({
  baseUrl: '',
  paths: {
    jquery: 'assets/js/lib/jquery.min',
    btoa: 'assets/js/lib/btoa-umd',
    httpbackend: 'assets/js/lib/backends/backend-jquery',
    httpresponse: 'assets/js/lib/http-response',
    bootstrap: 'assets/js/lib/bootstrap.min'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    btoa: {
      exports: 'Btoa'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    }
  },
  scriptType: 'text/javascript'
});

require([
  'jquery',
  'btoa',
  'assets/js/lib/codemirror',
  'assets/js/lib/codemirror/javascript',
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
