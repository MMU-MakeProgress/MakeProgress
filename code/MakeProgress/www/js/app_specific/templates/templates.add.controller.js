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
            tempName : "",
            tempDesc : "",
            attributes : [],
            data : undefined
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
             console.log("templates.add.controller:savetemp called");
            templatesSrvc.addNewTemplate(vm.tempName, vm.tempDesc, vm.attributes);
            $state.go('templates_list');
         }

        vm.cancel = function() {
            $state.go('templates_list');
        }

        
    }
})();
