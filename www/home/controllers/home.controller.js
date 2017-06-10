angular.module('starter')
    .controller('HomeCtrl', [ '$scope' , '$state' , function ( $scope , $state ) {
        
        $scope.onBtnReclamacao = function ( ) {
            console.log('click');
            $state.go('app.categoriasReclamacoes');
        }

    }]);
