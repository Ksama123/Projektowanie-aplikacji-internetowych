# Zadanie 5 (Przyrostowe): Centrum zamówień online Pizzeria La Bella

## Cel zadania

Celem zadania przyrostowego jest całościowe zwieńczenie modułu poprzez implementację kompletnego silnika logicznego weryfikacji zamówień internetowych dla marki Pizzeria La Bella. Uczeń zintegruje wszystkie mechanizmy działu T07: operatory relacyjne, porównania ścisłe, koniunkcję `&&`, alternatywę `||`, negację `!` oraz interaktywne pobieranie danych za pomocą `prompt()` z wartością domyślną.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Aplikacje food delivery (np. Pyszne.pl, Uber Eats, Wolt)**: Weryfikacja minimalnej wartości koszyka dla danej restauracji oraz wyznaczanie kosztu dowozu na podstawie progów kwotowych.
2. **Kasy samoobsługowe w marketach gastronomicznych**: Automatyczne sprawdzanie czy zestaw spełnia warunki promocji dnia lub karty lojalnościowej.
3. **Systemy rezerwacji i zamówień cateringowych**: Blokowanie realizacji zamówień do stref wyłączonych z dowozu oraz walidacja kodów rabatowych.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Treść pytania w oknie dialogowym: `"Wprowadź kod promocyjny (lub pozostaw pusty):"`
- Wartość domyślna w oknie dialogowym: `"BELLA20"`
- Wartość pozycji koszyka: `110`
- Minimalny próg dostawy: `40`
- Próg bezpłatnej dostawy: `100`
- Status stałego klienta: `true`
- Status blokady rejonu dostawy: `false`
- Nagłówek raportu zamówienia: `"Pizzeria La Bella - Raport Walidacji Zamówienia Online"`
- Etykiety linii raportu:
  - `"Kwota pozycji w koszyku: "`
  - `"Wymóg minimalnej kwoty dostawy (>= 40 zł): "`
  - `"Wprowadzony kod promocyjny: "`
  - `"Czy kod promocyjny jest poprawny ('BELLA20' || 'START10'): "`
  - `"Prawo do darmowej dostawy (kwota >= 100 zł || stały klient): "`
  - `"Rejon dostawy aktywny (!zablokowany): "`
  - `"Zamówienie zatwierdzone do realizacji: "`

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Pobierz od klienta kod promocyjny za pomocą funkcji `prompt()` z pytaniem `"Wprowadź kod promocyjny (lub pozostaw pusty):"` i wartością domyślną `"BELLA20"`.
3. Zadeklaruj stałe `kwotaZamowienia` (`110`), `statusStalegoKlienta` (`true`) oraz `adresZablokowany` (`false`).
4. Zdefiniuj zmienną logiczną `kwotaMinimalnaSpelniona`, sprawdzającą czy `kwotaZamowienia >= 40`.
5. Zdefiniuj zmienną logiczną `kodPoprawny`, weryfikującą za pomocą alternatywy `||`, czy wpisany kod to `"BELLA20"` lub `"START10"`. Prawidłowy zapis to porównanie **po obu stronach** `||`: `(wpisanyKod === "BELLA20") || (wpisanyKod === "START10")` — nie wolno pisać `wpisanyKod === "BELLA20" || "START10"`.
6. Zdefiniuj zmienną logiczną `darmowaDostawa`: kwota zamówienia `>= 100` LUB klient ma status stałego klienta (`statusStalegoKlienta === true`).
7. Zdefiniuj zmienną logiczną `rejonAktywny` za pomocą negacji: `!adresZablokowany`.
8. Zdefiniuj ostateczną flagę zatwierdzenia `zamowienieZatwierdzone`: `kwotaMinimalnaSpelniona && rejonAktywny`.
   **Ważne:** flagi `kodPoprawny` oraz `darmowaDostawa` służą **tylko do raportu informacyjnego** (wypisujesz je na stronie). **Nie** wchodzą do warunku zatwierdzenia zamówienia — o realizacji decydują wyłącznie minimalna kwota oraz aktywny rejon dostawy.
9. Wypisz raport za pomocą `document.write()` do elementu `<div class="wynik">`. Każdą linijkę zakończ znacznikiem `"<br>"`. Nagłówek możesz wyróżnić `<strong>`, a kwoty uzupełnić jednostką `zł`.
10. Zarejestruj podsumowanie w konsoli deweloperskiej za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Wywołano funkcję `prompt()` z tekstem zachęty oraz wartością domyślną `"BELLA20"`.
- [ ] Zintegrowano operatory relacyjne (`>=`), ścisłej równości (`===`), `||`, `&&` oraz `!`.
- [ ] Wynik wypisano do `<div class="wynik">` zgodnie ze standardem semestru 1.
- [ ] Brak użycia zakazanych konstrukcji (`var`, `getElementById`, `querySelector`).
- [ ] Skrypt przechodzi `node --check` bez błędów składniowych.
