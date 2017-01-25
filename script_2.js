
//create module
var myApp = angular.module("myModule",[]);

//create controller
/*var myController = function($scope){
	$scope.message = 'angular js tutorial';
}*/

//register the controller into module
myApp.controller("myController",function($scope){
	var employee = {
		firstname : "logesh",
		lastname : "kumar"
	};
	$scope.employee = employee;
});