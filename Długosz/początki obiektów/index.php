<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class Samochod {
        public $marka;
        public $licznik;
        function jedz($ile){
            $this->licznik += $ile;
        }
        function przedstawSie(){
            echo "Cześć. Jestem ".$this->marka." Mam na liczniku ".$this->licznik. " km.<br>";
        }
    }
    $s1 = new Samochod;
    $s1->marka = "Toyota";
    $s1->licznik = 0;

    $s2 = new Samochod;
    $s2->marka = "Lamborghini";
    $s2->licznik = 0;
    $s1->przedstawSie();
    $s1->jedz(10);
    $s2->jedz(20);
    $s1->przedstawSie();
    $s2->przedstawSie();
    ?>
</body>
</html>