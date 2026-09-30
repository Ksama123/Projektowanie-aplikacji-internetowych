# Zadanie 3: Pętle i obliczenia

## Cel

Strona pyta o cztery ceny produktów. Zapisz je w tablicy `ceny` jako liczby, wypisz każdą w osobnej linii i pokaż sumę w elemencie o id „wynik”. Uważaj na konwersję typów: `prompt` zwraca tekst.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Listę składasz pętlą i `join("\n")`. Nie używaj `document.write`.

- `Number(prompt("…"))` albo `parseInt` zamienia tekst na liczbę.
- `push` dodaje cenę do tablicy.
- Sumę liczysz w pętli, zaczynając od `suma = 0`.

## Wymagania

1. Pętla `for` wykonuje się cztery razy i zbiera ceny.
2. Druga pętla wypisuje „Produkt 1: … zł” i kolejne.
3. Na końcu widać „Razem do zapłaty: … zł”.

## Przykład

Wpisz `10`, `5`, `3` i `2`. W pudełku pojawiają się linie „Twoje produkty:”, cztery produkty z cenami i „Razem do zapłaty: 20 zł”.
