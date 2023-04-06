(function() {
    'use strict';

    angular.module('MenuApp').controller('categoriesController', categoriesController);

    categoriesController.$inject = ['MenuDataService', 'categories'];

    class categoriesController {
        constructor(_MenuDataService, categories) {
            var categoriesCtrl = this;
            categoriesCtrl.categories = categories;
        }
    }
})();
