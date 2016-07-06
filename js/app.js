'use strict';

/* App Module */
var RxHubApp = angular.module('RxHubApp', [
  'ngRoute',
  'RxHubController'
]);

RxHubApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
      when('/observable', {
          templateUrl: 'prerendered/observable/default.html',
      }).
      when('/operators', {
          templateUrl: 'prerendered/operators/default.html',
      }).
      when('/operators/transforming', {
          templateUrl: 'prerendered/operators/transforming/default.html',
      }).
      when('/operators/transforming/buffer', {
          templateUrl: 'prerendered/operators/transforming/buffer.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining', {
          templateUrl: 'prerendered/operators/combining/default.html',
      }).
      when('/operators/combining/and_then_when', {
          templateUrl: 'prerendered/operators/combining/and_then_when.html',
          controller: 'buttonsController',
          data: {
              prefill: 3,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining/zip', {
        templateUrl: 'prerendered/operators/combining/zip.html',
        controller: 'buttonsController',
        data: {
            prefill: 2,
            href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
        }
      }).
      when('/operators/combining/merge', {
          templateUrl: 'prerendered/operators/combining/merge.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/creating', {
          templateUrl: 'prerendered/operators/creating/default.html',
      }).
      when('/single', {
          templateUrl: 'prerendered/single/default.html',
      }).
      when('/subject', {
          templateUrl: 'prerendered/subject/default.html',
      }).
      when('/scheduler', {
          templateUrl: 'prerendered/scheduler/default.html',
      }).
      otherwise({
          templateUrl: '/prerendered/home.html'
      });
  }]);
