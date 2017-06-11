angular.module('starter')
    .controller('ReclamacoesListCtrl', ['$scope', '$rootScope', '$state', '$http',
        function ($scope, $rootScope, $state, $http) {
            
            var id = Number($stateParams.id);

            if ( !$rootScope.subcategories) {
                $state.go('app.subCategoriasReclamacoes', { id: id });
            }

            
/*

            $http({
                method: 'GET',
                url: 'http://10.0.0.101:8080/api/getcategorias'
            }).then(function successCallback(response) {
                $rootScope.categories = response.data;
            }, function errorCallback(response) {
            });
*/

        }]);