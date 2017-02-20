( function () {

    'use strict';


    //name, dependencies list
    angular.module('NarrowItDownApp',[])
      .controller('NarrowItDownController', NarrowItDownController )
      .service('MenuSearchService', MenuSearchService)
      .directive('foundItems',FoundItems)
      .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    //controller
    //inject dependencies
    NarrowItDownController.$inject =['MenuSearchService'];
    //controller (view model) functionality
    function NarrowItDownController (MenuSearchService){
      var list = this;

      list.menuSearch = function(){
      var promise=MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise.then(function (response) {

        list.foundItems = response;


      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
       });
     };

      list.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);

      list.foundItems.splice(itemIndex,1);

  };
    };
    ////////////////////////////////////
       //Service
       //MenuSearchService
       MenuSearchService.$inject = ['$http', 'ApiBasePath'];
       //service functionality
       function MenuSearchService($http, ApiBasePath){

           //for readability
           var service = this;
           service.getMatchedMenuItems = function(searchTerm){
              console.log('searchTerm= '+searchTerm);
              return $http(
                    {
                      method: "GET",
                      url: (ApiBasePath + "/menu_items.json")
                    })
                    .then(function (result) {
                    // process result and only keep items that match
                    var foundItems = result.data.menu_items;
                    var filterItems = [];
                   //meter en filterItems los que tengan searchTerm en description
                    for (var i=0; i<foundItems.length;i++){
                      if (foundItems[i].description.search(searchTerm)!=-1){
                          filterItems.push(foundItems[i]);
                      }
                    }
                   // return processed items
                   return filterItems;

               });
           }
       };
       ////////////////////////////////////
       //Custom directive
       function FoundItems(){
         var ddo = {
           //si  no lo restringes te da error, al llamarse igual
           //elemento y el atributo intenta aplicar la directiva dos veces
           restrict: 'E',
           templateUrl:   "listItemTemplate.html",
           scope: {
             foundItems: '<',
             onRemove: '&'

           },
           controller: FoundItemsDirectiveController,
           controllerAs: 'list',
           bindToController: true

         };
         console.log(ddo);
         return ddo;


       };


      ////////////////////////////////////

      function FoundItemsDirectiveController() {
         var list = this;


       };
      ///////////////////////////////
  }
)();
