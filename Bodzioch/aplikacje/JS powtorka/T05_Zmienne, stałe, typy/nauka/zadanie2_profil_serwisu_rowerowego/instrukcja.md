# Zadanie 2: Profil zlecenia serwisu rowerowego i badanie typów

## Cel dydaktyczny
Zapoznanie się z operacjami badania typów za pomocą wbudowanego operatora `typeof`, zrozumienie różnic między wartościami `undefined` i `null` oraz stosowanie typu logicznego (`boolean`) jako flagi stanu. Przećwiczenie konstrukcji literałów szablonowych do budowy szczegółowych raportów diagnostycznych.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy rezerwacji i warsztatowe**: Sprawdzanie, czy klient wybrał usługę ekspresową (flaga logiczna `true`/`false`) oraz czy przypisano mechanika (wartość `null` oznaczająca brak przypisania).
2. **Formularze logowania i rejestracji**: Weryfikacja typu odczytanych danych przed ich przetworzeniem i walidacją.
3. **Panele monitorowania urządzeń IoT**: Analiza stanu czujników (wartość `undefined` dla czujnika, który jeszcze nie przesłał pierwszego pomiaru).

---

## Opis zadania
Tworzysz moduł rejestracji zgłoszenia serwisowego dla punktu naprawy rowerów *VeloFix*. Skrypt powinien zainicjalizować dane zlecenia, zidentyfikować ich typy za pomocą operatora `typeof` i zaprezentować je w czytelnej formie:
1. Zadeklaruj stałą `modelRoweru` o wartości `"Trek Marlin 7"`.
2. Zadeklaruj stałą `rokProdukcji` o wartości `2023`.
3. Zadeklaruj zmienną `czyWymianaLancucha` o wartości `true`.
4. Zadeklaruj zmienną `uwagiKlienta` bez przypisywania wartości początkowej (będzie miała wartość `undefined`).
5. Zadeklaruj zmienną `przypisanyMechanik` o wartości `null` (brak wyznaczonego mechanika).
6. Przy użyciu operatora `typeof` zbadaj typ każdej z pięciu zmiennych i zapisz wyniki w konsoli deweloperskiej.
7. Wypisz raport serwisowy na stronie w kontenerze `<div class="wynik">` za pomocą instrukcji `document.write()`, podając nazwę parametru, jego wartość oraz wykryty typ danych.

---

## Treść do wpisania
W skrypcie umieść dosłownie następujące teksty:
- Nazwa modelu: `"Trek Marlin 7"`
- Komunikat w konsoli: `"Audyt typów danych zlecenia serwisowego VeloFix"`
- Etykiety raportu na stronie:
  - `"Model roweru: Trek Marlin 7 (typ: string)"`
  - `"Rok produkcji: 2023 (typ: number)"`
  - `"Wymiana łańcucha: true (typ: boolean)"`
  - `"Uwagi klienta: undefined (typ: undefined)"`
  - `"Przypisany mechanik: null (typ: object)"`

---

## Wymagania techniczne
- Wartości stałe zadeklaruj przez `const`, a flagi i dane modyfikowalne przez `let`.
- Pamiętaj, że `typeof null` zwraca ciąg `"object"` – jest to oczekiwane zachowanie silnika JavaScript.
- Wypis na stronie realizuj wyłącznie za pomocą `document.write()`.
