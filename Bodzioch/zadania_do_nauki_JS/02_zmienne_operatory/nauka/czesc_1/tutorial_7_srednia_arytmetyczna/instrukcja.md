# Nauka – Nawiasy: średnia z trzech ocen

## Cel

Pobierz trzy oceny i policz ich średnią arytmetyczną. To podsumowanie: `Number()`, nawiasy przy dzieleniu i czytelny raport na stronie.

## Przydatne

- Średnia to suma ocen podzielona przez ich liczbę. Nawias wokół sumy jest konieczny: `(ocena1 + ocena2 + ocena3) / 3`.
- Bez nawiasów program podzieli tylko ostatnią ocenę przez 3, a resztę doda w całości.
- `liczba.toFixed(2)` skraca wynik do dwóch miejsc po przecinku (na przykład `4.33` zamiast `4.33333333`).
- Wypis: `document.write(...)`. Nowa linia: `"<br>"`.

## Wymagania

1. Pobierz trzy oceny (na przykład z matematyki, polskiego i informatyki) i zamień je na liczby.
2. Policz średnią ze wzoru z nawiasami.
3. W ramce pokaż listę ocen oraz średnią.

## Przykład

Wpisz oceny `5`, `4` i `3`. W ramce widać „Twoje oceny: 5, 4, 3” oraz średnią `4.00` (albo `4`, jeśli nie użyjesz `toFixed`).
