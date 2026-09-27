<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <label><input type="text" name="tab[]"></label><br>
        <input type="submit" value="POSORTÓJ">
    </form>
    <?php
    $tab = $_GET["tab"];
    $tab = sort(strtolower($wyrazy));
    foreach($tab as $w)
        echo $w."<br>"
    ?>
</body>
</html>