<?php 

    $userName = $_POST['userName'];
    $passWord = $_POST['passWord'];
    $confirmPassword=$_POST['confirmPassword'];

    //规定用户名首字母必须是英文且长度必须在5-12个字符之间
    $first_userName=substr($userName,0,1);
    $ascii_userName=ord($first_userName);
    if(!(($ascii_usename>=65&&$ascii_usename<=90)||($ascii_usename>=97&&$ascii_usename<=122)))
  {
   exit('用户名首字母不合法.<a href="Untitled-2.php">重新注册</a>');
  }

  //判断长度是否合法
  if(!(strlen($userName)>=5&&strlen($userName)<=12))
   {
        exit('用户名长度不合法.<a href="Untitled-2.php">重新注册</a>');
   }

   // 判断用户名是否重复
    $dbc=mysqli_connect("127.0.0.1","root","123456","login");
    $userNameSQL = "select * from users where userName = '$userName'";
  
    $resultSet = mysql_query($userNameSQL);
    if (mysql_num_rows($resultSet) > 0) {
        exit("用户名已被占用，请更换其他用户名");
    }


//判断密码是否合法
    if(!(strlen($passWord)>=5&&strlen($passWord)<=12))
 {
     exit('密码长度不合法.<a href="Untitled-2.php">重新注册</a>');
 }
 if(!($passWord==$confirmPassword))
 {
     exit('两次密码不一致.<a href="Untitled-2.php">重新注册</a>');
 }

$encryptPassword=md5($passWord)
$query="insert into login values('$userName',"2",'$encryptPassword')";

         
            //用用户名和密码进行查询
            $data = mysqli_query($dbc,$query);

            if (!$query) {
              # code...
              exit('sql query fail');
            }

 // $query = "SELECT userName, passWord FROM login WHERE userName = '$user_username' AND "."passWord = '$user_password'";
            $affected_rows=mysqli_affected_rows($dbc);

            if ($affected_rows!=1) {
              # code...
              exit('insert into database fail')
            }

            header('Location: http://127.0.0.1:8082/#/registerSuccess')

