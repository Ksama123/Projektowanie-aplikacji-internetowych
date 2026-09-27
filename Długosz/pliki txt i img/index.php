<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $dir = "../dane/";
    if (is_dir($dir)){
        if ($dh = opendir($dir)){
        while (($file = readdir($dh)) !== false){
            $info = pathinfo($file);
            if($info["basename"]!="." && $info["basename"]!="..")
                echo "<img src=\"".$dir.$file."\" alt=\"".$file."\">";
        }
        closedir($dh);
  }
}
    ?>
</body>
</html>