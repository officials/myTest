System.register([], function (_export, _context) {
  "use strict";

  var init;
  return {
    setters: [],
    execute: function () {
      init = function init() {
        console.log('文件编译成功');
        new Vue({
          el: '#app-6',
          data: {
            message: 'Hello Vue!'
          }
        });
      };

      _export("default", init);
    }
  };
});
