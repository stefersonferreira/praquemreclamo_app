angular.module('starter')

    .filter('subCatFilter', function () {
        return function (subcategorias, categoryId) {
            var out = [];


            for (var i = 0; i < (subcategorias ? subcategorias.length : 0); i++) {

                

                if (subcategorias[i].categoryId == categoryId ) {
                    out.push(subcategorias[i]);
                }

            }
            return out;
        }
    });
