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
            attributes : [],
            data : Boolean
         });

         vm.addattribute = function() {
            if (vm.attributes.length < 5) {
                vm.attributes.push('');
            }
         } 

         vm.delattribute = function(index) {
             vm.attributes.splice(index, 1);
         }
         
         vm.savetemp = function() {
            vm.data = true;
         }

        vm.cancel = function() {
            $state.go('templates_list');
        }
    }
})();
