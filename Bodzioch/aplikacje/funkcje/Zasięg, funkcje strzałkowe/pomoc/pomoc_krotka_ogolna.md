# Pomoc krótka ogólna: Zasięg zmiennych i funkcje strzałkowe

Szybka ściąga i przewodnik po strukturze zadań dla modułu **T02: Zasięg, funkcje strzałkowe**.

---

## 1. Struktura plików w zadaniu

Każde zadanie w katalogu `nauka/` oraz `sprawdzian/` posiada przejrzystą, przewidywalną architekturę:

| Lokalizacja pliku | Rola pliku | Zawartość i zadanie ucznia |
|-------------------|------------|----------------------------|
| `instrukcja.md` | Przewodnik po zadaniu | Opis problemu, wymagania funkcjonalne oraz dane do wpisania. |
| `index.html` | Szablon startowy HTML | Gotowa struktura semantyczna z kontenerem `<pre id="wynik"></pre>`. |
| `style.css` | Arkusz stylów | Formatowanie wizualne oraz reguła `white-space: pre-wrap;` dla kontenera `#wynik`. |
| `script.js` | Plik startowy JavaScript | Miejsce na Twoje rozwiązanie oznaczone komentarzem `// Twoje rozwiazanie`. |
| `rozwiazanie/index.html` | Wzorzec referencyjny | Działająca strona zintegrowana z kompletnym skryptem. |
| `rozwiazanie/style.css` | Wzorzec stylów | Arkusz CSS odpowiadający plikowi głównemu. |
| `rozwiazanie/script.js` | Wzorzec kodu | Pełne, w 100% działające rozwiązanie referencyjne przygotowane przez nauczyciela. |

---

## 2. Pigułka składniowa modułu (Ściąga)

### A. Funkcje strzałkowe (Arrow Functions)
```javascript
// 1. Dokładnie 1 parametr — brak nawiasów, niejawny return:
const kwadrat = x => x * x;

// 2. Wiele parametrów — nawiasy obowiązkowe, niejawny return:
const suma = (a, b) => a + b;

// 3. Brak parametrów — puste nawiasy obowiązkowe:
const powitanie = () => "Dzień dobry!";

// 4. Wiele linii / instrukcje warunkowe — klamry i jawny return:
const sprawdzPelnoletnosc = (wiek) => {
  if (wiek >= 18) {
    return "Osoba pełnoletnia";
  }
  return "Osoba niepełnoletnia";
};

// 5. Parametry domyślne (Default Parameters):
const obliczBrutto = (netto, stawka = 0.23) => netto * (1 + stawka);
```

### B. Zasięg blokowy i przesłanianie (Shadowing)
```javascript
const poziom = "Podstawowy"; // Zasięg globalny
let poziomWewnetrzny = "";

if (true) {
  const poziom = "Zaawansowany"; // Zmienna blokowa przesłania zmienną globalną
  poziomWewnetrzny = poziom;    // kopia przed wyjściem z bloku
}

console.log(poziomWewnetrzny); // Zaawansowany
console.log(poziom);           // Podstawowy
```

### C. Operator trójargumentowy (`? :`)
```javascript
const stopa = isBiznes => (isBiznes ? 0.15 : 0.05);
const koszt = rozmiar => (rozmiar >= 18 ? 160 : 120);
```

### D. Standard wypisu w Semestrze 2
```javascript
const komunikat = `Raport kalkulacji:\nWynik operacji: ${wynik}\nStatus: Gotowe.`;
document.getElementById("wynik").textContent = komunikat;
```

---

## 3. Szybkie przypomnienie (Checklist deweloperski)

1. **Konsola DevTools (klawisz F12):** Przed zakończeniem pracy otwórz narzędzia deweloperskie w przeglądarce i upewnij się, że w zakładce *Console* nie pojawiają się czerwone błędy składniowe (`SyntaxError` lub `ReferenceError`).
2. **Klamry a słowo `return`:** Jeśli w funkcji strzałkowej otworzysz nawias klamrowy `{`, funkcja **musi** zawierać instrukcję `return`. Bez niej funkcja zwróci `undefined`.
3. **Izolacja funkcji:** Funkcja obliczeniowa nie może wywoływać `prompt()` wewnątrz własnego ciała — pobieraj dane na zewnątrz i przekazuj je jako argumenty wywołania.
4. **Wypis wielowierszowy:** Znak nowej linii `\n` wewnątrz grawisów (Template Literals) działa poprawnie tylko wtedy, gdy kontener `#wynik` ma w CSS właściwość `white-space: pre-wrap;`.
5. **Zakaz `var`:** W całym semestrze 2 deklarujemy zmienne wyłącznie za pomocą `let` oraz `const`.
6. **Szablon raportu:** Jeśli instrukcja podaje obowiązkowy układ linii raportu — zrealizuj go w całości (nie skracaj do samej sumy).
