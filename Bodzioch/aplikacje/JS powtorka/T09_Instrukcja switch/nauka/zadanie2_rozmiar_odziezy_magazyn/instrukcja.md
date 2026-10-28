# Zadanie 2: Identyfikacja rozmiaru i strefy magazynowej odzieży

## Cel zadania
Celem ćwiczenia jest zastosowanie instrukcji `switch` do operowania na łańcuchach znaków (typ `String`). Nauczysz się definiować klauzule `case` z wartościami tekstowymi, właściwie stosować cudzysłowy oraz przekazywać precyzyjne komunikaty logistyczne z wykorzystaniem klauzuli `default`.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
Porównywanie kodów tekstowych w instrukcji `switch` jest standardem w systemach e-commerce i logistyce:
- **Sklepy internetowe z modą**: dobór wariantu rozmiarowego (XS, S, M, L, XL) oraz przypisanie odpowiedniej tabeli wymiarów.
- **Systemy WMS w magazynach wysyłkowych**: kategoryzacja gabarytów paczek według kodów literowych (A, B, C) i kierowanie ich na odpowiednie taśmy sortownicze.
- **Konfiguratory produktów**: wybór wersji kolorystycznej lub pakietu wyposażenia na podstawie kodu SKU.

## Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj zmienną `kodRozmiaru` i zainicjalizuj ją wartością tekstową `"M"`.
2. Zbuduj instrukcję `switch (kodRozmiaru)`, która obsłuży następujące warianty rozmiarowe:
   - Dla `"S"`: wyświetli informację o rozmiarze małym oraz lokalizacji w sektorze magazynowym A-01.
   - Dla `"M"`: wyświetli informację o rozmiarze średnim oraz lokalizacji w sektorze magazynowym B-04.
   - Dla `"L"`: wyświetli informację o rozmiarze dużym oraz lokalizacji w sektorze magazynowym C-08.
   - Dla `"XL"`: wyświetli informację o rozmiarze bardzo dużym oraz lokalizacji w sektorze magazynowym D-12.
   - Dla każdego innego kodu (`default`): wyświetli ostrzeżenie o nierozpoznanym symbolu rozmiaru.
3. Każda klauzula `case` musi kończyć się instrukcją `break;`.
4. Wynik wypisz na stronie w kontenerze `.wynik` z użyciem `document.write()` i `<br>`, oraz w konsoli przeglądarki `console.log()`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące teksty komunikatów:
- Dla wariantu "S": `"Rozmiar S (Small): Magazyn A-01, regał odzieży drobnej."`
- Dla wariantu "M": `"Rozmiar M (Medium): Magazyn B-04, regał odzieży standardowej."`
- Dla wariantu "L": `"Rozmiar L (Large): Magazyn C-08, regał odzieży standardowej."`
- Dla wariantu "XL": `"Rozmiar XL (Extra Large): Magazyn D-12, regał odzieży ponadgabarytowej."`
- Dla klauzuli default: `"Błąd: Nierozpoznany kod rozmiaru odzieży. Sprawdź etykietę produktu."`
