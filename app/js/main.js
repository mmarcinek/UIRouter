(function() {
  'use strict';

  angular.module('Pretzels', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
            url: '/',
            views: {
              'header': {
                templateUrl: 'js/templates/header.tpl.html'
              },
              'footer': {
                templateUrl: 'js/templates/footer.tpl.html'
              },
              'content': {
                templateUrl: 'js/templates/home.tpl.html'
              },
              'sidebar': {
                templateUrl: 'js/templates/sidebar.tpl.html',
                controller: 'PretzelCtrl'
              }
            }
          });
      }
  ])

  .controller('PretzelCtrl', ['$scope',
    function ($scope) {
      $scope.pretzels = [
        {
          id: 1,
          brand: 'Philly',
          type: 'Soft'
        },
        {
          id: 2,
          brand: 'Rold Gold',
          type: 'Twist'
        },
        {
          id: 3,
          brand: 'Rold Gold',
          type: 'Squares'
        },
        {
          id: 4,
          brand: 'Snyders',
          type: 'Honey Mustard'
        }
      ];
    }
  ]);


}());
