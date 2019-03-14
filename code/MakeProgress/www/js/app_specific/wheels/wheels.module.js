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
            });
		
})();