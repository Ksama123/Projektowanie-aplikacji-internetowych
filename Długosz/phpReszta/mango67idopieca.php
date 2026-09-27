<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php
    echo"<div>";
    if (isset($_POST["masa"]) && isset($_POST["wzrost"])){
        $masa =$_POST["masa"];
        $wzrost = $_POST["wzrost"];
        if (is_numeric($masa) && is_numeric($wzrost)){
            if($masa>0 && $wzrost>0){
                $bmi = $masa/($wzrost**2);
                echo "Bmi wynosi: ". round($bmi,2) . "<br>";
                if($bmi<18.5){
                    echo "Masz niedowage <br>";
                    echo "<img width=200px src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdemedbook.com%2Fimages%2Farticles%2F320%2F320286%2Fdwarfism-br-image-credit-richard-mccoy-2014-br.jpg&f=1&nofb=1&ipt=78a830e2bc45a8826aac1dd0447bd7f3677331196611d0a5eb68edcb193fa8b8>";
                }
                else if($bmi<24.9){
                    echo "Masz idealną wage <br>";
                    echo "<img width=200px src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.free3d.com%2Fimg%2F2017%2F12%2F2408148265062106831%2Fizz8xc3s.jpg&f=1&nofb=1&ipt=27b3249d8c4be6e48ae88968176214347178dbd6be413499a26ed48ac390ab60>";
                }
                else{
                    echo"Masz nadwage <br>";
                    echo "<img width=200px src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F1785619619%2Fdisplay_1500%2Fstock-photo-young-fat-man-eating-chips-and-drink-a-beer-while-watching-tv-and-lying-on-the-sofa-shot-in-the-1785619619.jpg&f=1&nofb=1&ipt=31db01b38ec90511096efc658ed3c5f09b98ca3f4a68cb9403b2e2e24f1d012e>";
                }
                } else {
                echo "Złe dane, liczby muszą być dodatnie";
            }
        } else
            echo "Złe dane, podaj liczbę";
    } else
        echo "Podaj dane (np. ?masa=50&wzrost=160)";
    echo"</div>";

    ?>
</body>
</html>
