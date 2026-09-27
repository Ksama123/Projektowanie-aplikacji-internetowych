Pszemek, [22.05.2026 07:54]
php - notatka 
 
formularze 
 
get 
- dane w url 
 
$_GET["login"] 
 
 
przyklad: 
index.php?login=adam 
 
 
``php 
echo $_GET["login"]; 
`` 
 
--- 
 
post 
- dane ukryte 
 
$_POST["miasto"] 
 
 
```html 
<form method="post"> 
<input name="miasto"> 
<input type="submit"> 
</form> 
 
--- 
 
isset 
- czy istnieje 
 
php 
if(isset($_GET["a"])){ 
echo "ok"; 
} 
 
--- 
 
trim 
- usuwa spacje 
 
php 
echo trim("  test  "); 
 
--- 
 
explode 
- dzieli tekst 
 
php 
$tab = explode(" ","ala ma kota"); 
 
--- 
 
implode 
- laczy tablice 
 
php 
echo implode("-",["a","b"]); 
 
--- 
 
foreach 
- przechodzenie po tablicy 
 
php 
foreach(["a","b","c"] as $x){ 
echo $x; 
} 
 
--- 
 
stringi 
 
php 
strrev("abc");        // cba 
strtoupper("abc");    // ABC 
strtolower("ABC");    // abc 
ucfirst("abc");       // Abc 
strlen("abcd");       // 4 
 
--- 
 
tablice 
 
php 
$tab = ["x","y"]; 
$tab[] = "z"; 
sort($tab); 
 
--- 
 
warunki 
 
php 
if($a>$b){ 
echo "tak"; 
}else{ 
echo "nie"; 
} 
 
--- 
 
sprawdzanie 
 
php 
is_numeric("12"); 
ctype_alpha("abc"); 
 
--- 
 
funkcje 
 
- funkcja to blok kodu ktory cos robi i moze zwracac wynik 
 
php 
function dodaj($a,$b){ 
return $a+$b; 
} 
 
przyklad: 
php 
echo dodaj(2,3); 
 
wynik: 
text 
5 
 
--- 
 
nwd 
 
- najwiekszy wspolny dzielnik 
 
php 
function NWD($a,$b){ 
 
while($a!=$b){ 
if($a>$b)$a-=$b; 
else $b-=$a; 
} 
 
return $a; 
} 
 
przyklad: 
php 
echo NWD(24,36); 
 
wynik: 
text 
12 
 
--- 
 
nww 
 
:contentReference[oaicite:0]{index=0} 
 
php 
function NWW($a,$b){ 
return ($a*$b)/NWD($a,$b); 
} 
 
--- 
 
potega 
 
php 
$a ** $b; 
 
--- 
 
echo 
 
php 
echo "tekst<br>"; 
`

Pszemek, [22.05.2026 07:55]
php - notatka 
 
formularze 
 
get 
- dane widac w url 
- wysylanie metoda get 
 
<form method="get"> 
<input name="login"> 
<input type="submit"> 
</form> 
 
 
przyklad: 
index.php?login=adam 
 
 
odczyt: 
echo $_GET["login"]; 
 
 
--- 
 
post 
- dane ukryte 
- bezpieczniejsze od get 
 
<form method="post"> 
<input name="miasto"> 
<input type="submit"> 
</form> 
 
 
odczyt: 
echo $_POST["miasto"]; 
 
 
--- 
 
get vs post 
 
get 
- dane w url 
- mozna kopiowac link 
- mniejsza ilosc danych 
 
post 
- dane ukryte 
- mozna wysylac wiecej danych 
- lepsze np do logowania 
 
--- 
 
isset 
- sprawdza czy istnieje 
 
if(isset($_GET["a"])){ 
echo "ok"; 
} 
 
 
--- 
 
trim 
- usuwa spacje z poczatku i konca 
 
echo trim("  test  "); 
 
 
wynik: 
test 
 
 
--- 
 
explode 
- dzieli tekst na tablice 
 
$tab = explode(" ","ala ma kota"); 
 
 
wynik: 
["ala","ma","kota"] 
 
 
--- 
 
implode 
- laczy tablice w tekst 
 
echo implode("-",["a","b","c"]); 
 
 
wynik: 
a-b-c 
 
 
--- 
 
foreach 
- przechodzenie po tablicy 
- najwazniejsza petla do tablic 
 
$tab = ["ala","ma","kota"]; 
 
foreach($tab as $x){ 
echo $x."<br>"; 
} 
 
 
wynik: 
ala 
ma 
kota 
 
 
--- 
 
for 
 
for($i=0;$i<5;$i++){ 
echo $i; 
} 
 
 
wynik: 
01234 
 
 
--- 
 
while 
 
$i = 0; 
 
while($i<3){ 
echo $i; 
$i++; 
} 
 
 
wynik: 
012 
 
 
--- 
 
stringi 
 
- funkcje z mb_ obsluguja polskie znaki 
- np ą ć ę ł ń ó ś ź ż 
- warto uzywac mb_strlen mb_strtolower mb_strtoupper 
- strrev nie ma wersji mb_ 
 
strrev("abc");             // cba 
strtoupper("abc");         // ABC 
strtolower("ABC");         // abc 
ucfirst("abc");            // Abc 
strlen("abcd");            // 4 
 
 
--- 
 
mb stringi 
 
mb_strtoupper("zażółć"); 
mb_strtolower("ZAŻÓŁĆ"); 
mb_strlen("zażółć"); 
 
 
--- 
 
tablice 
 
$tab = ["x","y"]; 
$tab[] = "z"; 
 
 
dodawanie: 
$tab[] = "kolejny"; 
 
 
sortowanie: 
sort($tab); 
 
 
--- 
 
sort 
 
$tab = ["kot","ala","pies"]; 
 
sort($tab,SORT_STRING); 
 
print_r($tab); 
 
 
wynik: 
ala kot pies 
 
 
--- 
 
warunki 
 
if($a>$b){ 
echo "tak"; 
}else{ 
echo "nie"; 
} 
 
 
--- 
 
operatory 
 
==     rowne wartoscia 
===    rowne wartoscia i typem 
!=     rozne 
>      wieksze 
<      mniejsze 
>=     wieksze rowne 
<=     mniejsze rowne 
 
 
przyklad: 
5 == "5"      // true 
5 === "5"     // false 
 
 
--- 
 
laczenie tekstu 
 
- kropka laczy napisy 
 
$imie = "Adam"; 
 
echo "Czesc ".$imie; 
 
 
wynik: 
Czesc Adam 
 
 
--- 
 
sprawdzanie 
 
is_numeric("12"); 
ctype_alpha("abc"); 
 
 
is_numeric 
- czy liczba 
 
ctype_alpha 
- czy same litery 
 
--- 
 
funkcje 
 
- funkcja to blok kodu ktory cos robi 
- return zwraca wynik funkcji 
 
function dodaj($a,$b){ 
return $a+$b; 
} 
 
 
przyklad: 
echo dodaj(2,3); 
 
 
wynik: 
5 
 
 
--- 
 
return 
 
function tekst(){ 
return "hej"; 
} 
 
echo tekst(); 
 
 
wynik: 
hej 
 
 
--- 
 
potega 
 
$a ** $b; 
 
 
przyklad: 
echo 2**3; 
 
 
wynik: 
8 
 
 
--- 
 
echo 
 
echo "tekst<br>"; 
 
 
--- 
 
typowe zadania 
 
odwrocenie slow: 
 
echo strrev("kajak"); 
 
 
--- 
 
pierwsza duza litera: 
 
echo ucfirst("adam"); 
 
 
--- 
 
same male litery: 
 
echo strtolower("ALA"); 
 
 
--- 
 
same duze litery: 
 
echo strtoupper("ala"); 
 
 
--- 
 
slowa o parzystej dlugosci: 
 
foreach($tab as $x){ 
 
if(strlen($x)%2==0){ 
echo $x; 
} 
 
} 
 
 
--- 
 
slowa o nieparzystej dlugosci: 
 
foreach($tab as $x){ 
 
if(strlen($x)%2!=0){ 
echo $x; 
} 
 
} 
 
 
--- 
 
pelny przyklad 
 
$tekst = "ala ma kota"; 
 
$tab = explode(" ",$tekst); 
 
foreach($tab as $x){ 
echo ucfirst(strtolower($x))."<br>"; 
}

Pszemek, [22.05.2026 07:55]
php 1 
 
żeby wykonać kod trzeba go umieć 
 
<!DOCTYPE html> 
<html lang="pl"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
</head> 
<body> 
 
<table border="1" align="center" cellpadding="10"> 
<tr><td> 
 
<form method="post"> 
    <input type="text" name="t" style="width:300px"> 
    <br><br> 
    <input type="submit" value="Wyślij"> 
</form> 
 
<?php 
 
if ($_POST) { 
 
    $t = trim($_POST['t']); 
    $a = explode(" ", $t); 
 
    $d = 1; 
 
    foreach ($a as $x) { 
        if (!ctype_alpha($x)) $d = 0; 
    } 
 
    if ($d) { 
 
        // 1. ALA MA KAJAK I PSA 
        $wynik1 = []; 
 
        foreach ($a as $wyraz) { 
            $wynik1[] = strtoupper(strrev($wyraz)); 
        } 
 
        echo "1. " . implode(" ", $wynik1) . "<br>"; 
 
 
        // 2. Ala Ma Kajak I Psa 
        $wynik2 = []; 
 
        foreach ($a as $wyraz) { 
            $wynik2[] = ucfirst(strtolower($wyraz)); 
        } 
 
        echo "2. " . implode(" ", $wynik2) . "<br>"; 
 
 
        // 3. Ala, Kajak, i 
        $wynik3 = []; 
 
        foreach ($a as $wyraz) { 
 
            if (strlen($wyraz) % 2 != 0) { 
                $wynik3[] = ucfirst(strtolower($wyraz)); 
            } 
 
        } 
 
        echo "3. " . implode(", ", $wynik3) . "<br>"; 
 
 
        // 4. Ala, i, kajak, ma, psa 
        $wynik4 = $a; 
 
        sort($wynik4, SORT_STRING); 
 
        echo "4. " . implode(", ", $wynik4) . "<br>"; 
 
    } 
    else { 
        echo "Tylko litery i spacje"; 
    } 
 
} 
 
?> 
 
</td></tr> 
</table> 
 
</body> 
</html>

Pszemek, [22.05.2026 07:55]
Kaacper php kolega 
 
nic nie ma aby umieć nie umieć 
 
po co coś się zapisuej 
    <?php 
     
    if(isset($_GET["tekst"])) { 
 
        $tekst = explode(" ", trim($_GET["tekst"])); 
         
        // 1. kazde slowo od tylu wielkimi literami 
 
        $t_wynik_1 = []; 
 
        foreach($tekst as $i) { 
            $t_wynik_1[] = mb_strtoupper(strrev($i)); 
        } 
        $wynik_1 = implode(" ", $t_wynik_1); 
        echo($wynik_1); 
 
        echo("<br>"); 
         
        // 2. Kazde slowo ma zaczynac sie z duzej litery 
        $t_wynik2 = []; 
        foreach($tekst as $i) { 
            $t_wynik2[] = ucfirst(mb_strtolower($i)); 
        } 
        $wynik_2 = implode(" ", $t_wynik2); 
        echo($wynik_2); 
 
        echo("<br>"); 
 
        // 3. Ala, Kajak, i 
        $t_wynik3 = []; 
        foreach($tekst as $i) { 
            if(mb_strlen($i) % 2 == 1) { 
                $t_wynik3[] = ucfirst(mb_strtolower($i)); 
            } 
        } 
        $wynik_3 = implode(", ", $t_wynik3); 
        echo($wynik_3); 
 
        echo("<br>"); 
 
 
        // 4. Ala, i, kajak, ma, psa 
        $t_wynik4 = $tekst;     
        sort($t_wynik4, SORT_STRING); 
        $wynik4 = implode(", ", $t_wynik4); 
        echo($wynik4); 
        // var_dump($t_wynik4); 
 
 
 
 
 
    } 
     
    ?>

Pszemek, [22.05.2026 07:55]
Mojesteare programy 
 
 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
</head> 
<body> 
    <form> 
        <label>Słowo<input type="text" name="tekst"></label><br> 
        <label><input type="submit"> 
    </form> 
    <br> 
 
    <?php 
    $_GET["tekst"] = "nigger jest czarny"; 
    if (isset($_GET["tekst"])){ 
        $wyraz = explode(" ", $_GET["tekst"]); 
         
        var_dump($wyraz); 
 
        echo("<br>"); 
         
        foreach($wyraz as $i){ 
            $t_wynik1[] = strrev($i); 
             
        } 
        $wynik1 = implode(" ",$t_wynik1); 
        echo($wynik1); 
         
        echo("<br>"); 
         
        foreach($wyraz as $i){ 
            $t_wynik2[] = ucfirst($i); 
             
             
        } 
        $wynik2 = implode(" ",$t_wynik2); 
        echo($wynik2); 
         
        echo("<br>"); 
         
        $t_wynik3 = []; 
        foreach($wyraz as $i){ 
            if(strlen($i) %2 ==0) 
                $t_wynik3[] = $i; 
             
            }echo(implode(" ",$t_wynik3)); 
             
            echo("<br>"); 
             
            $t_w4 = $wyraz; 
            sort($t_w4, SORT_STRING); 
            echo(implode(" ", $t_w4)); 
 
    } 
 
 
    ?> 
 
</body> 
</html>
