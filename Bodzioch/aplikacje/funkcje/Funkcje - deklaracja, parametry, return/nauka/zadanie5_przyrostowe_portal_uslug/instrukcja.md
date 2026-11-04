# Zadanie 5: Przyrostowe Capstone — Portal Usługowo-Handlowy IT-Partner

## 1. Cel zadania

Celem zadania przyrostowego Capstone jest całościowe podsumowanie i zintegrowanie wiedzy z zakresu funkcji w języku JavaScript na potrzeby architektury Portalu Usługowo-Handlowego (IT-Partner). Uczeń tworzy wielomodułowy silnik kalkulacji zleceń technologicznych, oparty na hierarchii czystych funkcji obliczeniowych, klauzulach strażniczych (guard clauses) oraz precyzyjnym formatowaniu dokumentu rozliczeniowego.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

- **Portale usługowe i konfiguratory B2B (np. OVHcloud, Microsoft Azure, AWS):** Modularne kalkulatory wyliczające koszt usług chmurowych, hostingu i wsparcia inżynierskiego z uwzględnieniem kodów promocyjnych.
- **Systemy rezerwacji i wyceny usług serwisowych:** Dynamiczne przeliczanie roboczogodzin specjalistów IT z automatyczną weryfikacją kuponów rabatowych.
- **Elektroniczne generatory ofert handlowych:** Bezpieczne tworzenie sformatowanych kosztorysów w przeglądarce przed wysłaniem zamówienia.

---

## 3. Przygotowanie danych i struktura

W pliku `script.js` zbudujesz kompletny zestaw funkcji biznesowych portalu:
1. `obliczWyceneUslugi(liczbaGodzin, stawkaGodzinowa = 120)` — oblicza wartość bazową usługi na podstawie roboczogodzin; jeśli godziny lub stawka są mniejsze bądź równe zero, zwraca `0`.
2. `wyznaczUpustPromocyjny(kwotaNetto, kodKuponu)` — wyznacza kwotę rabatu:
   - dla kodu `"START20"`: 20% kwoty netto,
   - dla kodu `"IT10"`: 10% kwoty netto,
   - dla pozostałych kodów lub kwoty `<= 0`: `0`.
3. `obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23)` — oblicza kwotę brutto według wzoru: `(netto - rabat) * (1 + stawkaVat)`.
4. `formatujZloty(wartosc)` — funkcja formatująca kwotę do postaci `0.00 PLN`.

Dane zlecenia:
- Usługa: `"Wdrożenie i konfiguracja serwera w chmurze"`
- Czas realizacji: `8` godzin
- Stawka godzinowa: `120` PLN
- Zastosowany kod kuponu: `"START20"`

---

## Treść do wpisania

Tekst podsumowania wprowadzany do właściwości `textContent` musi zawierać następujące dosłowne nagłówki i etykiety:
- „Portal Usługowo-Handlowy IT-Partner — Specyfikacja Zlecenia”
- „Usługa: Wdrożenie i konfiguracja serwera w chmurze”
- „Czas realizacji: 8 godz. wg stawki: 120.00 PLN/godz.”
- „Wartość bazowa netto: 960.00 PLN”
- „Kupon rabatowy START20 — naliczony upust: 192.00 PLN”
- „Należność końcowa brutto (z 23% VAT): 944.64 PLN”

---

## 5. Krok po kroku

1. **Krok 1:** Zadeklaruj funkcję `obliczWyceneUslugi(liczbaGodzin, stawkaGodzinowa = 120)`. Wykorzystaj wczesne wyjście dla wartości nieprawidłowych.
2. **Krok 2:** Zadeklaruj funkcję `wyznaczUpustPromocyjny(kwotaNetto, kodKuponu)`. Użyj warunków logicznych do rozpoznania kodów `"START20"` oraz `"IT10"`.
3. **Krok 3:** Zadeklaruj funkcję `obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23)` zwracającą wartość brutto: najpierw odejmij rabat od netto, potem pomnóż wynik przez `(1 + stawkaVat)`.
4. **Krok 4:** Zadeklaruj funkcję `formatujZloty(wartosc)`.
5. **Krok 5:** W głównym nurcie programu przygotuj stałe opisujące zlecenie klienta.
6. **Krok 6:** Przelicz kolejno wartość netto, wartość upustu oraz należność brutto.
7. **Krok 7:** Utwórz wielowierszowy szablon specyfikacji zlecenia i przypisz go do `document.getElementById("wynik").textContent`.
8. **Krok 8:** Wypisz podsumowanie finansowe zlecenia do konsoli deweloperskiej `console.log`.
9. **Krok 9:** Otwórz plik `index.html` w przeglądarce i skontroluj poprawność obliczeń oraz brak błędów w konsoli `F12`.
