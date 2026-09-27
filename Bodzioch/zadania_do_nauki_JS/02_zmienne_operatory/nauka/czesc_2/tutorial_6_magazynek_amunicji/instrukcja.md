# Nauka – Dekrementacja: licznik amunicji

## Cel

Zasymuluj magazynek w grze: startujesz z 20 pociskami, oddajesz strzał, serię i znajdujesz paczkę. Ćwiczysz `--` oraz `+=` / `-=`.

## Przydatne

- `amunicja--` zmniejsza wartość o 1. Do większych skoków służy `amunicja -= 3` (zapis `amunicja---` nie istnieje).
- `amunicja += 10` dodaje dziesięć pocisków.
- Tu nie pytasz użytkownika — start i zmiany wpisujesz w kodzie.
- Wypis: `document.write(...)`. Nowa linia: `"<br>"`.

## Wymagania

1. Ustaw `amunicja` na `20` i wypisz „Start: 20 pocisków”.
2. Oddaj jeden strzał (`--`) i pokaż stan.
3. Oddaj serię trzech pocisków (`-=`) i pokaż stan.
4. Dodaj paczkę 10 pocisków (`+=`) i pokaż stan końcowy.
5. Na końcu ma zostać 26 pocisków (\(20 - 1 - 3 + 10 = 26\)).

## Przykład

Otwierasz stronę i w ramce widzisz start 20, potem ubytek o 1, potem o 3, a na końcu 26 pocisków po przeładowaniu.
