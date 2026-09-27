<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    // echo password_hash("cytryna",PASSWORD_DEFAULT);
    $dir = "./users";
    $img = "./img";
    if (isset($_POST["login"])){
        $login = $_POST["login"];
        $haslo = $_POST["passwd"];
        if(file_exists("./users/$login.txt")){
            $plik = fopen("$dir/$login.txt","r");
            $hash = fgets($plik);
            if(password_verify($haslo,$hash)){
                echo "Witaj $login";
                echo "<img src = '$img/$login.jpg' alt='$login.jpg'>";
                
            }
            else
                echo "Błędny login lub hasło";
        } else{
            $plik = fopen("$dir/$login.txt","w");
            fwrite($plik,password_hash($haslo,PASSWORD_DEFAULT));
            fclose($plik);
            echo "Utworzono użytkownika $login";
        }

    } else{
        ?>
    <form action="" method="post">
        <label>Login <input type="text" name="login"></label><br>
        <label>Hasło <input type="password" name="passwd"></label><br>
        <input type="submit" value="Zaloguj się/Zarejestruj się">
    </form>

    <?php
    }
    ?>
</body>
</html>