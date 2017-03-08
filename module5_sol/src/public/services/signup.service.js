(function() {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


function SignUpService() {
  console.log('creando SignUpService');
  var $signupservice = this;
  $signupservice.user = {};


}


})();
