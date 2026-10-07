# Nauka – nieistniejąca data

## Cel

Konstruktor `Date` nie zgłasza błędu przy 31 lutego — przesuwa dzień na marzec. Sprawdź, czy podany dzień naprawdę istnieje: po utworzeniu obiektu porównaj `getFullYear`, `getMonth` i `getDate` z tym, co wpisał użytkownik. Jeśli się nie zgadzają, w elemencie o id „wynik” pokaż „Nieistniejąca data”. W przeciwnym razie „Data poprawna: DD.MM.YYYY”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- Przepełnienie: `new Date(2025, 1, 29)` (luty, rok nieprzestępny) ląduje w marcu.
- Data jest poprawna, gdy gettery wracają ten sam rok, ten sam indeks miesiąca i ten sam dzień.

## Wymagania

1. Rok, miesiąc 1–12 i dzień pobierasz z `prompt`.
2. Po zbudowaniu `Date` sprawdzasz, czy JavaScript nie „przewinął” miesiąca albo roku.
3. Nie liczysz ręcznie, czy rok jest przestępny — wystarczy porównanie getterów.

## Przykład

Wpisz `2024`, `2` i `29`. W pudełku pojawia się „Data poprawna: 29.02.2024”. Wpisz `2025`, `2` i `29` albo `2024`, `2` i `31` — pojawia się „Nieistniejąca data”.
