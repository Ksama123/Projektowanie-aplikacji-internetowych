# Zadanie 2: Koniunkcja logiczna w kalkulatorze ulg biletowych

## Cel zadania

Celem zadania jest przećwiczenie budowania złożonych warunków logicznych przy użyciu operatora koniunkcji `&&` (AND). Uczeń dowie się, jak weryfikować przynależność wartości do przedziału liczbowego (np. wiek od 18 do 26 lat) oraz jak łączyć kryteria liczbowe ze stanem flagi logicznej typu `boolean`.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy sprzedaży biletów kolejowych i miejskich (np. PKP Intercity, Jakdojade)**: Sprawdzanie czy pasażer ma prawo do 51% ulgi studenckiej (wymagany wiek do 26 lat oraz posiadanie ważnego dokumentu).
2. **Bankowość elektroniczna (np. mBank, Santander)**: Weryfikacja sesji użytkownika (czy token autoryzacyjny jest ważny ORAZ czy adres IP klienta nie znajduje się na liście podejrzanych).
3. **Portale rekrutacyjne i ogłoszeniowe (np. Pracuj.pl, NoFluffJobs)**: Filtrowanie ofert pracy spełniających jednocześnie kryterium widełek płacowych oraz trybu pracy zdalnej.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Trasa przejazdu: `"Kraków Główny - Warszawa Centralna"`
- Wiek pasażera: `21`
- Ważność legitymacji studenckiej: `true`
- Cena biletu normalnego: `80`
- Nagłówek raportu biletowego: `"Kasa Biletowa TransKolej - Weryfikacja Ulgi Uczniowskiej"`
- Etykiety linii raportu:
  - `"Trasa przejazdu: "`
  - `"Wiek pasażera: "`
  - `"Czy wiek w przedziale ulgowym (18-26 lat): "`
  - `"Status ważności legitymacji: "`
  - `"Przyznano ulgę studencką (wiek && legitymacja): "`
  - `"Cena biletu ze zniżką 51%: "`

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe `trasaPrzejazdu`, `wiekPasazera`, `waznaLegitymacja` oraz `cenaNormalna` z wartościami określonymi w sekcji „Treść do wpisania”.
3. Zdefiniuj zmienną logiczną `wiekWPrzedziale`, która sprawdzi, czy wiek mieści się w przedziale od 18 do 26 lat za pomocą koniunkcji: `wiekPasazera >= 18 && wiekPasazera <= 26`.
4. Zdefiniuj zmienną logiczną `prawoDoUlgi`, łączącą warunek wieku ze sprawdzeniem ważności dokumentu: `wiekWPrzedziale && (waznaLegitymacja === true)`.
5. Zdefiniuj zmienną `cenaUlgowa`, która wynosi `cenaNormalna * 0.49` (cena po 51% zniżce).
6. Wypisz raport za pomocą `document.write()` do elementu `<div class="wynik">`. Każdą linijkę zakończ znacznikiem `"<br>"`.
7. Zarejestruj wyznaczone wartości w konsoli deweloperskiej za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Wykorzystano operator koniunkcji `&&` do sprawdzenia przedziału domkniętego.
- [ ] Połączono kryterium wiekowe ze statusem dokumentu za pomocą `&&`.
- [ ] Wszystkie deklaracje zrealizowano za pomocą `const` lub `let` (brak `var`).
- [ ] Wynik wypisano do `<div class="wynik">` zgodnie ze standardem semestru 1.
- [ ] Skrypt nie generuje błędów składniowych w konsoli przeglądarki.
