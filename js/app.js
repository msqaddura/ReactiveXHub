'use strict';

/* App Module */
var RxHubApp = angular.module('RxHubApp', [
  'ngRoute',
  'RxHubController'
]);

RxHubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/zip', {
        templateUrl: 'prerendered/zip.html',
        controller: 'buttonsController',
        data: {
            prefill:2
        }
      }).
      when('/merge', {
          templateUrl: 'prerendered/merge.html',
          controller: 'buttonsController',
          data: {
              prefill:2
          }
      }).
      otherwise({
          templateUrl: '/prerendered/home.html'
      });
  }]);
