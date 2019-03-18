/* (function() {
	'use strict';

	angular
		.module('radarjs', ["chart.js"])
        .config(function($stateProvider) {
			$stateProvider
				.state('radar', {
					cache: false,
					url: '/radar',
					templateUrl: 'js/app_specific/radar/radar.html',
                    controller: 'RadarCtrl as vm'
				})	
				
            });
		
})(); */