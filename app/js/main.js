;(function (){

  'use strict';
      var allThePretzels = [
            {
              id: 1,
              type: 'Soft',
              brand: 'Annies'
            },
            {
              id: 2,
              type: 'Bavarian',
              brand: 'Philly'
            }

            ];

  angular.module('Pretzels', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('pretzel', {
          url: '/',
          templateUrl: 'js/templates/home.tpl.html',
          controller: 'PretzelCtrl'
        })
        .state('pretzel.info', {
          url: ':pretzelId',
          templateUrl: 'js/templates/info.tpl.html',
          controller: 'PretzelCtrl'
        });

    }

    ])

   .controller('PretzelCtrl', ['$scope', '$stateParams',
          function ($scope, $stateParams){

          $scope.pretzels = allThePretzels;

          console.log($stateParams);
          if($stateParams.pretzelId !== undefined){
            var prezId = Number($stateParams.pretzelId);
            $scope.pretzel = _.findWhere($scope.pretzels, {id: prezId});
          }


        }
      ]);

}());
