# Sprawdzian Grupa B – Zadanie 4: Numer konta

## Cel

Strona pyta o numer konta (26 cyfr, czasem ze spacjami). Usuń spacje i w elemencie o id „wynik” pokaż numer w grupach po cztery cyfry oddzielonych spacjami.

## Przydatne

Zastanów się, jak najpierw wyczyścić spacje, a potem pociąć napis na stałe kawałki i złożyć je z powrotem. Wycinanie i łączenie jest na ściędze. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Numer pobierasz z `prompt` i usuwasz spacje.
2. W pudełku widać grupy po cztery cyfry ze spacjami między nimi.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `12 345678 9012345678901234`. W pudełku pojawia się „1234 5678 9012 3456 7890 1234”.
