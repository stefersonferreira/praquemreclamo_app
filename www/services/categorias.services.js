'use strict';

angular.module('starter')

    .service('categoriasResource', ['$resource', 'REST_CONFIG', function ($resource, REST_CONFIG) {

        return $resource(REST_CONFIG.API_SERVER_URL + "getcategoria/:id", null, {
            'update': { method: 'PUT' }
        });
        
    }])
    ;