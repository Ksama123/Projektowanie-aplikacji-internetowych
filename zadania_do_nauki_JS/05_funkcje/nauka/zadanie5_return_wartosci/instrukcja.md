# Nauka – `return`: zwracanie wartości

## Cel

Zrób funkcję, która tylko liczy i oddaje wynik, a wypis zostawiasz poza nią. Zobaczysz różnicę między `document.write` w środku funkcji a `return`.

## Przydatne

- `return metry;` kończy funkcję i oddaje liczbę temu, kto ją wywołał.
- Wynik możesz zapisać: `let wynik1 = przeliczNaMetry(5);`. Dopiero tę zmienną wypisujesz.
- Wewnątrz funkcji przelicznika nie używasz `document.write`. Wypis jest w skrypcie w ramce `#wynik`.
- Wzór: kilometry razy 1000 dają metry.

## Wymagania

1. W `<head>` zdefiniuj funkcję `przeliczNaMetry(km)`, która liczy metry i zwraca je przez `return`.
2. W ramce `#wynik` zapisz do zmiennych wyniki dla `5` km i dla `1.5` km.
3. Obie wartości wypisz przez `document.write` (każda w osobnej linii).
4. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

Otwierasz stronę. W ramce `#wynik` widać wynik `5000` dla pięciu kilometrów oraz `1500` dla półtora kilometra. Funkcja sama nic nie wypisała — oddała liczby.
