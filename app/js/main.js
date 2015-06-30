;(function (){

  'use strict';

  angular.module('Pretzels', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider){

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
            'sidebar' : {
              templateUrl: 'js/templates/sidebar.tpl.html',
              controller: 'PretzelCtrl'
            },
            'content': {
              templateUrl: 'js/templates/home.tpl.html'
            }
          }
        })
        .state('about', {
          url: '/about',
          templateUrl: 'js/templates/about.tpl.html'
        });

    }

    ])

   .controller('PretzelCtrl', ['$scope',
          function ($scope){
            $scope.pretzels = [
            {
              id: 1,
              type: 'Soft'
            },
            {
              id: 2,
              type: 'Bavarian'
            }

            ];
          }
      ]);

}());
