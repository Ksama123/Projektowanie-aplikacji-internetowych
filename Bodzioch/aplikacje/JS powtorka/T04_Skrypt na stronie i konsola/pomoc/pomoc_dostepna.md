# Pomoc dostępna — Moduł T04: Skrypt na stronie i konsola

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego modułu

- **Skrypt (script):** Zestaw instrukcji napisanych w języku JavaScript, który wykonuje przeglądarka internetowa.
- **Konsola (DevTools):** Specjalne okno w przeglądarce służące do wyświetlania komunikatów technicznych i sprawdzania działania kodu.
- **Atrybut `src`:** Informacja w znaczniku HTML wskazująca nazwę zewnętrznego pliku ze skryptem, który ma zostać pobrany.
- **Atrybut `defer`:** Informacja dla przeglądarki, aby pobrała skrypt w tle i uruchomiła go dopiero po wyświetleniu całej zawartości strony. **Nie używaj `defer`, gdy skrypt wywołuje `document.write()`.**
- **Metoda `console.log()`:** Polecenie, które wypisuje podany tekst lub wartość zmiennej do konsoli deweloperskiej.
- **Metoda `document.write()`:** Polecenie, które wstawia tekst lub znaczniki HTML bezpośrednio do wyświetlanego dokumentu w miejscu uruchomienia skryptu. Skrypt z tą metodą umieszczaj **wewnątrz** kontenera `<div class="wynik">` **bez** atrybutów `defer` i `async`.
- **Operator `typeof`:** Zwraca nazwę typu wartości (np. `"boolean"`). W komunikacie łączysz go z tekstem przez `+`, np. `"Typ: " + typeof zmienna + "."`.

---

## 2. Kolejność wykonywania każdego zadania

Każde zadanie w katalogu `nauka/` wykonuj ściśle według poniższych kroków:

1. Otwórz plik `instrukcja.md` w folderze wybranego zadania. Przeczytaj opis zadania oraz tabelę w sekcji "Treść do wpisania".
2. Otwórz pliki `index.html` oraz `script.js` w swoim edytorze kodu. Znajdź linie oznaczone komentarzami `<!-- KROK N: ... -->` w HTML oraz `// Twoje rozwiazanie` w JavaScript.
3. Wpisz wymagany kod dokładnie pod wskazanymi komentarzami. Pamiętaj o dokładnym przepisywaniu tekstów w cudzysłowach.
4. Otwórz plik `index.html` w przeglądarce internetowej (kliknij dwukrotnie plik na dysku). Naciśnij klawisz F12, aby otworzyć konsolę i sprawdzić, czy komunikaty wyświetlają się prawidłowo.
5. Jeżeli kod działa poprawnie, przejdź do następnego zadania. Jeśli napotkasz trudności, porównaj swój kod z plikami w podfolderze `rozwiazanie/`.

---

## 3. Oznaczenia miejsc pracy w plikach

W plikach szablonu startowego miejsca na Twój kod są jednoznacznie oznaczone:

- W pliku `index.html`:
  ```html
  <!-- KROK 1: Dołącz zewnętrzny plik script.js za pomocą znacznika script -->
  <!-- Tutaj wpisz swój znacznik -->
  ```
- W pliku `script.js`:
  ```javascript
  // KROK 2: Wypisz komunikat powitalny do konsoli
  // Twoje rozwiazanie:
  ```

Nie modyfikuj pozostałych części pliku, które tworzą ogólny szkielet wizualny strony.

---

## 4. Zasady dostępności i czytelności (a11y)

1. **Czytelne komunikaty w konsoli:** Komunikaty diagnostyczne pisz pełnymi zdaniami, unikając pojedynczych liter i niejednoznacznych skrótów.
2. **Kolejność nagłówków:** Jeśli wstawiasz kod za pomocą `document.write()`, zachowaj właściwą hierarchię nagłówków (`<h2>` pod `<h1>`).
3. **Opisy alternatywne:** Jeśli w szablonie występuje znacznik `<img>`, zawsze upewnij się, że posiada atrybut `alt` opisujący zawartość grafiki.
4. **Kontrast tekstu:** Teksty wstawiane do kontenera `.wynik` muszą być wyraźne i łatwe do przeczytania na tle strony.
