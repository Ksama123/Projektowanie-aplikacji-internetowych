Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego działu

- **Pętla while:** Konstrukcja programistyczna, która powtarza blok instrukcji tak długo, jak długo warunek logiczny jest prawdziwy. Warunek jest sprawdzany przed każdym wykonaniem bloku.
- **Pętla do…while:** Konstrukcja programistyczna, która wykonuje blok instrukcji co najmniej jeden raz. Warunek jest sprawdzany dopiero po zakończeniu każdego wykonania bloku.
- **Iteracja:** Pojedyncze powtórzenie instrukcji zawartych wewnątrz pętli.
- **Instrukcja break:** Polecenie, które natychmiast przerywa działanie całej pętli i przechodzi do kodu za pętlą.
- **Instrukcja continue:** Polecenie, które przerywa bieżącą iterację i natychmiast przechodzi do sprawdzenia warunku kolejnego powtórzenia.
- **Pętla nieskończona:** Błąd polegający na tym, że warunek pętli nigdy nie staje się fałszywy, co zawiesza działanie przeglądarki.
- **Funkcja `prompt()`:** Okno dialogowe z obowiązkową wartością domyślną. Liczby: `Number(prompt("…", "5"))`. Tekst (tak/nie): `prompt("…", "tak")` bez `Number()`.

---

## 2. Stała kolejność pracy nad każdym zadaniem

Podczas rozwiązywania każdego zadania wykonuj czynności dokładnie w poniższej kolejności:

1. Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania. Przeczytaj uważnie sekcję „Cel zadania” oraz „Treść do wpisania”.
2. Otwórz folder roboczy zadania w edytorze kodu. Znajdziesz w nim pliki `index.html`, `style.css` oraz `script.js`.
3. Otwórz plik `script.js`. Sprawdź, czy szablon ma już `prompt(...)` — jeśli tak, nie usuwaj wartości domyślnej ani `Number()`. Odszukaj komentarz `// Twoje rozwiazanie` i wpisz kod pętli zgodnie z krokami instrukcji.
4. Zapisz plik skrótem `Ctrl + S`.
5. Otwórz plik `index.html` w przeglądarce internetowej (np. Chrome lub Firefox). Jeśli pojawi się okno `prompt`, potwierdź wartość domyślną przyciskiem OK.
6. Naciśnij klawisz `F12` i przejdź do zakładki *Console*. Upewnij się, że nie ma w niej czerwonych komunikatów o błędach.
7. Sprawdź, czy w kontenerze `<div class="wynik">` wyświetliły się wszystkie oczekiwane komunikaty.
8. Dopiero po samodzielnym wykonaniu zadania otwórz podfolder `rozwiazanie/` i porównaj swój kod z kodem wzorcowym.

---

## 3. Miejsce zapisu kodu w plikach

W plikach szablonu startowego przygotowano dedykowane miejsca na Twój kod:

- W pliku `index.html` struktura dokumentu jest gotowa. Gdy instrukcja wymaga dopisania elementu, szukaj komentarza o treści `<!-- KROK N: ... -->`.
- W pliku `script.js` kod JavaScript piszemy bezpośrednio pod komentarzem `// Twoje rozwiazanie`.
- Pliku `style.css` nie modyfikujemy – zawiera on gotowe reguły formatowania przygotowane przez nauczyciela.

---

## 4. Zasady dostępności cyfrowej (a11y) w tym module

1. **Hierarchia nagłówków:** Zachowuj logiczny układ nagłówków na stronie. Tytuł główny to `<h1>`, tytuł sekcji to `<h2>`, a podtytuł lub nagłówek wyniku to `<h3>`. Nie pomijaj poziomów nagłówków.
2. **Kontrast tekstu:** Prezentowane komunikaty tekstowe muszą wyraźnie odcinać się od tła strony, aby były czytelne dla każdego odbiorcy.
3. **Teksty alternatywne grafik:** Każdy znacznik `<img>` musi posiadać atrybut `alt` opisujący słownie zawartość ilustracji.
