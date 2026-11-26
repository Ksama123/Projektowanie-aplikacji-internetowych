<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        th{
            font-weight: 100;
            color: gray;
            background-color: #444444;
            color: #ebebeb;
        }
        table{
            width: 3rem;
        }
        table,th,td{
            border: 0.2rem solid #adadad;
            border-collapse: collapse;
            padding: 0.5rem;
            text-align: center;
        }
        tr:nth-child(2n){
            background-color: lightgrey;
        }
    </style>
</head>
<body>
    <form action="#" method="get">
        <label for="usluga">Nazwa uslugi</label>
        <input type="text" name="usluga" id="usluga" placeholder="Nazwa usługi">
        <label for="cena">Podaj cene</label>
        <input type="number" name="cena" id="cena" min="1">
        <label for="rodzaj">Podaj rodzaj usługi</label>
        <select name="rodzaj" id="rodzaj">
            <?php
            $serwer = "127.0.0.1";   
            $user = "root";
            $password = "";
            $dbname = "4ti_g2_samochody";
            $conn = mysqli_connect($serwer,$user,$password,$dbname);
            $sql = "SELECT DISTINCT uslugi.rodzaj_uslugi FROM uslugi;";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
                echo "<option>{$row['rodzaj_uslugi']}</option>";
            }
            ?>
        </select>
        <input type="submit" value="Zapisz">
    </form>
    <hr>
    <?php
    if((isset($_GET['usluga'])) && (isset($_GET['cena'])) && (isset($_GET['rodzaj']))){
        $usluga = $_GET['usluga'];
        $cena = $_GET['cena'];
        $rodzaj = $_GET['rodzaj'];
        $sql = "INSERT INTO uslugi VALUES (NULL, '$usluga', '$rodzaj', $cena)";
        mysqli_query($conn, $sql);
    }
    $sql = "SELECT * FROM uslugi;";
    $result = mysqli_query($conn,$sql);
    echo "<ol>";
    while($row = mysqli_fetch_assoc($result)){
        echo "<li>{$row['usluga']} ({$row['id_uslugi']})</li>";
    }
    echo "</ol>";
    mysqli_close($conn);
    ?>
</body>
</html>