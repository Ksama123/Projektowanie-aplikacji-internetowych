# Szybka pomoc: Porównania i operatory logiczne

## 1. Struktura zadania: pliki startowe a rozwiązanie wzorcowe

Pracując nad zadaniami z tego działu, korzystasz z plików przygotowanych bezpośrednio w katalogu zadania. Po zakończeniu własnej pracy możesz porównać swój kod z wersją w podkatalogu `rozwiazanie/`.

| Element | Folder zadania (Twoja praca) | Folder `rozwiazanie/` (Wzorzec) |
| :--- | :--- | :--- |
| `index.html` | Gotowa struktura z kontenerem `<div class="wynik">` i podpiętym skryptem | Kompletny plik HTML ze sformatowanym widokiem |
| `style.css` | Kompletny arkusz stylów wizualnych | Identyczny arkusz stylów |
| `script.js` | Szablon startowy z komentarzami `// Krok N:` i miejscem na Twój kod | Pełny, działający kod JavaScript z implementacją logiki |
| `instrukcja.md` | Wytyczne, opis problemu, dane do wpisania i kryteria sukcesu | Identyczna treść instrukcji |

---

## 2. Ściąga składniowa modułu T07

### Operatory porównania
```javascript
// Ścisła równość i nierówność (sprawdza typ i wartość) - ZAWSZE ZALECANE
const czyRowne = (a === b);    // true, gdy a i b mają ten sam typ i wartość
const czyRozne = (a !== b);    // true, gdy a i b różnią się typem lub wartością

// Operatory relacyjne (wielkościowe)
const wieksze = (a > b);       // a większe niż b
const mniejsze = (a < b);      // a mniejsze niż b
const wiekszeRowne = (a >= b); // a większe lub równe b
const mniejszeRowne = (a <= b);// a mniejsze lub równe b
```

### Operatory logiczne
```javascript
// Koniunkcja (AND) - oba warunki muszą być prawdziwe
const obaSpelnione = warunek1 && warunek2;

// Alternatywa (OR) - co najmniej jeden warunek musi być prawdziwy
const chocJeden = warunek1 || warunek2;

// Negacja (NOT) - odwrócenie wartości logicznej
const zaprzeczenie = !czyZalogowany;

// Pierwszeństwo: && wiąże się ściślej niż || — używaj nawiasów:
const decyzja = (progSpelniony || maKarte) && !zablokowany;
```

### Wartości Falsy (dokładnie 6 podstawowych)
```javascript
// W kontekście logicznym za fałsz (false) uznawane są tylko:
false, 0, "", null, undefined, NaN
// Wszystkie inne wartości są TRUTHY (nawet "0", "false", -1, " ")
```

### Pobieranie danych z wartością domyślną
```javascript
// Bezpieczne pobranie danych z drugim argumentem:
const wpis = prompt("Podaj liczbę punktów:", "50");
const punkty = Number(wpis); // Zawsze konwertuj tekst na liczbę przed porównaniem
```

---

## 3. Szybkie przypomnienie techniczne (4 kluczowe zasady)

1. **Konsola przeglądarki (F12)**: Przed uruchomieniem skryptu otwórz Narzędzia Deweloperskie (klawisz F12 lub Ctrl+Shift+I) i przejdź do zakładki *Console*. Wszystkie błędy składniowe oraz komunikaty z `console.log()` zobaczysz właśnie tam.
2. **Standard wyjścia semestru 1**: Wyniki prezentujemy na stronie za pomocą instrukcji `document.write("Treść: " + wartosc + "<br>")` umieszczanej wewnątrz elementu `<div class="wynik">`.
3. **Bezwzględny zakaz metod DOM**: W semestrze 1 nie stosujemy metod manipulacji węzłami DOM (`getElementById`, `querySelector`) ani zdarzeń (`addEventListener`). Pracujemy na bezpośrednim wykonywaniu skryptu.
4. **Podpięcie skryptu w kontenerze wyniku**: W pliku `index.html` skrypt podpinamy ścieżką względną **wewnątrz** elementu `<div class="wynik">` — dzięki temu `document.write()` trafia dokładnie do tej ramki: `<div class="wynik"><script src="script.js"></script></div>`.
