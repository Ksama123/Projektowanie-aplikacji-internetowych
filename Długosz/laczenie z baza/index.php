<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "4tig2_psy";
    $conn = mysqli_connect($servername, $username, $password/*,$dbname*/);
    mysqli_select_db($conn, $dbname);
    // var_dump($conn);
    $sql = "SELECT osoby.nazwisko, osoby.imię FROM `osoby` ORDER BY osoby.nazwisko,osoby.imię;";
    $result = mysqli_query($conn,$sql);
    // var_dump($result);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            echo $row["imię"]." ".$row["nazwisko"]."<br>";
        }
    }else
        echo "Nic nie znaleziono";

    mysqli_close($conn);
    ?>
</body>
</html>