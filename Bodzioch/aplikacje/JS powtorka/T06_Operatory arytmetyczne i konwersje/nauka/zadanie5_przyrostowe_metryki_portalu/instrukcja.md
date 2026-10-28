# Zadanie 5 (Przyrostowe): Analityka i metryki czytelnictwa portalu

## Cel dydaktyczny
Zwieńczenie modułu i całościowe podsumowanie nabytych umiejętności w stałej domenie projektu: portalu usługowo-handlowego. Zadanie integruje parsowanie danych z ciągów znaków (`parseInt` z podstawą 10, `parseFloat`), operacje arytmetyczne na metrykach zaangażowania, przeliczanie jednostek czasu z użyciem `Math.floor` oraz operatora modulo `% 60`, aktualizację liczników za pomocą operatorów przypisania złożonego (`+=`) oraz weryfikację poprawności danych za pomocą `Number.isNaN()`.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy analityki internetowej (np. Google Analytics, Matomo)**: Przeliczanie sekundowych sesji użytkowników na czytelne formaty minutowe i sekundowe oraz kalkulacja wskaźników konwersji.
2. **Panele redakcyjne portali i systemów CMS (np. WordPress)**: Automatyczne szacowanie czasu czytania artykułu na podstawie liczby słów oraz wyliczanie indeksu popularności publikacji.
3. **Silniki rankingowe i rekomendacji treści**: Wyliczanie wag zaangażowania czytelników (wyświetlenia, polubienia, czas spędzony na stronie) w celu pozycjonowania artykułów na stronie głównej.

---

## Opis zadania
Jako programista frontendu portalu informacyjno-usługowego przygotuj moduł analityczny dla nowego artykułu w sekcji technologicznej:
1. Zadeklaruj stałe parametry artykułu:
   - `TYTUL_ARTYKULU = "Nowości w świecie technologii webowych"`
   - `lacznyCzasSekundy = 275` (łączny czas spędzony przez czytelników)
2. Zadeklaruj dane tekstowe pochodzące z nagłówków analitycznych:
   - `wyswietleniaTekst = "1420 odsłon"`
   - `ctrTekst = "4.75 procent"`
   - `blednaOcenaTekst = "brak ocen"`
3. Oblicz czas czytania w minutach i sekundach:
   - Minuty: za pomocą dzielenia całkowitego `Math.floor(lacznyCzasSekundy / 60)`.
   - Sekundy: za pomocą reszty z dzielenia `lacznyCzasSekundy % 60`.
4. Wyodrębnij liczbę odsłon jako liczbę całkowitą za pomocą `parseInt(wyswietleniaTekst, 10)`.
5. Wyodrębnij wskaźnik CTR jako liczbę zmiennoprzecinkową za pomocą `parseFloat(ctrTekst)`.
6. Zadeklaruj zmienną `punktyZaangazowania` równą początkowo liczbie odsłon. Następnie zwiększ ją o 180 punktów premii za pomocą operatora `+=`.
7. Zweryfikuj zmienną `blednaOcenaTekst`: spróbuj przekonwertować ją za pomocą `Number()`. Sprawdź poprawność za pomocą `Number.isNaN()` i zapisz wynik badania. Status walidacji ustaw **dokładnym tekstem z sekcji „Treść do wpisania”** — bez `if` i bez operatora `? :` (w tym zadaniu konwersja zawsze daje `NaN`).
8. Wypisz dane kontrolne w konsoli za pomocą `console.log()`.
9. Wyświetl sformatowane podsumowanie metryk na stronie internetowej za pomocą `document.write()` wewnątrz kontenera `<div class="wynik">`. Każdy wiersz rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów w cudzysłowach w wyznaczonych miejscach:
- Komunikat w konsoli: `"Portal Uslugowo-Handlowy - panel analityki czytelnictwa"`
- Wypis na stronie:
  - `"Portal Usługowo-Handlowy - Panel Metryk Artykułu"`
  - `"Tytuł artykułu: Nowości w świecie technologii webowych"`
  - `"Średni czas lektury (modulo): 4 min 35 s"`
  - `"Liczba odsłon (parseInt): 1420"`
  - `"Wskaźnik klikalności CTR: 4.75%"`
  - `"Zaktualizowane punkty zaangażowania: 1600 pkt"`
  - `"Weryfikacja oceny (Number.isNaN): błąd wartości liczbowej"`

---

## Wymagania techniczne
- Wypis na stronie realizuj wyłącznie za pomocą metody `document.write()`.
- Plik arkusza stylów w zadaniu Capstone stosuje jasną paletę kolorystyczną portalu (`#f1f5f9` / `#ffffff` / `#2563eb`).
- Kod musi być w 100% poprawny syntaktycznie i przechodzić `node --check`.
