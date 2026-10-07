# Nauka – ile dni między datami

## Cel

Strona pyta o dwie daty (każda: rok, miesiąc 1–12, dzień). W elemencie o id „wynik” pokaż, ile pełnych dni kalendarzowych jest od pierwszej do drugiej. Wynik może być ujemny, gdy druga data jest wcześniejsza.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`.
- `getTime()` daje milisekundy. Doba to `1000 * 60 * 60 * 24`. Liczba dni: `Math.round((b - a) / msDzien)`.
- Format dat: `String(...).padStart(2, "0")` i `getMonth() + 1`.

## Wymagania

1. Budujesz dwa obiekty `Date` (lokalna północ).
2. Różnicę w dniach liczysz z `Math.round`.
3. W pudełku widać obie daty w formacie DD.MM.YYYY i liczbę dni.

## Przykład

Wpisz pierwszą datę `2026`, `9`, `10` i drugą `2026`, `9`, `20`. W pudełku pojawia się „10.09.2026 → 20.09.2026, 10 dni”. Gdy zamienisz kolejność, liczba dni to −10.
