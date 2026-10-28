# Sprawdzian Grupa B – Zadanie 3: Dzień sprawdzianu

## Cel

Strona pyta o datę. W elemencie o id „wynik” pokaż polską nazwę dnia tygodnia. Zero z `getDay()` to niedziela, sześć to sobota. Użyj `switch`.

## Przydatne

Zastanów się, czym `getDay` różni się od `getDate` i jak z indeksu 0–6 zrobić polską nazwę. Format daty z zerami z przodu znasz z poprzedniego zadania. Składnia jest na ściędze. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Z trzech liczb budujesz `Date`.
2. Dzień tygodnia rozpoznajesz przez `switch` i `break`, bez tablicy nazw.
3. W pudełku widać datę w formacie DD.MM.YYYY, przecinek, spację i nazwę dnia.
4. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `2026`, `12` i `25`. W pudełku pojawia się „25.12.2026, piątek”. Wpisz `2026`, `5` i `3` — pojawia się „03.05.2026, niedziela”.
