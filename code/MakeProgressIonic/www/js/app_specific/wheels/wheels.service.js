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

        service.setWheelData = function(templateObj) {
            window.localStorage.setItem('storeTemplate' , JSON.stringify(templateObj)); 
        }

        service.addWheelLabels = function() {
            
        }

        service.getWheelAt = function(index) {
            return angular.copy(wheelsArray[index]);
        }
        
        return service;

    }

    
})();