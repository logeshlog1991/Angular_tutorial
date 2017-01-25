var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope,$http){
					
					// create a blank object to handle form data.
        			$scope.user = {};

					$scope.register = function(){
						alert($scope.user.name);
				        $http({
				        	method : 'post',
				        	url : 'php_register.php',
				        	headers : {
				                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				            },
				        	data : $scope.user
				        }).success(function(data) {
				            if (data.errors) {
				              // Showing errors
				              $scope.errorName = data.errors.name;
				              $scope.errorGender = data.errors.gender;
				              $scope.errorSalary = data.errors.salary;
				            } else {
				              $scope.message = data.message;
				            }
			          });

					}
					// function to add user data
				    $scope.addUser = function(){
				        $scope.register();
				    };

					$http({
						method:"GET",
						url:"php_get_json.php"
					}).then(function(response){
						$scope.employees = response.data;
						$scope.searchText = "";
					});
					
				})