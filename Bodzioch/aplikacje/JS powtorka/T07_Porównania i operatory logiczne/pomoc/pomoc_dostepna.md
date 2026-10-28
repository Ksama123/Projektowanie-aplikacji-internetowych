# Pomoc dostępna: Porównania i operatory logiczne

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Ten plik to **ogólna ściąga procedury pracy** (słowniczek, kolejność kroków, oznaczenia w szablonach). Szczegółowe kroki każdego ćwiczenia znajdziesz wyłącznie w pliku `instrukcja.md` danego zadania oraz w komentarzach `// KROK N:` w `script.js`.

---

## 1. Słowniczek pojęć tego działu

- **Operator porównania**: Symbol w kodzie służący do sprawdzenia relacji między dwoma wartościami. Przykłady to operator ścisłej równości `===` oraz operator większości `>`.
- **Wartość logiczna (boolean)**: Wynik sprawdzenia warunku. Przyjmuje wyłącznie jedną z dwóch postaci: `true` (prawda) albo `false` (fałsz).
- **Koniunkcja (`&&`)**: Operator logiczny AND. Zwraca prawdę tylko wtedy, gdy oba sprawdzane warunki są jednocześnie prawdziwe.
- **Alternatywa (`||`)**: Operator logiczny OR. Zwraca prawdę, gdy co najmniej jeden z badanych warunków jest prawdziwy.
- **Negacja (`!`)**: Operator logiczny NOT. Zmienia prawdę na fałsz, a fałsz na prawdę.
- **Pierwszeństwo `&&` / `||`**: Operator `&&` wiąże się ściślej niż `||`. Przy warunku „(A lub B) oraz C” zawsze stosuj nawiasy: `(A || B) && C`.
- **Wartość falsy**: Wartość, która w teście logicznym zachowuje się jak fałsz. W JavaScript jest to: `false`, liczba `0`, pusty tekst `""`, `null`, `undefined` oraz `NaN`.
- **Funkcja `prompt()`**: Polecenie otwierające okienko na ekranie w celu wpisania tekstu przez użytkownika. Zawsze podajemy w niej tekst pytania oraz wartość domyślną.

---

## 2. Stała kolejność pracy nad każdym zadaniem

Aby poprawnie i spokojnie wykonać zadanie, wykonaj poniższe kroki w podanej kolejności:

1. **Otwórz plik `instrukcja.md`** w katalogu wybranego zadania. Przeczytaj uważnie cel zadania oraz sekcję z danymi do wpisania.
2. **Otwórz plik `script.js`** znajdujący się bezpośrednio w folderze zadania. Znajdziesz w nim komentarze wskazujące miejsca na Twój kod.
3. **Zapisz swoje rozwiązanie** w wyznaczonych miejscach oznaczonych komentarzem `// Twoje rozwiazanie`. Pamiętaj o używaniu operatorów ścisłych `===` i `!==`.
4. **Wypisz raport na stronę** (`document.write` + `"<br>"`) **oraz** zarejestruj kluczowe flagi w konsoli (`console.log`).
5. **Otwórz plik `index.html` w przeglądarce internetowej**. Naciśnij klawisz F12, aby otworzyć konsolę i upewnić się, że nie ma czerwonych błędów.
6. **Sprawdź wynik na ekranie**. Wynik powinien pojawić się wewnątrz ramki na stronie internetowej.
7. **Porównaj kod z wzorcem**. Dopiero po samodzielnym ukończeniu zadania zajrzyj do podkatalogu `rozwiazanie/` i zweryfikuj swój kod (logika jest ważniejsza niż drobne różnice w jednostkach typu `zł` / `szt.`).

---

## 3. Oznaczenia miejsc pracy w kodzie

W plikach szablonu miejsca do uzupełnienia są jednoznacznie opisane:

- W plikach HTML miejsce do modyfikacji wskazuje komentarz: `<!-- KROK N: Opis czynności -->`.
- W plikach JavaScript miejsce do pisania kodu wskazuje komentarz: `// KROK N: Opis czynności` oraz `// Twoje rozwiazanie`.

Nie modyfikuj linii znajdujących się poza wyznaczonymi komentarzami, aby nie uszkodzić struktury strony. Szablon często ma już zadeklarowane stałe wejściowe — uzupełniasz przypisania i wypis wyniku.

---

## 4. Format wypisu wyniku (semestr 1)

- Każdą linię raportu kończ znacznikiem `"<br>"`.
- Nagłówek raportu możesz wyróżnić znacznikiem `<strong>...</strong>`.
- Jednostki (`zł`, `%`, `szt.`, `lat`, `pkt`) są mile widziane, jeśli poprawiają czytelność — liczy się poprawna logika i obecność wymaganych etykiet z instrukcji.

---

## 5. Podstawowe zasady dostępności cyfrowej (a11y)

Tworząc strony internetowe, dbamy o to, aby były one czytelne dla każdego odbiorcy:

1. **Hierarchia nagłówków**: Na stronie stosujemy kolejno nagłówki `<h1>`, `<h2>` oraz `<h3>`. Nie pomijamy poziomów nagłówków.
2. **Opisy alternatywne grafik**: Każdy znacznik `<img>` musi posiadać atrybut `alt` opisujący słownie zawartość obrazu.
3. **Wysoki kontrast tekstu**: Tekst musi wyraźnie odcinać się od tła, aby osoby słabowidzące mogły bez trudu odczytać wynik działania programu.
