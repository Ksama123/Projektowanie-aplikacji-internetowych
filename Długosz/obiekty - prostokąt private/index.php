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
        private $a;
        private $b;
        public static $x=0;
        function __construct($a=1,$b=1){
            if($a>0){
                $this->a=$a;
            }
            if($b>0){
                $this->b=$b;
            }
            self::$x++;
        }
        function __toString(){
            return "Prostokąt o wymiarach $this->a x $this->b a x to ".self::$x. "<br>";
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
        function skaluj($xa, $xb){
            $this->a *= $xa;
            $this->b *= $xb;
        }
        function get_a(){
            return "$this->a <br>";
        }
        function set_a($a){
            if($a>0){
                $this->a = $a;
            }
        }
        function get_b(){
            return "$this->b <br>";
        }
        function set_b($b){
            if($b>0){
                $this->b = $b;
            }
        }
        function __destruct(){
            self::$x--;
        }
    }
    // hermetyzacja, enkaptulacja
    $p1 = new Prostokat(3,4);
    echo $p1;
    unset($p1);
    $p2 = new Prostokat(1,2);
    echo $p2;
    echo Prostokat::$x;
    // $p1->skaluj(2,3);
    // $p1->set_a(7);
    // echo $p1;
    // echo $p1->get_a();
    // $p1->set_b(8);
    // echo $p1->get_b();
    // echo "Pole wynosi ".$p1->pole()."<br>";
    // echo "Obwód wynosi ".$p1->obw()."<br>";
    // echo "Przekątna wynosi ".$p1->przekatna()."<br>";
    ?>
</body>
</html>