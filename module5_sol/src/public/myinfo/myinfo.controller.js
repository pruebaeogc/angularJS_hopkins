(function() {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);


  //Handles myinfo
    MyInfoController.$inject = ['SignUpService', 'MenuService', 'menuItem','ApiPath'];
  function MyInfoController(SignUpService, MenuService, menuItem, ApiPath) {
    var $ctrl = this;
    $ctrl.user = SignUpService.user;
    $ctrl.menuItem = menuItem;
    $ctrl.basePath = ApiPath;
  }
})();
