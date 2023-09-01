<?php 

  if(isset($_POST['name']) && isset($_POST['ph']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $ph = $_POST['ph'];
    $email = $_POST['email'];
    $dm = $_POST['text'];
    echo $name;
    echo $ph;
    echo $email;
    echo $dm;

    $db = new PDO("mysql:dbhost=localhost;dbname=wemust",
                  "root", "");
    $db->query("INSERT INTO `friends`(`name`, `ph`, `email`, `dm`) VALUES ('$name','$ph','$email','$dm')");
    // $statement->execute(["name"=>$name, "ph"=>$ph, "email"=>$email, "dm"=>$dm]);

    // print_r($statement);
    header("location: list.php");
 }else{
    header("location: index.php?error=addd");
 }