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
        <label for="sedzia">Wybierz sędziego</label>
        <select name="sedzia" id="sedzia">
            <option>Wszystkie</option>
            <?php
            $sql = "SELECT DISTINCT sedziowie.Imie, sedziowie.Nazwisko, sedziowie.Nr_licencji FROM sedziowie ORDER BY sedziowie.Imie,sedziowie.Nazwisko;";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
                if(isset($_GET['sedzia']) && $row['Nr_licencji'] == $_GET['sedzia'])
                    echo "<option selected value=\"{$row['Nr_licencji']}\">";
                else
                    echo "<option value=\"{$row['Nr_licencji']}\">";
                echo "{$row['Imie']} {$row['Nazwisko']}";
                echo "</option>";
            }
            ?>
        </select>
        <input type="submit" value="Wybierz sędziego">
    </form>
    <hr>
    <?php
    if(isset($_GET['sedzia']) && $_GET['sedzia'] !="Wszystkie"){
        $sedzia = $_GET['sedzia'];
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji WHERE sedziowie.Nr_licencji = '$sedzia' ORDER BY wyniki.Data_meczu;";
        
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