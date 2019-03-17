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
            template : {
                name: "",
                description : "",
                attributes : [],
                attributesValues : [],
            }
         });
        
         vm.noData = function() {
            return vm.template.length == 0;
         }
        
         vm.goToInput = function() {
             console.log(vm.template.attributes);
             $state.go('wheels_input', {selected2 : params.selected});
         }
         
        var params = $stateParams;
        vm.template = wheelsSrvc.getWheelAt(params.selected);
    }
})();
