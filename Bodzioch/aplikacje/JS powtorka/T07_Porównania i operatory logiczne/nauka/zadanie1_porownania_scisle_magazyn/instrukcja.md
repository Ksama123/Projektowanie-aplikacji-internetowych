# Zadanie 1: Porównania ścisłe i relacyjne w magazynie towarowym

## Cel zadania

Celem zadania jest opanowanie podstawowych operatorów porównania w języku JavaScript: ścisłej równości `===`, ścisłej nierówności `!==` oraz operatorów relacyjnych `<`, `>`, `<=`, `>=`. Uczeń dowie się, w jaki sposób komputer sprawdza zgodność typów i wartości danych oraz jak wyznacza stany magazynowe artykułów biurowych bez używania konstrukcji warunkowych.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy ERP i magazynowe (np. SAP, Subiekt GT)**: Automatyczna kontrola czy stan magazynowy produktu spadł poniżej zdefiniowanego progu alarmowego (`stan <= progAlarmowy`).
2. **Platformy e-commerce (np. Allegro, Amazon)**: Blokada przycisku dodawania do koszyka, gdy liczba dostępnych egzemplarzy jest równa zero (`stanMagazynowy === 0`).
3. **Panele logistyki kurierskiej (np. InPost, DPD)**: Sprawdzanie czy wymiary lub waga paczki mieszczą się w dopuszczalnym gabarycie skrytki paczkomatu (`wagaPaczki <= limitSkrytki`).

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Nazwa sprawdzanego artykułu: `"Ryza papieru A4"`
- Kod działu logistycznego: `"MAG-01"`
- Początkowy stan magazynowy: `15`
- Minimalny próg zamówieniowy: `20`
- Nagłówek raportu wyjściowego: `"Raport weryfikacji stanów magazynowych Papiernik"`
- Etykiety linii raportu:
  - `"Artykuł biurowy: "`
  - `"Stan magazynowy: "`
  - `"Minimalny próg zapasu: "`
  - `"Czy stan wymaga domówienia (stan <= próg): "`
  - `"Czy kod działu jest poprawny (=== 'MAG-01'): "`
  - `"Czy artykuł jest fizycznie dostępny (!== 0): "`

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania.
2. Zadeklaruj stałe `nazwaArtykulu`, `kodDzialu`, `stanMagazynowy` oraz `progMinimalny` z wartościami określonymi w sekcji „Treść do wpisania”.
3. Zdefiniuj zmienną logiczną `wymagaZamowienia`, która przechowa wynik porównania relacyjnego: czy `stanMagazynowy` jest mniejszy bądź równy `progMinimalny` za pomocą operatora `<=`.
4. Zdefiniuj zmienną logiczną `poprawnyDzial`, sprawdzającą operatorem ścisłej równości `===`, czy `kodDzialu` jest identyczny z łańcuchem `"MAG-01"`.
5. Zdefiniuj zmienną logiczną `czyDostepny`, sprawdzającą operatorem ścisłej nierówności `!==`, czy `stanMagazynowy` jest różny od liczby `0`.
6. Wypisz kompletny raport do kontenera `<div class="wynik">` za pomocą instrukcji `document.write()`. Każdą linijkę zakończ znacznikiem `"<br>"`. Nagłówek możesz wyróżnić `<strong>`; dopuszczalne są jednostki (np. `szt.`).
7. Zarejestruj wyznaczone flagi logiczne w konsoli za pomocą `console.log()`.

## Kryteria sukcesu / definicja ukończenia

- [ ] Zmienne zadeklarowano przy użyciu `const` lub `let` (brak słowa kluczowego `var`).
- [ ] Zastosowano wyłącznie operatory ścisłe (`===`, `!==`) oraz operator relacyjny `<=`.
- [ ] Wynik wypisano za pomocą `document.write()` w kontenerze `<div class="wynik">`.
- [ ] Skrypt przechodzi pomyślnie weryfikację składniową bez błędów w konsoli przeglądarki (F12).
