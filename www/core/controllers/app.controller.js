angular.module('starter')
    .controller('AppController', function ($scope, $rootScope, $ionicLoading, $http) {


        $rootScope.cities = [{
            id: 1,
            name: "João Pessoa",
            state: "PB"
        }, {
            id: 2,
            name: "Salvador",
            state: "BA"
        }, {
            id: 3,
            name: "São Luis",
            state: "MA"
        }
        ];

        $rootScope.currentCity = $rootScope.cities[0];

        // broadcasting receivers
        $scope.$on('startLoading', function () {
            $scope.loading = true;
            $ionicLoading.show({
                template: 'Loading...'
            })
        });

        $scope.$on('endLoading', function () {
            $scope.loading = false;
            $ionicLoading.hide()
        });
    

    });