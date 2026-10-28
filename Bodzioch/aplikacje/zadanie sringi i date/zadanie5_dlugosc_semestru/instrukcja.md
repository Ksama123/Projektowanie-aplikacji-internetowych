# Sprawdzian Grupa B – Zadanie 5: Długość semestru

## Cel

Strona pyta o datę początku i końca semestru. W elemencie o id „wynik” pokaż, ile dni kalendarzowych jest od początku do końca. Ujemna liczba oznacza, że daty są w złej kolejności.

## Przydatne

Zastanów się, jak z różnicy znaczników czasu dostać pełne dni i w którą stronę odejmować (koniec minus początek). Zaokrąglenie i długość doby są na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Każdą datę wczytujesz jako trzy liczby.
2. W pudełku widać linie „Początek: …”, „Koniec: …” i „Dni: …”.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz początek `2026`, `9`, `1` i koniec `2026`, `12`, `20`. W pudełku pojawia się między innymi „Dni: 110”. Gdy zamienisz kolejność dat, liczba dni to −110.
