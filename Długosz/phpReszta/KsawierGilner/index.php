<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Napisy, tablice i funkcje</title>
</head>
<body>
    <form action="">
        <label name="a[]"><input type="text" name="a"></label>
        <input type="submit">
    </form>
    <?php
    function czyPalindrom($tekst){
        $tekst = mb_strtolower($tekst);
        $t2="";
        for ($i=0;$i<mb_strlen($tekst);$i++)
        $t2 =mb_substr($tekst,$i,1) . $t2;
        return $tekst==$t2;
    }    
    if(isset($_GET["a"]))
        $a=$_GET["a"];
    $b = explode(" ",$a);
    foreach($b as $k){
        $tab[]= strrev(ucfirst(strrev(mb_strtolower($k))));
    }
    echo implode(" ", $tab);
    echo"<br>";
    for ($i = count($b)-1; $i>=0; $i--){
        echo mb_strtoupper($b[$i]). " ";
    }
    echo"<br>";
    foreach($b as $k){
        if(!czyPalindrom($k))
            $tabtemp2[] = $k;
    }
    echo implode(", ", $tabtemp2);
    echo "<br>";
    $b_posortowane = $b;
    natcasesort($b_posortowane);
    echo implode(" < ",$b_posortowane);
    // echo $c;
    echo "<br>";
    
    ?>
</body>
</html>