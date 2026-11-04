# Zadanie 2: Wieloargumentowe funkcje strzałkowe z parametrem domyślnym

## Cel zadania
Celem ćwiczenia jest opanowanie tworzenia funkcji strzałkowych przyjmujących wiele parametrów oraz stosowania parametrów z wartościami domyślnymi (ES6 Default Parameters). Zaimplementujesz moduł kalkulacji kosztu wynajmu samochodu z opcjonalnym pakietem ubezpieczenia.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Wypożyczalnie aut i car-sharing (np. Traficar, Panek, Sixt):** Automatyczne doliczanie opcjonalnych pakietów ochrony (redukcja udziału własnego w szkodzie) z domyślną stawką bazową.
2. **Systemy rezerwacji noclegów (np. Booking.com, Airbnb):** Doliczanie opłaty klimatycznej i sprzątania w zależności od liczby nocy.
3. **Firmy kurierskie:** Domyślne ubezpieczenie przesyłki do określonej wartości, z możliwością rozszerzenia.

## Wymagania funkcjonalne
1. W pliku `script.js` pobierz od użytkownika liczbę dób najmu za pomocą funkcji `prompt()` z **obowiązkową wartością domyślną**:
   ```javascript
   const wejscieDoby = prompt("Podaj liczbę dób wynajmu pojazdu:", "3");
   ```
   Pamiętaj: wywołanie `prompt()` musi znajdować się **poza ciałem funkcji**. Skonwertuj wartość na liczbę za pomocą `parseInt(wejscieDoby, 10)` i zabezpiecz przed błędną wartością (jeśli `isNaN` lub `< 1`, przyjmij `1`).
2. Zdefiniuj funkcję strzałkową `obliczKosztWynajmu`, która przyjmuje trzy parametry formalne:
   - `doby` (liczba dób),
   - `stawkaDoba` (stawka za dobę),
   - `ubezpieczenieDoba = 35` (parametr domyślny o wartości 35 PLN).
   W ciele funkcji oblicz koszt bazowy wynajmu (`doby * stawkaDoba`) oraz koszt ubezpieczenia (`doby * ubezpieczenieDoba`) i zwróć sumę całkowitą.
3. Utwórz funkcję strzałkową pomocniczą `formatujKwote = kwota => `${kwota.toFixed(2)} PLN``, która formatuje wartość liczbową do zapisu walutowego.
4. Wywołaj funkcję `obliczKosztWynajmu` dla pobranej liczby dób, stawki bazowej `180` PLN/doba oraz domyślnej stawki ubezpieczenia (nie podając trzeciego argumentu).
5. Zbuduj raport według obowiązkowego szablonu i wstaw go do `textContent` elementu `#wynik`.

## Treść do wpisania
Dla domyślnej wartości `3` dób raport musi mieć poniższy układ (kwoty pośrednie też są obowiązkowe):

```text
=== Wypożyczalnia Pojazdów AutoRent Express ===
Podsumowanie rezerwacji pojazdu
-----------------------------------------
Liczba dób najmu: 3
Stawka dobowa pojazdu: 180 PLN
Koszt podstawowy floty: 540.00 PLN
Pakiet ubezpieczenia: 35.00 PLN/doba (standard)
Koszt ubezpieczenia (3 dób): 105.00 PLN
-----------------------------------------
Łączny koszt rezerwacji brutto: 645.00 PLN
Status: Rezerwacja oczekuje na potwierdzenie.
```

Gdy użytkownik poda inną liczbę dób (np. `N`), zamień `3` na `N` oraz przelicz kwoty: flota = `N × 180`, ubezpieczenie = `N × 35`, brutto = suma obu.

## Podpowiedź / Wskazówki składniowe
- Składnia funkcji strzałkowej z wieloma parametrami i parametrem domyślnym:
  ```javascript
  const nazwaFunkcji = (parametr1, parametr2, parametrDomyslny = wartosc) => {
    return parametr1 * parametr2 + parametrDomyslny;
  };
  ```
- Przy wywołaniu pomiń trzeci argument (`obliczKosztWynajmu(doby, 180)`), aby silnik JavaScript automatycznie zastosował wartość domyślną `35`.
