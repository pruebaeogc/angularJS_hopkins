//module_4 sol
//eduardo garcia ibaseta
( function () {

  'use strict';

  //name, dependencies list
  angular.module('MenuApp',[])
    .controller('controlador', funcionControladora)
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    //////////////////////////////////////////////////////
    //Controlador
    //inject dependencies
    funcionControladora.$inject =['MenuDataService'];
    function funcionControladora(MenuDataService){
      console.log("Controlador");
      var controlador = this;
      var promise = MenuDataService.getAllCategories();
      promise.then(function(response){
        console.log("response");
        console.log(response);
        controlador.categories = response
      })
        .catch(function(error){
          console.log("Uuuuuuups, something went wrong.");
        });
      
    };
    //////////////////////////////////////////////////////
    //Service
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath){
      //for readability
      var service = this;
      service.getAllCategories = function(){
        console.log("MenuDataService.getAllCategories()");
        //returns a promise
        return $http(
          {
            method: "GET",
            url: (ApiBasePath + "/categories.json")
          })
            .then(function (result) {
              var foundCategories = result.data;
            //  console.log(foundCategories);
              return foundCategories;
            });
        };
      };
    //////////////////////////////////////////////////////
 }
)();
