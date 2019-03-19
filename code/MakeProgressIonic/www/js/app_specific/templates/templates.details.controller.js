(function () {
    'use strict';

    angular
        .module('templatesjs')
        .controller('templatesDetailsCtrl', control);

    control.$inject = [
        '$state',
        'templatesSrvc',
        '$stateParams'
        ];
    
    function control(
        $state,
        templatesSrvc,
        $stateParams
    ) {
        var vm = angular.extend(this, {
            template : {
                tempName : "",
                tempDesc : "",
                attributes : [],
            }

         });

        vm.deleteThis = function() {
            templatesSrvc.deleteTemplate(params.selected3);
            $state.go('templates_list')
        }

        vm.goBack = function() {
            $state.go('templates_list');
        }

        var params = $stateParams;
        vm.template = templatesSrvc.getTemplateAt(params.selected3);
        

    }
})();
