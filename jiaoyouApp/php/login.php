<?php
	header("Content-type:text/html;charset='utf-8'");
	
	$username=$_POST['us'];
//	$password=$_POST['password'];
	$sq = new mysqli();
	$sq -> connect('localhost','daiand11','123456','users');
	$sq -> set_charset('utf8');
	$res = $sq -> query("SELECT * FROM `users` WHERE `username` = '".$username."'");
	$row = $res -> fetch_row();
	echo $username;
?>