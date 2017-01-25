<?php
require "config/config.php";

$select = $conn->query("select * from courses");

if($select->num_rows >0){
	$data = array();
	while($row = $select->fetch_assoc()){
		$data[] = $row;
	}
	echo json_encode($data);
}