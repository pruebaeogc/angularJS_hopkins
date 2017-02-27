//module_4 sol
//eduardo garcia ibaseta
(function () {
  'use strict';
  angular.module('MenuApp')
   .controller('menuItemsController', menuItemsController);
  menuItemsController.$inject = ['menuItems'];
  function menuItemsController(menuItems){
    this.menuItems = menuItems
  };
})();
