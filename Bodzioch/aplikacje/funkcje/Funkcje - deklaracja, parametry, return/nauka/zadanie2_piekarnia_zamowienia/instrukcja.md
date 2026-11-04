# Zadanie 2: Funkcja z warunkiem i wczesnym wyjściem — Piekarnia rzemieślnicza

## 1. Cel zadania

Celem zadania jest opanowanie techniki wczesnego wyjścia (ang. *guard clause*) z funkcji przy użyciu instrukcji `return` oraz warunków logicznych `if`. Uczeń dowiaduje się, jak eliminować błędne dane wejściowe na początku funkcji oraz jak kategoryzować wielkości zamówień. Zadanie wprowadza również bezpieczne pobieranie danych wejściowych od użytkownika za pomocą funkcji `prompt()` z obowiązkową wartością domyślną umieszczonej **poza** ciałem funkcji obliczeniowej.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

- **Systemy ERP w zakładach produkcyjnych:** Automatyczne przeliczanie surowców magazynowych na podstawie wielkości zlecenia produkcyjnego z natychmiastowym odrzuceniem wartości ujemnych.
- **Kalkulatory cateringowe i gastronomiczne:** Dobór wielkości urządzeń kuchennych i pieców w zależności od liczby gości lub porcji.
- **Formularze zamówień w hurtowniach:** Weryfikacja minimalnej partii zamówienia i przypisanie odpowiedniej linii logistycznej.

---

## 3. Przygotowanie danych i struktura

W pliku `script.js` przygotujesz dwie wyspecjalizowane funkcje:
1. `obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek = 500)` — funkcja obliczająca wagę mąki w kilogramach; jeśli liczba bochenków jest mniejsza bądź równa zero, funkcja natychmiast zwraca `0`.
2. `okreslRozmiarPartii(liczbaBochenkow)` — funkcja kategoryzująca partię:
   - dla wartości `<= 0` zwraca `"Błędne dane partii"`,
   - dla `>= 200` zwraca `"Partia hurtowa (piec przemysłowy)"`,
   - dla `>= 50` zwraca `"Partia standardowa (piec wsadowy)"`,
   - w pozostałych przypadkach zwraca `"Partia próbna (piec rzemieślniczy)"`.

Pobranie danych realizowane jest poza funkcjami za pomocą:
`prompt("Podaj planowaną liczbę bochenków chleba:", "120")`

---

## Treść do wpisania

Tekst podsumowania wprowadzany do właściwości `textContent` musi zawierać następujące dosłowne nagłówki i etykiety:
- „Raport produkcyjny piekarni rzemieślniczej Złoty Kłos”
- „Planowany wypiek pieczywa wynosi: 120 bochenków”
- „Zapotrzebowanie na mąkę pszenną: 60.00 kg”
- „Zakwalifikowany tryb wypieku: Partia standardowa (piec wsadowy)”

---

## 5. Krok po kroku

1. **Krok 1:** Otwórz plik `script.js` i odszukaj sekcję pobierania danych. Zastosuj funkcję `prompt()` z wartością domyślną `"120"` i dokonaj konwersji do liczby całkowitej za pomocą `parseInt()`.
2. **Krok 2:** Zadeklaruj funkcję `obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek = 500)`.
3. **Krok 3:** Na początku funkcji umieść klauzulę strażniczą: jeśli `liczbaBochenkow <= 0`, natychmiast zwróć `0`.
4. **Krok 4:** Oblicz wynik w kilogramach: `(liczbaBochenkow * gramNaBochenek) / 1000` i zwróć go instrukcją `return`.
5. **Krok 5:** Zadeklaruj funkcję `okreslRozmiarPartii(liczbaBochenkow)` i użyj instrukcji `return` w każdym wariancie warunkowym.
6. **Krok 6:** Wywołaj obie funkcje dla pobranej liczby bochenków i zapisz wyniki do zmiennych pomocniczych.
7. **Krok 7:** Przygotuj wielowierszowy tekst raportu ze znakami `\n` i przypisz go do `document.getElementById("wynik").textContent`.
8. **Krok 8:** Wypisz zarejestrowany raport do konsoli deweloperskiej `console.log`.
9. **Krok 9:** Sprawdź działanie w przeglądarce podając wartość domyślną oraz wartość ujemną w celu weryfikacji klauzuli strażniczej.
