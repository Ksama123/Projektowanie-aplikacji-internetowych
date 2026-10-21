<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class Wektor{
        private $x;
        private $y;
        function __construct($x,$y){
            $this->x = $x;
            $this->y = $y;
        }
        function __toString(){
            return "[$this->x,$this->y]";
        }
        function add($w){
            return new Wektor($this->x + $w->x, $this->y + $w->y);
        }
    }
    $v = new Wektor(3,2);
    $w = new Wektor(4,-4);
    $z = $v->add($w);
    echo $z;
    ?>
</body>
</html>