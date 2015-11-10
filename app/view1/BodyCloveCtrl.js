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

                $scope.opts = {

                    animation: true,
                    templateUrl: "view1/bodyCloveFilter.html",
                    controller: "FilterCtrl",
                    modalClass: "filter-modal"

                }

                $uibModal.open($scope.opts);
            }
            //I am not implementing load more as my data is static . Back to top will help in jumping and then refining.
            $(window).scroll(function() {
                if($(this).scrollTop() != 0) {
                    $('#to-top').fadeIn();
                } else {
                    $('#to-top').fadeOut();
                }
            });

            $('#to-top').click(function() {
                $('body,html').animate({scrollTop:0},"fast");
            });
        }

    ]

);