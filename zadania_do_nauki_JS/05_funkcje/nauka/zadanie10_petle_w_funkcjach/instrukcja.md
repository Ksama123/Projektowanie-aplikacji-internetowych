# Nauka – Pętla w funkcji: drukarka

## Cel

Funkcja dostaje liczbę i wypisuje tyle poziomych kresek w jednej linii, a potem łamie wiersz. Pętla jest schowana w funkcji, więc w ramce tylko zmieniasz argument.

## Przydatne

- Argument `ilosc` mówi, ile razy pętla ma dodać znak `-`.
- Pętla `for` (albo `while`) jest wewnątrz funkcji. Po pętli, nadal w funkcji, dajesz `"<br>"`, żeby następne wywołanie zaczęło nową linię.
- Trzy wywołania z różnymi długościami pokażą trzy rzędy kresek.
- Definicja w `<head>`, wywołania w `#wynik`. Wypis: `document.write`.

## Wymagania

1. W `<head>` zdefiniuj funkcję `drukujLinie(ilosc)`.
2. Wewnątrz funkcji powtórz wypisanie znaku `-` tyle razy, ile wynosi `ilosc`.
3. Po pętli złam linię przez `"<br>"`.
4. W ramce `#wynik` wywołaj `drukujLinie(10);`, `drukujLinie(50);` i `drukujLinie(5);`.
5. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

W ramce widać trzy rzędy: najpierw 10 kresek, pod spodem 50 kresek, a na dole 5 kresek.
