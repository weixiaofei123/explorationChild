<?php 
     // $table=$_GET['no'];
     // var_dump($table);
     $connect=mysqli_connect('127.0.0.1','root','123456','all');
     if (!$connect) {
      # code...
      exit('连接数据库失败');
     }
     $data=$_GET['data'];
     // $query=mysqli_query($connect,"SELECT * FROM $table WHERE id=1");
      // $arrayFirst[]=mysqli_fetch_assoc($query);
      // // var_dump($arrayFirst);

      // $query=mysqli_query($connect,"SELECT * FROM $table WHERE id>1 and id<6");
      // while ($row=mysqli_fetch_assoc($query)) {
      //  # code...
      //  $arraySec[]=$row;
      // }
      // var_dump($arraySec);
     // SELECT * FROM allData WHERE title REGEXP '$data';
      $query=mysqli_query($connect,"SELECT * FROM allData WHERE title REGEXP '$data'");
      // var_dump($query);
      while ($row=mysqli_fetch_assoc($query)) {
        # code...
        $arrayTotal[]=$row;
      }

      // $query=mysqli_query($connect,"SELECT * FROM $table WHERE id>13");
      // while ($row=mysqli_fetch_assoc($query)) {
      //  # code...
      //  $arrayFourth[]=$row;
      // }

      // $arrayTotal[]=$arrayFirst;
      // // var_dump($arraryTotal);
      // array_push($arrayTotal,$arraySec,$arrayThird,$arrayFourth);
    
      // var_dump($arrayTotal);
      // var_dump($arrayTotal);
      $arrayRes=json_encode($arrayTotal);
      echo $arrayRes;


 ?>
