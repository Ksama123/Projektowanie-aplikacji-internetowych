<?php
// setcookie("test",111,time()+30*24*3600);
// setcookie("test",111);
setcookie("test",111,time()+10);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    var_dump($_COOKIE);
    if (isset($_COOKIE["test"]))
        echo "Witom";
    else
        echo "Nie witom";
    ?>
</body>
</html>