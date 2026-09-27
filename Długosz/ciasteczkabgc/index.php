<?php
if (isset($_COOKIE["licznik"])){
   $licznik = $_COOKIE["licznik"];
   $licznik++;

   $data = date("Y-m-d H:i:s");
   setcookie("data",$data,time()+30*24*60*60);
   if (isset($_GET["kolor"])){
   $cokolor = $_GET["kolor"];
   setcookie("kolor",$cokolor,time()+30*24*60*60);
   }
} else
   $licznik = 1;
setcookie("licznik",$licznik,time()+30*24*60*60);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
     <?php
      if (isset($_GET["kolor"])){
        $kolor = $_GET["kolor"];
        echo "body {background-color: $kolor}\n";
      } else if (isset($_COOKIE["kolor"])){
           $kolor = $_COOKIE["kolor"];
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
    <?php
// echo date("Y-m-d H:i:s")."<br>";
if ($licznik == 1){
    echo "Witaj! Jesteś tu po raz pierwszy.";
} else  {
     echo "Witaj! Jesteś tu po raz $licznik."."<br>";
     $ostatnia = $_COOKIE["data"];
     echo "Ostatni raz byłeś tutaj $ostatnia.";
}
    ?>
</body>
</html>