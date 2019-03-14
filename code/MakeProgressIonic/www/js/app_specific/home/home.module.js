(function() {
	'use strict';

	angular
		.module('homejs', [
			
		])
        .config(function($stateProvider) {
			$stateProvider
				.state('home', {
					cache: false,
					url: '/home',
					templateUrl: 'js/app_specific/home/home.html',
                    controller: 'homeCtrl as vm'
				})	
				
            });
		
})();