'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/:devicename', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      }),
        $routeProvider.when('/bodyClove/iphone/cases',{
            templateUrl: 'view1/iphone.html',
                controller: 'BodyCloveCtrl'
        });
  $routeProvider.otherwise({redirectTo: '/Apple'});
}]);
