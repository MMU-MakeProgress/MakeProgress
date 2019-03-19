(function() {
	'use strict';

	angular
		.module('templatesjs', [
			
		])
        .config(function($stateProvider) {
			$stateProvider
				.state('templates_list', {
					cache: false,
					url: '/templates_list',
					templateUrl: 'js/app_specific/templates/templates.list.html',
                    controller: 'templatesListCtrl as vm'
				})
				.state('templates_add', {
					cache: false,
					url: '/templates_add',
					templateUrl: 'js/app_specific/templates/templates.add.html',
                    controller: 'templatesAddCtrl as vm'
				})
				.state('templates_details', {
					cache: false,
					url: '/templates_details',
					templateUrl: 'js/app_specific/templates/templates.details.html',
					params: {'selected3': 0 },
                    controller: 'templatesDetailsCtrl as vm'
				})
            });
		
})();