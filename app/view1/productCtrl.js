/**
 * Created by sgandhi on 11/16/15.
 */
angular.module('myApp.view1').controller('productCtrl',
    [
        '$scope', '$uibModalInstance' ,'$http','$sce',
        function ($scope, $uibModalInstance, $http,$sce){
            $http.get('view1/productDetailData.json')
                .then(function(res){
                    $scope.myInterval = 5000;
                    $scope.noWrapSlides = false;
                    var fetchData = res.data.d.Object[0];
                    //getting images.
                    $scope.thumbImgs = fetchData.AdditionalImage;
                    var prodDescription = fetchData.Properties[1].Value;
                    //accessing just value of obj.
                    var result = prodDescription[Object.keys(prodDescription)[0]];
                    $scope.prodDesc = $sce.trustAsHtml(result);

                });
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
        ]);