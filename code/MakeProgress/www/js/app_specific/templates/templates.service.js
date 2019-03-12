(function () {
    'use strict';

    angular
        .module('templatesjs')
        .factory('templatesSrvc', templatesSrvc);

        templatesSrvc.$inject = [
            '$q', // promises service
            '$timeout', // timeout service
            'moment' // does dates really well
        ];

    function templatesSrvc(
        $q,
        $timeout,
        moment
    ) {
        var templatesArray = [];
        var service = {
            
        };

        var PAUSE_FOR_A_WHILE_MS = 3000;
        var NUM_DUMMY_TEMPLATES = 10;


        var createEvent = function(name, date, postcode){

            var result = {
                name : name,
                date : date,
                postcode: postcode
            }
            return result;
        }

        var createDummyTemplates = function(numToCreate){
            var result = [];

            for(var index=0; index < numToCreate; index++){

                var name = "event " + index;
                var date = moment().add('years', index).toDate();
                var postcode = "M1 5GD";

                result.push(createEvent("event " + index, date, postcode));
            }
            return result;
        }


        var replaceWithRealCode = function(){
            var deferred = $q.defer();
            
            $timeout(
                function(){
                    templatesArray = createDummyTemplates(NUM_DUMMY_TEMPLATES);
                    deferred.resolve(templatesArray);
                },
            PAUSE_FOR_A_WHILE_MS);            
            
            
            return deferred.promise;
        }

        var promiseToUpdateTemplates = function(){
            // returns a promise
            return replaceWithRealCode();
        }

        service.updateTemplates = function(){
            return promiseToUpdateTemplates();   
        } 

        service.getTemplates = function(){
            return angular.copy(templatesArray);
        }

        service.getNumTemplates = function(){
            return templatesArray.length;
        }

        service.getTemplateAt = function(index){
            return angular.copy(templatesArray[index]);
        }


        return service;

    }

    
})();