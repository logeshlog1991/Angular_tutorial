var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var technologies = [
						{ name:"C#",likes:0,Dislikes:0 },
						{ name:"C",likes:0,Dislikes:0 },
						{ name:"php",likes:0,Dislikes:0 }
					];
					$scope.technologies = technologies;

					//like increment
					$scope.incrementLikes = function(technolghy){
						technolghy.likes++;
					}

					//Delike increment
					$scope.incrementDelikes = function(technolghy){
						technolghy.Dislikes++;
					}


				});