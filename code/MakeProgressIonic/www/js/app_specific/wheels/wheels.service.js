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

        service.wheelLocalStorage = function() {
            wheelsArray = []
            wheelsArray.push(JSON.parse(localStorage.getItem('storeTemplate')));
            return angular.copy(wheelsArray);

        }

        return service;

    }

    
})();