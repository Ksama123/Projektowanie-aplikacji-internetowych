# Nauka – switch: grupowanie ocen

## Cel

Ocena ze świadectwa (1–6) ma dostać opis grupy: 5 i 6 to „wyróżnienie”, 3 i 4 to „ocena pozytywna”, 1 i 2 to „do poprawy”, a inna wartość to „nieznana ocena”. Użyj `switch` i zamierzonego braku `break` między `case` tej samej grupy.

## Przydatne

Kilka `case` możesz postawić pod rząd, dać im wspólny blok i dopiero potem jeden `break`. Wejście zamień na liczbę przez `Number(prompt(...))`. Wartości spoza listy złapie `default`.

## Wymagania

1. Pobierz ocenę jako liczbę całkowitą.
2. Zgrupuj 5 z 6, 3 z 4 oraz 1 z 2.
3. Pokaż ocenę i opis.

## Przykład

Otwórz `index.html`. W okienku wpisz `6` i zatwierdź. W ramce wyniku pojawia się „Ocena 6: wyróżnienie”. Odśwież i wpisz `4` — widać „Ocena 4: ocena pozytywna”. Przy `1` pojawia się „Ocena 1: do poprawy”, a przy `7` — „Ocena 7: nieznana ocena”.
