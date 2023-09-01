<?php

    include("mysql.php");
    $db = dbconnect();

    $id =$_GET['id'];
    // echo $id;
    $db->query("DELETE FROM friends WHERE id=$id");

    header("location: list.php");