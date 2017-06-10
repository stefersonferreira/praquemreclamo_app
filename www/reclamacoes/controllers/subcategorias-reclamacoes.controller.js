angular.module('starter')
    .controller('SubCategoriasReclamacoesCtrl', [ '$scope' ,'$state' , '$stateParams' , function ( $scope, $state, $stateParams ) {

        $scope.currentCategory = $stateParams.id;
    }]);