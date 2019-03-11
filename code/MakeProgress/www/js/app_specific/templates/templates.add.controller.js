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

    
         
        vm.funcSelectChange = function(){
            $scope.count == 'Hello World'
            alert('changed')
        }
    }
})();
