//module_4 sol
//eduardo garcia ibaseta
(function () {
  'use strict';
  angular.module('MenuApp')
   .component('categories',{
      templateUrl: 'src/templateCategories.html',
      bindings:{
        categories: '<'
    }
  });
})();
