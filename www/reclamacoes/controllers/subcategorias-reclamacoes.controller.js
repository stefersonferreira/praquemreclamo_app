angular.module('starter')
    .controller('SubCategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', 'lodash',
        function ($scope, $rootScope, $state, $stateParams, $http, lodash) {

            var id = Number($stateParams.id);


            $http({
                method: 'GET',
                url: 'http://10.0.0.101:8080/api/getcategorias'
            }).then(function successCallback(response) {
                $rootScope.categories = response.data;
                $http({
                    method: 'GET',
                    url: 'http://10.0.0.101:8080/api/getsubcategorias'
                }).then(function successCallback(response) {
                    console.log(response.data)
                    $rootScope.subcategories = response.data;
                    $scope.currentCategory = lodash.find($rootScope.categories, { 'id': id });
                }, function errorCallback(response) {
                    console.log(response)
                });
            }, function errorCallback(response) {
            });

        }]);