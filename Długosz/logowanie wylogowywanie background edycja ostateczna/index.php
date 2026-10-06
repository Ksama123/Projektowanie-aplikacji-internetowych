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
	<form action="#" method="post">
	<label for="login">Podaj swój login </label>
	<input type="text" name="login" id="login"><br>
	<label for="haslo">Podaj hasło </label>
	<input type="password" name="haslo" id="haslo"><br>
	<input type="submit" value="Zaloguj się">
	</form>
<?php
if((isset($_POST["login"]))&& (isset($_POST["haslo"]))){
    $login = $_POST["login"];
    $haslo = $_POST["haslo"];
    if((($login == "admin") && ($haslo == "1234"))|| (($login == "szawi") && ($haslo == "zaq1@WSX"))){
        $_SESSION["user"] = $login;
        header('Location: zal.php');
    }
}
?>
</body>
</html>
