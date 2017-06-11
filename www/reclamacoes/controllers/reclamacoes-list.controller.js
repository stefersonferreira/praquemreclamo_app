angular.module('starter')
    .controller('ReclamacoesListCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', 'lodash',
        function ($scope, $rootScope, $state, $stateParams, $http, lodash) {

            var id = Number($stateParams.id);

            if (!$rootScope.subcategories) {
                $state.go('app.subCategoriasReclamacoes', { id: id });
                return;
            }

            $scope.currentSubCategory = lodash.find($rootScope.subcategories, { 'id': id });
            $scope.currentCategory = lodash.find($rootScope.categories, { 'id': $scope.currentSubCategory.categoryId });
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