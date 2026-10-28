# Zadanie 1: Weryfikacja wieku widza w kinie

## Cel zadania

Celem zadania jest opanowanie podstawowej instrukcji warunkowej `if` z klauzulą alternatywną `else`. Uczeń dowie się, jak program podejmuje decyzję dwuwariantową na podstawie wartości logicznej oraz w jaki sposób zabezpieczyć skrypt przed wpuszczeniem na seans osoby nieuprawnionej.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy sprzedaży biletów (np. Cinema City, Multikino)**: Automatyczna blokada zakupu biletu na seanse z ograniczeniem wiekowym (np. 16+ lub 18+) bez potwierdzenia wieku.
2. **Platformy streamingowe (np. Netflix, HBO Max)**: Weryfikacja kodu rodzicielskiego lub profilu wiekowego przed odtworzeniem filmu dla dorosłych.
3. **Sklepy internetowe z grami (np. Steam, PlayStation Store)**: Weryfikacja daty urodzenia przed wyświetleniem karty produktu z oznaczeniem PEGI 18.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty komunikatów:
- Tytuł filmu: `"Tajemnica Czarnego Lasu (kategoria: 16+)"`
- Minimalny wymagany wiek widza: `16`
- Komunikat zapytania w prompt: `"Podaj wiek widza w latach:"`
- Wartość domyślna w prompt: `"15"`
- Nagłówek raportu wyjściowego: `"Kino Iluzjon - System Kontroli Wstępu"`
- Komunikat pozytywny: `"Wstęp dozwolony: bilet na seans został pomyślnie wydany."`
- Komunikat negatywny: `"Wstęp wzbroniony: wymagany wiek minimum 16 lat."`
- Etykiety i dokładny format wierszy raportu (po etykiecie dopisz wartość i jednostkę jak poniżej):
  - `"Tytuł seansu: "` + tytuł filmu
  - `"Wiek widza: "` + wiek + `" lat"`
  - `"Wymóg kategorii wiekowej: od "` + wymagany wiek + `" lat"`
  - `"Decyzja systemu: "` + komunikat decyzji

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania. Stałe i pobranie wieku przez `prompt()` są już przygotowane w szablonie — uzupełnij logikę decyzji i wypis.
2. Upewnij się, że stałe `tytulFilmu` oraz `wymaganyWiek` mają wartości z sekcji „Treść do wpisania”.
3. Wiek widza pobierany jest przez `prompt()` z wartością domyślną `"15"` i konwertowany przez `Number()`.
4. Skonstruuj instrukcję warunkową `if / else`, sprawdzającą czy wprowadzony wiek widza jest większy bądź równy `wymaganyWiek`:
   - Jeśli warunek jest spełniony, przypisz do zmiennej `decyzja` komunikat pozytywny.
   - W przeciwnym razie (gałąź `else`), przypisz do zmiennej `decyzja` komunikat negatywny.
5. Wypisz sformatowany raport do kontenera `<div class="wynik">` za pomocą metody `document.write()`, kończąc każdą linię znacznikiem `"<br>"`. Nagłówek możesz wyróżnić znacznikiem `<strong>`.
6. Zarejestruj w konsoli (`console.log`) tytuł seansu, wiek widza oraz decyzję.
7. Przetestuj działanie skryptu w przeglądarce dla wartości domyślnej 15 (odmowa) oraz po wpisaniu wartości 18 (zgoda).

## Kryteria sukcesu / definicja ukończenia

- [ ] Zastosowano zmienne `const` oraz `let` (brak słowa kluczowego `var`).
- [ ] Funkcja `prompt()` posiada obowiązkową wartość domyślną `"15"`.
- [ ] Zastosowano instrukcję `if` z gałęzią `else` i poprawnym operatorem relacyjnym `>=`.
- [ ] Wynik wypisano za pomocą `document.write()` z użyciem `"<br>"` i jednostką `" lat"`.
- [ ] W konsoli F12 pojawia się wpis z decyzją systemu (`console.log`).
- [ ] Skrypt przechodzi weryfikację składniową bez błędów w konsoli F12.
