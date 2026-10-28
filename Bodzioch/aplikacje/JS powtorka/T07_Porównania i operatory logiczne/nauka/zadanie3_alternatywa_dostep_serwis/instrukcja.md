# Zadanie 3: Alternatywa logiczna, negacja i wartości domyślne w serwisie VOD

## Cel zadania

Celem zadania jest opanowanie operatora alternatywy logicznej `||` (OR) oraz negacji `!` (NOT). Uczeń dowie się, w jaki sposób łączyć alternatywne ścieżki autoryzacji (np. subskrypcja VIP LUB kod promocyjny LUB transmisja darmowa), jak odwracać flagi blokad systemowych oraz jak wykorzystać mechanizm zwarcia (short-circuit) do bezpiecznego ustawiania wartości domyślnej.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Platformy streamingowe i VOD (np. Netflix, HBO Max, YouTube Premium)**: Weryfikacja prawa do odtworzenia filmu (posiadanie aktywnego planu abonamentowego LUB wypożyczenie pojedynczego tytułu LUB wersja demonstracyjna).
2. **Systemy zabezpieczeń i logowania (np. Google Workspace)**: Sprawdzanie czy konto nie zostało zablokowane (`!kontoZablokowane`) przed wpuszczeniem użytkownika do panelu.
3. **Konfiguracja profilu użytkownika w aplikacjach webowych**: Przypisanie domyślnego awatara lub nazwy zastępczej (`nazwaUzytkownika || "Gość"`), gdy użytkownik nie podał własnych danych podczas rejestracji.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Tytuł seansu: `"Wielki Finał E-Sport Masters 2026"`
- Posiadanie abonamentu VIP: `false`
- Kod promocyjny: `"ESPORT-FREE"`
- Czy transmisja ogólnodostępna: `false`
- Czy konto zablokowane: `false`
- Wpisany pseudonim widza: `""`
- Domyślny pseudonim awaryjny: `"Widz-Anonim"`
- Nagłówek raportu dostępu: `"Bramka Dostępowa StreamZone - Transmisja Live"`
- Etykiety linii raportu:
  - `"Tytuł transmisji: "`
  - `"Wyświetlana nazwa widza: "`
  - `"Posiada status VIP: "`
  - `"Posiada kod promocyjny: "`
  - `"Czy konto jest aktywne (!zablokowane): "`
  - `"Przyznano dostęp do transmisji (status VIP || kod || darmowa) && !zablokowany: "`

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe z danymi wejściowymi: `tytulSeansu`, `statusVIP`, `kodPromocyjny`, `transmisjaDarmowa`, `kontoZablokowane` oraz `wpisanyNick`.
3. Wyznacz stałą `nazwaWidza` za pomocą operatora alternatywy `||` (wzorzec short-circuit): `wpisanyNick || "Widz-Anonim"`. Ponieważ `wpisanyNick` jest pustym ciągiem (falsy), zmienna przyjmie wartość domyślną.
4. Zdefiniuj zmienną logiczną `posiadaKod`, sprawdzającą czy `kodPromocyjny !== ""`.
5. Zdefiniuj zmienną logiczną `uprawnionyWstep` za pomocą operatora alternatywy `||`: `statusVIP || posiadaKod || transmisjaDarmowa`.
6. Zdefiniuj zmienną logiczną `kontoAktywne` za pomocą negacji: `!kontoZablokowane`.
7. Zdefiniuj ostateczną flagę `dostepPrzyznany`, łącząc `uprawnionyWstep && kontoAktywne`.
8. Wypisz raport za pomocą `document.write()` do elementu `<div class="wynik">`. Każdą linijkę zakończ znacznikiem `"<br>"`.
9. Zarejestruj wyznaczone flagi w konsoli za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Zastosowano operator `||` do alternatywnych kryteriów oraz przypisania wartości domyślnej.
- [ ] Zastosowano operator negacji `!` do odwrócenia stanu zablokowania konta.
- [ ] Zastosowano koniunkcję `&&` do połączenia uprawnień z aktywnością konta.
- [ ] Wszystkie deklaracje zrealizowano za pomocą `const` lub `let` (brak `var`).
- [ ] Wynik wypisano do `<div class="wynik">` zgodnie ze standardem semestru 1.
- [ ] Skrypt nie generuje błędów składniowych w konsoli przeglądarki.
