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
    <?php
    $serwer = "127.0.0.1";   
    $user = "root";
    $password = "";
    $dbname = "4ti_g2_samochody";
    $conn = mysqli_connect($serwer,$user,$password,$dbname);
    $sql = "SELECT uslugi.usluga,COUNT(*) AS ile, SUM(uslugi.cena)AS cena FROM uslugi INNER JOIN wykonane ON wykonane.id_uslugi = uslugi.id_uslugi GROUP BY uslugi.id_uslugi;";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==0)
        echo "brak danych.";
    else{
        echo "<table>\n";
        echo "<tr><th>Nazwa usługi</th><th>Ilość wykonywania</th><th>Zarobek firmy</th></tr>\n";
        while($row = mysqli_fetch_assoc($result)){
            // var_dump($row);
            echo "<tr><td>{$row['usluga']}</td><td>{$row['ile']}</td><td>{$row['cena']}</td></tr>\n";
        }
        echo "</table>\n";
    }
    mysqli_close($conn);
    ?>
</body>
</html>