angular.module('starter')
    .controller('HomeCtrl', ['$scope', '$rootScope', '$state', '$http', '$ionicModal', 
    function ($scope, $rootScope, $state, $http, $ionicModal) {

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


        $scope.onSearchBtn = function() {

            console.log('click')
            
            $http({
                method: 'POST',
                url: 'http://10.0.0.106:8080/api/buscaresposta/',
                data: { 'pergunta' : $scope.searchParams.searchField }
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
            });
        }


        $scope.onSpeechRecongition = function () {
            console.log('click');
            if ($rootScope.ionicReady) {
            console.log('reacy');
                $scope.record = function () {
                    var recognition = new SpeechRecognition();
                    recognition.onresult = function (event) {
                        if (event.results.length > 0) {
                            $scope.searchParams.searchField = event.results[0][0].transcript;
                            $scope.$apply()
                        }
                    };
                    recognition.start();
                };
            }
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

        $scope.selectCity = function (city) {
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
