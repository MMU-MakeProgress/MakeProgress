(function () {
    'use strict';

    angular
        .module('templatesjs')
        .controller('templatesAddCtrl', control);

    control.$inject = [
        '$state',
        'templatesSrvc',
        '$ionicPopup'
        ];
    
    function control(
        $state,
        templatesSrvc,
        $ionicPopup
    ) {
        var vm = angular.extend(this, {
            tempName : "",
            tempDesc : "",
            attributes : [],
            data : undefined
         });

         vm.addattribute = function addattribute(x) {
            if (vm.attributes.length < 8) {
                vm.attributes.push('');
            }
         };

         vm.delattribute = function(index) {
             console.log('Deleted');
             vm.attributes.splice(index, 1);
         };
         
         vm.savetemp = function() {
            if (vm.attributes.length >= 3) {
                console.log("templates.add.controller:savetemp called");
                templatesSrvc.addNewTemplate(vm.tempName, vm.tempDesc, vm.attributes);
                $state.go('templates_list');
            } else {
                vm.showAlert();
            }
         };

        vm.cancel = function() {
            $state.go('templates_list');
        };

        vm.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: 'At least 3 attributes needed',
            });

            alertPopup.then(function(res) {
                console.log('Thanks');
            });
        };
    }
})();
