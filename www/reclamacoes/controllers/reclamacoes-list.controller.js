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

            if (!$rootScope.reclamacoes) {
                $http({
                    method: 'GET',
                    url: 'http://10.0.0.106:8080/api/perguntas/' + id
                }).then(function successCallback(response) {
                    $rootScope.reclamacoes = response.data;
                }, function errorCallback(response) {
                });
            }

            $scope.selectReclamacao = function (reclamacao) {
                $state.go('app.reclamacao', { id: reclamacao.id });
            }


        }]);