(function () {
    'use strict';

    angular
        .module('wheelsjs')
        .controller('wheelsInputCtrl', control);

    control.$inject = [
        '$state',
        'wheelsSrvc'
        ];
    
    function control(
        $state,
        wheelsSrvc
    ) {
        var vm = angular.extend(this, {
            
         });
        
        
    }
})();
