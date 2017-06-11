angular.module('starter')
    .controller('AppController', function ($scope, $rootScope , $ionicLoading) {


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

        /*
        $rootScope.categories = [{
            id: 1,
            name: 'Saúde',
            icon: 'fa-medkit'
        },
        {
            id: 2,
            name: 'Infraestrutura',
            icon: 'fa-building'
        },
        {
            id: 3,
            name: 'Educação',
            icon: 'fa-graduation-cap'
        },
        {
            id: 4,
            name: 'Justiça',
            icon: 'fa-gavel'
        },
        {
            id: 5,
            name: 'Segurança',
            icon: 'fa-shield'
        },
        {
            id: 6,
            name: 'Administração',
            icon: 'fa-university'
        },
        {
            id: 7,
            name: 'Transito',
            icon: 'fa-automobile'
        }]
*/

        $rootScope.subcategories = [{
            id: 1,
            categoryId: 2,
            name: 'Iluminação',
            icon: 'fa-lightbulb-o'
        },
        {
            id: 2,
            categoryId: 2,
            name: 'Ruas',
            icon: 'fa-road'
        },
        {
            id: 3,
            categoryId: 2,
            name: 'Parques',
            icon: 'fa-tree'
        },
        {
            id: 4,
            categoryId: 2,
            name: 'Esgoto',
            icon: 'fa-edge'
        },
        {
            id: 5,
            categoryId: 2,
            name: 'Agua',
            icon: 'fa-tint'
        },
        {
            id: 6,
            categoryId: 2,
            name: 'Lixo',
            icon: 'fa-trash'
        },
        {
            id: 7,
            categoryId: 2,
            name: 'Aegypti',
            icon: 'fa-bug'
        },
        {
            id: 7,
            categoryId: 2,
            name: 'Onibus',
            icon: 'fa-bus'
        },
        {
            id: 8,
            categoryId: 1,
            name: 'USF',
            icon: 'fa-user-md'
        },
        {
            id: 9,
            categoryId: 1,
            name: 'SAMU',
            icon: 'fa-ambulance'
        },
        {
            id: 10,
            categoryId: 1,
            name: 'HOSPITAL',
            icon: 'fa-hospital-o'
        },
        {
            id: 11,
            categoryId: 1,
            name: 'Focos',
            icon: 'fa-bug'
        }]
    });