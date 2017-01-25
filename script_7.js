var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope,$http){
					$http.get("php_get_json.php")
						.then(function(response){
							$scope.employees = response.data;		
						});
					})
				.controller("demo",function($scope,$http){
					$http({
						method:"get",
						url:"php_get_json.php"
					}).then(function(response){
						$scope.emplo = response.data;
					});

					});