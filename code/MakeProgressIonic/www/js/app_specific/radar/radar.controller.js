(function () {
    'use strict';

    angular
        .module('radarjs')
        .controller('RadarCtrl', control);

    control.$inject = [
        '$state',
        'templatesSrvc'
        ];
    
        function control(
            $state,
            templatesSrvc
        ) {
            var vm = angular.extend(this, {
                attributeNames : [],
                inputValues : []
             });
            
    
            var init = function init() {

                console.log("Hello");
                vm.attributeNames =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
                
                vm.inputValues = [
                    [65, 59, 90, 81, 56, 55, 40],
                    [28, 48, 40, 19, 96, 27, 100]
                ];


              }
            init();

            vm.goToWheels = function() {
                $state.go('wheels_list');
            }
    
            
        }
})();

/* .controller("testController", function ($scope) {
    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
  
    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
  });  */
 
