(function() {
	'use strict';

	angular
		.module('wheelsjs', [
			
		])
        .config(function($stateProvider) {
			$stateProvider
				.state('wheels_list', {
					cache: false,
					url: '/wheels_list',
					templateUrl: 'js/app_specific/wheels/wheels.list.html',
                    controller: 'wheelsListCtrl as vm'
				})
				.state('wheels_view', {
					cache: false,
					url: '/wheels_view',
					templateUrl: 'js/app_specific/wheels/wheels.view.html',
					params: {'selected': 0 },
                    controller: 'wheelsViewCtrl as vm'
				})
				.state('wheels_input', {
					cache: false,
					url: '/wheels_input',
					templateUrl: 'js/app_specific/wheels/wheels.input.html',
					params: {'obj': null },
                    controller: 'wheelsInputCtrl as vm'
				})
            });
		
})();