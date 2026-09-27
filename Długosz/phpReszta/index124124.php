<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: <?php echo $_GET["kolor"] ?>;
        }
    </style>
</head>
<body>
    <!-- <form method=post action="mango67idopieca.php">
        <label>masa <input type="text" name="masa" required></label><br>
        <label>wzrost <input type="text" name="wzrost" required></label><br>
        <input type="submit" value="Oblicz" name="submit"><br>
    </form>
    <form method=post action="prostokąt.php">
        <label>a <input type="text" name="a" required></label><br>
        <label>b <input type="text" name="b" required></label><br>
        <input type="submit" value="Oblicz" name="submit"> -->
    <!-- </form> -->
     
    <form action="">
        <label>Kolor <input type="color" name="kolor" id="kolor" value="<?php echo $_GET["kolor"] ?>"></label>
        <label></label><input type="submit"></label>
    </form>

</body>
</html>