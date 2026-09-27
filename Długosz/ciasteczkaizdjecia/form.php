<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="./index.php">Powrót</a>
    <form action="index.php" method="get">
        <label>Tapeta 1<input value="1.jpg" type="radio" name="tapeta"></label>
        <img src="./img/1.jpg" alt="tapeta1" width="200px"><br>
        <label>Tapeta 2<input value="2.jpg" type="radio" name="tapeta"></label>
        <img src="./img/2.jpg" alt="tapeta2" width="200px"><br>
        <label>Tapeta 3<input value="3.jpg" type="radio" name="tapeta"></label>
        <img src="./img/3.jpg" alt="tapeta3" width="200px"><br>
        <input type="submit" value="Wybierz tapetę ">
    </form>
</body>
</html>