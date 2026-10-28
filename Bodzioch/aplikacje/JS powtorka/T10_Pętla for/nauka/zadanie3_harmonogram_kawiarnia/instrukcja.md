# Zadanie 3: Harmonogram dostaw ziaren w kawiarni

## 1. Cel zadania
Celem ćwiczenia jest połączenie pętli `for` z instrukcją warunkową `if / else` oraz zliczaniem zdarzeń za pomocą licznika. Stworzysz skrypt generujący 7-dniowy grafik zaopatrzenia kawiarni w ziarna kawy, w którym w dni parzyste przyjeżdża dostawa z lokalnej palarni rzemieślniczej, a w dni nieparzyste realizowana jest dostawa standardowa.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Aplikacje gastronomiczne i POS (np. Dotykacka, Storyous):** planowanie cyklicznych dostaw świeżych produktów w wybrane dni tygodnia.
- **Systemy kalendarza i rezerwacji (np. Booksy, Calendly):** wyróżnianie dni roboczych, weekendów lub dyżurów o podwyższonej stawce.
- **Platformy e-commerce:** wyliczanie przewidywanej daty doręczenia z pominięciem dni wolnych lub z uwzględnieniem dostaw weekendowych.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałą `LICZBA_DNI_TYGODNIA` o wartości `7`.
2. Przed pętlą utwórz zmienną `licznikDostawRzemieslniczych` zainicjalizowaną wartością `0`.
3. Skonstruuj pętlę `for` ze zmienną sterującą `dzien` iterującą od `1` do `LICZBA_DNI_TYGODNIA` ze skokiem o `1`.
4. Wewnątrz pętli sprawdź przy użyciu operatora modulo `%`, czy dzień jest parzysty (`dzien % 2 === 0`):
   - Jeśli tak: zwiększ `licznikDostawRzemieslniczych` o 1 i wypisz akapit o dostawie z palarni rzemieślniczej.
   - Jeśli nie: wypisz akapit o dostawie standardowej.
5. Po zakończeniu pętli wypisz podsumowanie z łączną liczbą zrealizowanych dostaw rzemieślniczych.

## Treść do wpisania
Dokładne szablony wypisu (skopiuj do `document.write`):
- Dzień parzysty: `` `<p>Harmonogram kawiarni — Dzień nr ${dzien} — Dostawa z palarni rzemieślniczej (ziarna Speciality)</p>` ``
- Dzień nieparzysty: `` `<p>Harmonogram kawiarni — Dzień nr ${dzien} — Dostawa standardowa (ziarna klasyczne)</p>` ``
- Podsumowanie: `` `<p><strong>Łączna liczba dostaw ziaren Speciality w tygodniu wynosi: ${licznikDostawRzemieslniczych}</strong></p>` ``

## 5. Wskazówki techniczne
- Pamiętaj, aby licznik `licznikDostawRzemieslniczych` zadeklarować **przed** pętlą, a nie w jej wnętrzu.
- Wyrażenie `dzien % 2 === 0` sprawdza, czy reszta z dzielenia przez 2 wynosi 0 (liczba parzysta). Analogicznie `dzien % 2 !== 0` oznacza liczbę nieparzystą.
