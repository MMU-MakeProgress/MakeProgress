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
            var attributesValues =[];

            var result =
            {
                name : name,
                description : description,
                attributes: attributes,
                attributesValues : attributesValues
            }

            templatesArray.push(result);
            saveTemplateToLocalStorage(result);
            return result;
        }

        var saveTemplateToLocalStorage = function(templateObj)
        {
            //window.localStorage.setItem('storeTemplate' , JSON.stringify(templateObj)); 
            templatesArray = [];
            templatesArray.push(templateObj);
            templatesArray = templatesArray.concat(JSON.parse(localStorage.getItem('storeTemplate')||'[]'));
            console.log(templatesArray);
          
            localStorage.setItem("storeTemplate", JSON.stringify(templatesArray));
        }

        var getExistingTemplatesFromLocalStorage = function()
        {
            templatesArray = [];
            var temp = JSON.parse(localStorage.getItem('storeTemplate'));

            for (var i in temp) { 
                templatesArray.push(temp[i]);
            }
            console.log(templatesArray);
        }

        service.getTemplateAt = function(index) {
            return angular.copy(templatesArray[index]);
        }

        return service;

    }

    
})();