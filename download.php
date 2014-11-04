<?php 
//recupero il file
$file = $_GET['file'];


header('Content-type: image/png');
header("Content-disposition: attachment; filename=canvasoutput.png");

readfile($file);

?>