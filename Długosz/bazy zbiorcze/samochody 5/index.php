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
    ?>
    <form action="#">
        <select name="marka" id="marka">
            <option>Wszystkie</option>
            <?php
            $sql = "SELECT DISTINCT marka from samochody ORDER BY marka";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
                if (isset($_GET['marka' ]) && $_GET[ 'marka' ] == $row[ 'marka' ])
                    echo "<option selected>{$row['marka']}</option>\n";
                else
                    echo "<option>{$row['marka']}</option>\n";
                // echo "<option>{$row['marka']}</option>\n";
        }
            ?>
        </select>
        <input type="submit" value="Wybierz samochód">
    </form>
    <?php
    if((isset($_GET['marka']))&& $_GET['marka'] != "Wszystkie"){
        $marka = $_GET['marka'];
        // $sql = "SELECT * FROM samochody WHERE samochody.rok_produkcji='$rok' ORDER BY samochody.rok_produkcji;";
        $sql = "SELECT * FROM samochody WHERE samochody.marka='$marka' ORDER BY rok_produkcji";
    }else{
        // $sql = "SELECT * FROM samochody; ORDER BY samochody.rok_produkcji";
        $sql = "SELECT * FROM samochody ORDER BY rok_produkcji";
    }
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==0)
        echo "brak danych.";
    else{
        echo "<table>\n";
        echo "<tr><th>Nr rejestracyjny</th><th>Marka</th><th>Rok produkcji</th></tr>\n";
        while($row = mysqli_fetch_assoc($result)){
            // var_dump($row);
            echo "<tr><td>{$row['nr_rejestracyjny']}</td><td>{$row['marka']}</td><td>{$row['rok_produkcji']}</td></tr>\n";
        }
        echo "</table>\n";
    }

    mysqli_close($conn);
    ?>
</body>
</html>