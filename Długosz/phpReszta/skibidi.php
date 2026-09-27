<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <!-- <label>a <input type="number" min="1" name="a" required value="1"></label><br>
        <label>b <input type="number" min="1" name="b" required value="1"></label><br>
        <label>c <input type="number" min="1" name="c" required value="1"></label><br> -->
        <?php
        for ($i=0;$i<10;$i++)
            echo "<input type=\"text\" name=\"a[]\"><br>";
        ?>
        <input type="submit" value="Oblicz" name="submit"><br>
    </form>

    <?php
    if (isset($_GET['a'])){
        foreach($_GET['a'] as $w)
            echo"$w<br>";
    }
    ?>
    <!-- <?php
    // if(isset($_GET['a'],$_GET['b'])){
    //     $a = $_GET['a'];
    //     $b = $_GET['b'];
    // }
    ?> -->

    <?php
    // $tab = [42,436,"fs",1,-4];
    // $tab[]=99;
    // // for($i=count($tab)-1;$i>=0 ;$i--)
    //     // echo $tab[$i]."<br>";
    // sort($tab)
    // $rev = array_reverse($tab);
    // foreach($rev as $e){
    //     echo $e."<br>";
    // }
    // $tab2 = ['Ala' =>165,"Franek"=>180,"Ola"=>150];
    // // var_dump($tab2);
    // // ksort($tab2);
    // asort($tab2);
    // foreach($tab2 as $k=>$w){
    //     echo "<br> $k -> $w";
    // }


    ?>
</body>
</html>