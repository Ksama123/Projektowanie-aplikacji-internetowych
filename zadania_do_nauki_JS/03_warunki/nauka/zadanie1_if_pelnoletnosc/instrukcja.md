# Nauka – if: pełnoletność

## Cel

Sprawdź, czy osoba jest pełnoletnia (wiek co najmniej 18 lat). Użyj `if`. Komunikat domyślny ustaw przed warunkiem i nadpisz go w bloku `if`, gdy warunek jest spełniony. Nie musisz jeszcze pisać `else`.

## Przydatne

`prompt` zwraca tekst, więc wiek zamienisz na liczbę przez `Number(prompt("..."))`. Porównanie `>=` obejmuje też samą granicę. Składnia to `if (warunek) { ... }` — blok wykona się tylko przy `true`. Wynik wypiszesz przez `document.write`, a nową linię zrobisz znacznikiem `"<br>"`.

## Wymagania

1. Pobierz wiek.
2. Domyślnie pokaż komunikat „Niepełnoletni”; gdy wiek jest co najmniej 18, zmień go na „Pełnoletni”.
3. Pokaż wiek i komunikat.

## Przykład

Otwórz `index.html`. W okienku wpisz `17` i zatwierdź. W ramce wyniku pojawiają się dwie linie: „Wiek: 17” oraz „Niepełnoletni”. Odśwież stronę i wpisz `18`. Tekst zmienia się na „Wiek: 18” oraz „Pełnoletni”. Przy `21` też widać „Pełnoletni”.
