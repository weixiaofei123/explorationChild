<?php 
     
     $connect=mysqli_connect('127.0.0.1','root','123456','primary');

     if (!$connect) {
     	# code...
     	exit('连接数据库失败');
     }

     $query=mysqli_query($connect,'SELECT * FROM k0 WHERE id=1');
    var_dump($query);





 ?>
