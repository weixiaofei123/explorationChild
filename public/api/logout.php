<?php
session_start();
$_SESSION=array(); 

setcookie("PHPSESSID","",time()-1,"/");

session_destroy();
$true = array('true' => true);
echo json_encode($true);

?>

