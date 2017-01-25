<?php
require "config/config.php";
$_POST = json_decode(file_get_contents('php://input'), true);
$id = $_GET['id'];
$select = $conn->query("select * from students where id = $id");

if($select->num_rows >0){
	$data = array();
	while($row = $select->fetch_assoc()){
		$data[] = $row;
	}
	echo json_encode($data);
}