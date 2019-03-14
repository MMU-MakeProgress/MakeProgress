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

        service.getListOfTemplates = function()
        {
            templatesArray = [];
            getExistingTemplatesFromLocalStorage();
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
            saveTemplateToLocalStorage(result);
            return result;
        }

        var saveTemplateToLocalStorage = function(templateObj)
        {
            window.localStorage.setItem('storeTemplate' , JSON.stringify(templateObj)); 
        }

        var getExistingTemplatesFromLocalStorage = function()
        {
            templatesArray.push(JSON.parse(localStorage.getItem('storeTemplate')));
        }


        return service;

    }

    
})();