# Zadanie 1: Prosty wybór wariantu menu w kawiarni

## Cel zadania
Celem ćwiczenia jest opanowanie podstawowej konstrukcji instrukcji `switch` w języku JavaScript. Nauczysz się definiować poszczególne klauzule `case` dla liczb całkowitych, stosować instrukcję `break` do kontrolowanego opuszczania bloku oraz obsługiwać nieprzewidziane wartości za pomocą klauzuli `default`.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
Instrukcja `switch` sprawdzająca kody numeryczne jest powszechnie stosowana w systemach samoobsługowych i aplikacjach użytkowych:
- **Paczkomaty i terminale samoobsługowe**: wybór języka interfejsu (1 — Polski, 2 — English, 3 — Deutsch) lub operacji (1 — Odbierz, 2 — Nadaj, 3 — Zwróć).
- **Automaty vendingowe i ekspresy kawowe**: przypisanie kodu napoju wybranego na panelu numerycznym do odpowiedniego przepisu parzenia.
- **Systemy telefoniczne IVR**: menu głosowe („Wybierz 1 dla działu obsługi klienta, 2 dla działu reklamacji”).

## Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj zmienną `numerNapoju` i przypisz jej początkową wartość liczbową `1`.
2. Zbuduj instrukcję `switch (numerNapoju)`, która w zależności od podanego numeru wyświetli odpowiedni komunikat:
   - Dla wartości `1`: komunikat o wybranej kawie Espresso i cenie 9 zł.
   - Dla wartości `2`: komunikat o wybranej kawie Latte i cenie 14 zł.
   - Dla wartości `3`: komunikat o wybranej herbacie Earl Grey i cenie 11 zł.
   - Dla każdej innej wartości (`default`): ostrzeżenie o nieprawidłowym numerze pozycji z menu.
3. Każda klauzula `case` musi kończyć się instrukcją `break;`.
4. Wynik wypisz na stronie za pomocą `document.write()` z użyciem znacznika `<br>` oraz wypisz kontrolnie do konsoli `console.log()`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące teksty komunikatów:
- Dla pozycji 1: `"Wybrano: Kawa Espresso — intensywny napar, cena 9 zł."`
- Dla pozycji 2: `"Wybrano: Kawa Latte — delikatna z mleczną pianką, cena 14 zł."`
- Dla pozycji 3: `"Wybrano: Herbata Earl Grey — klasyczna herbata z bergamotką, cena 11 zł."`
- Dla klauzuli default: `"Błąd: Wybrana pozycja nie istnieje w aktualnym menu kawiarni."`
