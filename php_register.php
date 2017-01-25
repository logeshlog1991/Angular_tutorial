<?php



$_POST = json_decode(file_get_contents('php://input'), true);

require "config/config.php";

$errors = array();
$msg = array();

if(isset($_POST)){
		
		//form validation 
		if(empty($_POST['name']))
			$errors['name'] = 'Name is Required';

		if(empty($_POST['gender']))
			$errors['gender'] = 'Gender is Required';

		if(empty($_POST['salary']))
			$errors['salary'] = 'Salary is Required';

		if(!empty($errors)){
			$msg['errors'] = $errors;
		}else{
			$name = $_POST['name'];
			$gender = $_POST['gender'];
			$salary = $_POST['salary'];
			$insert = $conn->query("insert into employee (name,gender,salary) values ('$name','$gender',$salary)");
			if($insert){
				$msg['message'] = "Form data send successfully";	
			}else{
				$errors['form'] = "Form data not send";	
			}
			
		}
	
}else{
	$msg['errors'] = "failed form data";
}

echo json_encode($msg);