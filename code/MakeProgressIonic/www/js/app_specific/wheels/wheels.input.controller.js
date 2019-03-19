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
            },

            temporaryArray : []
         });

         vm.pushAttributes = function() {
             vm.template.attributesValues.push(vm.temporaryArray);
         }
        
         vm.showTemp = function() {
             vm.pushAttributes();
             console.log(vm.template);
             wheelsSrvc.setWheelData(vm.template);
             $state.go('wheels_view', {}, {reload: true});
         }

         vm.cancel = function() {
             $state.go('wheels_view');
         }

         var params = $stateParams;
         vm.template = wheelsSrvc.getWheelAt(params.selected2);
    }
})();
