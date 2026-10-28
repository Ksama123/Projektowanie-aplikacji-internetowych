# Zadanie 3: Kalkulator biletów w muzeum techniki i konwersje typów

## Cel dydaktyczny
Opanowanie jawnej konwersji typów w języku JavaScript za pomocą funkcji `Number()`, `parseInt()`, `parseFloat()`, `String()` oraz `Boolean()`. Zrozumienie, jak radzić sobie z danymi tekstowymi zawierającymi jednostki (np. `"45.50 zł"` czy `"3 bilety"`), oraz unikanie niechcianej konkatenacji przy sumowaniu wartości liczbowych.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy rezerwacji biletów online**: Pola formularzy HTML zwracają wartości jako ciągi tekstowe (`string`). Przed wyliczeniem sumy zamówienia dane muszą zostać bezbłędnie przekonwertowane na typ `number`.
2. **Kalkulatory kosztów wysyłki i koszyki e-commerce**: Odczytywanie parametrów wagi z jednostkami (np. `"2.5 kg"`) i parsowanie ich do postaci zmiennoprzecinkowej.
3. **Filtry wyszukiwarek**: Przekształcanie parametrów zapytania URL na typy liczbowe lub logiczne w celu precyzyjnego filtrowania bazy danych.

---

## Opis zadania
Jako programista serwisu biletowego *Muzeum ArcheoTech* masz za zadanie przetworzyć dane zakupu biletów przekazane w postaci ciągów tekstowych:
1. Zadeklaruj stałą `tekstCenaNormalny` o wartości `"42.50 PLN"`.
2. Zadeklaruj stałą `tekstCenaUlgowy` o wartości `"25.00 PLN"`.
3. Zadeklaruj stałą `tekstLiczbaNormalnych` o wartości `"2 bilety"`.
4. Zadeklaruj stałą `tekstLiczbaUlgowych` o wartości `"3 bilety"`.
5. Za pomocą funkcji `parseFloat()` sparsuj ceny jednostkowe do postaci liczb zmiennoprzecinkowych `cenaNormalny` oraz `cenaUlgowy`.
6. Za pomocą funkcji `parseInt()` z bazą dziesiętną (`10`) sparsuj liczbę biletów do postaci liczb całkowitych `liczbaNormalnych` oraz `liczbaUlgowych`.
7. Oblicz łączny koszt biletów normalnych (`kosztNormalne`) oraz ulgowych (`kosztUlgowe`), a następnie sumę całego zamówienia (`sumaCalkowita`).
8. Zadeklaruj zmienną `czyZamowienieOplacone` o wartości `Boolean(sumaCalkowita)` – sprawdź, czy kwota jest większa od zera (wartość `truthy`).
9. Wypisz raport zamówienia w konsoli oraz w kontenerze `<div class="wynik">` na stronie, prezentując sparsowane wartości i wyliczoną sumę.

---

## Treść do wpisania
W skrypcie umieść dosłownie następujące teksty:
- Nazwa instytucji: `"Muzeum Techniki i Nauki ArcheoTech"`
- Komunikat w konsoli: `"Przetwarzanie transakcji biletowej ArcheoTech"`
- Wypis podsumowania na stronie:
  - `"Instytucja: Muzeum Techniki i Nauki ArcheoTech"`
  - `"Bilety normalne: 2 szt. x 42.5 PLN = 85 PLN"`
  - `"Bilety ulgowe: 3 szt. x 25 PLN = 75 PLN"`
  - `"Łączna kwota do zapłaty: 160 PLN"`
  - `"Status gotowości do płatności: true"`

---

## Wymagania techniczne
- Zastosuj `parseFloat()` do parsowania cen oraz `parseInt(..., 10)` do parsowania liczby biletów.
- Zadbaj o prawidłowe typy zmiennych po konwersji – operacja dodawania musi wykonać dodawanie arytmetyczne, a nie sklejenie stringów.
- Wypis na stronie realizuj za pomocą instrukcji `document.write()`.
