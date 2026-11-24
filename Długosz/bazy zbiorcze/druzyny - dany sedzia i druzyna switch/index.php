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
        $k = 0;
        $druzyna = $_GET['druzyna'];
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji WHERE druzyny.Id_druzyny = $druzyna ORDER BY wyniki.Data_meczu;";
    }elseif(isset($_GET['sedzia']) && $_GET['sedzia'] !="Wszystkie"){
        $k = 1;
        $sedzia = $_GET['sedzia'];
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji WHERE sedziowie.Nr_licencji = '$sedzia' ORDER BY wyniki.Data_meczu;";
        
    }else{
        $k = 2;
        $sql = "SELECT * FROM wyniki INNER JOIN druzyny ON wyniki.Id_druzyny = druzyny.Id_druzyny INNER JOIN sedziowie ON sedziowie.Nr_licencji = wyniki.Nr_licencji ORDER BY wyniki.Data_meczu;";
    }
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==0)
        echo "Brak danych";
    else{
        echo "<table>\n";
        switch($k){
            case 0:
                echo "<tr><th>Data</th><th>Rodzaj</th><th>Gdzie</th><th>Sędzia</th><th>Wynik</th></tr>";
                break;
            case 1:
                echo "<tr><th>Data</th><th>Rodzaj</th><th>Gdzie</th><th>Drużyny</th><th>Wynik</th></tr>";
                break;
            case 2:
                echo "<tr><th>Data</th><th>Rodzaj</th><th>Gdzie</th><th>Drużyny</th><th>Sędzia</th><th>Wynik</th></tr>";
                break;
            default:
                echo "<tr><th>Data</th><th>Rodzaj</th><th>Gdzie</th><th>Drużyny</th><th>Sędzia</th><th>Wynik</th></tr>";
                break;
        }
        while($row = mysqli_fetch_assoc($result)){
            switch($k){
            case 0:
                echo "<tr><td>{$row['Data_meczu']}</td><td>{$row['Rodzaj_meczu']}</td><td>{$row['Gdzie']}</td><td>{$row['Imie']} {$row['Nazwisko']}</td><td>{$row['Bramki_zdobyte']}:{$row['Bramki_stracone']}</td>";
                break;
            case 1:
                echo "<tr><td>{$row['Data_meczu']}</td><td>{$row['Rodzaj_meczu']}</td><td>{$row['Gdzie']}</td><td>{$row['Nazwa']}</td><td>{$row['Bramki_zdobyte']}:{$row['Bramki_stracone']}</td>";
                break;
            case 2:
                echo "<tr><td>{$row['Data_meczu']}</td><td>{$row['Rodzaj_meczu']}</td><td>{$row['Gdzie']}</td><td>{$row['Nazwa']}</td><td>{$row['Imie']} {$row['Nazwisko']}</td><td>{$row['Bramki_zdobyte']}:{$row['Bramki_stracone']}</td>";
                break;
            default:
                echo "<tr><td>{$row['Data_meczu']}</td><td>{$row['Rodzaj_meczu']}</td><td>{$row['Gdzie']}</td><td>{$row['Nazwa']}</td><td>{$row['Imie']} {$row['Nazwisko']}</td><td>{$row['Bramki_zdobyte']}:{$row['Bramki_stracone']}</td>";
                break;
        }
        }
        echo "</table>";
    }
    mysqli_close($conn);
    ?>
</body>
</html>