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
    class Kwadrat extends Figura{
        private $a;
        function __construct($a){
            $this->a = $a;
        }
        function pole(){
            return $this->a ** 2;
        }
    }
    $f1 = new Kwadrat(3);
    echo $f1->pole();
    ?>
</body>
</html>