# Zadanie 5: Zadanie przyrostowe Capstone — Fundament skryptu portalu — Portal Usługowo-Handlowy

## Cel zadania
Celem zadania przyrostowego jest stworzenie fundamentu skryptowego i diagnostycznego dla głównego projektu przewodniego (Portal Usługowo-Handlowy). W tym zadaniu uczeń integruje zewnętrzny plik skryptu JavaScript z oficjalnym szablonem portalu w jasnej palecie barw, inicjalizuje kluczowe metadane środowiska klienta, przeprowadza pełną weryfikację diagnostyczną w konsoli DevTools oraz generuje powitalną kartę startową za pomocą metody `document.write()` umieszczonej w kontenerze `.wynik`.

Gdzie to się stosuje? (Przykłady ze świata aplikacji):
- Inicjalizacja głównych zmiennych konfiguracyjnych w rozbudowanych portalach korporacyjnych i platformach handlowych.
- Publikacja parametrów wersji i środowiska wykonawczego na kartach diagnostycznych systemów enterprise.
- Zapewnienie stabilnej bazy pod kolejne moduły programistyczne rozwijające funkcjonalności portalu.

## Wskazówki aktywizujące
- Odsyłacz do teorii: Przeczytaj sekcję 2, 4, 5 oraz 6 w pliku `teoria.md`, zwracając uwagę na dobre praktyki nazewnictwa stałych (`UPPER_SNAKE_CASE`) i zmiennych (`camelCase`).
- Spójność wizualna: Zwróć uwagę, że zadanie Capstone korzysta z jasnego motywu portalu (tło `#f1f5f9`, białe karty `#ffffff`, błękitny akcent `#2563eb`), który będzie rozwijany w kolejnych działach.
- Złota zasada Zero Regresji: Wszystkie utworzone dziś identyfikatory i kontenery staną się podstawą dla przyszłych operacji w kolejnych modułach JavaScript.

## Treść do wpisania
W pliku `script.js` oraz w kodzie generowanym przez `document.write()` użyj dokładnie następujących dosłownych tekstów i wartości:
- Pełna nazwa portalu w stałej `NAZWA_PORTALU`: `"Portal Usługowo-Handlowy — Platforma Klienta"`
- Wersja systemu w stałej `WERSJA_SYSTEMU`: `"1.0.4-beta"`
- Nazwa aktywnego modułu w stałej `MODUL_AKTYWNY`: `"Moduł T04: Fundament Skryptu i Konsola"`
- Liczba dostępnych usług w zmiennej `liczbaDostepnychUslug`: `6`
- Tablica głównych kategorii w stałej `glowneKategorie`: `["Usługi gastronomiczne", "Serwis techniczny", "Księgarnia i multimedia"]`
- Nagłówek wstawiany przez `document.write()`: `"<h3>Karta Startowa Systemu Klienta</h3>"`
- Pierwszy akapit wstawiany przez `document.write()`: `"<p>Platforma: <strong>Portal Usługowo-Handlowy — Platforma Klienta</strong> | Wersja: 1.0.4-beta</p>"`
- Drugi akapit wstawiany przez `document.write()`: `"<p class=\"status-aktywny\">Status środowiska: <em>Aktywne i gotowe do ewidencji zamówień</em></p>"`
- Komunikat startowy w `console.log()`: `"Inicjalizacja środowiska klienta dla Portalu Usługowo-Handlowego."`
- Informacja o module w `console.info()`: `"Załadowano moduł: Moduł T04: Fundament Skryptu i Konsola."`

## Wymagania
1. W pliku `index.html` wewnątrz kontenera `<div class="wynik"></div>` dołącz zewnętrzny skrypt `script.js` za pomocą znacznika `<script src="script.js"></script>` (**bez** `defer` i **bez** `async` — skrypt używa `document.write()`).
2. W pliku `script.js`:
   - Zadeklaruj stałe `NAZWA_PORTALU`, `WERSJA_SYSTEMU`, `MODUL_AKTYWNY`, `glowneKategorie` oraz zmienną `liczbaDostepnychUslug` z wartościami podanymi w sekcji "Treść do wpisania".
   - Wypisz nagłówek `<h3>` oraz oba akapity `<p>` za pomocą metody `document.write()` do kontenera `.wynik`.
   - Wypisz w konsoli komunikat startowy za pomocą `console.log()`.
   - Wypisz w konsoli informację o załadowanym module za pomocą `console.info()`.
   - Wyświetl tabelę kategorii za pomocą `console.table(glowneKategorie)`.
3. Zapisz pliki i otwórz stronę w przeglądarce. Upewnij się, że:
   - Karta startowa wyświetla się poprawnie w estetycznym jasnym kontenerze `.wynik`.
   - W konsoli DevTools (F12) pojawiają się komunikaty oraz sformatowana tabela kategorii usług.
4. Pamiętaj o guardrails semestru 1: nie używaj `getElementById`, `querySelector`, `addEventListener` ani `classList`.
