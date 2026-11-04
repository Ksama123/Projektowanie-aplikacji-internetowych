# Zadanie 4: Zadanie integrujące — Kalkulator zamówień cateringu dietetycznego

## Cel zadania
Celem zadania jest zintegrowanie wiedzy z zadań 1, 2 i 3 w jednej, czytelnej aplikacji kalkulacyjnej. Połączysz jednoargumentową funkcję strzałkową do obliczania rabatów, wieloargumentową funkcję strzałkową z parametrem domyślnym dla kosztu dostawy oraz funkcję klasyfikującą pakiet z ciałem blokowym.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Platformy diet pudełkowych (np. Maczfit, Nice To Fit You, Dietly):** Automatyczne przeliczanie kwoty zamówienia w zależności od liczby dni, darmowej lub płatnej dostawy i rabatów długoterminowych.
2. **Katering eventowy i diety pracownicze:** Kalkulacja pakietów obiadowych dla korporacji z opcją weekendową.
3. **Abonamenty e-commerce:** Obliczanie oszczędności przy wyborze subskrypcji tygodniowej lub miesięcznej.

## Wymagania funkcjonalne
1. W pliku `script.js` pobierz od użytkownika liczbę dni diety za pomocą funkcji `prompt()` z **obowiązkową wartością domyślną**:
   ```javascript
   const wejscieDni = prompt("Podaj liczbę dni pakietu dietetycznego:", "5");
   ```
   Pamiętaj: wywołanie `prompt()` musi znajdować się **poza ciałem funkcji**. Skonwertuj wartość na liczbę `parseInt(wejscieDni, 10)` i zabezpiecz (gdy `isNaN` lub `< 1`, przyjmij `1`).
2. Zdefiniuj stałą `STAWKA_DZIENNA = 75` PLN za dzień diety.
3. Utwórz jednoargumentową funkcję strzałkową `obliczRabatDlugoterminowy` w zapisie skróconym (niejawny `return`):
   - jeśli `dni >= 14`, zwróć `0.10`,
   - w przeciwnym razie zwróć `0`.
   Możesz użyć operatora trójargumentowego: `dni => (dni >= 14 ? 0.10 : 0)`.
4. Utwórz funkcję strzałkową `obliczCeneCateringu(dni, stawkaZaDzien, kosztDostawyDzien = 12)`:
   - koszt wyżywienia = `dni * stawkaZaDzien`,
   - kwota rabatu = koszt wyżywienia × stopa z `obliczRabatDlugoterminowy`,
   - koszt dostawy = `dni * kosztDostawyDzien`,
   - zwróć: koszt wyżywienia − kwota rabatu + koszt dostawy.
5. Utwórz funkcję strzałkową z ciałem blokowym `okreslStatusPakietu(dni)`:
   - Jeśli `dni >= 20`, zwraca `"Pakiet miesięczny (Premium)"`.
   - W przeciwnym razie jeśli `dni >= 10`, zwraca `"Pakiet standardowy (Średni)"`.
   - W przeciwnym razie zwraca `"Pakiet próbny (Krótki)"`.
6. Zbuduj raport według obowiązkowego szablonu i przypisz go do `#wynik.textContent`.

## Treść do wpisania
Dla domyślnej wartości `5` dni (brak rabatu długoterminowego) raport musi wyglądać tak:

```text
=== FitCatering — System Zamówień Dietetycznych ===
Szczegóły pakietu dietetycznego
-----------------------------------------
Liczba dni diety: 5
Stawka dzienna menu: 75 PLN
Koszt bazowy wyżywienia: 375.00 PLN
Zastosowany rabat: 0% (-0.00 PLN)
Koszt dostawy (12.00 PLN/dzień): 60.00 PLN
-----------------------------------------
Koszt całkowity zamówienia z dostawą: 435.00 PLN
Status programu: Pakiet próbny (Krótki)
Informacja: Posiłki dostarczane codziennie w godzinach 5:00-7:00.
```

Gdy użytkownik poda inną liczbę dni, przelicz koszty i status według reguł z wymagań; układ linii raportu pozostaje ten sam.

## Podpowiedź / Wskazówki składniowe
- Połącz funkcje pomocnicze w głównym nurcie skryptu:
  ```javascript
  const kosztCalkowity = obliczCeneCateringu(dni, STAWKA_DZIENNA);
  const status = okreslStatusPakietu(dni);
  ```
- Wszystkie zmienne definiuj za pomocą `const` (dla stałych i funkcji) oraz `let` (dla wartości przeliczanych).
