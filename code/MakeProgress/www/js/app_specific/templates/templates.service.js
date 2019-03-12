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

        
        service.getListOfTemplates = function()
        {
            return angular.copy(templatesArray);
        }

        service.addNewTemplate = function(name, description, attributes) {
            console.log("templatesService.addNewTemplate called with ",{name:name,desc:description,attr:attributes});
            //var attributes =[];

            var result =
            {
                name : name,
                description : description,
                attributes: attributes
            }

            templatesArray.push(result);
            return result;
        }

        var saveTemplateToLocalStorage = function()
        {
           window.localStorage.setItem();
            
        }

        var getExistingTemplatesFromLocalStorage = function()
        {
            
        }

        return service;

    }

    
})();