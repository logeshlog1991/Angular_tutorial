var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var employees = [
						{
							name : "ben",gender:1,salary:55000.75
						},
						{
							name : "jack",gender:2,salary:75000.85
						},
						{
							name : "jhon",gender:1,salary:65000.75
						},
						{
							name : "jay",gender:1,salary:65000.75
						},
						{
							name : "bary",gender:1,salary:65000.75
						},
						{
							name : "kai",gender:1,salary:65000.75
						}
					];

					$scope.employees = employees;
					$scope.employeeTemplate = "employee_list.html";
					/*$scope.employeelist = "employee_list.html";*/
				});