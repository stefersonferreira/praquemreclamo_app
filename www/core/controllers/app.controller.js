angular.module('starter')
    .controller('AppController', function ($rootScope) {

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


        $rootScope.categories = [ {
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
    });