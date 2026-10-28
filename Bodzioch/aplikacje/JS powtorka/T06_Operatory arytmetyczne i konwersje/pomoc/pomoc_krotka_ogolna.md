# Pomoc ogólna — Moduł T06: Operatory arytmetyczne i konwersje typów

Szybka ściągawka składniowa i organizacyjna do pracy na lekcji w pracowni programistycznej.

---

## 1. Struktura folderów i organizacja pracy

| Element | Lokalizacja | Przeznaczenie |
|---------|-------------|---------------|
| **Pliki startowe zadania** | Główny katalog danego zadania (np. `nauka/zadanie1_kalkulator/`) | Tutaj pracujesz. Otwierasz pliki `index.html` oraz `script.js` i uzupełniasz kod w miejscach oznaczonych komentarzami `// Twoje rozwiazanie`. |
| **Instrukcja do zadania** | `instrukcja.md` w folderze zadania | Dokładny opis krok po kroku: cel, wymagane zmienne, obliczenia oraz treść do wpisania. |
| **Rozwiązanie wzorcowe** | Podfolder `rozwiazanie/` w folderze zadania | Kompletny, w 100% działający kod referencyjny. Otwieraj dopiero po podjęciu samodzielnej próby lub w celu weryfikacji poprawności. |

---

## 2. Ściąga składniowa — operatory i konwersje

### Podstawowe działania i przypisanie
```javascript
let x = 10;
let y = 3;

let suma = x + y;       // 13
let roznica = x - y;    // 7
let iloczyn = x * y;    // 30
let iloraz = x / y;     // 3.3333...
let reszta = x % y;     // 1 (modulo)
let potega = x ** y;    // 1000

const pelneJednostki = Math.floor(125 / 60); // 2 (odrzuca część ułamkową)
const resztaJednostek = 125 % 60;            // 5

x += 5; // to samo co: x = x + 5 (x staje się 15)
x -= 2; // to samo co: x = x - 2 (x staje się 13)
x *= 2; // to samo co: x = x * 2 (x staje się 26)
```

### Inkrementacja i dekrementacja
```javascript
let a = 5;
let b = ++a; // preinkrementacja: a = 6, b = 6 (najpierw zwiększa, potem zwraca)

let c = 5;
let d = c++; // postinkrementacja: c = 6, d = 5 (najpierw zwraca starą wartość, potem zwiększa)
```

### Jawne konwersje typów
```javascript
// Konwersja na liczbę
const l1 = Number("42");           // 42
const l2 = parseInt("42px", 10);   // 42 (odcina 'px', pamiętaj o podstawie 10!)
const l3 = parseFloat("19.99 PLN");// 19.99 (zachowuje część ułamkową)
const l4 = +"15";                  // 15 (unarny plus)

// Konwersja na tekst
const t1 = String(250);            // "250"
const t2 = (250).toString();       // "250"
const t3 = `Wynik: ${250}`;        // "Wynik: 250" (szablon w grawisach)

// Badanie poprawności liczbowej
Number.isNaN(NaN);                 // true
Number.isNaN(0 / 0);               // true
Number.isNaN("tekst");             // false (nie rzutuje, tekst to nie jest NaN)
```

---

## 3. Szybkie przypomnienie — zasady semestru 1

1. **Konsola deweloperska (F12):** Przy każdym uruchomieniu strony w przeglądarce otwórz panel narzędzi deweloperskich (klawisz F12 lub Ctrl+Shift+I) i przejdź do zakładki *Console*, aby sprawdzić, czy nie wystąpiły błędy składniowe.
2. **Rygor wypisu na stronę:** W semestrze 1 wypisujemy wyniki za pomocą `document.write(...)` wewnątrz kontenera `<div class="wynik">`. Kolejne linie oddzielaj znacznikiem `<br>`.
3. **Podpięcie skryptu z `document.write`:** W starterach skrypt jest już wewnątrz `.wynik` jako `<script src="script.js"></script>` — **bez** atrybutów `defer` i `async` (z `defer` przeglądarka ignoruje albo psuje `document.write`). Pliki `index.html` oraz `script.js` leżą w tym samym folderze.
4. **Zmienne let i const:** Jeśli wartość zmiennej będzie modyfikowana (np. przy użyciu `+=`, `++`), deklaruj ją za pomocą `let`. Jeśli wartość jest stała (np. stawka podatku, cena bazowa), użyj `const`. Słowo kluczowe `var` jest surowo wzbronione.
5. **Kolejność działań:** Jeśli łączysz dodawanie z mnożeniem lub konwersją, używaj nawiasów okrągłych `(a + b) * c`, aby zagwarantować pożądaną kolejność operacji.
6. **Pełne jednostki (`Math.floor`):** Gdy z dzielenia potrzebujesz tylko części całkowitej (pełne wsady, pełne godziny), użyj `Math.floor(liczba / dzielnik)`. Resztę daj modulo `%`.
