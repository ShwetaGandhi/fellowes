/**
 * Created by sgandhi on 11/9/15.
 */
angular.module('myApp.view1').controller('FilterCtrl',
    [
        '$scope', '$rootScope' ,'$http','$uibModal',
        function ($scope, $rootScope, $http,$uibModal){
            $http.get('view1/filterData.json')
                .then(function(res){
                    $scope.filterData = res.data.filters;
                    $scope.accOpen[$scope.restFilterList[i].label] = false;
                });

        }

    ]

);