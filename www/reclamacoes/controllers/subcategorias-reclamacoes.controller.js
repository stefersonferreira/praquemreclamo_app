angular.module('starter')
    .controller('SubCategoriasReclamacoesCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', 'lodash',
        function ($scope, $rootScope, $state, $stateParams, $http, lodash) {

            var id = Number($stateParams.id);

            var getCategorias = function (callback) {
                $http({
                    method: 'GET',
                    url: 'http://10.0.0.101:8080/api/getcategorias'
                }).then(function successCallback(response) {
                    $rootScope.categories = response.data;
                    callback(null)
                }, function errorCallback(response) {
                    callback(response)
                });
            }


            var getSubCategorias = function (callback) {
                $http({
                    method: 'GET',
                    url: 'http://10.0.0.101:8080/api/getsubcategorias'
                }).then(function successCallback(response) {
                    $rootScope.subcategories = response.data;
                    callback(null)
                }, function errorCallback(response) {
                    callback(response)
                });
            }

            if (!$rootScope.categories) {
                getCategorias(function (err) {
                    $scope.currentCategory = lodash.find($rootScope.categories, { 'id': id });
                    if (!$rootScope.subcategories)
                        getSubCategorias(function (err) {
                        })

                })
            } else {
                $scope.currentCategory = lodash.find($rootScope.categories, { 'id': id });
                if (!$rootScope.subcategories)
                    getSubCategorias(function (err) {
                    })
            }

        }]);


