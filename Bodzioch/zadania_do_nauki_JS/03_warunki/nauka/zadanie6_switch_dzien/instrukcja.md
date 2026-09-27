# Nauka – switch: dzień tygodnia

## Cel

Użytkownik podaje numer dnia (1–7). Wypisz polską nazwę dnia. Użyj `switch` z `break` przy każdym `case` oraz `default` dla liczby spoza zakresu.

## Przydatne

Składnia to `switch (x) { case 1: ... break; default: ... }`. `case` porównuje przez `===`, więc wejście zamień na liczbę przez `Number`, bo `prompt` zwraca string. Bez `break` wykonają się też kolejne `case`. Wynik wypiszesz przez `document.write`.

## Wymagania

1. Pobierz numer dnia.
2. Dla 1 pokaż poniedziałek, a tak dalej aż do 7 jako niedziela.
3. Przy innej wartości pokaż „Nieznany dzień”.

## Przykład

Otwórz `index.html`. W okienku wpisz `1` i zatwierdź. W ramce wyniku pojawia się „poniedziałek”. Odśwież i wpisz `7` — widać „niedziela”. Przy `9` pojawia się „Nieznany dzień”.
