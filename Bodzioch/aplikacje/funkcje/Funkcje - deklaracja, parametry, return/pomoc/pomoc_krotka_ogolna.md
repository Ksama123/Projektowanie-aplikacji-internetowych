# Pomoc Krótka Ogólna — Moduł T01: Funkcje — deklaracja, parametry, return

Skrótowe zestawienie najważniejszych pojęć, składni funkcji oraz reguł pracy z kodem w module T01.

---

## 1. Struktura Plików Zadania: Szablon Startowy vs Rozwiązanie

Każde ćwiczenie w dziale zorganizowane jest w przejrzystą strukturę katalogów:

| Element | Główny folder zadania (np. `zadanie1_.../`) | Podfolder `rozwiazanie/` |
|:--------|:-------------------------------------------|:-------------------------|
| **Przeznaczenie** | Przestrzeń do samodzielnej pracy ucznia | Wzorcowa, w 100% działająca implementacja |
| `index.html` | Gotowy dokument HTML z przygotowanym kontenerem `<div id="wynik" class="wynik"></div>` | Identyczny dokument HTML podłączony do pełnego skryptu |
| `style.css` | Gotowe style wizualne zadania z regułą `white-space: pre-wrap;` | Identyczny arkusz stylów |
| `script.js` | Szablon startowy z komentarzami `// KROK ...` i instrukcjami `TODO` | Kompletny kod z zaimplementowanymi funkcjami |
| `instrukcja.md` | Szczegółowy opis zadania, dane wejściowe i oczekiwany rezultat | — |

---

## 2. Pigułka Składniowa Działu (Ściąga Funkcyjna)

### A. Podstawowa deklaracja funkcji nazwanej
```javascript
function nazwaFunkcji(parametr1, parametr2) {
  let wynikObliczen = parametr1 + parametr2;
  return wynikObliczen; // Zwrócenie wartości do programu
}
```

### B. Wywołanie funkcji i przechwycenie wyniku
```javascript
// Przekazanie wartości (argumentów) i zapisanie wyniku do zmiennej:
let wynikKalkulacji = nazwaFunkcji(15, 30);
console.log(`Wynik w konsoli: ${wynikKalkulacji}`);
```

### C. Funkcja z parametrem domyślnym
```javascript
function obliczBrutto(netto, stawkaVat = 0.23) {
  return netto * (1 + stawkaVat);
}

let standardVat = obliczBrutto(100);       // Użyje stawki 0.23 -> 123
let obnizonyVat = obliczBrutto(100, 0.08); // Użyje stawki 0.08 -> 108
```

### D. Wczesny powrót z funkcji (Guard Clause)
```javascript
function wyliczRabat(kwotaZamowienia) {
  // Strażnik: eliminacja błędnych lub zerowych kwot
  if (kwotaZamowienia <= 0) {
    return 0;
  }
  if (kwotaZamowienia >= 500) {
    return kwotaZamowienia * 0.10;
  }
  return kwotaZamowienia * 0.02;
}
```

### E. Standard wypisu wyników w Semestrze 2
```javascript
// Przygotowanie wielowierszowego tekstu za pomocą znaku nowej linii \n
let raport = `Kalkulacja kosztów:\n` +
             `Wartość netto: 200.00 PLN\n` +
             `Wartość brutto: 246.00 PLN`;

// Bezpieczne wpisanie tekstu do kontenera #wynik
document.getElementById("wynik").textContent = raport;
```

---

## 3. Szybkie Przypomnienie (Dobre Praktyki)

1. **Konsola narzędzi deweloperskich (klawisz `F12`):** Sprawdzaj konsolę przy każdym odświeżeniu strony. Wszelkie błędy składniowe (`SyntaxError`) i literówki w nazwach funkcji (`ReferenceError`) pojawią się w niej natychmiast na czerwonym tle.
2. **Kolejność argumentów ma znaczenie:** Argumenty przekazywane podczas wywołania funkcji trafiają do parametrów według kolejności ich zdefiniowania, od lewej do prawej.
3. **`return` natychmiast przerywa funkcję:** Każda instrukcja umieszczona w tym samym bloku poniżej słowa `return` nie zostanie nigdy wykonana.
4. **Znak nowej linii to `\n`:** Właściwość `textContent` traktuje znaczniki HTML jak zwykły tekst. Nie wpisuj do niej znaczników `<br>`. Do podziału wierszy używaj wyłącznie znaku `\n`.
5. **Etykiety raportu:** W treści instrukcji podane są wymagane nagłówki i etykiety — te frazy muszą pojawić się w `#wynik`. Ozdobne linie separatorów (np. `---`) są opcjonalne i nie wpływają na ocenę.
6. **Czystość funkcji:** Funkcja obliczeniowa nie powinna zawierać w swoim ciele wywołań `prompt()` ani zapytań do DOM. Wszystkie dane funkcja otrzymuje przez parametry, a wynik oddaje przez `return`.
