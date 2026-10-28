# Zadanie 2: Dozowanie płynu nabłyszczającego w myjni samochodowej

## 1. Cel zadania
Celem ćwiczenia jest implementacja cyklu dozowania środków chemicznych w automatycznej myjni samochodowej przy użyciu pętli `do...while`. Poznasz mechanizm pętli z warunkiem wyjściowym, który gwarantuje, że proces dozowania wykona się co najmniej jeden raz, a kolejne dawki będą podawane aż do osiągnięcia wymaganego stężenia ochronnego.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Automatyka przemysłowa i myjnie bezdotykowe:** podawanie odczynników chemicznych do komory mieszania aż do osiągnięcia zadanego poziomu cieczy.
- **Formularze logowania i interfejsy autoryzacji:** pobieranie danych i ich pierwsza weryfikacja przed decyzją o ewentualnym ponowieniu pytania.
- **Gry wideo:** generowanie losowego poziomu startowego z gwarancją co najmniej jednej próby wygenerowania planszy.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałe:
   - `DAWKA_WOSKU = 15` (objętość jednorazowej dawki w mililitrach)
   - `WYMAGANE_MINIMUM = 45` (minimalna skuteczna objętość preparatu w mililitrach)
2. Zadeklaruj zmienne:
   - `let objetoscWosku = 0;` (początkowa objętość płynu w komorze)
   - `let cykl = 0;` (licznik wykonanych wtrysków dozownika)
   - `let zgoda;` (zmienna przechowująca odpowiedź z okna dialogowego)
3. Zbuduj pętlę `do...while`:
   - Wewnątrz bloku pętli zwiększ `cykl` o 1.
   - Zwiększ `objetoscWosku` o wartość stałej `DAWKA_WOSKU`.
   - Wypisz komunikat informujący o numerze cyklu i aktualnej objętości w zbiorniku.
   - Za pomocą funkcji `prompt()` z obowiązkową wartością domyślną `"tak"` zapytaj operatora: `zgoda = prompt("Czy dozować kolejną dawkę wosku do komory? (tak/nie):", "tak");`.
   - Jako warunek kontynuacji sprawdź: `zgoda === "tak" && objetoscWosku < WYMAGANE_MINIMUM`.
4. Pamiętaj o postawieniu średnika po nawiasie zamykającym warunek pętli `while (...)`.
5. Po zakończeniu pętli wypisz komunikat o osiągnięciu wymaganej dawki i przejściu do etapu suszenia.

## Treść do wpisania
Dokładne teksty do umieszczenia w `document.write` (skopiuj dosłownie):
- Komunikat w pętli: `` `<p>Dozownik myjni — cykl nr ${cykl} — wstrzyknięto 15 ml płynu nabłyszczającego. Aktualny stan w zbiorniku: ${objetoscWosku} ml.</p>` ``
- Komunikat podsumowania po pętli: `"<p><strong>Wymagana dawka ochronna wosku została osiągnięta. Rozpoczynanie suszenia karoserii.</strong></p>"`

## 5. Wskazówki techniczne
- Konstrukcja `do...while` najpierw wykonuje blok kodu w klamrach `{ ... }`, a dopiero potem ewaluuje warunek logiczny.
- Pamiętaj o składni: `do { ... } while (warunek);` ze średnikiem na końcu.
- Zmienna `objetoscWosku` osiągnie kolejno wartości 15, 30 i 45 ml, co oznacza dokładnie 3 wykonania ciała pętli.
