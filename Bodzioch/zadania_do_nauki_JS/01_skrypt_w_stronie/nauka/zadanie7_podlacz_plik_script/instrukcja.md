# Nauka – podłącz plik skryptu

## Cel

W szablonie brakuje znacznika `<script>`. Dopisz go wewnątrz pudełka `.wynik` ze `src="script.js"`. W `script.js` wypisz „Skrypt podłączony” przez `document.write`.

## Przydatne

Ścieżka `script.js` oznacza plik w tym samym folderze co `index.html`. Znacznik musi stać wewnątrz pudełka `.wynik`, żeby `document.write` wpadł w ramkę, a nie poza kartą. Do HTML nie wklejasz kodu JavaScript — tylko sam znacznik ze `src`.

## Wymagania

1. W `index.html` zostaw jeden `<script src="script.js"></script>` i nie wklejaj kodu JS do HTML.
2. W `script.js` zrób wypis na stronę.
3. Po odświeżeniu widać tekst, a w konsoli nie ma błędu o braku pliku.

## Przykład

Dopisz znacznik w `index.html`, zapisz plik i otwórz stronę. W ramce wyniku pojawia się „Skrypt podłączony”. Karta Console nie zgłasza, że nie znaleziono `script.js`.
