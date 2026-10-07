# Nauka – dzień tygodnia

## Cel

Strona pyta o datę. W elemencie o id „wynik” pokaż polską nazwę dnia tygodnia. Użyj `getDay()` oraz `switch`. Zero to niedziela, jeden to poniedziałek, a sześć to sobota.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- `getDay()` zwraca dzień tygodnia 0–6. To nie jest `getDate()`.
- `switch` z `break` (bez tablicy nazw).
- Format daty: `String(...).padStart(2, "0")` i `getMonth() + 1`.

## Wymagania

1. Z trzech liczb budujesz `Date`.
2. Dzień tygodnia rozpoznajesz przez `switch` i `break`.
3. W pudełku widać datę w formacie DD.MM.YYYY oraz polską nazwę dnia.

## Przykład

Wpisz `2026`, `9` i `10`. W pudełku pojawia się „10.09.2026, czwartek”. Wpisz `2026`, `5` i `3` — pojawia się „03.05.2026, niedziela”.
