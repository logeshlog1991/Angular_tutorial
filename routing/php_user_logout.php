<?php
session_start();
if(session_destroy()){
	$data['status'] = 'OK';
}else{
	$data['status'] = 'ERR';
}
echo json_encode($data);