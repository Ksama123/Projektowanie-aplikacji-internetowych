# Pomoc dostępna: Moduł T10 — Pętla for

> Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Niniejszy dokument przedstawia procedurę pracy z zadaniami programistycznymi krok po kroku. Każdy krok zawiera jedno konkretne polecenie do wykonania w edytorze kodu lub w przeglądarce.

---

## 1. Słowniczek pojęć tego modułu

- **Pętla `for`** — instrukcja języka JavaScript, która wykonuje podany fragment kodu określoną liczbę razy. Składa się z nagłówka sterującego oraz bloku instrukcji ujętego w nawiasy klamrowe.
- **Zmienna sterująca** — zmienna liczbowa zadeklarowana słowem `let` w nagłówku pętli, która przechowuje aktualny numer powtórzenia. Wartość tej zmiennej zmienia się automatycznie po każdym wykonaniu pętli.
- **Iteracja** — pojedyncze, pełne wykonanie bloku instrukcji znajdującego się wewnątrz pętli. Jeśli pętla powtarza się 5 razy, oznacza to, że zachodzi 5 kolejnych iteracji.
- **Warunek kontynuacji** — wyrażenie logiczne umieszczone w środkowej części nagłówka pętli. Interpreter sprawdza ten warunek przed każdym powtórzeniem i wykonuje kod tylko wtedy, gdy warunek jest prawdziwy.
- **Krok iteracji** — operacja modyfikująca zmienną sterującą, najczęściej inkrementacja `i++` (zwiększenie o 1) lub dekrementacja `i--` (zmniejszenie o 1). Wykonuje się na samym końcu każdej iteracji.
- **Sumator** — zmienna zadeklarowana przed pętlą z początkową wartością `0`. W każdej iteracji dodaje się do niej nową kwotę lub wartość, aby na końcu obliczyć sumę łączną.
- **Funkcja `prompt()`** — w części zadań (np. Z2, Z4) limit pętli pobierany jest oknem dialogowym. Zawsze z wartością domyślną i konwersją `Number(prompt("…", "5"))`. Często wywołanie jest już w szablonie `script.js`.

---

## 2. Instrukcja wykonania zadania krok po kroku

1. Otwórz folder wybranego zadania w edytorze kodu (na przykład Visual Studio Code).
2. Otwórz plik `instrukcja.md` i przeczytaj treść zadania oraz sekcję ze wzorcowym tekstem do wyświetlenia.
3. Otwórz plik `script.js` znajdujący się bezpośrednio w folderze zadania.
4. Sprawdź, czy szablon zawiera już `Number(prompt(...))` — jeśli tak, zostaw je i przejdź do pętli.
5. Odszukaj w kodzie komentarz `// TODO: KROK 1` (lub kolejny numer kroku) wskazujący miejsce dopisania kodu.
6. Napisz nagłówek pętli `for` zgodnie z wytycznymi z instrukcji, używając słowa kluczowego `let`.
7. Wewnątrz nawiasów klamrowych `{ }` wpisz polecenie `document.write()`, które wypisze wymagany tekst.
8. Zapisz zmiany w pliku `script.js` za pomocą skrótu klawiszowego `Ctrl + S`.
9. Otwórz plik `index.html` w przeglądarce internetowej (lub odśwież stronę klawiszem `F5`). Jeśli pojawi się okno `prompt`, potwierdź wartość domyślną przyciskiem OK.
10. Sprawdź, czy na ekranie pojawiły się wszystkie wymagane napisy i czy liczby są prawidłowe.
11. Jeśli strona jest pusta, naciśnij klawisz `F12`, przejdź do zakładki `Console` i sprawdź treść błędu.
12. Po uzyskaniu działającego rozwiązania otwórz folder `rozwiazanie/` i porównaj swój kod z plikiem wzorcowym.

---

## 3. Wskazówki dotyczące dostępności cyfrowej (a11y)

- Każda strona ćwiczeniowa posiada logiczną strukturę nagłówków `<h1>` oraz `<h2>`, co ułatwia czytanie struktury dokumentu.
- Wszystkie teksty generowane za pomocą `document.write()` umieszczaj w znacznikach akapitu `<p>` lub elementach `<div>`, aby zachować czytelny podział wierszy.
- Stosuj wysoki kontrast tekstu względem tła (ciemny tekst na jasnym tle), aby treść była łatwa do odczytania.
- Jeśli zadanie wyświetla podsumowanie liczbowe, wyróżnij je znacznikiem `<strong>`, aby czytniki ekranowe mogły poinformować o istotnym wyniku.
