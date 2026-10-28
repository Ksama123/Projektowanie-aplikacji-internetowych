# Pomoc dostępna: Moduł T09 — Instrukcja switch

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Dokument zawiera precyzyjne, krokowe wskazówki ułatwiające bezbłędne wykonywanie zadań warsztatowych. Wszystkie czynności podzielone są na pojedyncze operacje.

---

## 1. Słowniczek pojęć modułu

- **`switch`**: Słowo kluczowe rozpoczynające instrukcję wielowariantowego wyboru. Po nim w nawiasie okrągłym wpisujesz nazwę badanej zmiennej.
- **`case`**: Słowo kluczowe oznaczające pojedynczy wariant. Po nim wpisujesz stałą wartość i dwukropek, np. `case 1:`.
- **`break`**: Instrukcja przerywająca działanie instrukcji wyboru. Zatrzymuje wykonywanie kodu i wychodzi poza klamrę zamykającą `switch`.
- **`default`**: Słowo kluczowe oznaczające wariant domyślny. Wykonuje się wtedy, gdy badana zmienna nie pasuje do żadnego z podanych `case`.
- **`fall-through`**: Zjawisko przeskakiwania wykonania do następnego wariantu przy braku słowa `break`. Używane świadomie do łączenia kilku przypadków pod jednym działaniem.
- **`prompt()`**: Okno dialogowe z obowiązkową wartością domyślną. Przy `case "TEKST":` porównuj wynik bez `Number()`. Przy `case 1:` najpierw użyj `Number()`.

---

## 2. Kolejność wykonywania każdego zadania

Wykonuj zadanie ściśle według poniższych kroków:

1. Otwórz plik `instrukcja.md` w katalogu wybranego zadania i przeczytaj sekcję opisującą cel oraz dane wejściowe.
2. Zwróć uwagę na sekcję z dokładną treścią tekstów do wpisania, aby uniknąć literówek w komunikatach.
3. Otwórz plik `script.js` znajdujący się bezpośrednio w katalogu zadania. Jeśli szablon ma już `prompt(...)`, nie usuwaj wartości domyślnej.
4. Odszukaj komentarz `// Twoje rozwiazanie` i wpisz tam kod instrukcji `switch`.
5. Upewnij się, że każdy wariant `case` posiada dwukropek, odpowiednie instrukcje oraz słowo `break;`.
6. Na końcu bloku dopisz klauzulę `default:` z komunikatem o błędnej lub nierozpoznanej wartości.
7. Zapisz plik `script.js` za pomocą skrótu Ctrl+S.
8. Otwórz plik `index.html` w przeglądarce internetowej. Jeśli pojawi się okno `prompt`, potwierdź wartość domyślną przyciskiem OK i zweryfikuj komunikat w obszarze wyniku.
9. Wciśnij klawisz F12 w przeglądarce i upewnij się, że w zakładce Console nie ma czerwonych komunikatów o błędach.
10. Po wykonaniu własnej próby otwórz plik `script.js` w podfolderze `rozwiazanie/` i porównaj strukturę kodu.

---

## 3. Formatowanie kodu i dostępność (a11y)

1. **Struktura semantyczna**: Każda strona zadania zawiera nagłówek `<h1>`, czytelną treść oraz kontener `<div class="wynik">`.
2. **Czytelne komunikaty**: Komunikaty wypisywane przez `document.write()` muszą być pełnymi zdaniami w języku polskim.
3. **Formatowanie wierszy**: Rozdzielaj kolejne informacje znacznikiem `<br>`, aby tekst był czytelny dla użytkownika.
4. **Zapewnienie kontrastu**: Gotowy arkusz stylów `style.css` gwarantuje odpowiedni kontrast tekstu z tłem (zgodnie ze standardem WCAG).
