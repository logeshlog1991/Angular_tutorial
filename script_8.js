var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var employees = [
						{
							name : "ben",gender:"male",salary:55000.75
						},
						{
							name : "jack",gender:"male",salary:75000.85
						},
						{
							name : "jhon",gender:"male",salary:65000.75
						},
						{
							name : "jay",gender:"male",salary:65000.75
						},
						{
							name : "bary",gender:"male",salary:65000.75
						},
						{
							name : "kai",gender:"male",salary:65000.75
						}
					];
					
					$scope.searchBox = "";
					$scope.sortColumn = "name";
					$scope.rowLimit = 2;
					$scope.employees = employees;

				})