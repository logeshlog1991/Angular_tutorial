var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope,$location,$anchorScroll){
					$scope.scrollTo = function(scrollLocation){
						$location.hash(scrollLocation);
						$anchorScroll();
					}
				});