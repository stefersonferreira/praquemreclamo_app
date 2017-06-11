angular.module('starter')
    .controller('CategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', '$http', 'categoriasResource',
        function ($scope, $rootScope, $state) {


            $scope.selectCategory = function (category) {
                $state.go('app.subCategoriasReclamacoes', { id: category.id });
            }

        }]);