# Zadanie 3: Kolejność ładowania, defer i tabela — Księgarnia „Książka i Kawa”

## Cel zadania
Celem zadania jest przećwiczenie nowoczesnego i rekomendowanego sposobu dołączania kodu JavaScript w sekcji `<head>` dokumentu za pomocą atrybutu `defer` (`<script src="script.js" defer></script>`). Ponadto nauczysz się prezentować zbiory danych w konsoli deweloperskiej w formie czytelnej tabeli za pomocą metody `console.table()` oraz weryfikować typy danych operatorem `typeof`.

Gdzie to się stosuje? (Przykłady ze świata aplikacji):
- Dołączanie głównych skryptów aplikacji w nagłówku strony z gwarancją, że wykonają się dopiero po przygotowaniu widoku HTML.
- Podgląd tablic asortymentu towarowego w konsoli przez programistów sklepów internetowych.
- Weryfikacja poprawności formatów danych (tekst vs liczba vs flaga logiczna) przed przesłaniem ich do bazy danych.

## Wskazówki aktywizujące
- Odsyłacz do teorii: Przeczytaj sekcję 3 (Lokalizacja skryptu i atrybuty `defer` / `async`) oraz sekcję 4 i 6 (metoda `console.table()` i operator `typeof`) w pliku `teoria.md`.
- Pytanie naprowadzające: Dlaczego użycie atrybutu `defer` w sekcji `<head>` jest lepszą praktyką niż umieszczanie skryptu bez atrybutów w tej samej sekcji?
- DevTools: Sprawdź w konsoli, jak elegancko metoda `console.table()` wyświetla indeksy i wartości elementów w porównaniu do standardowego `console.log()`.

## Treść do wpisania
W pliku `script.js` użyj dokładnie następujących dosłownych tekstów i wartości:
- Tytuł księgarni w stałej `NAZWA_KSIEGARNI`: `"Kameralna Księgarnia i Kawiarnia Książka i Kawa"`
- Liczba nowości na półce w stałej `LICZBA_NOWOSCI`: `14`
- Status otwarcia w zmiennej `czyOtwarte`: `true`
- Tablica bestsellerów w stałej `bestsellery`: `["Czysty Kod", "Algorytmy bez tajemnic", "JavaScript dla dociekliwych"]`
- Komunikat powitalny w `console.log()`: `"System księgarni Książka i Kawa został pomyślnie zainicjalizowany."`
- Sprawdzenie typu w `console.info()` — **nie wpisuj słowa `boolean` ręcznie**; użyj konkatenacji z `typeof`:
  ```javascript
  console.info("Typ zmiennej czyOtwarte: " + typeof czyOtwarte + ".");
  ```
  Oczekiwany wynik w konsoli: `Typ zmiennej czyOtwarte: boolean.`

## Wymagania
1. W pliku `index.html` w sekcji `<head>` umieść znacznik dołączający zewnętrzny skrypt z atrybutem `defer`: `<script src="script.js" defer></script>` (w tym zadaniu **nie** używasz `document.write()`, więc `defer` jest poprawny).
2. W pliku `script.js`:
   - Zadeklaruj stałe `NAZWA_KSIEGARNI`, `LICZBA_NOWOSCI`, `bestsellery` oraz zmienną `czyOtwarte` z wartościami podanymi w sekcji "Treść do wpisania".
   - Wypisz powitanie za pomocą `console.log()`.
   - Sprawdź typ zmiennej `czyOtwarte` za pomocą operatora `typeof` i wbuduj go w komunikat `console.info()` przez konkatenację `+` (wzór w sekcji "Treść do wpisania").
   - Wypisz tablicę bestsellerów w czytelnej tabeli za pomocą metody `console.table(bestsellery)`.
3. Zapisz pliki i otwórz stronę w przeglądarce. W konsoli DevTools (F12) sprawdź obecność tabeli z indeksami (0, 1, 2) oraz tytułami książek.
4. Pamiętaj o zachowaniu guardrails semestru 1 (bez `getElementById`, `querySelector`, zdarzeń).
