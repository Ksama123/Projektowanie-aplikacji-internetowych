# Nauka – Pętla i `if`: liczby parzyste

## Cel

Wypisz wszystkie liczby parzyste z zakresu od 0 do 20. Nie każda wartość z pętli ma trafić na stronę — wewnątrz obrotu decyduje warunek.

## Przydatne

- Zwykła pętla `for` może iść od 0 do 20. Nie wypisujesz `i` od razu: najpierw sprawdzasz, czy liczba jest parzysta.
- Reszta z dzielenia to operator `%`. Liczba jest parzysta, gdy `i % 2` wynosi `0`.
- Instrukcja `if` wewnątrz pętli jest tu narzędziem, nie nowym tematem na sprawdzian z warunków.
- Wypis: `document.write(...)`. Między liczbami możesz dać spację, żeby nie zlewały się w jeden ciąg.

## Wymagania

1. Przejdź pętlą przez liczby od 0 do 20 włącznie.
2. Na stronę wypisz tylko te, które dzielą się przez 2 bez reszty.
3. Liczby nieparzyste pomiń.

## Przykład

Otwierasz stronę i widzisz `0 2 4 6 8 10 12 14 16 18 20`. Nie ma na liście 1, 3 ani 19.
