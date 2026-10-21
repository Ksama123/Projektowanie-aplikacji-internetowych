<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    abstract class Figura {
        protected $opis;
        abstract function pole();
    }
    interface Ruchome{
        function ruch();

    }
    class Kwadrat extends Figura implements Ruchome{
        private $a;
        function __construct($a){
            $this->a = $a;
        }
        function pole(){
            return $this->a ** 2;
        }
        function ruch(){
            echo "Rucham się<br>";
        }
    }
    $f1 = new Kwadrat(3);
    $f1->ruch();
    echo $f1->pole();
    ?>
</body>
</html>