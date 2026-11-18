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
    $dbname = "4ti_g2_druzyny";
    $conn = mysqli_connect($serwer,$user,$password,$dbname);
    ?>
    <form action="#">
        <label for="druzyna">Wybierz drużynę</label>
        <select name="druzyna" id="druzyna">
            <option>Wszystkie</option>
            <?php
            $sql = "SELECT DISTINCT druzyny.Nazwa, druzyny.Id_druzyny FROM druzyny ORDER BY druzyny.Nazwa;";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
                if(isset($_GET['druzyna']) && $row['Id_druzyny'] == $_GET['druzyna'])
                    echo "<option selected value=\"{$row['Id_druzyny']}\">";
                else
                    echo "<option value=\"{$row['Id_druzyny']}\">";
                echo $row['Nazwa'];
                echo "</option>";
            }
            ?>
        </select>
        <input type="submit" value="Wybierz drużynę">
    </form>
    <hr>
    <?php
    if(isset($_GET['druzyna']) && $_GET['druzyna'] !="Wszystkie"){
        $druzyna = $_GET['druzyna'];
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji WHERE druzyny.Id_druzyny = $druzyna ORDER BY wyniki.Data_meczu;";
        
    }else{
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji ORDER BY wyniki.Data_meczu;";
    }
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==0)
        echo "Brak danych";
    else{
        echo "<table>\n";
        echo "<tr><th>Data</th><th>Rodzaj</th><th>Gdzie</th><th>Drużyny</th><th>Sędzia</th><th>Wynik</th></tr>";
        while($row = mysqli_fetch_assoc($result)){
            echo "<tr><td>{$row['Data_meczu']}</td><td>{$row['Rodzaj_meczu']}</td><td>{$row['Gdzie']}</td><td>{$row['Nazwa']}</td><td>{$row['Imie']} {$row['Nazwisko']}</td><td>{$row['Bramki_zdobyte']}:{$row['Bramki_stracone']}</td>";
        }
        echo "</table>";
    }
    mysqli_close($conn);
    ?>
</body>
</html>