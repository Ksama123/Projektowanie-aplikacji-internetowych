# Zadanie 5: `href` — linki zewnętrzne

## Cel

Klik `#process-btn` oznacza linki, których `href` zaczyna się od `http`: dodajesz `target="_blank"` i `title` z informacją o nowej karcie. Linki wewnętrzne zostają bez `target`.

## Przydatne

- Linki zbierasz przez `querySelectorAll(".link-list a")` albo `querySelectorAll("a")`.
- Adres odczytasz `getAttribute("href")`. Sprawdzisz początek przez `String.startsWith("http")`.
- Ustawiasz `setAttribute("target", "_blank")` i `setAttribute("title", …)`.
- Oznaczenie wizualne: `setAttribute("data-external", "true")` — CSS już to styluje. Nie używasz `classList` (to dział 15).

## Wymagania

1. Google, Wikipedia i Stack Overflow otwierają się w nowej karcie.
2. `/kontakt`, `/o-nas` i `regulamin.html` nie dostają `target`.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Automatycznie oznacz linki zewnętrzne”. Najedź na „Wikipedia” — pojawia się dymek o nowej karcie. „Kontakt” zostaje bez dymka i bez nowej karty.
