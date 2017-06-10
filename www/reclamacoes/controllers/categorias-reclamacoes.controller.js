angular.module('starter')
    .controller('CategoriasReclamacoesCtrl', [ '$scope' , '$state' , function ( $scope, $state ) {

        $scope.selectCategory = function ( category ) {
            $state.go('app.subCategoriasReclamacoes', { id: category.id });
        }

    }]);