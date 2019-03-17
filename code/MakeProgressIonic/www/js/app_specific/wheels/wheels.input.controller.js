(function () {
    'use strict';

    angular
        .module('wheelsjs')
        .controller('wheelsInputCtrl', control);

    control.$inject = [
        '$state',
        'wheelsSrvc',
        '$stateParams'
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
        
         vm.showTemp = function() {
             console.log(vm.template);
             wheelsSrvc.setWheelData(vm.template);
             $state.go('wheels_view');
         }

         var params = $stateParams;
         vm.template = wheelsSrvc.getWheelAt(params.selected2);
    }
})();
