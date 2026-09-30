# Nauka – `else if` w funkcji: klimatyzacja

## Cel

Funkcja steruje klimatyzacją na podstawie temperatury i tego, czy urządzenie jest włączone. Ćwiczysz `else if` oraz wartość logiczną `true` / `false` jako drugi parametr.

## Przydatne

- Drugi argument to przełącznik. Gdy jest `false`, nie patrzysz już na temperaturę — wypisujesz, że klimatyzacja nie działa.
- Gdy jest włączona, progi temperatury idą od góry: najpierw powyżej 30, potem powyżej 25, a reszta to tryb spokojny.
- Porównanie ścisłe `=== false` odróżnia wyłączenie od innych wartości.
- Wywołania w `#wynik` różnią się parami liczb i przełączników. Wypis: `document.write` i `"<br>"`.

## Wymagania

1. W `<head>` zdefiniuj funkcję `sterujKlimatyzacja(temperatura, czyWlaczona)`.
2. Gdy klimatyzacja jest wyłączona, wypisz „Klimatyzacja nie działa.”.
3. Gdy jest włączona: powyżej 30 — „Chłodzenie na MAX!”, powyżej 25 — „Chłodzenie umiarkowane.”, w pozostałych przypadkach — „Temperatura idealna, wiatrak wolny.”.
4. W ramce `#wynik` wywołaj: `sterujKlimatyzacja(35, true)`, `sterujKlimatyzacja(15, true)` oraz `sterujKlimatyzacja(40, false)`.
5. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

W ramce kolejno widać: „Chłodzenie na MAX!” (35 i włączona), „Temperatura idealna, wiatrak wolny.” (15 i włączona) oraz „Klimatyzacja nie działa.” (40, ale wyłączona).
