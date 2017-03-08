(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("yba says");
      console.log(response.data);
      return response.data;
     });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  ///////////////////////////////////////////////////////////////////////////////
  //implemented by yba
  service.getMenuItem = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {'shortName': shortName};
    }

    return $http.get(ApiPath + '/menu_items/'+shortName+'.json', config).then(function (response) {
    //console.log("yba says");
    //console.log(response.data);
      return response.data;
    },
    function(error){

      console.log("error");
      return "Error";
    }
   );
  };
  ////////////////////////////////////////////////////////////////////////////////
}
})();
