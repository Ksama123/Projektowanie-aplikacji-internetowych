# Zadanie 1: Rejestr palet w doku załadunkowym

## 1. Cel zadania
Celem ćwiczenia jest opanowanie podstawowej konstrukcji pętli `for` w języku JavaScript poprzez wygenerowanie rejestru kolejnych palet towarowych w magazynie logistycznym. Nauczysz się definiować nagłówek pętli ze zmienną sterującą `let`, ustalać warunek zakończenia oraz wypisywać kolejne wiersze raportu przy użyciu metody `document.write`.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Panele magazynowe WMS (np. Amazon, DHL):** automatyczne generowanie numerowanych etykiet logistycznych dla partii towaru przyjmowanego na stan.
- **Systemy biletowe (np. e-Bilet, PKP Intercity):** wyświetlanie listy kolejnych wagonów lub miejsc w przedziale podczas wyboru miejscówki.
- **Sklepy internetowe (np. Allegro):** paginacja wyników wyszukiwania (kolejne numery stron `1, 2, 3...` na dole katalogu).

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałą `LICZBA_PALET` o wartości `6`.
2. Zbuduj pętlę `for`, w której zmienna sterująca `nrPalety` przyjmuje początkowo wartość `1` i rośnie o `1` w każdej iteracji, aż osiągnie wartość `LICZBA_PALET` włącznie.
3. W każdej iteracji pętli wypisz akapit `<p>` zawierający dokładną treść z sekcji 4.
4. Po zakończeniu pętli wypisz akapit podsumowujący o pomyślnej rejestracji wszystkich palet.

## Treść do wpisania
Dokładne szablony wypisu (skopiuj do `document.write`):
- Wewnątrz pętli: `` `<p>Etykieta logistyczna dla palety towarowej nr ${nrPalety} — Status: Zarejestrowano w doku załadunkowym</p>` ``
- Poza pętlą (podsumowanie): `` `<p><strong>Wszystkie palety zostały pomyślnie wprowadzone do systemu magazynowego.</strong></p>` ``

## 5. Wskazówki techniczne
- Pamiętaj, aby zmienną sterującą zadeklarować słowem kluczowym `let`, a nie `const`.
- Użyj szablonu łańcuchowego (ang. *template literal*) z ukośnymi apostrofami `\`` i konstrukcją `${nrPalety}` do wygodnego wstrzykiwania numeru palety.
