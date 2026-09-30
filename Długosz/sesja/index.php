<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <label>Login <input type="login" name="login" ></label><br>
        <label>Hasło <input type="password" name="haslo"></label><br>
        <input type="submit" value="Zaloguj się">
    </form>
    <?php
    if(isset($_POST["login"])){
        $login = $_POST["login"];
        $haslo = $_POST["haslo"];
        if($login=="admin" && $haslo == "zaq1@WSX"){
            $_SESSION["user"] = $login;
            header('Location: zalogowano.php');
        }
    }

    ?>
</body>
</html>