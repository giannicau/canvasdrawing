<?php
$data = $_POST['img'];
$data = str_replace('data:image/png;base64','',$data);
$data = str_replace(' ','+',$data);

$img = base64_decode($data);
$path = 'images/' . uniqid() . '.png';
<<<<<<< HEAD
header("HTTP/1.1 200 Ok Internal ");
/*
if(file_put_contents($path, $img)){
=======

header("HTTP/1.1 200 Ok Internal ");
/*if(file_put_contents($path, $img)){
>>>>>>> 856dc04b2bbfcc585d9859c7e859953819a4bdc1
	print $path;
} else {
	header("HTTP/1.1 500 Internal Server Error");
}

*/

<<<<<<< HEAD
?>
=======
?>
>>>>>>> 856dc04b2bbfcc585d9859c7e859953819a4bdc1
