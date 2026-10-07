# Nauka – setDate: termin za n dni

## Cel

Strona pyta o datę początkową i liczbę dni `n`. Wyznacz datę za `n` dni przez `setDate` (nie dodawaj ręcznie milisekund). W elemencie o id „wynik” pokaż datę początkową i termin w formacie DD.MM.YYYY.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- `setDate(d.getDate() + n)` przesuwa o `n` dni kalendarzowych; przepełnienie idzie na następny miesiąc.
- Format: `String(...).padStart(2, "0")` i `getMonth() + 1`.

## Wymagania

1. Z trzech liczb budujesz datę i pobierasz `n`.
2. Przesuwasz kopię albo ten sam obiekt o `n` dni.
3. W pudełku widać linie „Start: …” i „Termin: …” z datami.

## Przykład

Wpisz `2026`, `9`, `10` i `14`. W pudełku pojawiają się linie „Start: 10.09.2026” i „Termin: 24.09.2026”. Dla `2026`, `1`, `25` i `10` termin to „04.02.2026”.
