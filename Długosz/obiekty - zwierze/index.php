<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class Zwierze {
        protected $nazwa;
        function __construct($nazwa){
            echo "Tworzę zwierzę. <br>";
            $this->nazwa = $nazwa;
        }
        function __toString(){
            return "Jestem zwierzęciem i nazywam się $this->nazwa.<br>";
        }
    }
    class Pies extends Zwierze{
        public $rasa;
        function __construct($nazwa,$rasa){
            parent::__construct($nazwa);
            $this->rasa = $rasa;
        }
        function __toString(){
            return "Jestem psem rasy $this->rasa i nazywam się $this->nazwa.<br>";
        }
    }
    
    $z1 = new Pies("marek", "golden retriever szeroki");
    $z2 = new Zwierze("drugi marek");
    echo $z1;
    echo $z2;

    ?>
</body>
</html>