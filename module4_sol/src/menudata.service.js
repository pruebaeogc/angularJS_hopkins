//module_4 sol
//eduardo garcia ibaseta
(function () {
  'use strict';
  angular.module('data')
      .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath){
    //for readability
    var service = this;
    ////////////////////////////////////////////////////
    service.getAllCategories = function(){
      console.log("MenuDataService.getAllCategories()");
      //returns a promise
      return $http(
        {
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        })
          .then(function (result) {
            return result.data;
          });
      };
      ////////////////////////////////////////////////////
      service.getItemsForCategories = function(categoryShortName){
        console.log("MenuDataService.getItemsForCategories()");
        //returns a promise
        return $http(
          {
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params: {
                  category: categoryShortName
            }
          })
            .then(function (result) {
              return result.data.menu_items;
            });


      };
      ////////////////////////////////////////////////////
    };
})();
