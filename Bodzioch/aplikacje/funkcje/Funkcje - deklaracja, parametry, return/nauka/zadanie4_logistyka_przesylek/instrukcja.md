# Zadanie 4: Zadanie integrujące — Centrum spedycyjno-logistyczne

## 1. Cel zadania

Celem zadania integrującego jest połączenie poznanych do tej pory umiejętności (deklaracja funkcji, parametry formalne, wartości domyślne, wczesne wyjście z funkcji przez `return`, instrukcje warunkowe oraz pobieranie danych za pomocą `prompt()`) w jednej spójnej aplikacji obliczeniowej dla branży spedycyjnej.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

- **Systemy brokerskie przesyłek kurierskich (np. Furgonetka, Apaczka, InPost):** Automatyczny kalkulator wyceny paczki łączący wagę gabarytową, strefę doręczenia oraz rabaty handlowe.
- **Platformy spedycyjne i giełdy ładunków:** Dynamiczne wyznaczanie stawek przewozowych w zależności od tonażu i relacji transportowej.
- **Kalkulatory sklepowe (wysyłka zamówienia):** Dobór optymalnego kuriera i wyliczenie kosztu dostawy koszyka.

---

## 3. Przygotowanie danych i struktura

W pliku `script.js` stworzysz moduł wyceny przesyłki składający się z czterech współpracujących funkcji:
1. `obliczOplateWagowa(wagaKg, stawkaZaKg = 4)` — oblicza koszt wynikający z wagi paczki; stosuje klauzulę strażniczą (jeśli `wagaKg <= 0`, zwraca `0`).
2. `wyznaczDoplateStrefowa(nrStrefy)` — zwraca stałą dopłatę logistyczną:
   - strefa 1: `15.00` PLN,
   - strefa 2: `25.00` PLN,
   - strefa 3: `40.00` PLN,
   - domyślnie: `15.00` PLN.
3. `obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true)` — sumuje opłaty; jeśli `stalyKlient === true`, nalicza 10% rabatu (zwraca 90% sumy).
4. `formatujWalute(kwota, symbol = "PLN")` — pomocnicza funkcja formatująca kwotę do postaci dwóch miejsc po przecinku.

Pobranie danych:
Waga paczki pobierana jest poza funkcjami za pomocą:
`prompt("Podaj wagę przesyłki w kilogramach:", "15")`

---

## Treść do wpisania

Tekst podsumowania wprowadzany do właściwości `textContent` musi zawierać następujące dosłowne nagłówki i etykiety:
- „List przewozowy przesyłki kurierskiej — Trans-Pol Logistyka”
- „Waga przesyłki towarowej: 15.00 kg (opłata wagowa: 60.00 PLN)”
- „Dopłata za doręczenie w strefie 2: 25.00 PLN”
- „Przyznany rabat stałego klienta: 10% (oszczędność: 8.50 PLN)”
- „Ostateczny koszt doręczenia przesyłki: 76.50 PLN”

---

## 5. Krok po kroku

1. **Krok 1:** Pobierz wagę przesyłki od użytkownika za pomocą funkcji `prompt()` z wartością domyślną `"15"` i przekonwertuj ją na liczbę zmiennoprzecinkową `parseFloat()`.
2. **Krok 2:** Zdefiniuj stałą określającą numer strefy doręczenia (`const strefa = 2;`) oraz status stałego klienta (`const czyStalyKlient = true;`).
3. **Krok 3:** Zadeklaruj funkcję `obliczOplateWagowa(wagaKg, stawkaZaKg = 4)` z wczesnym wyjściem dla wag ujemnych lub równych zero.
4. **Krok 4:** Zadeklaruj funkcję `wyznaczDoplateStrefowa(nrStrefy)` przy użyciu instrukcji `switch` lub `if/else`.
5. **Krok 5:** Zadeklaruj funkcję `obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true)`.
6. **Krok 6:** Zadeklaruj funkcję pomocniczą `formatujWalute(kwota, symbol = "PLN")`.
7. **Krok 7:** Wywołaj kolejne funkcje i oblicz zaoszczędzoną kwotę rabatu: `(oplataWagowa + doplataStrefowa) - kosztKoncowy`.
8. **Krok 8:** Sformatuj pełny tekst listu przewozowego i przypisz go do `document.getElementById("wynik").textContent`.
9. **Krok 9:** Wypisz podsumowanie do `console.log` i zweryfikuj brak błędów w konsoli przeglądarki.
