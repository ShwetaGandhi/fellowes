/**
 * Created by sgandhi on 11/9/15.
 */
angular.module('myApp.view1').controller('FilterCtrl',
    [
        '$scope', '$rootScope' ,'$http','$uibModalInstance',
        function ($scope, $rootScope, $http,$uibModalInstance){
            $http.get('view1/filterData.json')
                .then(function(res){
                    $scope.filterData = res.data.filters;
                });
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
            $scope.submitFilter=function() {
                $scope.count =0;
                var inputElems = document.getElementsByTagName("input");

                for (var i = 0; i < inputElems.length; i++) {
                    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
                        $scope.count++;

                    }

                } alert("you have selected "+$scope.count+" filters")
                $uibModalInstance.close();
            }
            //ends

        }

    ]

);