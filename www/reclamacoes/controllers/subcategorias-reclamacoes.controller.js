angular.module('starter')
    .controller('SubCategoriasReclamacoesCtrl', [ '$scope' ,'$rootScope' , '$state' , '$stateParams' , 'lodash', function ( $scope, $rootScope, $state, $stateParams, lodash ) {

        var id = Number($stateParams.id);
        $scope.currentCategory = lodash.find($rootScope.categories, { 'id': id });

        console.log( lodash.reverse($rootScope.categories), +$stateParams.id);
    }]);