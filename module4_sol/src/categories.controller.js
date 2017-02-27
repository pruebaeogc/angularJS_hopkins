//module_4 sol
//eduardo garcia ibaseta
(function () {
  'use strict';
  angular.module('MenuApp')
   .controller('categoriesController', categoriesController);
  categoriesController.$inject = ['categories'];
  function categoriesController(categories){
    this.categories = categories
  };
})();
