# Nauka – Zasięg globalny: fabryka

## Cel

Zobacz, jak funkcja zmienia zmienną zadeklarowaną poza nią. Licznik produktów ma rosnąć przy każdym wywołaniu, a nie resetować się do zera.

## Przydatne

- Zmienna zapisana w `<head>` poza funkcją jest globalna: widać ją i w funkcji, i między wywołaniami.
- `liczbaProduktow++` zwiększa tę samą wartość. Gdyby `let` było wewnątrz funkcji, za każdym razem startowałbyś od nowa.
- Wypis jest w funkcji: po każdej produkcji widać aktualny stan magazynu.
- Trzy wywołania w ramce `#wynik` pokażą 1, potem 2, potem 3.

## Wymagania

1. W `<head>` utwórz globalną zmienną `liczbaProduktow` równą `0` oraz funkcję `wyprodukuj`.
2. Wewnątrz funkcji zwiększ licznik i wypisz „Wyprodukowano! Stan magazynu: ” oraz aktualną liczbę.
3. W ramce `#wynik` wywołaj `wyprodukuj()` trzy razy.
4. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

Otwierasz stronę. W ramce widać trzy linie: stan magazynu 1, potem 2, potem 3. Licznik pamięta wartość między wywołaniami.
