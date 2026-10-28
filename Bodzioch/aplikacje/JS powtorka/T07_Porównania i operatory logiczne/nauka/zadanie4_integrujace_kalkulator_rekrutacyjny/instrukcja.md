# Zadanie 4: Kalkulator kwalifikacji rekrutacyjnej w akademii programowania

## Cel zadania

Celem zadania integrującego jest połączenie w jednym spójnym programie wszystkich poznanych dotąd mechanizmów: porównań relacyjnych, operatorów ścisłych (`===`, `!==`), koniunkcji `&&`, alternatywy `||` oraz negacji `!`. Dodatkowo uczeń zastosuje funkcję `prompt()` z obowiązkową wartością domyślną oraz dokona jawnej konwersji pobranego tekstu na typ liczbowy.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy rekrutacyjne i bootcampy technologiczne**: Automatyczna ocena zgłoszeń kandydatów na podstawie wyniku testu predyspozycji oraz złożonego portfolio.
2. **Kalkulatory zdolności kredytowej i ubezpieczeń (np. Rankomat, TotalMoney)**: Sprawdzanie czy klient spełnia kryterium dochodowe LUB posiada współkredytobiorcę, pod warunkiem braku wpisów w rejestrach dłużników (`!wRejestrzeDlugow`).
3. **Rekrutacja na uczelnie wyższe (systemy IRK / USOS)**: Kwalifikacja kandydata na podstawie punktów maturalnych z przedmiotów kierunkowych lub statusu laureata olimpiady.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Treść pytania w oknie dialogowym: `"Podaj wynik testu logicznego kandydata (0-100):"`
- Wartość domyślna w oknie dialogowym: `"75"`
- Minimalny próg punktowy ścieżki standardowej: `70`
- Próg punktowy bezpośredniego wstępu (ścieżka wyróżnienia): `90`
- Czy kandydat posiada ukończony projekt portfolio: `true`
- Czy kandydat ma status dyskwalifikacji regulaminowej: `false`
- Nagłówek raportu kwalifikacji: `"Akademia CodersFuture - Raport Kwalifikacji Stażowej"`
- Etykiety linii raportu:
  - `"Wynik testu logicznego: "`
  - `"Posiada projekt w portfolio: "`
  - `"Status dyskwalifikacji regulaminowej: "`
  - `"Ścieżka standardowa (wynik >= 70 && portfolio): "`
  - `"Ścieżka wyróżnienia (wynik >= 90): "`
  - `"Czy kandydat nie jest zdyskwalifikowany (!dyskwalifikacja): "`
  - `"Ostateczna decyzja kwalifikacyjna: "`

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Pobierz od użytkownika wynik testu za pomocą funkcji `prompt()` z pytaniem `"Podaj wynik testu logicznego kandydata (0-100):"` oraz wartością domyślną `"75"`.
3. Dokonaj konwersji pobranego ciągu na liczbę za pomocą `Number()` i przypisz do stałej `wynikPunktowy`.
4. Zadeklaruj stałe `posiadaPortfolio` (`true`) oraz `czyZdyskwalifikowany` (`false`).
5. Zdefiniuj zmienną logiczną `sciezkaStandardowa`: kandydat uzyskał wynik `>= 70` ORAZ posiada portfolio (`posiadaPortfolio === true`).
6. Zdefiniuj zmienną logiczną `sciezkaWyroznienia`: kandydat uzyskał wynik `>= 90`.
7. Zdefiniuj zmienną logiczną `brakDyskwalifikacji` za pomocą operatora negacji `!`: `!czyZdyskwalifikowany`.
8. Zdefiniuj ostateczną decyzję `zakwalifikowany`: kandydat spełnia dowolną ze ścieżek (`sciezkaStandardowa || sciezkaWyroznienia`) ORAZ nie jest zdyskwalifikowany (`brakDyskwalifikacji`).
9. Wypisz raport za pomocą `document.write()` do elementu `<div class="wynik">`. Każdą linijkę zakończ znacznikiem `"<br>"`.
10. Zarejestruj decyzję w konsoli deweloperskiej za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Wywołano funkcję `prompt()` z dwoma argumentami (tekstem pytania i wartością domyślną `"75"`).
- [ ] Zastosowano jawną konwersję do typu liczbowego za pomocą `Number()`.
- [ ] Poprawnie połączono operatory `>=`, `===`, `&&`, `||`, `!` (alternatywę ścieżek ujmij w nawiasach przed spięciem z `&&`).
- [ ] Wypisano dane do `<div class="wynik">` zgodnie ze standardem semestru 1.
- [ ] Brak użycia zakazanych konstrukcji (`var`, `getElementById`, `querySelector`).
- [ ] Skrypt przechodzi `node --check` bez błędów składniowych.
