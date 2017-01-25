<?php

$_POST = json_decode(file_get_contents('php://input'), true);

require "config/config.php";


if(isset($_POST['type']) && !empty($_POST['type'])){
	
	$type = $_POST['type'];

	switch ($type) {
		case 'edit':
			# update code...
			if(!empty($_POST['data'])){
				$name = $_POST['data']['name'];
				$email = $_POST['data']['email'];
				$depart = $_POST['data']['department'];
				$id = $_POST['data']['id'];
				
				$update = $conn->query("update students set name = '$name',department = '$depart',email = '$email' where id = $id");
				
				if($update){
					$data['status'] = "OK";
					$data['msg'] = 'User data has been updated successfully.';
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = 'Some problem occurred, please try again.';
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = 'Some problem occurred, please try again.';
            }
            echo json_encode($data);
			break;
		case 'add':
			#  insert code...
			if(!empty($_POST['data'])){
				
				$data['name'] = $_POST['data']['name'];
				$data['email'] = $_POST['data']['email'];
				$data['department'] = $_POST['data']['department'];
				
				$valueString = "'" . implode("','", array_values($data))."'";
				
				$insert = $conn->query("insert into students (name,department,email) values (".$valueString.")");
			
				if($insert){
					$data['id'] = 100;
					$data['status'] = "OK";
					$data['msg'] = 'User data has been insert successfully.';
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = 'Some problem occurred, please try again.';
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = 'Some problem occurred, please try again.';
            }
            echo json_encode($data);
			break;
		case 'delete':
			#  insert code...
			if(!empty($_POST['id'])){

				$id = $_POST['id'];				
				$delete = $conn->query("delete from students where id = $id");			
				if($delete){
					$data['status'] = "OK";
					$data['msg'] = 'User data has been insert successfully.';
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = 'Some problem occurred, please try again.';
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = 'Some problem occurred, please try again.';
            }
            echo json_encode($data);
			break;

		default:
			# code...
			break;
	}
}else{
	echo "no";
}