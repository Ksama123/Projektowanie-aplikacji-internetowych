# Zadanie 5: Moduł wyceny projektu IT (Podsumowanie działu)

## Cel dydaktyczny
Całościowe podsumowanie i ugruntowanie wszystkich zagadnień modułu: deklaracji i nazewnictwa zmiennych oraz stałych, operacji na typach prymitywnych, badania typów za pomocą `typeof`, rygorystycznego rzutowania typów danych wejściowych oraz wieloetapowych kalkulacji arytmetycznych (roboczogodziny, podatek VAT, łączna wartość brutto).

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Generatory ofert i kalkulatory B2B**: Narzędzia na stronach software house'ów pozwalające klientowi oszacować koszt wdrożenia aplikacji na podstawie liczby godzin i stawek specjalistów.
2. **Systemy fakturujące i finansowo-księgowe**: Automatyczne wyliczanie kwot podatku VAT, zaokrągleń oraz sumowania pozycji kosztowych.
3. **Pulpity menedżerskie projektów (ERP/CRM)**: Prezentacja statusu projektu, budżetu oraz parametrów konfiguracyjnych w ujednoliconym formacie.

---

## Opis zadania
Dla agencji technologicznej *IT-Partner Solutions* przygotowujesz skrypt kalkulatora wyceny audytu i wdrożenia oprogramowania:
1. Zadeklaruj stałą `AGENCJA_NAZWA` o wartości `"IT-Partner Solutions"`.
2. Zadeklaruj stałą `STAWKA_VAT` o wartości `0.23` (23%).
3. Zadeklaruj wejściowe stałe tekstowe:
   - `tekstStawkaGodzinowa` o wartości `"160.00 PLN"`
   - `tekstLiczbaGodzin` o wartości `"40 godzin"`
   - `tekstRabatSpecjalny` o wartości `"200 PLN"`
4. Za pomocą `parseFloat()` sparsuj stawkę godzinową do zmiennej `stawkaGodzinowa`.
5. Za pomocą `parseInt(..., 10)` sparsuj liczbę godzin do zmiennej `liczbaGodzin`.
6. Za pomocą `parseInt(..., 10)` sparsuj kwotę rabatu do zmiennej `rabatSpecjalny`.
7. Wylicz bazową kwotę netto (`kwotaBaza = stawkaGodzinowa * liczbaGodzin`).
8. Wylicz ostateczną kwotę netto po odliczeniu rabatu (`kwotaNettoPoRabacie = kwotaBaza - rabatSpecjalny`).
9. Oblicz wartość podatku VAT (`kwotaVat = kwotaNettoPoRabacie * STAWKA_VAT`).
10. Oblicz łączną kwotę brutto (`kwotaBrutto = kwotaNettoPoRabacie + kwotaVat`).
11. Zadeklaruj zmienną `czyRabatNaliczony` o wartości `Boolean(rabatSpecjalny)` oraz `statusKoordynatora` o wartości `null`.
12. Przeprowadź audyt typów danych za pomocą operatora `typeof` w konsoli deweloperskiej.
13. Wypisz pełny raport wyceny na stronie w kontenerze `<div class="wynik">` za pomocą instrukcji `document.write()`.

---

## Treść do wpisania
W skrypcie umieść dosłownie następujące teksty:
- Nazwa agencji: `"IT-Partner Solutions"`
- Wpis do konsoli: `"Generowanie oficjalnego kosztorysu IT-Partner Solutions"`
- Raport wyceny na stronie:
  - `"Wykonawca: IT-Partner Solutions"`
  - `"Wycena bazowa: 40 godz. x 160 PLN = 6400 PLN"`
  - `"Zastosowany rabat: 200 PLN (naliczono: true)"`
  - `"Wartość netto po rabacie: 6200 PLN"`
  - `"Podatek VAT (23%): 1426 PLN"`
  - `"Ostateczna kwota brutto: 7626 PLN (typ: number)"`
  - `"Przypisany koordynator: null (typ: object)"`

---

## Wymagania techniczne
- Zachowaj dyscyplinę: `const` dla wartości niezmiennych, `let` dla obliczanych wartości.
- Wszystkie obliczenia muszą być wykonane na typach liczbowych po uprzednim sparsowaniu.
- Wypis na stronie realizuj wyłącznie za pomocą `document.write()`.
