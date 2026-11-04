# Zadanie 3: Parametry domyślne i formatowanie — Warsztat samochodowy

## 1. Cel zadania

Celem zadania jest przećwiczenie definiowania funkcji wieloparametrowych z parametrami domyślnymi oraz tworzenie funkcji pomocniczych formatujących liczby do postaci czytelnych napisów walutowych. Uczeń uczy się rozbijania problemu na mniejsze funkcje jednorodne (obliczenie kwoty, obliczenie podatku, formatowanie tekstu).

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

- **Systemy fakturowania i rozliczeń (np. Fakturownia, wFirma):** Podstawowe funkcje kalkulacji podatku VAT z domyślną stawką 23% i opcją zmiany na stawki obniżone (8%, 5%).
- **Sklepy internetowe (e-commerce):** Moduły formatujące surowe liczby zmiennoprzecinkowe do estetycznych etykiet cenowych z symbolem waluty.
- **Kalkulatory kosztorysowe w budownictwie i motoryzacji:** Sumowanie kosztów robocizny i materiałów.

---

## 3. Przygotowanie danych i struktura

W pliku `script.js` przygotujesz trzy niezależne funkcje:
1. `obliczSumeNetto(cenaRobocizny, cenaCzesci)` — zwraca sumę dwóch wartości.
2. `obliczPodatekVat(kwotaNetto, stawkaVat = 0.23)` — zwraca wartość podatku VAT (iloczyn kwoty netto i stawki).
3. `formatujCene(kwota, waluta = "PLN")` — zaokrągla liczbę do dwóch miejsc po przecinku (`toFixed(2)`) i dołącza symbol waluty.

Dane wejściowe zadania:
- Koszt robocizny: `250` PLN
- Koszt części zamiennych: `400` PLN
- Domyślna stawka VAT: `0.23`

---

## Treść do wpisania

Tekst podsumowania wprowadzany do właściwości `textContent` musi zawierać następujące dosłowne nagłówki i etykiety:
- „Kosztorys naprawy pojazdu — Warsztat Auto-Centrum”
- „Koszt robocizny serwisowej: 250.00 PLN”
- „Koszt części zamiennych: 400.00 PLN”
- „Suma netto: 650.00 PLN, Podatek VAT (23%): 149.50 PLN”
- „Łączna kwota do zapłaty brutto: 799.50 PLN”

---

## 5. Krok po kroku

1. **Krok 1:** Otwórz plik `script.js` i zadeklaruj funkcję `obliczSumeNetto(cenaRobocizny, cenaCzesci)`. Funkcja zwraca sumę obu parametrów.
2. **Krok 2:** Zadeklaruj funkcję `obliczPodatekVat(kwotaNetto, stawkaVat = 0.23)`. Funkcja zwraca iloczyn `kwotaNetto * stawkaVat`.
3. **Krok 3:** Zadeklaruj funkcję `formatujCene(kwota, waluta = "PLN")`. Funkcja zwraca szablon tekstowy: `${kwota.toFixed(2)} ${waluta}`.
4. **Krok 4:** W głównym programie zadeklaruj zmienne z danymi kosztorysu (`cenaRobocizny = 250`, `cenaCzesci = 400`).
5. **Krok 5:** Wywołaj funkcję `obliczSumeNetto`, a jej wynik przekaż do wywołania funkcji `obliczPodatekVat`.
6. **Krok 6:** Oblicz kwotę brutto jako sumę netto i podatku VAT.
7. **Krok 7:** Użyj funkcji `formatujCene` do sformatowania wszystkich kwot w raporcie.
8. **Krok 8:** Wypisz gotowy raport do `document.getElementById("wynik").textContent` oraz zarejestruj kwotę brutto w `console.log`.
9. **Krok 9:** Przetestuj działanie w przeglądarce i zweryfikuj czy konsola nie zawiera błędów.
