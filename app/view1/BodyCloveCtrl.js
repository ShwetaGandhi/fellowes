/**
 * Created by sgandhi on 11/9/15.
 */
angular.module('myApp.view1').controller('BodyCloveCtrl',
    [
        '$scope', '$rootScope' ,'$http','$uibModal',
        function ($scope, $rootScope, $http,$uibModal){
            $http.get('view1/product.json')
                .then(function(res){
                    $scope.productData = res.data.d.Object;

                });
            $scope.openFilterModal = function(){
                $rootScope.stopScroll=true;
                $rootScope.dialogStatus = 'open';

                $scope.opts = {
                    templateUrl: "view1/bodyCloveFilter.html"
                }

                $uibModal.open($scope.opts);
            }
        }

    ]

);