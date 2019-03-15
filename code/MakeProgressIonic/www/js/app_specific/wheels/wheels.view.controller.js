(function () {
    'use strict';

    angular
        .module('wheelsjs')
        .controller('wheelsViewCtrl', control);

    control.$inject = [
        '$state',
        'wheelsSrvc',
        '$stateParams',
        ];
    
    function control(
        $state,
        wheelsSrvc,
        $stateParams
    ) {
        var vm = angular.extend(this, {
            
         });
        
         vm.noData = function() {
            return vm.wheels.length == 0;
         }
        
         vm.goToInput = function() {
             $state.go('wheels_input');
         }
    }
})();
