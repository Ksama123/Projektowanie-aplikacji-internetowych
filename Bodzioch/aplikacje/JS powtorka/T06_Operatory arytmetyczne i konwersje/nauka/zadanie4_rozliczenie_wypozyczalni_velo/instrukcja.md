# Zadanie 4: Zintegrowany kalkulator wypożyczalni rowerów miejskich

## Cel dydaktyczny
Integracja umiejętności z zadań 1, 2 i 3 w ramach jednej mini-aplikacji: poprawne parsowanie danych wejściowych z ciągów tekstowych (`parseInt` z podstawą 10, `parseFloat`), zastosowanie operatorów arytmetycznych do obliczenia kosztu najmu, przeliczenie czasu w minutach na godziny i minuty za pomocą operatora modulo `%`, modyfikacja wartości zmiennej za pomocą operatorów przypisania złożonego (`+=`, `-=`) oraz estetyczny wypis sformatowanych danych w kontenerze `.wynik`.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Aplikacje miejskiego transportu współdzielonego (bike-sharing, hulajnogi)**: Zliczanie czasu trwania przejazdu, naliczanie opłaty startowej, minutowej oraz blokowanie kaucji zwrotnej.
2. **Systemy rezerwacji sprzętu turystycznego**: Integracja stawek dobowych, rabatów lojalnościowych i opłat za ubezpieczenie sprzętu.
3. **Kalkulatory parkingowe**: Wyliczanie pełnych godzin postoju oraz naliczanie opłat za rozpoczęte jednostki taryfowe.

---

## Opis zadania
Jako programista wypożyczalni rowerów miejskich *VeloCity* przygotuj skrypt podsumowujący rozliczenie klienta:
1. Zadeklaruj dane wejściowe jako łańcuchy znaków:
   - `czasTekst = "3 godziny"`
   - `stawkaTekst = "18.50 PLN"`
   - `kaucjaTekst = "50.00 PLN"`
2. Zadeklaruj stałą liczbę łącznych minut przejazdu `lacznyCzasMinuty = 195`.
3. Oblicz liczbę pełnych godzin za pomocą `Math.floor(lacznyCzasMinuty / 60)` oraz liczbę pozostałych minut za pomocą operatora modulo `lacznyCzasMinuty % 60`.
4. Wyodrębnij liczbę godzin wypożyczenia za pomocą `parseInt(czasTekst, 10)` oraz stawkę i kaucję za pomocą `parseFloat()`.
5. Zadeklaruj zmienną `kosztPrzejazdu` i oblicz iloczyn liczby godzin i stawki.
6. Zastosuj operator przypisania `+= 10`, aby doliczyć jednorazową opłatę serwisową.
7. Zastosuj operator przypisania `-= 5`, aby odliczyć promocyjny rabat weekendowy.
8. Oblicz łączną kwotę do pobrania przy wypożyczeniu (koszt przejazdu + kaucja zwrotna).
9. Wypisz dane kontrolne w konsoli za pomocą `console.log()`.
10. Wypisz raport końcowy na stronie internetowej za pomocą `document.write()` w kontenerze `<div class="wynik">`. Każdy wiersz rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów w cudzysłowach w wyznaczonych miejscach:
- Komunikat w konsoli: `"VeloCity Bike Sharing - generowanie podsumowania przejazdu"`
- Wypis na stronie:
  - `"Wypożyczalnia Rowerów Miejskich VeloCity"`
  - `"Czas przejazdu (modulo): 3 godz. 15 min."`
  - `"Stawka bazowa: 18.5 PLN/godz."`
  - `"Koszt po opłacie serwisowej i rabacie: 60.5 PLN"`
  - `"Kaucja zwrotna: 50 PLN"`
  - `"Łączna kwota pobrana z karty: 110.5 PLN"`

---

## Wymagania techniczne
- Wypis na stronie realizuj wyłącznie metodą `document.write()`. Zakaz korzystania z selektorów DOM.
- Przestrzegaj jawnej konwersji typów (`parseInt` z podstawą 10, `parseFloat`).
- Używaj `const` dla stałych i `let` dla zmiennych modyfikowanych. Całkowity zakaz słowa kluczowego `var`.
