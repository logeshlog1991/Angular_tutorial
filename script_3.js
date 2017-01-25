

var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var country = {
						name : "india",
						capital : "mumbai",
						flag : "img/flag.png"
					};

					$scope.country = country;


				});