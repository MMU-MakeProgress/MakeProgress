(function () {
    'use strict';

    angular
        .module('radarjs')
        .controller('RadarCtrl', control);

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
            
    
            vm.goToWheels = function() {
                $state.go('wheels_list');
            }
    
    
            
        }
})();
