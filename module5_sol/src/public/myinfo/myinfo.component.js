(function () {
"use strict";
//creo q no me va a hacer falta
angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/menu-category/menu-category.html',
  bindings: {
    menuItem: '<'
  }
});



})();
