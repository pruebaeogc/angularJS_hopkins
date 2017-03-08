(function() {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  //Handles signup
  SignUpController.$inject = ['SignUpService', '$state'];
  function SignUpController(SignUpService, $state) {
    var $ctrl = this;
    $ctrl.user = {};

    $ctrl.submit = function(){
      console.log($ctrl.user);
      SignUpService.user = $ctrl.user;
      //redirect to state public.myinfo
      //needs to inject $state
      $state.go('public.myinfo');
    };
  }
})();
