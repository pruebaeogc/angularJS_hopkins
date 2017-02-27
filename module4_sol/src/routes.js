//module_4 sol
//eduardo garcia ibaseta
(function () {
  'use strict';
  angular.module('MenuApp')
    .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    //default
    $urlRouterProvider.otherwise('/');
    //Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        template: '<a ui-sref="categories" >View Categories</a>'
      })
      //usa el service para inyectar al controller las categorias
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/templateCategories.html',
        controller: 'categoriesController as list',
        resolve: {
          categories: [ 'MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/templateMenuItems.html',
        controller: 'menuItemsController as list',
        resolve: {
          //refactor with then to handle promise
          //see lecture 39, part2
          menuItems: [ '$stateParams', 'MenuDataService',
                     function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategories($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
