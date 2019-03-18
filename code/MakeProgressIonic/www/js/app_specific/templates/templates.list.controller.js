(function () {
    'use strict';

    angular
        .module('templatesjs')
        .controller('templatesListCtrl', control);

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
        

        vm.onItemSelected = function(index){
            console.log("Item : " + index);
            console.log(vm.templates[index]);
            //$state.go('templates_detail', {selected: index});
        }

        vm.noTemplates = function(){
            return vm.templates.length == 0;
        }

        vm.add = function() {
            $state.go('templates_add');
        }

        vm.goToHome = function() {
            $state.go('home');
        }
        
        
        vm.templates = templatesSrvc.getListOfTemplates();
        
    }
})();
