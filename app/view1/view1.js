'use strict';

angular.module('myApp.view1', ['ngRoute'])


.controller('View1Ctrl', ['$routeParams','$scope',
        function( $routeParams,$scope) {
        $scope.deviceName = ($routeParams.devicename)

}]);