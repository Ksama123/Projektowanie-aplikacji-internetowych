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
        function __construct($marka, $licznik=0){
            $this->marka = $marka;
            $this->licznik = $licznik;
            echo "Działa konstruktor dla samochodu marki $marka. <br>";
        }
        function __destruct(){
            echo "Działa destruktor dla samochodu markio $this->marka <br>";
        }
        function jedz($ile){
            $this->licznik += $ile;
        }
        function przedstawSie(){
            echo "Cześć. Jestem ".$this->marka." Mam na liczniku ".$this->licznik. " km.<br>";
        }
        function cofaj($ile){
            $this->licznik -= $ile;
        }
        }
    $s1 = new Samochod("Toyota");
    $s1->przedstawSie();
    $s1->jedz(10);
    $s1->przedstawSie();
    unset($s1);
    $s2 = new Samochod("Lamborghini");
    $s2->jedz(20);
    $s2->cofaj(10);
    $s2->przedstawSie();
    // $s1 = new Samochod;
    // $s1->marka = "Toyota";
    // $s1->licznik = 0;
    // $s2 = new Samochod;
    // $s2->marka = "Lamborghini";
    // $s2->licznik = 0;
    ?>
</body>
</html>