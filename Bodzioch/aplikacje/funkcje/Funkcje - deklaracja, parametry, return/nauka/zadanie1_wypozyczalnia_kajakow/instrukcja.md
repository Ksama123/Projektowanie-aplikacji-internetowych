# Zadanie 1: Prosta funkcja obliczeniowa — Wypożyczalnia sprzętu wodnego

## 1. Cel zadania

Celem zadania jest utworzenie pierwszej nazwanej funkcji w języku JavaScript za pomocą słowa kluczowego `function`. Uczeń uczy się definiowania parametrów formalnych, wykonywania w ciele funkcji prostych operacji arytmetycznych, zwracania obliczonej wartości przez instrukcję `return` oraz wypisywania wyniku do elementu `#wynik` za pomocą właściwości `textContent`.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

- **Wypożyczalnie sprzętu i pojazdów (np. Traficar, Panek, rowery miejskie):** Centralna funkcja wyliczająca koszt wynajmu na podstawie czasu trwania wypożyczenia i cennika godzinowego.
- **Systemy parkingowe (np. e-Park, moBILET):** Funkcja przeliczająca opłatę za postój na podstawie rozpoczętych godzin parkowania.
- **Kalkulatory kurierskie:** Przeliczenie stawki bazowej za transport w zależności od gabarytu paczki.

---

## 3. Przygotowanie danych i struktura

W pliku `script.js` przygotowano zmienne z danymi dla dwóch klientów wypożyczalni. Twoim zadaniem jest zdefiniowanie funkcji `obliczKosztWynajmu(godziny, stawkaGodzinowa)`, która przyjmuje liczbę godzin oraz stawkę za jedną godzinę, oblicza iloczyn i zwraca wynik.

Następnie należy wywołać tę funkcję dla każdego klienta, przygotować wielowierszowy tekst podsumowania ze znakami `\n` i wpisać go do elementu o identyfikatorze `wynik`.

---

## Treść do wpisania

Tekst podsumowania wprowadzany do właściwości `textContent` musi zawierać następujące dosłowne nagłówki i etykiety:
- „Raport wypożyczalni sprzętu wodnego Przystań Fala”
- „Klient 1 — Czas wynajmu: 4 godz., Należność: 160.00 PLN”
- „Klient 2 — Czas wynajmu: 2 godz., Należność: 80.00 PLN”
- „Łączny utarg dzienny wynosi dokładnie 240.00 PLN”

---

## 5. Krok po kroku

1. **Krok 1:** Otwórz plik `script.js` i odszukaj komentarz `// KROK 1: Deklaracja funkcji obliczKosztWynajmu`.
2. **Krok 2:** Zadeklaruj funkcję o nazwie `obliczKosztWynajmu` przyjmującą dwa parametry: `godziny` oraz `stawkaGodzinowa`.
3. **Krok 3:** W ciele funkcji pomnóż `godziny * stawkaGodzinowa` i zwróć wynik za pomocą instrukcji `return`.
4. **Krok 4:** Wywołaj funkcję dla klienta pierwszego (4 godziny, stawka 40 PLN) i zapisz wynik do zmiennej `kosztKlient1`.
5. **Krok 5:** Wywołaj funkcję dla klienta drugiego (2 godziny, stawka 40 PLN) i zapisz wynik do zmiennej `kosztKlient2`.
6. **Krok 6:** Oblicz sumę `kosztCalkowity = kosztKlient1 + kosztKlient2`.
7. **Krok 7:** Zbuduj łańcuch znaków podsumowania używając szablonu tekstowego (template literal) i znaków nowej linii `\n`.
8. **Krok 8:** Wypisz podsumowanie do `document.getElementById("wynik").textContent` oraz zarejestruj kwotę łączną w `console.log`.
9. **Krok 9:** Otwórz plik `index.html` w przeglądarce i upewnij się klawiszem `F12`, że konsola jest wolna od błędów.
