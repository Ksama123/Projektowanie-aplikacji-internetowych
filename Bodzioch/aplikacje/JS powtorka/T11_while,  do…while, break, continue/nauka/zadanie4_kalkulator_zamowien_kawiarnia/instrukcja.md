# Zadanie 4 (Integrujące): Rejestr sprzedaży w kawiarni rzemieślniczej

## 1. Cel zadania
Zadanie integruje kluczowe umiejętności nabyte w zadaniach 1–3: konstrukcję pętli warunkowej `while`, zliczanie i sumowanie wartości (wzorzec akumulatora), selektywne omijanie pozycji za pomocą `continue` oraz wczesne zakończenie obsługi po osiągnięciu progu budżetowego za pomocą `break`. Zbudujesz spójny moduł ewidencji zamówień w kawiarni.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Systemy POS (Point of Sale — np. Dotykacka, Storyous):** rejestracja pozycji na paragonie z możliwością wycofania pozycji przed zatwierdzeniem.
- **Sklepy internetowe:** obsługa koszyka zakupowego, w którym niektóre produkty są niedostępne (pominięcie), a łączna wartość zamówienia zamyka pulę promocyjną (przerwanie).
- **Aplikacje dostaw jedzenia (np. Uber Eats, Pyszne.pl):** sumowanie kwot zamówień kierowcy do osiągnięcia maksymalnej dziennej wypłaty gotówkowej.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałe:
   - `CENA_KAWY = 16` (zł za jedną kawę)
   - `LIMIT_UTARGU = 48` (zł — limit dzienny, po osiągnięciu którego zamykamy kasę)
2. Za pomocą funkcji `prompt()` z obowiązkową wartością domyślną `"6"` pobierz planowaną liczbę zamówień i przekonwertuj ją funkcją `Number()`:
   `const maxZamowien = Number(prompt("Podaj maksymalną liczbę zamówień na bieżącej zmianie:", "6"));`
3. Zadeklaruj zmienne pomocnicze:
   - `let numerZamowienia = 0;`
   - `let sumaSprzedazy = 0;` (akumulator przychodu)
   - `let wydaneKawy = 0;` (licznik wydanych napojów)
4. Utwórz pętlę `while`, która działa dopóki `numerZamowienia < maxZamowien`.
5. W każdej iteracji:
   - Zwiększ `numerZamowienia` o 1.
   - Jeśli `numerZamowienia === 2` (zamówienie anulowane), wypisz komunikat o anulowaniu i użyj instrukcji `continue`.
   - Zwiększ `sumaSprzedazy` o wartość `CENA_KAWY` oraz `wydaneKawy` o 1.
   - Wypisz komunikat informujący o zrealizowanym zamówieniu i aktualnym utargu.
   - Jeśli `sumaSprzedazy >= LIMIT_UTARGU`, wypisz komunikat o osiągnięciu limitu i przerwij pętlę instrukcją `break`.
6. Po zakończeniu pętli wypisz podsumowanie z liczbą wydanych kaw oraz łączną kwotą przychodu.

## Treść do wpisania
Dokładne teksty do umieszczenia w `document.write` (skopiuj dosłownie):
- Zrealizowane zamówienie: `` `<p>Zamówienie nr ${numerZamowienia} — wydano kawę latte (16 zł). Aktualny stan utargu: ${sumaSprzedazy} zł.</p>` ``
- Zamówienie anulowane: `"<p style=\"color: #f59e0b;\">Zamówienie nr 2 zostało anulowane przez klienta — pomijanie naliczania opłaty.</p>"`
- Osiągnięcie limitu utargu: `"<p style=\"color: #38bdf8;\">Osiągnięto zaplanowany limit utargu (minimum 48 zł) — zamknięcie kasy fiskalnej.</p>"`
- Podsumowanie po pętli: `` `<p><strong>Podsumowanie zmiany kawiarni: wydano łącznie ${wydaneKawy} kaw, a łączny przychód wynosi: ${sumaSprzedazy} zł.</strong></p>` ``

## 5. Wskazówki techniczne
- Zmienne `sumaSprzedazy` i `wydaneKawy` muszą być zainicjalizowane przed pętlą, aby ich wartości akumulowały się z iteracji na iterację.
- Przy cenie 16 zł za kawę, zamówienia 1, 3 i 4 dadzą łącznie 48 zł (3 kawy × 16 zł), co spowoduje zadziałanie warunku `break` przy zamówieniu nr 4.
- Zadbaj o to, by `document.write` podsumowania znalazło się już poza pętlą.
