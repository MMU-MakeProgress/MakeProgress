(function () {
    'use strict';

    angular
        .module('templatesjs')
        .controller('templatesAddCtrl', control);

    control.$inject = [
        '$state',
        'templatesSrvc'
        ];
    
    function control(
        $state,
        templatesSrvc
    ) {
        var vm = angular.extend(this, {
            attributes : []
         });
         
         vm.addfield=function() {
            vm.attributes.push({})
          }

        vm.cancel = function() {
            $state.go('templates_list');
        }
    }
})();
