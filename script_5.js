
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
						var contries = [
								{
									name : "uk",
									cities : [
										{ name : "London" },
										{ name : "Manchester" },
										{ name : "Brimingham" }
									]
								}
							];
							$scope.contries = contries;
						});