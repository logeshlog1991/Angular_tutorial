

var myApp = angular
				.module("myModule",["ngRoute"])
				.config(function($routeProvider,$locationProvider){
					$routeProvider.caseInsenstiveMatch = true;
					$routeProvider
						.when("/",{
							templateUrl:"template/home.html",
							controller:"homeController"
						})
						.when("/home",{
							templateUrl:"template/home.html",
							controller:"homeController"
						})
						.when("/course",{
							templateUrl:"template/courses.html",
							controller:"courseController"
						})
						.when("/students",{
							templateUrl:"template/students.html",
							controller:"studentsController"
						})
						//student details parameter passing url
						.when("/students_view/:id",{
							templateUrl:"template/student_details.html",
							controller:"studentsDetailsController"
						})
						.when("/login",{
							templateUrl:"template/login.html",
							controller:"loginController"
						})
						.otherwise("/",{
							redirectTo:"template/login.html"
						})
						//location provider
						$locationProvider.html5Mode(true);
				})
				.controller('homeController',function($scope){
					$scope.message = "Home Page";
				})
				.controller('courseController',function($scope,$http){
					$http({
						method:"post",
						url:"php_get_json_courses.php"						
					}).then(function(response){
						$scope.courses = response.data;	
					})
				})
				.controller('studentsController',function($scope,$http,$location,$routeParams,$route,$httpParamSerializerJQLike){
										
					//all student details
					$scope.users = [];
					//temp student details
					$scope.tempUserData = {};

					//edit student details
					$scope.editUser = function(user){

				        $scope.tempUserData = {
				            id:user.id,
				            name:user.name,
				            department:user.department,
				            email:user.email
				        };
				        $scope.index = $scope.users.indexOf(user);
				        //alert($scope.tempUserData.name);
				    };				
					
					//update function
					$scope.saveUser = function(type){
						
						var data = {
							'data':$scope.tempUserData,
							'type':type
						};

						var config = {
							headers : {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
							}
        				};
        				$http.post("php_update_std.php",data,config).success(function(response){
        					if(response.status == 'OK'){
        						
				                if(type == 'edit'){
				                	//UPDATE details
				                    $scope.users[$scope.index].id = $scope.tempUserData.id;
				                    $scope.users[$scope.index].name = $scope.tempUserData.name;
				                    $scope.users[$scope.index].department = $scope.tempUserData.department;
				                    $scope.users[$scope.index].email = $scope.tempUserData.email;
				                    
				                }else if(type == 'add'){
				                	alert(response.data.id);	
				                	//insert details
				                    $scope.users.push({
				                        id:response.data.id,
				                        name:response.data.name,				                        		                        
				                        department:response.department,
				                        email:response.data.email
				                    });
				                    
				                }
				                $scope.userForm.$setPristine();
				                $scope.tempUserData = {};
				                $scope.messageSuccess(response.msg);
				            }else{
				                $scope.messageError(response.msg);
				            }             				

        				});
					}

					//function to update user details
					$scope.updateUser = function(){
						$scope.saveUser('edit');
					};

					//function to add new student details
					$scope.addUser = function(){
				        $scope.saveUser('add');
				    };

				    //function to delete student
				    $scope.deleteUser = function(user){
				        var conf = confirm('Are you sure to delete the user?');
				        if(conf === true){
				            var data = {
				                'id': user.id,
				                'type':'delete'    
				            };
				            var config = {
				                headers : {
				                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				                }    
				            };
				            $http.post("php_update_std.php",data,config).success(function(response){
				                if(response.status == 'OK'){
				                    var index = $scope.users.indexOf(user);
				                    //alert(index);
				                    $scope.users.splice(index,1);
				                    $scope.messageSuccess(response.msg);
				                }else{
				                    $scope.messageError(response.msg);
				                }
				            });
				        }
				    };


					//select all the student details
					$scope.getRecords = function(){
						$http({
						method:"post",
						url:"php_get_json_students.php"											
						}).then(function(response){
							if(response.status === 'ERR'){
								$location.path("/login");
							}else{
								$scope.users = response.data;						
							}
						})		
					}	

					//show success message
					$scope.messageSuccess = function(msg){
						$(".msg-Success > p").html(msg);
						$(".msg-Success").show();
						$(".msg-Success").delay(5000);
						$(".msg-Success > p").html('');
					}	
					//show error message
					$scope.messageError = function(msg){
						$(".msg-Error > p").html(msg);
						$(".msg-Error").show();
						$(".msg-Error").delay(5000);
						$(".msg-Error > p").html('');
					}

					//logout function
					var config = {
							headers : {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
							}
        			};
					$scope.logout = function(){
						$http.post("php_user_logout.php",config).success(function(response){
        					if(response.status == 'OK'){
        						$location.path( "/login" );
        						//window.location.href = '/angular_js_1/routing/students';
        					}else{
        						alert("error");
        					}
        				});
					};				
										
				})
				//login details
				.controller('loginController',function($scope,$http,$location){
							
					//userLogin details
					$scope.userLogin = function(type){
						var data = {
							'data' : $scope.loginDetails,
							'type' : type
						}
						var config = {
							headers : {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
							}
        				};
        				$http.post("php_user_login.php",data,config).success(function(response){
        					if(response.status == 'OK'){
        						//alert("success");
        						$location.path( "/students" );
        						//window.location.href = '/angular_js_1/routing/students';
        					}else{
        						alert("login failed");
        					}
        				});
					}


					$scope.login = function(){
						$scope.userLogin('login');

					};

					
				})
				//student details controller
				.controller('studentsDetailsController',function($scope,$http,$routeParams){
					$http({
						method:"get",
						params:{id:$routeParams.id},
						url:"php_get_json_student_details.php"						
					}).then(function(response){
						$scope.students_deatils = response.data;
					})
				})
				;