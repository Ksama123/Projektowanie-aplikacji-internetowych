<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <label>Nick <input type="text" name="nick"></label><br>
        <label>Tekst <input type="text" name="txt"></label><br>
        <input type="submit" value="Wyślij"><br>
    </form>
    <?php


    if (isset($_POST['nick'], $_POST['txt'])){
        $nick = $_POST['nick'];
        $txt = $_POST['txt'];
        $txt_a = fopen(".messages", 'a');
        fwrite($txt_a, date("Y-m-d H:i:s"). " ". $nick .": ". $txt . "<br>");
        fclose($txt_a);
        }
        readfile(".messages");
    ?>
    
</body>
</html>