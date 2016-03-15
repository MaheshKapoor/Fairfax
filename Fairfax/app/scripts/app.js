'use strict';
angular.module('hCardBuilder', [])
     
		//Action on submit button; clears the form data.
        .controller('hCardFormBuilder', ['$scope', function($scope) {            
            $scope.submitForm = function() {
			     $scope.hCardCreateForm.$setPristine();
                 $scope.formData = {firstName:"", lastName:"", email:"" , phone:"", houseName:"", street:"",suburb:"", state:"", postcode:"", country:"" };             
				 alert(" Hcard data can be saved on this click!");
				  $window.location.reload();
            };
        }])

       

		
		
   
