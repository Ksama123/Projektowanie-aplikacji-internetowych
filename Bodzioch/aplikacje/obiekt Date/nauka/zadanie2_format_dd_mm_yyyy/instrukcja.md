# Nauka – format DD.MM.YYYY

## Cel

Strona pyta o rok, miesiąc (1–12) i dzień. W elemencie o id „wynik” pokaż tę datę w formacie DD.MM.YYYY z zerami z przodu, na przykład 5 marca to `05.03.2026`.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- Dzień i miesiąc kalendarzowy dopełnisz do dwóch cyfr przez `String(...).padStart(2, "0")`. Pamiętaj o `getMonth() + 1`.

## Wymagania

1. Z trzech liczb budujesz `Date`.
2. Dzień i miesiąc kalendarzowy mają zawsze dwie cyfry.
3. W pudełku widać jedną linię w formacie DD.MM.YYYY.

## Przykład

Wpisz `2026`, `9` i `10`. W pudełku pojawia się „10.09.2026”. Wpisz `2026`, `3` i `5` — pojawia się „05.03.2026”.
