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
        

        $rootScope.reclamacoes = [{
            id:1,
            title: "Tem buracos na rua",
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        },
        {
            id:2,
            title: "Trafego muito rápido na minha rua",
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        },
        {
            id:3,
            title: "Signalização apagada",
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        },
        {
            id:4,
            title: "Lixo não recolhido",
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        },
        {
            id:5,
            title: "Muito escuro de noite",
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        }]

    });