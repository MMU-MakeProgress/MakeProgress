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


        vm.goBack = function() {
            $state.go('templates_list');
        }
		vm.deleteThis = function(){
			var temparray = [];
			for(var i=0;i<JSON.parse(localStorage.getItem('storeTemplate')).length;i++){
				if(JSON.parse(localStorage.getItem('storeTemplate'))[i].name != templatesSrvc.getTemplateAt(params.selected3).name && JSON.parse(localStorage.getItem('storeTemplate'))[i].attributes != templatesSrvc.getTemplateAt(params.selected3).attributes){
					temparray.push(JSON.parse(localStorage.getItem('storeTemplate'))[i]);
				}
			}
			localStorage.setItem("storeTemplate", JSON.stringify(temparray));
			$state.go('templates_list');
		}

        var params = $stateParams;
        vm.template = templatesSrvc.getTemplateAt(params.selected3);
    }
})();
