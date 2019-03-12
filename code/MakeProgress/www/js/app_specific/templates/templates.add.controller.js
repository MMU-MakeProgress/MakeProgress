(function () {
    'use strict';

    angular
        .module('templatesjs')
        .controller('templatesAddCtrl', control);

    control.$inject = [
        '$state',
        ];
    
    function control(
        $state,
    ) {
        var vm = angular.extend(this, {
           
         });
        
         vm.attributes = [];
         
         vm.addfield=function() {
            vm.attributes.push({})
          }

        vm.cancel = function() {
            $state.go('templates_list');
        }
    }
})();
