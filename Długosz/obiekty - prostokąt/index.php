<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class Prostokat{
        public $a;
        public $b;
        function __construct($a,$b){
            $this->a=$a;
            $this->b=$b;
        }
        function __toString(){
            return "Prostokąt o wymiarach $this->a x $this->b <br>";
        }
        function pole(){
            return $this->a * $this->b;
        }
        function obw(){
            return $this->a*2 + $this->b*2;
        }
        function przekatna(){
            return sqrt($this->a**2 + $this->b**2);
        }
    }
    $p1 = new Prostokat(3,4);
    echo $p1;
    echo "Pole wynosi ".$p1->pole()."<br>";
    echo "Obwód wynosi ".$p1->obw()."<br>";
    echo "Przekątna wynosi ".$p1->przekatna()."<br>";
    ?>
</body>
</html>