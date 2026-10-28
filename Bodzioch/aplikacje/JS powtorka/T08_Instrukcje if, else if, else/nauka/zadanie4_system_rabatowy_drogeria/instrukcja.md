# Zadanie 4: System naliczania rabatów w drogerii internetowej

## Cel zadania

Celem zadania jest zintegrowanie wiedzy z zadań 1–3 w spójnej mini-aplikacji e-commerce: łączenie podstawowej instrukcji warunkowej `if / else`, drabiny progowej `else if` oraz warunków złożonych z operatorami logicznymi `&&`. Uczeń nauczy się przeprowadzać wieloetapowe rozliczenie transakcji handlowej.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Koszyki sklepów internetowych (np. Rossmann, Sephora, Hebe)**: Automatyczne naliczanie rabatów progowych zależnych od wartości zamówienia z dodatkową bonifikatą dla członków klubu lojalnościowego.
2. **Kasy samoobsługowe w marketach**: Sprawdzanie progów promocji "Kup za min. 100 zł i odbierz rabat" po zeskanowaniu karty stałego klienta.
3. **Systemy gastronomiczne (np. Pyszne.pl, Uber Eats)**: Progowanie kosztów dostawy i zniżek na podstawie wartości koszyka oraz statusu subskrypcji użytkownika.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty komunikatów:
- Nazwa drogerii: `"Drogeria Internetowa NaturaGlow"`
- Numer zamówienia: `"ORD-2026-9934"`
- Początkowa kwota koszyka: `220`
- Status karty klubowej (`true` / `false`): `true`
- Etykiety i komunikaty rabatowe:
  - `"Podsumowanie koszyka NaturaGlow"`
  - `"Sklep: "`
  - `"Numer zamówienia: "`
  - `"Wartość produktów przed rabatem: "`
  - `"Karta klubowa aktywna: "` (wartość wypisz jako `"TAK"` albo `"NIE"` przez `if / else`, bez `? :`)
  - `"Przyznany rabat podstawowy: "` + procent + `"%"`
  - `"Bonus lojalnościowy za kartę klubową: "` + procent + `"%"`
  - `"Łączna stawka rabatu: "` + procent + `"% (oszczędność: "` + kwota zniżki + `" zł)"`
  - `"Kwota do zapłaty po rabacie: "` + kwota + `" zł"`
  - `"Błąd: Wartość koszyka musi być większa od 0 zł."`

**Oczekiwany wynik dla danych startowych (220 zł, karta = true):** rabat podstawowy 10%, bonus 5%, łącznie 15%, oszczędność 33 zł, do zapłaty **187 zł**.

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe `nazwaSklepu`, `numerZamowienia`, `kwotaKoszyka` oraz `kartaKlubowa` z wartościami z sekcji „Treść do wpisania”.
3. Sprawdź na początku, czy `kwotaKoszyka <= 0`. Jeśli tak, wypisz komunikat o błędzie. **W przeciwnym razie** całą dalszą kalkulację umieść w bloku `else { ... }` (w Semestrze 1 nie piszemy własnych funkcji, więc „zakończenie” realizujemy przez zagnieżdżenie w `else`).
4. Wewnątrz gałęzi `else` zadeklaruj zmienne pomocnicze: `let rabatProcent = 0;` oraz `let bonusKlubowy = 0;`.
5. Zbuduj drabinę `else if` wyznaczającą rabat podstawowy w zależności od wartości koszyka:
   - dla kwoty >= 300 zł: rabat 15%
   - dla kwoty >= 150 zł: rabat 10%
   - dla kwoty >= 50 zł: rabat 5%
   - w przeciwnym razie: rabat 0%
6. Zastosuj warunek z operatorem koniunkcji `&&`: jeśli klient posiada kartę klubową (`kartaKlubowa === true`) oraz przysługuje mu jakikolwiek rabat podstawowy (`rabatProcent > 0`), zwiększ wartość `bonusKlubowy` o 5%.
7. Oblicz kwoty według wzorów:
   - `lacznyRabat = rabatProcent + bonusKlubowy`
   - `kwotaZnizki = (kwotaKoszyka * lacznyRabat) / 100`
   - `kwotaDoZaplaty = kwotaKoszyka - kwotaZnizki`
8. Wypisz kompletny rachunek do kontenera `<div class="wynik">` za pomocą `document.write()` (wszystkie etykiety z sekcji „Treść do wpisania”).
9. Zarejestruj podsumowanie w konsoli (`console.log`).

## Kryteria sukcesu / definicja ukończenia

- [ ] Prawidłowo połączono sprawdzanie poprawności danych (błąd w `if`, kalkulacja w `else`), drabinę `else if` oraz warunek z `&&`.
- [ ] Obliczenia kwotowe i rabatowe są bezbłędne matematycznie (dla 220 zł → 187 zł).
- [ ] Wypis w kontenerze `<div class="wynik">` zawiera wszystkie wymagane pozycje i znaczniki `"<br>"`.
- [ ] Status karty wypisany jako `"TAK"` / `"NIE"` bez operatora `? :`.
- [ ] Skrypt przechodzi testy składniowe bez żadnych błędów.
