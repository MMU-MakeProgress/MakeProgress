(function () {
    'use strict';

    angular
        .module('homejs')
        .controller('homeCtrl', control);

    control.$inject = [
        '$state',
        'templatesSrvc'
        ];
    
    function control(
        $state,
        templatesSrvc
    ) {
        var vm = angular.extend(this, {
            templates : []
         });
        

         vm.goToTemplates = function() {
            $state.go('templates_list');
        }

        vm.goToWheels = function() {
            $state.go('wheels_list');
        }


        vm.goToHome = function() {
            $state.go('home');
        }


        
    }
})();
