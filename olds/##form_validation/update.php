<?php

    include("mysql.php");
    $db = dbconnect();
    $id =$_POST['id'];
    
  if(isset($_POST['name']) && isset($_POST['ph']) && isset($_POST['email'])){
        
        $name =$_POST['name'];
        $ph =$_POST['ph'];
        $email =$_POST['email'];
        $dm =$_POST['text'];

        $db->query("UPDATE friends SET name='$name', ph='$ph', email='$email', dm='$dm' WHERE id=$id");

    header("location: list.php");
  }else{
    header("location: edit.php?id=$id&err=fix");
  }