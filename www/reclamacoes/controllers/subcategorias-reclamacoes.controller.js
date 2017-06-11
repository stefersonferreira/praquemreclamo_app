angular.module('starter')
    .controller('SubCategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', 'lodash',
        function ($scope, $rootScope, $state, $stateParams, $http, lodash) {

            var id = Number($stateParams.id);


            if (!$rootScope.categories) {
                $state.go('app.categoriasReclamacoes');
                return;
            }

            $http({
                method: 'GET',
                url: 'http://10.0.0.106:8080/api/getsubcategorias'
            }).then(function successCallback(response) {
                $rootScope.subcategories = response.data;
                $scope.currentCategory = lodash.find($rootScope.categories, { 'id': id });
            }, function errorCallback(response) {
            });


            $scope.selectSubCategory = function (subcategory) {
                $state.go('app.reclamacoes', { id: subcategory.id });
            }

        }]);


