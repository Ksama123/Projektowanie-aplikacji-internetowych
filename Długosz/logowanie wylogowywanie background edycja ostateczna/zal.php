<?php
session_start();
if($_GET["kolor"]){
if(isset($_SESSION["user"])){
    $login = $_SESSION["user"];
    $kolor = $_GET["kolor"];
    setcookie($login,$kolor);
}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
	<?php
	$login = $_SESSION["user"];
	if(isset($_GET["kolor"])){
	$kolor = $_GET["kolor"];
	echo "body{background-color: $kolor;}";
	}elseif(isset($_COOKIE[$login])){
	$kolor = $_COOKIE[$login];
	echo "body{background-color: $kolor;}";
	}else{
	echo "body{background-color: #fff;}";
	}
	?>
	</style>
</head>
<body>
<?php
if(isset($_SESSION["user"])){
    $login = $_SESSION["user"];
    echo "Witaj $login";
}else
    header('Location: index.php');
?>
<form action="#">
    <label for="kolor">Wybierz kolor</label>
    <input type="color" name="kolor" id="kolor" value=<?php
        if(isset($kolor)){
            echo $kolor;
        }else
            echo "#fff";
    ?>
>
    <input type="submit" value="Wybierz swój kolor">
</form>
<br><a href="./wyl.php">Wyloguj się</a>
</body>
</html>
