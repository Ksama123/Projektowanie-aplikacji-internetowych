# Zadanie 1: Konsola i skrypt wewnętrzny — Kawiarnia „Aroma & Espresso”

## Cel zadania
Celem zadania jest utworzenie pierwszego skryptu wewnętrznego osadzonego bezpośrednio w kodzie HTML za pomocą znacznika `<script>` oraz wyświetlenie podstawowych komunikatów diagnostycznych w konsoli narzędzi deweloperskich (DevTools). Nauczysz się deklarować stałe i zmienne opisujące stan kawiarni oraz wypisywać je za pomocą metod `console.log()` i `console.info()`.

Gdzie to się stosuje? (Przykłady ze świata aplikacji):
- Rejestrowanie startu aplikacji webowej w konsoli przeglądarki podczas inicjalizacji widoku.
- Podgląd stanu konfiguracji witryny (np. nazwa lokalu, liczba dostępnych stolików) przez programistów i testerów oprogramowania.
- Szybkie sprawdzanie poprawności wczytanych parametrów bez ingerencji w wygląd graficzny strony.

## Wskazówki aktywizujące
- Odsyłacz do teorii: Przeczytaj sekcję 1, 2 oraz 4 w pliku `teoria.md`, zwracając uwagę na różnicę między skryptem wewnętrznym a zewnętrznym oraz metody obiektu `console`.
- Pytanie naprowadzające: Dlaczego do zapisu nazwy kawiarni stosujemy słowo kluczowe `const`, a dla liczby wolnych stolików używamy `let`?
- Narzędzia DevTools: Po otwarciu pliku `index.html` w przeglądarce naciśnij klawisz **F12** i kliknij zakładkę **Console**, aby zobaczyć swoje komunikaty.

## Treść do wpisania
W skrypcie wewnętrznym w pliku `index.html` użyj dokładnie następujących dosłownych tekstów i wartości:
- Nazwa lokalu w stałej `NAZWA_KAWIARNI`: `"Kawiarnia Rzemieślnicza Aroma & Espresso"`
- Początkowa liczba wolnych stolików w zmiennej `wolneStoliki`: `8`
- Komunikat powitalny w `console.log()`: `"Inicjalizacja systemu obsługi zamówień kawiarni Aroma & Espresso."`
- Komunikat informacyjny w `console.info()`: `"Liczba wolnych stolików na sali głównej wynosi: 8."`

## Wymagania
1. Otwórz plik `index.html` w edytorze kodu.
2. W sekcji `<body>` pod przygotowaną kartą informacyjną znajdź komentarz `<!-- KROK 1: Wstaw skrypt wewnętrzny -->`.
3. Dodaj znacznik `<script>`, a w jego wnętrzu:
   - Zadeklaruj stałą `NAZWA_KAWIARNI` o wartości `"Kawiarnia Rzemieślnicza Aroma & Espresso"`.
   - Zadeklaruj zmienną `wolneStoliki` o wartości liczbowej `8`.
   - Wypisz do konsoli komunikat powitalny za pomocą metody `console.log()`.
   - Wypisz do konsoli informację o wolnych stolikach za pomocą metody `console.info()`.
4. Zapisz plik i otwórz go w przeglądarce internetowej. Otwórz konsolę klawiszem F12 i upewnij się, że komunikaty pojawiają się bez błędów.
5. Nie używaj zakazanego API (`getElementById`, `querySelector`, zdarzeń).
