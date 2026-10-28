# Zadanie 3: Kalkulator kosztów serwisu w warsztacie samochodowym

## Cel dydaktyczny
Opanowanie jawnej konwersji typów danych za pomocą funkcji `parseInt()` (z obowiązkową podstawą dziesiętną `10`), `parseFloat()` oraz konstruktora `Number()`. Uczeń uczy się bezpiecznego wyodrębniania wartości liczbowych z ciągów znaków zawierających jednostki (np. `"4 roboczogodziny"`, `"129.50 PLN"`), unikania błędów niechcianej konkatenacji tekstowej oraz weryfikowania poprawności danych za pomocą metody `Number.isNaN()`.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy kosztorysowe i warsztatowe**: Odczytywanie wartości z formularzy przyjęcia pojazdu, gdzie użytkownicy wpisują liczby z jednostkami ("5 litrów", "120 zł").
2. **Kalkulatory ubezpieczeń komunikacyjnych**: Przetwarzanie wieku kierowcy, pojemności silnika i stawek bazowych wprowadzonych w polach tekstowych.
3. **Aplikacje stacji kontroli pojazdów**: Walidacja odczytów z urządzeń pomiarowych i wykrywanie błędów pomiaru (`NaN`) przed wystawieniem zaświadczenia.

---

## Opis zadania
Jako programista serwisu pojazdów *AutoTech* stwórz moduł przeliczający koszt wymiany rozrządu i diagnostyki komputerowej:
1. Zdefiniuj zmienne wejściowe jako łańcuchy znaków (symulacja danych z formularza):
   - `czasPracyTekst = "4 roboczogodziny"`
   - `stawkaGodzinowaTekst = "150.00 PLN"`
   - `kosztCzesciTekst = "450.50 zł"`
   - `niepoprawnyRabatTekst = "brak rabatu"`
2. Wyodrębnij liczbę całkowitą godzin robocizny za pomocą `parseInt(czasPracyTekst, 10)`.
3. Wyodrębnij stawkę godzinową oraz koszt części za pomocą `parseFloat()`.
4. Oblicz koszt samej robocizny (iloczyn godzin i stawki).
5. Oblicz całkowity koszt serwisu (suma robocizny i części). Zadbaj o to, aby nastąpiło dodawanie liczb, a nie sklejanie tekstu!
6. Spróbuj przekonwertować `niepoprawnyRabatTekst` na liczbę za pomocą `Number()`. Sprawdź wynik za pomocą `Number.isNaN()` i zapisz wynik badania (np. w zmiennej oraz w `console.log`). Komunikat statusu rabatu ustaw **dokładnym tekstem z sekcji „Treść do wpisania”** poniżej — w tym module nie używamy `if` ani operatora `? :` (dane w zadaniu zawsze dają `NaN`).
7. Wypisz dane kontrolne w konsoli za pomocą `console.log()`.
8. Wyświetl sformatowane podsumowanie na stronie internetowej za pomocą `document.write()` wewnątrz kontenera `<div class="wynik">`. Każdy wiersz rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów w cudzysłowach w wyznaczonych miejscach:
- Komunikat w konsoli: `"AutoTech Serwis - przetwarzanie kosztorysu naprawy"`
- Wypis na stronie:
  - `"AutoTech Serwis - Karta Rozliczenia Zlecenia"`
  - `"Czas robocizny (parseInt): 4 godz."`
  - `"Stawka za godzinę (parseFloat): 150 PLN"`
  - `"Koszt części (parseFloat): 450.5 PLN"`
  - `"Łączny koszt robocizny: 600 PLN"`
  - `"Koszt całkowity do zapłaty: 1050.5 PLN"`
  - `"Status rabatu (Number.isNaN): wykryto brak liczby"`

---

## Wymagania techniczne
- Użyj `parseInt()` wyłącznie z drugim argumentem równym `10`.
- Użyj `parseFloat()` do konwersji stawek z częścią ułamkową.
- Do weryfikacji wartości `NaN` użyj `Number.isNaN()`, a nie przestarzałego `isNaN()`.
- Wypis na stronie wykonaj metodą `document.write()`. Zakaz korzystania z metod DOM.
