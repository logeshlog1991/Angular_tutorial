<?php
require "config/config.php";
$_POST = json_decode(file_get_contents('php://input'), true);
$id = $_GET['id'];
$delete = $conn->query("delete from students where id = $id");

if($delete){
	$data['msg'] = "student detail is deleted";						
}else{
	$data['msg'] = "student detail is not deleted";
}
echo json_encode($data);