# Zadanie 4: Zadanie integrujące — Wypis na stronie i diagnostyka — Przychodnia „Cztery Łapy”

## Cel zadania
Celem zadania integrującego jest połączenie umiejętności z zadań 1–3 z nowym wzorcem wypisu na stronę: dołączenie skryptu zewnętrznego **wewnątrz** kontenera `.wynik` **bez** atrybutów `defer`/`async` (inaczej niż w zadaniu 3), diagnostyka w konsoli DevTools (`console.log()`, `console.warn()`, `console.table()`) oraz wypis treści metodą `document.write()` dokładnie do `.wynik`.

Gdzie to się stosuje? (Przykłady ze świata aplikacji):
- Generowanie podsumowań raportów dziennych w systemach obsługi pacjentów i klientów.
- Jednoczesne raportowanie statusu technicznego do konsoli programisty oraz prezentowanie czytelnego komunikatu dla użytkownika końcowego.
- Tradycyjne szablony stron intranetowych weryfikowane podczas egzaminów zawodowych INF.03.

## Wskazówki aktywizujące
- Odsyłacz do teorii: Przeczytaj sekcję 5 (wzorzec B: skrypt zewnętrzny w `.wynik`) oraz sekcję 3 (kiedy NIE stosować `defer`) w pliku `teoria.md`.
- Pytanie naprowadzające: Dlaczego w tym zadaniu **nie** wolno użyć `defer` w `<head>`, skoro w zadaniu 3 było to zalecane?
- Semestr 1: Pamiętaj, że w tym zadaniu nie używamy jeszcze selektorów DOM typu `getElementById` ani zdarzeń `onclick`. Skrypt wykonuje się automatycznie podczas ładowania strony.

## Treść do wpisania
W pliku `script.js` oraz w strukturze wypisu użyj dokładnie następujących dosłownych tekstów i wartości:
- Nazwa placówki w stałej `NAZWA_PRZYCHODNI`: `"Całodobowa Przychodnia Weterynaryjna Cztery Łapy"`
- Imię i nazwisko dyżurnego lekarza w stałej `LEKARZ_DYZURNY`: `"lek. wet. Anna Kowalska"`
- Liczba pacjentów oczekujących w zmiennej `pacjenciWKolejce`: `3`
- Lista planowanych zabiegów w tablicy `grafikZabiegow`: `["Szczepienie profilaktyczne", "Badanie ultrasonograficzne", "Toaleta stomatologiczna"]`
- Nagłówek wstawiany przez `document.write()` do `.wynik`: `"<h3>Dyżur Weterynaryjny — Informacja Dnia</h3>"`
- Akapit wstawiany przez `document.write()` do `.wynik`: `"<p>Lekarz przyjmujący: <strong>lek. wet. Anna Kowalska</strong> | Liczba pacjentów w poczekalni: 3</p>"`
- Komunikat w `console.log()`: `"Inicjalizacja modułu dyżuru przychodni Cztery Łapy zakończona pomyślnie."`
- Ostrzeżenie w `console.warn()`: `"Uwaga: Poczekalnia ma ograniczoną liczbę miejsc siedzących!"`

## Wymagania
1. W pliku `index.html` wewnątrz kontenera `<div class="wynik"></div>` dołącz plik `script.js` za pomocą znacznika `<script src="script.js"></script>` (**bez** `defer` i **bez** `async`), co umożliwi metodzie `document.write()` wpisanie kodu bezpośrednio wewnątrz tego kontenera.
2. W pliku `script.js`:
   - Zadeklaruj stałe `NAZWA_PRZYCHODNI`, `LEKARZ_DYZURNY`, `grafikZabiegow` oraz zmienną `pacjenciWKolejce` z wartościami podanymi w sekcji "Treść do wpisania".
   - Wypisz nagłówek `<h3>` oraz akapit `<p>` za pomocą metody `document.write()` z dokładnymi tekstami.
   - Wypisz w konsoli komunikat startowy za pomocą `console.log()`.
   - Wypisz w konsoli ostrzeżenie za pomocą `console.warn()`.
   - Wypisz w konsoli tabelę zabiegów za pomocą `console.table(grafikZabiegow)`.
3. Otwórz `index.html` w przeglądarce:
   - Na stronie w kontenerze `.wynik` powinien pojawić się sformatowany tekst z pogrubionym nazwiskiem lekarza.
   - W konsoli (F12) powinny pojawić się komunikaty diagnostyczne oraz czytelna tabela z trzema zabiegami.
5. Zachowaj pełną zgodność z guardrails semestru 1 (zakaz getElementById, querySelector, addEventListener).
