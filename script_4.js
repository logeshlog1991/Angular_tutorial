
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var emp = {
						firstname : "amir",
						lastname : "khon",
						salary : "50"
					};

					$scope.emp = emp;


				});