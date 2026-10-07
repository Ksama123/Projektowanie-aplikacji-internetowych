# Nauka – porównanie dwóch dat

## Cel

Strona pyta o dwie daty. W elemencie o id „wynik” pokaż, czy pierwsza jest wcześniejsza, późniejsza, czy to ten sam dzień. Porównujesz znaczniki czasu (`getTime`), a nie napisy.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- `getTime()` daje milisekundy. Porównujesz je przez `<`, `>` i `===` w `if / else if / else`.
- Format dat: `String(...).padStart(2, "0")` i `getMonth() + 1`.

## Wymagania

1. Budujesz dwie daty.
2. Wybierasz jeden z trzech komunikatów.
3. Do komunikatu dołączasz obie daty w formacie DD.MM.YYYY.

## Przykład

Wpisz `2026`, `9`, `10` i `2026`, `9`, `20`. W pudełku pojawia się „10.09.2026 jest wcześniejsza niż 20.09.2026”. Dla `2026`, `12`, `25` i `2026`, `12`, `24` komunikat mówi, że pierwsza jest późniejsza. Dla dwóch identycznych dat: „03.05.2026 to ten sam dzień co 03.05.2026”.
