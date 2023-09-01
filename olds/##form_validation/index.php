<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form_validation</title>
    <script src="https://kit.fontawesome.com/558ca58e7e.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form action="insert.php" method="post">
            <img src="pho.png">

            <div class="data">
                <div class="input_group">
                    <label>FULL NAME</label>
                    <input type="text" placeholder="enter your name" id="name" onkeyup="name_valation()">
                    <span id="name_err"></span>
                </div>
    
                <div class="input_group">
                    <label>PH NUMBER</label>
                    <input type="tel" placeholder="09" id="ph" onkeyup="ph_valation()">
                    <span id="ph_number_err"></span>

                </div>
    
                <div class="input_group">
                    <label>EMAIL</label>
                    <input type="text" placeholder="@gmail.com" id="email" onkeyup="email_valation()">
                    <span id="email_err"></span>
                </div>
    
                <div class="input_group">
                    <label>HEy_?</label>
                    <textarea rows="2" placeholder="dm me" name="text"></textarea>
                    <span id="message_err"></span>
                </div>
            </div>
            <input type="submit" class="btn" name="submit" value="ADD NOW">
        </form>
    </div>
            <?php if(isset($_GET['error'])): ?>
                <div class="alert_box">
                    <script>
                        const alertTAG = document.querySelector(".alert_box");
                        let alert = document.createElement("div");
                        alert.classList.add("pop_up");
                        alert.innerHTML= "smth was wrong i can feel it";
                        alertTAG.appendChild(alert);
                        setTimeout(() =>{alert.classList.add("off");},3000);
                    </script>
                </div>
            <?php endif ?>    
<script src="script.js"></script>
</body>
</html>
