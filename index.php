<?php
$insert= false;
if(isset($_POST['name'])){
    $server ="localhost";
    $username = "root";
    $password="";

    $con = mysqli_connect($server , $username, $password);

    if(!$con){
        die("connection to this databse failed due to" . mysqli_connect_error());
    
    }
    $name = $_POST['name'];
    $date = $_POST['date'];
    $age = $_POST['age'];
    $sex = $_POST['sex'];
    $phonenumber = $_POST['phonenumber'];
    $email = $_POST['email'];

    $sql ="INSERT INTO `consultdoctor`.`anemia` (`name`, `date`, `age`, `sex`, `phonenumber`, `email`) VALUES ('$name', '$date', '$age', '$sex', '$phonenumber', '$email');";

    if($con->query($sql) == true ){
        $insert = true;

    }
    else{
        echo"error: $sql <br> $con->error";
    }
    $con->close();

}
?>