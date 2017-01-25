<?php

$host = "localhost";
$user = "root";
$pass = "";
$db_name = "employees";

$conn = new mysqli($host,$user,$pass,$db_name);

if(!$conn){
	echo "not connected";
	die();
}