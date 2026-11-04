# Pomoc dostępna: Zasięg zmiennych i funkcje strzałkowe

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Podręcznik ten zawiera bezpośrednie, ponumerowane kroki realizacji zadań oraz jednoznaczny słowniczek pojęć. Wszystkie czynności wykonuj w podanej kolejności.

---

## 1. Słowniczek pojęć modułu

- **Zasięg zmiennej (Scope):** Obszar programu, w którym zmienna jest widoczna i można odczytać jej wartość. Zmienna zadeklarowana w bloku nie jest widoczna poza nim.
- **Zasięg blokowy:** Zasada działania słów `let` i `const`, zgodnie z którą zmienna istnieje wyłącznie wewnątrz pary nawiasów klamrowych `{` oraz `}`.
- **Przesłanianie zmiennych (Shadowing):** Utworzenie wewnątrz bloku zmiennej o takiej samej nazwie jak zmienna na zewnątrz. Wewnątrz tego bloku używana jest zmienna wewnętrzna, a zmienna zewnętrzna jest tymczasowo niewidoczna.
- **Funkcja strzałkowa (Arrow Function):** Krótki sposób zapisu funkcji w JavaScript przy użyciu symbolu strzałki `=>`. Zastępuje słowo kluczowe `function`.
- **Niejawny powrót wartości (Implicit Return):** Właściwość jednolinijkowej funkcji strzałkowej bez klamer `{}`. Wyrażenie po prawej stronie strzałki jest automatycznie zwracane bez wpisywania słowa `return`.
- **Parametr domyślny:** Wartość przypisana parametrowi w nagłówku funkcji za pomocą znaku `=`. Zostaje użyta, gdy podczas wywołania nie podasz tego argumentu.
- **Operator trójargumentowy (`? :`):** Zwięzły zapis wyboru dwóch wartości: `warunek ? gdyPrawda : gdyFalsz`.

---

## 2. Kolejność wykonywania każdego zadania

Pracę nad każdym zadaniem wykonuj według poniższych kroków. Nie pomijaj żadnego etapu.

1. Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania. Przeczytaj dokładnie sekcję celu, wymagania oraz **obowiązkowy szablon raportu** (lub listę obowiązkowych linii).
2. Otwórz plik `script.js` w katalogu zadania. Odszukaj komentarz `// Twoje rozwiazanie`, który wskazuje dokładne miejsce wpisywania kodu.
3. W pliku `index.html` odszukaj komentarze w formacie `<!-- KROK N: ... -->`, jeśli zadanie wymaga uzupełnienia struktury dokumentu.
4. Zapisz plik `script.js` i otwórz plik `index.html` w przeglądarce internetowej. Otwórz konsolę klawiszem F12 i sprawdź, czy wynik pojawił się w bloku `#wynik`.
5. Porównaj treść raportu na stronie z szablonem z instrukcji — muszą być obecne **wszystkie** wymagane linie (nie tylko nagłówek i suma).
6. Jeżeli zadanie nie działa lub chcesz upewnić się, czy kod jest optymalny, porównaj swój plik z plikiem w katalogu `rozwiazanie/script.js`. Zrób to dopiero po własnej próbie napisania kodu.

---

## 3. Checklisty typów zadań w module

### A. Jednoargumentowa funkcja strzałkowa (zadania typu „kantor / drukarnia / opony”)
1. Zdefiniuj stałe wejściowe (`const`).
2. Napisz funkcję: `const nazwa = parametr => wyrazenie;`.
3. Wywołaj funkcję i zapisz wynik do zmiennej.
4. Sformatuj kwoty przez `.toFixed(2)`.
5. Zbuduj raport według szablonu z instrukcji i wpisz do `#wynik.textContent`.

### B. Funkcja z parametrem domyślnym (zadania typu „wypożyczalnia / basen / park linowy”)
1. Jeśli jest `prompt()` — wywołaj go **poza** funkcją, zrób `parseInt` i zabezpiecz `isNaN` / `< 1`.
2. Ostatni parametr funkcji zapisz z wartością domyślną: `(a, b, c = wartosc)`.
3. Przy wywołaniu **pomiń** argument domyślny, aby sprawdzić działanie ES6.
4. Raport musi zawierać zarówno dane wejściowe, jak i wyliczoną sumę.

### C. Ciało blokowe + shadowing (zadanie magazynowe)
1. Funkcja z `if / else if` wymaga klamer `{ ... }` i jawnego `return`.
2. Aby pokazać wartość z wnętrza bloku po jego zamknięciu: skopiuj ją do zmiennej zewnętrznej (`statusWewnetrzny = statusZlecenia`) jeszcze wewnątrz bloku.
3. Poza blokiem wypisz zarówno wartość skopiowaną, jak i zmienną zewnętrzną o tej samej nazwie.

### D. Operator trójargumentowy w strzałce
```javascript
const nazwa = parametr => (warunek ? wartoscA : wartoscB);
```

---

## 4. Zasady dostępności cyfrowej (a11y) w tym module

W zadaniach laboratoryjnych dbamy o podstawowe standardy dostępności dla każdego użytkownika.

1. **Hierarchia nagłówków:** Każdy dokument HTML posiada dokładnie jeden nagłówek pierwszego stopnia `<h1>`. Kolejne sekcje opisuj nagłówkami `<h2>` bez pomijania poziomów.
2. **Czytelny kontrast:** Tekst w elemencie `#wynik` musi zachowywać wysoki kontrast względem tła (ciemny tekst na jasnym tle lub jasny tekst na ciemnym tle).
3. **Semantyczny kontener wyjściowy:** Wyniki prezentujemy w elemencie `<pre id="wynik"></pre>`, który umożliwia czytnikom ekranowym prawidłowe odczytanie wielowierszowego raportu tekstowego.

---

## 5. Strategia pracy z Zadaniem Przyrostowym (Capstone)

Zadanie 5 (Zadanie Przyrostowe: Portal Usługowo-Handlowy IT-Partner) rozwija jedną, spójną aplikację biznesową przez cały semestr. Aby rozwiązać je krok po kroku i bez trudności, stosuj poniższą metodę 4 kroków:

1. **Zasada jednej funkcji na raz:**  
   Nie pisz całego programu od razu. W pierwszej kolejności zaimplementuj i przetestuj pojedynczą funkcję pomocniczą (np. strzałkową funkcję rabatową z parametrem domyślnym). Przetestuj jej zachowanie w konsoli przeglądarki (`F12`), podając różne wartości wejściowe.

2. **Łączenie klocków (przepływ danych):**  
   Główna funkcja generująca raport wywołuje wcześniejsze funkcje pomocnicze, przekazując im dane wejściowe. Wyniki zwracane przez instrukcję `return` z funkcji pomocniczych zapisuj do lokalnych stałych (`const`).

3. **Dosłowna struktura raportu z instrukcji:**  
   Otwórz plik `instrukcja.md` zadania 5 i odszukaj sekcję `## Treść do wpisania`. Skopiuj strukturę etykiet tekstowych, a w wyznaczone miejsca wstaw wartości swoich zmiennych za pomocą szablonu w grawisach (backticki `` `...` `` i `${zmienna}`).

4. **Weryfikacja w przeglądarce i konsoli deweloperskiej:**  
   Zapisz plik `script.js` i odśwież stronę `index.html`. Otwórz konsolę klawiszem `F12`. Upewnij się, że nie pojawiają się czerwone błędy (`Uncaught SyntaxError` lub `ReferenceError`), a w bloku `#wynik` wyświetla się pełny raport.
