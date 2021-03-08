<?php
//插入连接数据库的相关信息
// require_once 'connectvars.php';

//开启一个会话
session_start();

$res="";
//如果用户未登录，即未设置$_SESSION['user_id']时，执行以下代码
if(!isset($_SESSION['user_id'])){
    if(isset($_POST['userName'])){//用户提交登录表单时执行如下代码

        $dbc=mysqli_connect("127.0.0.1","root","123456","login");
        $user_username = mysqli_real_escape_string($dbc,trim($_POST['userName']));
        $user_password = mysqli_real_escape_string($dbc,trim($_POST['passWord']));

        //md5加密密码
        $encryptPassword=md5($user_password);

        if(!empty($user_username)&&!empty($user_password)){

            //MySql中的SHA()函数用于对字符串进行单向加密
            $query = "SELECT userName, password FROM login WHERE userName = '$user_username' AND "."password = '$encryptPassword'";
         
            //用用户名和密码进行查询
            $data = mysqli_query($dbc,$query);
            //若查到的记录正好为一条，则设置SESSION，同时进行页面重定向
            if(mysqli_num_rows($data)==1){
                $row = mysqli_fetch_array($data);
                $_SESSION['user_id']=$row['userName'];
                $_SESSION['username']=$row['password'];
                  $session_id = session_id();
                setcookie('PHPSESSID',$session_id,time()+7*24*3600,"/");
                $res=array('result' => true );
              echo json_encode($res);
            }else{//若查到的记录不对，则设置错误信息
                $res=array('result' => false );
              echo json_encode($res);
            }

        }else{
            $res=array('result' => false );
              echo json_encode($res);
        }
    }
}else{//如果用户已经登录，则直接跳转到已经登录页面
    $res=array('result' => true );
              echo json_encode($res);
}
?>