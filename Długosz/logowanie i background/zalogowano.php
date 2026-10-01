<?php session_start();
   if ((isset($_GET["kolor"])) && (isset($_SESSION["user"]))){
    $kolor = $_GET["kolor"];
    $login = $_SESSION["user"];
    setcookie($login,$kolor,time()+30*24*60*60);
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
      if (isset($_GET["kolor"])){
        $kolor = $_GET["kolor"];
        echo "body {background-color: $kolor}\n";
      } else if (isset($_COOKIE[$login])){
           $kolor = $_COOKIE[$login];
           echo "body {background-color: $kolor}\n";
      } else {
           $kolor = "#fff";
           echo "body {background-color: $kolor}\n";
      }
     ?>
     form {
        position:fixed;
        right:0;
     }
    </style>
</head>
<body>
    <form>
        <input type="color" value="<?=$kolor?>" name="kolor"><input type="submit">
    </form>
<h1>

    <?php
    if(isset($_SESSION["user"])){
        $login = $_SESSION["user"];
        echo "Witaj $login";
        }else{
            header('Location: index.php');
        }
    ?>
</h1>
</body>
</html>