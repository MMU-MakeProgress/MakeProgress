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

            // we're passing parameters into the new state
            // 'selected is an attribute in a parameter object, defined in the module definition
            // I'm going to write the destination controller, so it knows to look for an object with a 'selected' attribute
            //$state.go('events_detail', {selected: index});

        }

        vm.noTemplates = function(){
            return vm.templates.length == 0;
        }

        vm.update = function(){
            //$state.go('events_update');
        }

        vm.add = function() {
            $state.go('templates_add');
        }


        vm.templates = templatesSrvc.getTemplates();
              
    }
})();
