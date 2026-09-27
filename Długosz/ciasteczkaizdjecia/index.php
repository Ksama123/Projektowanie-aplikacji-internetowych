<?php
if(isset($_GET["tapeta"])){
    $tapeta = $_GET["tapeta"];
    setcookie("tapeta",$tapeta,time()+30*24*2600);
} elseif (isset($_COOKIE["tapeta"])) {
    $tapeta = $_COOKIE["tapeta"];
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
      if(isset($tapeta)){
        echo "body {background-image: url(\"$tapeta\")}";
      }
      ?>
    </style>
</head>
<body>
    <a href="./form.php">Wybierz swoją tapetę</a>
    <?php
    var_dump($tapeta)
    ?>
</body>
</html>