<?php
require "config/config.php";
session_start();
if(isset($_SESSION['login'])){
	
	$select = $conn->query("select * from students");

	if($select->num_rows >0){
		$data = array();
		while($row = $select->fetch_assoc()){
			$data[] = $row;
		}
		echo json_encode($data);
	}	
}else{
	$data['status'] = 'ERR';
}