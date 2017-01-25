<?php
	$_POST = json_decode(file_get_contents('php://input'), true);

	require "config/config.php";
	session_start();
	if(isset($_POST['type']) && !empty($_POST['type'])){
		if($_POST['type'] == 'login'){
			if(!empty($_POST['data'])){
				$username = $_POST['data']['username'];
				$password = $_POST['data']['password'];

				$select = $conn->query("select * from user_details where username = '$username' and password = '$password'");
				if($select->num_rows > 0){
					$_SESSION['login'] = 'valid';
					$data['status'] = 'OK';
				}else{
					$data['status'] = 'ERR';
				}
			}
		}

		echo json_encode($data);
	}


?>