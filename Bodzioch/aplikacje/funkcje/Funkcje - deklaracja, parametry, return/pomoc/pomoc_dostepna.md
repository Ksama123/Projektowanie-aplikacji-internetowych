# Pomoc Dostępna — Moduł T01: Funkcje — deklaracja, parametry, return

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Dokument zawiera precyzyjne reguły postępowania krok po kroku oraz prosty słowniczek pojęć. Wszystkie czynności opisane są wprost, bez skrótów myślowych i metafor.

---

## 1. Słowniczek Pojęć Działu

- **Funkcja:** Samodzielny, nazwany fragment programu komputerowego, który wykonuje ściśle określone obliczenia lub czynności.
- **Deklaracja funkcji:** Zapis w kodzie rozpoczynający się od słowa `function`, który nadaje funkcji nazwę, określa jej parametry i definiuje zestaw instrukcji do wykonania.
- **Parametr:** Zmienna wpisana w nawiasie podczas definiowania funkcji, do której trafiają dane przekazywane z zewnątrz.
- **Argument:** Konkretna wartość (np. liczba 10 lub tekst "Kowalski") wpisana w nawiasie podczas uruchamiania funkcji.
- **Wywołanie funkcji:** Polecenie w kodzie składające się z nazwy funkcji i nawiasów okrągłych, które powoduje natychmiastowe uruchomienie instrukcji zapisanych w tej funkcji.
- **Instrukcja `return`:** Polecenie kończące działanie funkcji i przekazujące obliczony wynik z powrotem do programu.
- **Wartość zwracana:** Wynik obliczeń oddawany przez funkcję za pomocą instrukcji `return`.
- **Właściwość `textContent`:** Właściwość elementu HTML, która pozwala bezpiecznie odczytać lub zmienić wyświetlany tekst bez używania znaczników HTML.

---

## 2. Standardowy Przebieg Pracy nad Zadaniem

Wykonuj kolejne czynności w ściśle określonej kolejności:

1. **Krok 1:** Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania (np. `zadanie1_.../instrukcja.md`). Przeczytaj uważnie cel ćwiczenia oraz sekcję z danymi wejściowymi.
2. **Krok 2:** Otwórz plik `script.js` w edytorze kodu. Odszukaj miejsce oznaczone komentarzem `// Twoje rozwiazanie`.
3. **Krok 3:** Przeczytaj komentarze pomocnicze w kodzie. Każdy komentarz typu `// KROK 1: ...` opisuje jedną czynność logiczną, którą należy zaprogramować.
4. **Krok 4:** Dopisz deklarację funkcji oraz jej wywołanie w wyznaczonym miejscu. Pamiętaj o użyciu słowa `function` oraz instrukcji `return` do oddania wyniku.
5. **Krok 5:** Zapisz plik `script.js` i otwórz plik `index.html` w przeglądarce internetowej. Sprawdź, czy w ramce wyniku pojawiły się właściwe liczby lub komunikaty.
6. **Krok 6:** Otwórz konsolę deweloperską przeglądarki naciskając klawisz `F12`. Upewnij się, że w konsoli nie wyświetlają się czerwone komunikaty o błędach.
7. **Krok 7:** Dopiero po samodzielnej próbie wykonania zadania otwórz podfolder `rozwiazanie/`. Porównaj swój kod z rozwiązaniem wzorcowym i sprawdź nazwy parametrów.

---

## 3. Ważne Miejsca w Kodzie HTML i JavaScript

- **W pliku `index.html`:** Cała struktura strony jest już gotowa. Miejsce pracy w HTML (gdy instrukcja tego wymaga) oznaczone jest komentarzem `<!-- KROK N: ... -->`. Nie modyfikuj nagłówka `<header>` ani stopki `<footer>`. Wyniki obliczeń trafiają do znacznika `<div id="wynik" class="wynik"></div>`.
- **W pliku `script.js`:** Kod pisz wyłącznie w wyznaczonym obszarze `// Twoje rozwiazanie`. Wszystkie operacje logiczne zamykaj wewnątrz funkcji, a na zewnątrz funkcji pozostawiaj wyłącznie przygotowanie danych i wypisanie wyniku.

---

## 4. Zasady Czytelności i Dostępności (a11y)

1. **Hierarchia nagłówków strony:** Każdy dokument HTML posiada dokładnie jeden główny nagłówek poziomu pierwszego `<h1>`, a tytuły poszczególnych sekcji wykorzystują nagłówki `<h2>`.
2. **Wysoki kontrast tekstu:** Tekst wynikowy wyświetlany w elemencie `#wynik` posiada ciemny kolor na jasnym tle, co zapewnia łatwą czytelność dla każdego odbiorcy.
3. **Jednoznaczne komunikaty tekstowe:** Wyniki obliczeń zawsze opisuj pełnymi zdaniami (np. `Koszt całkowity: 150.00 PLN`), a nie pojedynczymi, pozbawionymi kontekstu liczbami.

---

## 5. Strategia Pracy z Zadaniem Przyrostowym (Capstone)

Zadanie 5 (Zadanie Przyrostowe: Portal Usługowo-Handlowy IT-Partner) rozwija jedną, spójną aplikację biznesową przez cały semestr. Aby rozwiązać je krok po kroku i bez trudności, stosuj poniższą metodę 4 kroków:

1. **Zasada jednej funkcji na raz:**  
   Nie pisz całego programu od razu. W pierwszej kolejności zaimplementuj i przetestuj pojedynczą funkcję pomocniczą (np. obliczającą rabat lub sumującą pozycje). Sprawdź jej działanie w konsoli przeglądarki (`F12`), przekazując przykładowe liczby jako argumenty.

2. **Łączenie klocków (przepływ danych):**  
   Główna funkcja generująca raport wywołuje wcześniejsze funkcje pomocnicze, przekazując im dane wejściowe. Wyniki zwracane przez instrukcję `return` z funkcji pomocniczych zapisuj do lokalnych stałych (`const`).

3. **Dosłowna struktura raportu z instrukcji:**  
   Otwórz plik `instrukcja.md` zadania 5 i odszukaj sekcję `## Treść do wpisania`. Skopiuj strukturę etykiet tekstowych, a w wyznaczone miejsca wstaw wartości swoich zmiennych za pomocą szablonu w grawisach (backticki `` `...` `` i `${zmienna}`).

4. **Weryfikacja w przeglądarce i konsoli deweloperskiej:**  
   Zapisz plik `script.js` i odśwież stronę `index.html`. Otwórz konsolę klawiszem `F12`. Upewnij się, że nie pojawiają się czerwone błędy (`Uncaught SyntaxError` lub `ReferenceError`), a w bloku `#wynik` wyświetla się pełny raport.
