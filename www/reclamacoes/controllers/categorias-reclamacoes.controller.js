angular.module('starter')
    .controller('CategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', 'categoriasResource',
        function ($scope, $rootScope, $state, categoriasResource) {
            $rootScope.$broadcast('startLoading');

            // Loading todo logs
            categoriasResource.query({}).$promise.then(
                function (result) {

                    $rootScope.categories = result;

                    extractData($scope.todo);
                    $rootScope.$broadcast('endLoading');

                },
                function (error) {
                    console.log(error);
                    $rootScope.$broadcast('endLoading');

                });


            $scope.selectCategory = function (category) {
                $state.go('app.subCategoriasReclamacoes', { id: category.id });
            }

        }]);