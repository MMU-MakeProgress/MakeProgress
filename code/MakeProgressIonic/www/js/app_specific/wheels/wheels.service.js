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
            getExistingWheelsFromLocalStorage();
            return angular.copy(wheelsArray);
        }

        service.setWheelData = function(templateObj) {
            wheelsArray = [];
            wheelsArray.push(templateObj);
            wheelsArray = wheelsArray.concat(JSON.parse(localStorage.getItem('storeTemplate')||'[]'));
            console.log(wheelsArray);
          
            localStorage.setItem("storeTemplate", JSON.stringify(wheelsArray));
        }

        service.addWheelLabels = function() {
            
        }

        service.getWheelAt = function(index) {
            return angular.copy(wheelsArray[index]);
        }
        
        var getExistingWheelsFromLocalStorage = function()
        {
            var temp = JSON.parse(localStorage.getItem('storeTemplate'));

            for (var i in temp) { 
                wheelsArray.push(temp[i]);
            }
        }
        return service;

    }

    
})();