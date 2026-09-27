<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function pal($tekst){
        $tekst = mb_strtolower($tekst);
        $t2="";
        for ($i=0;$i<mb_strlen($tekst);$i++)
            $t2 = mb_substr($tekst,$i,1).$t2;
        return $tekst==$t2;
    }
    $n = "KamilŚlimak";
    if(pal($n))
        echo "To jest palindrom. ";
    else
        echo "To nie jest palindrom"


    $a = "Ala ma kota";
    $a[0]="O";
    // echo $a;
    $b = explode(" ",$a);
    // var_dump($b);
    // foreach($b as $wyraz)
    //     echo "$wyraz.<br>"
    // $c = implode(",",$b);
    // echo $c;
    // foreach(array_reverse($b) as $wyraz)
    //     echo "$wyraz ";
    // foreach($b as $wyraz)
        // echo " ".strrev( $wyraz);
    // for(i=0;i<count($b);i++)
        // $b[$i] = strrev($b[$i]);
    // echo implode(" ",$b);
    // foreach($b as &$wyraz){
    //     $wyraz = strrev($wyraz);
    //     echo $wyraz." ";
    // }

    // function zamiana(&$x,&$y){
        // $temp = $x;
        // $x = $y;
        // $y = $temp;
    // }

    // $x=5;
    // $y=7;
    // echo"x=$x, y=$y<br>";
    // zamiana($x,$y);
    // echo"x=$x, y=$y<br>";
    ?>
</body>
</html>