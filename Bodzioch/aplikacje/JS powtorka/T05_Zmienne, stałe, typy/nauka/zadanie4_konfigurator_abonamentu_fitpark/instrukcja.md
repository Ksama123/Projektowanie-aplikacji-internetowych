# Zadanie 4: Konfigurator karnetu fitness (Zadanie integrujące)

## Cel dydaktyczny
Integracja wiedzy zdobytej w zadaniach 1, 2 oraz 3 w spójnej mini-aplikacji komercyjnej. Połączenie bezpiecznych deklaracji (`const`, `let`), dyscypliny typów danych (`string`, `number`, `boolean`), jawnej konwersji ciągów znaków na liczby, badania typów operatorem `typeof` oraz sformatowanego wypisu podsumowania umowy za pomocą szablonów literałowych.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Konfiguratory abonamentów i subskrypcji**: Kalkulatory wyboru planu (np. platformy streamingowe, karnety na siłownię, pakiety medyczne), gdzie użytkownik wybiera okres umowy i opcjonalne dodatki.
2. **Kalkulatory umów telekomunikacyjnych**: Zestawianie opłaty aktywacyjnej, abonamentu miesięcznego oraz zniżki studenckiej w jednym przejrzystym podsumowaniu.
3. **Panele rozliczeniowe klientów SaaS**: Przeliczanie stawek netto i brutto oraz weryfikacja poprawności formatów parametrów transakcji.

---

## Opis zadania
Wdrażasz moduł podsumowania umowy członkowskiej dla klubu fitness *FitPark Active*. Skrypt ma za zadanie przetworzyć parametry karnetu, sprawdzić ich poprawność typologiczną i wyliczyć całkowity koszt:
1. Zadeklaruj stałą `KLUB_NAZWA` o wartości `"Klub Fitness FitPark Active"`.
2. Zadeklaruj stałą `tekstOplataWpisowa` o wartości `"50 PLN"`. Sparsuj ją do liczby całkowitej `oplataWpisowa` za pomocą `parseInt()`.
3. Zadeklaruj stałą `tekstCenaMiesiac` o wartości `"129.90 PLN"`. Sparsuj ją do liczby zmiennoprzecinkowej `cenaMiesiac` za pomocą `parseFloat()`.
4. Zadeklaruj zmienną `liczbaMiesiecy` o wartości `6` (długość karnetu).
5. Zadeklaruj zmienną logiczną `czyDarmowyTrener` o wartości `true` (promocyjna sesja z trenerem w pakiecie).
6. Oblicz koszt łączny abonamentu: kwota opłaty wpisowej plus iloczyn liczby miesięcy i ceny miesięcznej. Wynik przypisz do zmiennej `kosztCalkowity`.
7. Zaokrąglij `kosztCalkowity` do dwóch miejsc po przecinku wzorem `Math.round(kosztCalkowity * 100) / 100` (bez tego JavaScript może wypisać `829.4000000000001` zamiast `829.4`).
8. Zbadaj typ zmiennych `kosztCalkowity` oraz `czyDarmowyTrener` za pomocą operatora `typeof` i wyświetl audyt w konsoli.
9. Wypisz kompletne zestawienie członkostwa na stronie w kontenerze `<div class="wynik">` za pomocą instrukcji `document.write()`.

---

## Treść do wpisania
W skrypcie umieść dosłownie następujące teksty:
- Nazwa klubu: `"Klub Fitness FitPark Active"`
- Komunikat w konsoli: `"Generowanie umowy członkowskiej FitPark Active"`
- Zestawienie na stronie:
  - `"Podsumowanie karnetu: Klub Fitness FitPark Active"`
  - `"Opłata wpisowa: 50 PLN"`
  - `"Abonament miesięczny: 129.9 PLN"`
  - `"Długość karnetu: 6 miesięcy"`
  - `"Bezpłatna sesja z trenerem: true (typ: boolean)"`
  - `"Łączny koszt karnetu: 829.4 PLN (typ: number)"`

---

## Wymagania techniczne
- Zastosuj `const` dla parametrów stałych i `let` dla zmiennych modyfikowalnych.
- Użyj `parseInt(..., 10)` i `parseFloat()` do konwersji tekstowych wartości wejściowych.
- Po obliczeniu kosztu zastosuj `Math.round(kosztCalkowity * 100) / 100`.
- Wypis na stronie zrealizuj za pomocą `document.write()` i literałów szablonowych (grawisy + `${...}`).
- Wyniki zaprezentuj w czytelnych wierszach ze znacznikiem `<br>`.
