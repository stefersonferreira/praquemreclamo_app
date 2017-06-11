angular.module('starter')
    .controller('HomeCtrl', ['$scope','$rootScope', '$state', '$ionicModal', function ($scope, $rootScope, $state, $ionicModal) {

        $scope.onBtnReclamacao = function () {
            $state.go('app.categoriasReclamacoes');
        }

        $scope.onOpenChooseCity = function () {
            $scope.selectedCity = $scope.currentCity;
            $scope.modal.show();
        }

        $scope.searchParams = {
            searchField: ''
        }


        $scope.onSpeechRecongition = function () {
            console.log('click');
            $scope.searchParams.searchField = "click";
        }

        /**
         * MODAL LOCALIZATION
         */
        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        

        $scope.cancelChooseCity = function () {
            $scope.modal.hide();
        };

        $scope.selectCity = function ( city ) {
            $scope.selectedCity = city;
        }

        
        $scope.saveChooseCity = function () {
            $scope.modal.hide();
            $scope.currentCity = $scope.selectedCity;
        };


        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });


    }]);
