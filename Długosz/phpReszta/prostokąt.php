<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prostokąt</title>
</head>
<body>
    <?php 
    echo"<div>";
    if (isset($_POST["a"]) && isset($_POST["b"])){
        $a =$_POST["a"];
        $b = $_POST["b"];
        if (is_numeric($a) && is_numeric($b)){
            if($a>0 && $b>0){
                $pole = $a*$b;
                echo "Pole wynosi: ". round($pole,2) . "<br>";
            }
            else{
                echo "musi byc dodatmnia";
            }
        } else
            echo "Złe dane, podaj liczbę";
    } else
        echo "Podaj dane (np. ?a=50&b=160)";
    echo"</div>";
    ?>
</body>
</html>