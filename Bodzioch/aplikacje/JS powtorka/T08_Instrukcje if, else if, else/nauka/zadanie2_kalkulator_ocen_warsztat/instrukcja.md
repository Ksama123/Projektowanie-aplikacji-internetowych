# Zadanie 2: Klasyfikacja stanu pojazdu w stacji diagnostycznej

## Cel zadania

Celem zadania jest opanowanie wielowariantowej drabiny warunkowej `else if`. Uczeń dowie się, w jaki sposób szeregować progi liczbowe od najbardziej restrykcyjnych do najłagodniejszych oraz jak zapobiegać błędnemu przesłanianiu warunków w logice biznesowej.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy stacji kontroli pojazdów (np. CEPiK, Norcom)**: Automatyczne przypisywanie kategorii sprawności technicznej na podstawie liczby zaliczonych punktów kontrolnych.
2. **Platformy edukacyjne (np. Librus, Vulcan)**: Przeliczanie liczby punktów ze sprawdzianu na ocenę szkolną według zdefiniowanych progów procentowych.
3. **Kalkulatory ubezpieczeń komunikacyjnych (np. Rankomat, Mubi)**: Przypisywanie klasy ryzyka ubezpieczeniowego na podstawie historii szkodowości kierowcy.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Nazwa stacji: `"Stacja Kontroli Pojazdów AutoTech"`
- Numer rejestracyjny pojazdu: `"KR 7820X"`
- Model pojazdu: `"Toyota Corolla 1.8 Hybrid"`
- Liczba uzyskanych punktów sprawności: `82`
- Treść komunikatów kwalifikacyjnych:
  - Próg >= 90: `"Ocena A: Pojazd w stanie idealnym, dopuszczony bez uwag."`
  - Próg >= 70: `"Ocena B: Stan zadowalający, dopuszczony z drobnymi zaleceniami eksploatacyjnymi."`
  - Próg >= 50: `"Ocena C: Wymagana naprawa układu przed wydaniem certyfikatu."`
  - Poniżej 50: `"Ocena D: Stan krytyczny, bezwzględny zakaz dalszej eksploatacji pojazdu."`
- Etykiety i dokładny format wierszy raportu:
  - Nagłówek: nazwa stacji (możesz użyć `<strong>`)
  - `"Pojazd badany: "` + model pojazdu
  - `"Numer rejestracyjny: "` + numer rejestracyjny
  - `"Punkty sprawności: "` + punkty + `" / 100 pkt"`
  - `"Wynik diagnostyki: "` + komunikat oceny

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe `nazwaStacji`, `numerRejestracyjny`, `modelPojazdu` oraz `punktySprawnosci` z wartościami zdefiniowanymi w sekcji „Treść do wpisania”.
3. Zadeklaruj zmienną `let wynikDiagnostyki = "";`.
4. Zbuduj drabinę warunkową `if / else if / else` sprawdzającą progi punktowe od najwyższego (90) do najniższego:
   - Jeśli `punktySprawnosci >= 90`, przypisz komunikat dla Oceny A.
   - W przeciwnym razie, jeśli `punktySprawnosci >= 70`, przypisz komunikat dla Oceny B.
   - W przeciwnym razie, jeśli `punktySprawnosci >= 50`, przypisz komunikat dla Oceny C.
   - W pozostałych przypadkach (`else`), przypisz komunikat dla Oceny D.
5. Wypisz raport do kontenera `<div class="wynik">` za pomocą `document.write()`, oddzielając poszczególne wiersze znacznikiem `"<br>"`.
6. Zarejestruj w konsoli (`console.log`) nazwę stacji, numer rejestracyjny oraz wynik diagnostyki.

## Kryteria sukcesu / definicja ukończenia

- [ ] Zastosowano drabinę warunkową `else if` z poprawną kolejnością sprawdzania progów (90 -> 70 -> 50 -> else).
- [ ] Wynik wyprowadzono za pomocą `document.write()` z użyciem `"<br>"` oraz dopiskiem `" / 100 pkt"`.
- [ ] Zmienne zadeklarowano przy użyciu `const` i `let` (brak `var`).
- [ ] W konsoli F12 pojawia się wpis z oceną (`console.log`).
- [ ] Skrypt przechodzi audyt składniowy bez błędów w konsoli przeglądarki.
