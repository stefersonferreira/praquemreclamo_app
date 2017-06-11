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

        $rootScope.categories = [{ "id": 1, "name": "Sa\u00fade", "icon": "fa-medkit" }, { "id": 2, "name": "Infraestrutura", "icon": "fa-building" }, { "id": 3, "name": "Educa\u00e7\u00e3o", "icon": "fa-graduation-cap" }, { "id": 4, "name": "Justi\u00e7a", "icon": "fa-gavel" }, { "id": 5, "name": "Seguran\u00e7a", "icon": "fa-shield" }, { "id": 6, "name": "Administra\u00e7\u00e3o", "icon": "fa-university" }, { "id": 7, "name": "Tr\u00e2nsito", "icon": "fa-automobile" }];
        $rootScope.subcategories = [{"id":1,"categoryId":2,"name":"Ilumina\u00e7\u00e3o","icon":"fa-lightbulb-o"},{"id":2,"categoryId":2,"name":"Ruas","icon":"fa-road"},{"id":3,"categoryId":2,"name":"Parques","icon":"fa-tree"},{"id":4,"categoryId":2,"name":"Esgoto","icon":"fa-edge"},{"id":5,"categoryId":2,"name":"\u00c1gua","icon":"fa-tint"},{"id":6,"categoryId":2,"name":"Lixo","icon":"fa-trash"},{"id":7,"categoryId":2,"name":"Aegypti","icon":"fa-bug"},{"id":8,"categoryId":2,"name":"\u00d4nibus","icon":"fa-bus"},{"id":9,"categoryId":1,"name":"Unidade de Sa\u00fade","icon":"fa-user-md"},{"id":10,"categoryId":1,"name":"SAMU","icon":"fa-ambulance"},{"id":11,"categoryId":1,"name":"HOSPITAL","icon":"fa-hospital-o"}];
        $rootScope.reclamacoes = [{"id":1,"title":"Seu problema \u00e9 um buraco na rua?","description":"descri\u00e7\u00e3o"},{"id":2,"title":"Tr\u00e1fego muito r\u00e1pido na minha rua","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit"},{"id":3,"title":"Sinaliza\u00e7\u00e3o inadequada na minha rua","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit"}];
    });