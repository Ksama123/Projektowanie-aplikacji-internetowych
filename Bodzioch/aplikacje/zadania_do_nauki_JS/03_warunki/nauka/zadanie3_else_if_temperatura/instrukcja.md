# Nauka – else if: opis temperatury

## Cel

Na podstawie temperatury w °C wypisz jeden opis: mróz (poniżej 0), chłodno (0–15), ciepło (16–25), gorąco (powyżej 25). Użyj łańcucha `if / else if / else`. Kolejność warunków ma znaczenie: wygrywa pierwszy prawdziwy.

## Przydatne

`else if` to kolejna droga, sprawdzana tylko wtedy, gdy poprzednie warunki były fałszywe. `else` łapie wszystko, czego nie złapały wcześniejsze progi. Przedziały ustawisz porównaniami `<` i `<=`. Wynik wypiszesz przez `document.write`.

## Wymagania

1. Pobierz temperaturę jako liczbę (może być ujemna).
2. Przypisz dokładnie jeden opis według progów z celu.
3. Pokaż temperaturę i opis.

## Przykład

Otwórz `index.html`. W okienku wpisz `-2` i zatwierdź. W ramce wyniku pojawia się „-2 °C, mróz”. Odśwież i wpisz `10` — tekst zmienia się na „10 °C, chłodno”. Przy `20` widać „20 °C, ciepło”, a przy `30` — „30 °C, gorąco”.
