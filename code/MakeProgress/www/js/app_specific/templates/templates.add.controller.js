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
         vm.check = false;

         if ($scope.deadline != null) {
             vm.check = true;
         }
         
         vm.addfield=function() {
            vm.attributes.push({})
          }
    }
})();
