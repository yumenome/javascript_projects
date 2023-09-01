<?php
    
    include("mysql.php");
    $db = dbconnect();
    $result = $db->query("SELECT * FROM friends");
    $rows = $result->fetchAll();
    // print_r($rows);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>firends_list</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style_2.css">
    <style>
        tbody a{
            text-decoration: none;
            font-size: 17px;
            color: #fff;
        }
        a{
            text-decoration: none;
            font-size: 17px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <h3>friends_list</h3>
        <table class="table table-striped">
            <thead>
                <th>name</th>
                <th>ph</th>
                <th>email</th>
                <th>edit</th>
                <th>remove</th>
                <th>dm-s</th>
            </thead>
            
            <?php foreach($rows as $row) : ?>
                <tbody>
                    <td><?= $row->name ?></td>
                    <td><?= $row->ph ?></td>
                    <td><?= $row->email ?></td>
                    <td><button class="btn btn-primary">
        <a href="edit.php?id=<?= $row->id ?>">fix</a>
                    </button></td>
                    <td><button class="btn btn-danger">
        <a href="del.php?id=<?= $row->id ?>">del</a>
                    </button></td>
                    <td><?= $row->dm ?></td>
                </tbody>
            <?php endforeach ?>
        </table>
        <button class="btn btn-light float-end">
        <a href="index.php">add more friends</a>
        </button>
        
    </div>
</body>
</html>