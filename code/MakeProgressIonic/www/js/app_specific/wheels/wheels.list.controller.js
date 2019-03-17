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
            console.log(vm.wheels[index]);
            $state.go('wheels_view', {selected: index});
        }

        vm.noWheels = function(){
            return vm.wheels.length == 0;
        }

        vm.goToHome = function() {
            $state.go('home');
        }

        vm.wheels = wheelsSrvc.wheelLocalStorage();
        

    }
})();
