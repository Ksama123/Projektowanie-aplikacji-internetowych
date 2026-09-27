<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // readfile(".tak")
    // $plik = fopen(".tak", 'r');
    // while (!feof($plik)){
    //     $linijka = fgets($plik);
    //     echo $linijka."<br>";
    // }
    // fclose($plik);
    // var_dump(pathinfo(".tak"));
    // echo "<br>";

    $dir = "./img/";
    // if (is_dir($dir)){
    //     if ($dh= opendir($dir)){
            // while (($file = readdir($dh)) !== false){
            //     $info = pathinfo($file);
            //     $ext = $info["extension"]
            //     // echo $info["extension"]." ";
                // if($ext=="jpg" || $ext=="jpeg" || $ext=="svg" || $ext=="png" || $ext=="webp" || $ext=="gif")
                //     echo "<img src=\"".$dir.$file."\" alt=\"".$file."\">";

            // }
            // closedir($dh);
    //     }
    // }
    $a = scandir($dir);

// Sort in descending order
    $b = scandir($dir,1);
    // print_r($a);
    
    foreach($a as $w){
        // echo $w."<br>"
        if($w == "." || $w == "..") { } else{
            $ext = pathinfo($w)["extension"];
            if($ext=="jpg" || $ext=="jpeg" || $ext=="svg" || $ext=="png" || $ext=="webp" || $ext=="gif")
                    echo "<img src=\"".$dir.$w."\" alt=\"".$w."\">";
        }
    }
    ?>
</body>
</html>