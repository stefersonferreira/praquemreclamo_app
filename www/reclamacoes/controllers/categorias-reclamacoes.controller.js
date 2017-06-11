angular.module('starter')
    .controller('CategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', '$http',
        function ($scope, $rootScope, $state, $http) {

            $scope.selectCategory = function (category) {
                $state.go('app.subCategoriasReclamacoes', { id: category.id });
            }


            $http({
                method: 'GET',
                url: 'http://10.0.0.106:8080/api/getcategorias'
            }).then(function successCallback(response) {
                $rootScope.categories = response.data;
            }, function errorCallback(response) {
            });

        }]);