# Zadanie 3: Walidacja parametrów przesyłki kurierskiej

## Cel zadania

Celem zadania jest opanowanie konstruowania warunków złożonych w instrukcjach `if` przy użyciu operatorów logicznych koniunkcji (`&&`) oraz negacji (`!`). Uczeń dowie się, w jaki sposób łączyć wiele kryteriów biznesowych w jedno wyrażenie logiczne i obsługiwać przypadki niestandardowe.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Sortownie i automaty paczkowe (np. InPost, DHL, DPD)**: Sprawdzanie czy paczka spełnia łącznie limit wagi i dopuszczalne wymiary skrytki.
2. **Systemy rezerwacji linii lotniczych (np. LOT, Ryanair)**: Weryfikacja czy bagaż podręczny mieści się w limitach wymiarów oraz czy nie zawiera przedmiotów niedozwolonych.
3. **Formularze rejestracyjne**: Sprawdzanie czy hasło ma odpowiednią długość, zawiera cyfrę oraz czy użytkownik zaznaczył obowiązkowy regulamin.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty komunikatów:
- Nazwa przewoźnika: `"Centrum Logistyczne SzybkiKurier"`
- Numer listu przewozowego: `"PL-KUR-89214"`
- Waga przesyłki w kilogramach: `18`
- Suma wymiarów w centymetrach (długość + szerokość + wysokość): `110`
- Flaga zawartości niebezpiecznej: `false`
- Komunikaty kwalifikacyjne:
  - `"Status przesyłki: Zaakceptowana do standardowego transportu kurierskiego."`
  - `"Status przesyłki: Odmowa przyjęcia - materiały niebezpieczne zabronione w sieci kurierskiej."`
  - `"Status przesyłki: Przekroczono gabaryty standardowe - wymagana wycena indywidualna cargo."`
- Etykiety i dokładny format wierszy raportu:
  - Nagłówek: nazwa przewoźnika (możesz użyć `<strong>`)
  - `"Numer listu przewozowego: "` + numer listu
  - `"Masa paczki: "` + waga + `" kg (maks. 30 kg)"`
  - `"Suma trzech wymiarów: "` + suma + `" cm (maks. 150 cm)"`
  - `"Zawartość niebezpieczna: "` + tekst `"TAK"` albo `"NIE"` (bez operatora `? :` — użyj osobnego `if / else`)
  - `"Decyzja dyspozytora: "` + status przesyłki

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe `nazwaPrzewoznika`, `numerListu`, `wagaPaczki`, `sumaWymiarow` oraz `czyNiebezpieczna` z wartościami zdefiniowanymi w sekcji „Treść do wpisania”.
3. Zadeklaruj zmienną `let statusPrzesylki = "";`.
4. Skonstruuj instrukcję warunkową z operatorami logicznymi:
   - W pierwszym warunku `if` sprawdź za pomocą operatora `&&` oraz `!`, czy paczka spełnia łącznie trzy warunki: waga <= 30, suma wymiarów <= 150 oraz brak materiałów niebezpiecznych (`!czyNiebezpieczna`). Jeśli tak, przypisz komunikat akceptacji do standardowego transportu.
   - W gałęzi `else if` sprawdź, czy paczka zawiera materiały niebezpieczne (`czyNiebezpieczna`). Jeśli tak, przypisz komunikat o odmowie przyjęcia.
   - W gałęzi `else` przypisz komunikat o przekroczeniu gabarytów i konieczności wyceny cargo.
5. Przygotuj tekst `"TAK"` / `"NIE"` dla flagi niebezpieczeństwa osobną instrukcją `if / else` (moduł nie obejmuje operatora warunkowego `? :`).
6. Wypisz raport dyspozytorski do kontenera `<div class="wynik">` za pomocą `document.write()`, kończąc każdą linię znacznikiem `"<br>"`.
7. Zarejestruj status w konsoli przeglądarki za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Zastosowano operatory logiczne `&&` oraz `!` wewnątrz instrukcji `if`.
- [ ] Poprawnie obsłużono trzy ścieżki decyzyjne (standardowa, niebezpieczna, ponadgabarytowa).
- [ ] Flaga niebezpieczeństwa wypisana jako `"TAK"` / `"NIE"` bez użycia operatora `? :`.
- [ ] Wynik wypisano za pomocą `document.write()` z jednostkami `kg` / `cm` i limitem w nawiasie.
- [ ] Skrypt przechodzi weryfikację składniową bez błędów w konsoli F12.
