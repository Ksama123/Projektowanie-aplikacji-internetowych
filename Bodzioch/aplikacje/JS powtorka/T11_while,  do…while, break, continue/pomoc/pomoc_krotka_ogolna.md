# Szybka pomoc ogólna: Pętle while, do…while, break, continue

Podręczna ściąga składniowa i zestaw wskazówek ułatwiających realizację zadań warsztatowych w module T11.

---

## 1. Porównanie: folder roboczy zadania a folder rozwiazanie/

| Element | Folder zadania (Twoje miejsce pracy) | Folder `rozwiazanie/` (Wzorzec referencyjny) |
|---------|--------------------------------------|----------------------------------------------|
| **`index.html`** | Gotowy szablon strony zawierający nagłówek, strukturę i kontener `<div class="wynik">`. | Kompletna strona połączona ze skryptem rozwiązania. |
| **`style.css`** | Kompletne style wizualne przygotowane na potrzeby zadania (nie edytujesz). | Identyczny plik stylów CSS. |
| **`script.js`** | Plik startowy z komentarzem `// Twoje rozwiazanie` i miejscem na kod algorytmu. | W pełni działający, wzorcowy kod JavaScript rozwiązujący zadanie. |
| **Zasada korzystania** | Tu piszesz swój kod samodzielnie na podstawie `instrukcja.md`. | Otwierasz dopiero po własnej próbie, aby porównać podejście algorytmiczne. |

---

## 2. Ściąga składniowa modułu

### Pętla `while` (warunek początkowy)
Stosuj, gdy pętla ma się wykonać 0 lub więcej razy, w zależności od warunku:
```javascript
let licznik = 0;
while (licznik < 5) {
  document.write(`<p>Iteracja nr: <strong>${licznik}</strong></p>`);
  licznik++; // Obowiązkowa modyfikacja stanu!
}
```

### Pętla `do...while` (warunek końcowy)
Stosuj, gdy blok kodu musi wykonać się co najmniej jeden raz:
```javascript
let proba = 0;
do {
  proba++;
  document.write(`<p>Próba synchronizacji: <strong>${proba}</strong></p>`);
} while (proba < 3); // Pamiętaj o średniku na końcu!
```

### Instrukcja `break` (wczesne przerwanie pętli)
Natychmiastowe opuszczenie pętli po wystąpieniu określonego zdarzenia:
```javascript
let waga = 0;
while (true) {
  waga += 20;
  if (waga >= 100) {
    document.write("<p>Osiągnięto limit wagi! Przerywanie załadunku.</p>");
    break; // Wyjście z pętli
  }
}
```

### Instrukcja `continue` (pominięcie iteracji)
Pominięcie reszty instrukcji w bieżącym obiegu:
```javascript
let numer = 0;
while (numer < 5) {
  numer++; // Ważne: inkrementuj PRZED continue!
  if (numer === 3) {
    continue; // Omija numer 3 i przechodzi do kolejnej iteracji
  }
  document.write(`<p>Przetworzono pozycję: <strong>${numer}</strong></p>`);
}
```

---

## 3. Szybkie przypomnienie: warsztat programisty (DevTools i rygor semestru)

1. **Konsola przeglądarki (F12):** Zawsze miej otwartą zakładkę *Console* w narzędziach deweloperskich (`Ctrl + Shift + I` lub `F12`). Czerwony komunikat natychmiast wskaże numer linijki, w której popełniono błąd składniowy.
2. **Standard wypisu wyników:** Wypisujemy dane za pomocą `document.write(...)` bezpośrednio do kontenera `<div class="wynik">`. Nie używamy metod `getElementById`, `querySelector` ani `innerHTML`.
3. **Pętla nieskończona:** Jeśli strona w przeglądarce ładuje się bez końca, a kursor myszy kręci się w miejscu, oznacza to brak modyfikacji licznika w pętli `while`. Zamknij kartę skrótem `Ctrl + W` i popraw kod.
4. **Relatywne ścieżki plików:** Pamiętaj, że plik `script.js` dołączamy w pliku `index.html` przez `<script src="script.js"></script>`.
5. **Użycie prompt():** Zawsze podawaj drugi argument z wartością domyślną. Dla **liczb** (limit pętli, stan magazynu) dodaj `Number()`: `Number(prompt("Podaj limit:", "5"))`. Dla **tekstu** (tak/nie, kod) zostaw wynik bez `Number()`: `prompt("Kontynuować? (tak/nie):", "tak")`.
