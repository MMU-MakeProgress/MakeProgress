(function () {
    'use strict';

    angular
        .module('wheelsjs')
        .controller('wheelsListCtrl', control);

    control.$inject = [
        '$state',
        'wheelsSrvc'
        ];
    
    function control(
        $state,
        wheelsSrvc
    ) {
        var vm = angular.extend(this, {
            wheels : []
         });
        

        vm.onItemSelected = function(index){
            console.log("Item : " + index);

            //$state.go('wheels_detail', {selected: index});

        }

        vm.noWheels = function(){
            return vm.wheels.length == 0;
        }

        
    }
})();
