# Zadanie 4: Kalkulator zamówień biletów teatralnych

## 1. Cel zadania
Zadanie integruje poznane dotychczas zagadnienia: pętlę `for`, instrukcję warunkową `if / else` oraz wzorzec sumatora (akumulacji wartości). Zbudujesz moduł kalkulatora zamówienia grupowego dla teatru, który przelicza koszt kolejnych biletów, nalicza zniżkę grupową dla biletów powyżej określonego progu i oblicza łączną kwotę do zapłaty.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Serwisy sprzedaży biletów (np. eWejściówki, Kicket):** koszyk rezerwacji wieloosobowych z automatycznym naliczaniem zniżek pakietowych.
- **Systemy parkomatów i opłat miejskich:** naliczanie opłat za kolejne godziny parkowania z progami taryfowymi (np. pierwsza godzina taniej, kolejne w pełnej stawce).
- **Firmy kurierskie (np. InPost, DPD):** kalkulator wysyłki wielu paczek w jednej przesyłce zbiorczej z rabatem wolumenowym.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` pobierz liczbę rezerwowanych biletów za pomocą funkcji `prompt()` z obowiązkową wartością domyślną "5" i skonwertuj ją na liczbę:
   `const LICZBA_BILETOW = Number(prompt("Podaj liczbę rezerwowanych biletów teatralnych:", "5"));`
   oraz zadeklaruj stałe cenowe:
   - `CENA_STANDARDOWA = 45` (zł)
   - `CENA_RABATOWA = 35` (zł, dla biletów powyżej 3. sztuki)
2. Przed pętlą zadeklaruj zmienną `lacznyKosztZamowienia` zainicjalizowaną wartością `0`.
3. Skonstruuj pętlę `for` ze zmienną sterującą `bilet` od `1` do `LICZBA_BILETOW` włącznie.
4. W ciele pętli:
   - Jeśli numer biletu jest mniejszy lub równy `3` (`bilet <= 3`), koszt wynosi `CENA_STANDARDOWA`.
   - Jeśli numer biletu jest większy niż `3`, koszt wynosi `CENA_RABATOWA`.
   - Dodaj koszt danego biletu do zmiennej `lacznyKosztZamowienia`.
   - Wypisz akapit z numerem biletu, stawką oraz aktualnym stanem rachunku (`${lacznyKosztZamowienia}`).
5. Po zakończeniu pętli wypisz akapit z podsumowaniem całkowitej kwoty zamówienia.

## Treść do wpisania
Dokładne szablony wypisu (skopiuj do `document.write`):
- Bilet standardowy: `` `<p>Bilet na spektakl wieczorny nr ${bilet} — Cena standardowa: 45 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>` ``
- Bilet z rabatem: `` `<p>Bilet na spektakl wieczorny nr ${bilet} — Cena z rabatem grupowym: 35 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>` ``
- Podsumowanie: `` `<p><strong>Całkowity koszt rezerwacji biletów teatralnych wynosi: ${lacznyKosztZamowienia} zł</strong></p>` ``

## 5. Wskazówki techniczne
- Najpierw powiększ sumator (`lacznyKosztZamowienia += kosztBiletu`), a dopiero potem wypisz wiersz — wtedy stan rachunku w komunikacie jest już aktualny.
- Podsumowanie całkowitego kosztu wypisz dopiero za klamrą zamykającą pętli `for`.
- Oczekiwana suma końcowa: **205 zł** (3 × 45 + 2 × 35).