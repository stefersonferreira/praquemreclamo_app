angular.module('starter')
    .controller('reclamacaoCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', 'lodash',
        function ($scope, $rootScope, $state, $stateParams, $http, lodash) {

            var id = Number($stateParams.id);

            $scope.reclamacao =  {
                id:1,
                title: "Tem buracos na rua",
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
        }
/*
            $http({
                method: 'GET',
                url: 'http://10.0.0.106:8080/api/reclamacao/' + id
            }).then(function successCallback(response) {
                $scope.reclamacao = response.data;
            }, function errorCallback(response) {
            });
*/

        }]);