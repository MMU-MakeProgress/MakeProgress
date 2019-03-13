(function () {
    'use strict';

    angular
        .module('wheelsjs')
        .factory('wheelsSrvc', wheelsSrvc);

        wheelsSrvc.$inject = [
            '$q', // promises service
            '$timeout', // timeout service
            'moment' // does dates really well
        ];

    function wheelsSrvc(
        $q,
        $timeout,
        moment
    ) {
        var wheelsArray = [];
        var service = {
            
        };

        var PAUSE_FOR_A_WHILE_MS = 3000;


        return service;

    }

    
})();