<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $serwer = "127.0.0.1";   
    $user = "root";
    $password = "";
    $dbname = "4ti_g2_filmy";
    $conn = mysqli_connect($serwer,$user,$password,$dbname);
    ?>
    <form action="#">
        <label for="gatunek">Wybierz Gatunek</label>
        <select name="gatunek" id="gatunek">
            <option>Wszystkie</option>
            <?php
            $sql = "SELECT DISTINCT filmy.Gatunek FROM filmy ORDER BY filmy.Gatunek;";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
                if(isset($_GET['gatunek']) && $row['Gatunek'] == $_GET['gatunek'])
                    echo "<option selected value=\"{$row['Gatunek']}\">";
                else
                    echo "<option value=\"{$row['Gatunek']}\">";
                echo $row['Gatunek'];
                echo "</option>\n";
            }
            ?>
        </select>
        <input type="submit" value="Wybierz gatunek">
    </form>
    <hr>
    <?php
    if(isset($_GET['gatunek']) && $_GET['gatunek'] !="Wszystkie"){
        $gatunek = $_GET['gatunek'];
        $sql = "SELECT filmy.Tytul, filmy.Gatunek, COUNT(wypozyczenia.ID_wyp), SUM(filmy.Cena_w_zl) FROM filmy INNER JOIN wypozyczenia ON filmy.ID_filmu = wypozyczenia.ID_filmu WHERE filmy.Gatunek = '$gatunek' GROUP BY filmy.ID_filmu ORDER BY SUM(filmy.Cena_w_zl) DESC;";
        
    }else{
        $sql = "SELECT filmy.Tytul, filmy.Gatunek, COUNT(wypozyczenia.ID_wyp), SUM(filmy.Cena_w_zl) FROM filmy INNER JOIN wypozyczenia ON filmy.ID_filmu = wypozyczenia.ID_filmu GROUP BY filmy.ID_filmu ORDER BY SUM(filmy.Cena_w_zl) DESC;";
    }
    if(isset($gatunek)){
        echo "<h1>Gatunek filmu: $gatunek</h1>\n";
    }
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==0)
        echo "Brak danych";
    else{
        echo "<table>\n";
        if(isset($gatunek)){
            echo "<tr><th>Tytuł</th><th>Wypożyczenia</th><th>Dochód</th></tr>\n";
        }
        else
            echo "<tr><th>Tytuł</th><th>Gatunek</th><th>Wypożyczenia</th><th>Dochód</th></tr>";
        while($row = mysqli_fetch_assoc($result)){
            if(isset($gatunek))
                echo "<tr><td>{$row['Tytul']}</td><td>{$row['COUNT(wypozyczenia.ID_wyp)']}</td><td>{$row['SUM(filmy.Cena_w_zl)']} zł</td></tr>\n";
            else
                echo "<tr><td>{$row['Tytul']}</td><td>{$row['Gatunek']}</td><td>{$row['COUNT(wypozyczenia.ID_wyp)']}</td><td>{$row['SUM(filmy.Cena_w_zl)']} zł</td></tr>\n";

        }
        echo "</table>\n";
    }
    mysqli_close($conn);
    ?>
</body>
</html>