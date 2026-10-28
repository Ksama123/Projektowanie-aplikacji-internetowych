# Pomoc krótka ogólna: Moduł T09 — Instrukcja switch

## 1. Porównanie: szablon startowy vs folder rozwiazanie/

Podczas pracy z zadaniami warsztatowymi i sprawdzianem masz do dyspozycji dwa poziomy kodu:

| Element | Szablon w folderze zadania | Folder `rozwiazanie/` |
|:--------|:---------------------------|:----------------------|
| **Przeznaczenie** | Twoje miejsce pracy i samodzielnej implementacji | Wzorcowe, w 100% działające rozwiązanie referencyjne |
| **Kod HTML (`index.html`)** | Gotowy szkielet semantyczny strony z kontenerem `<div class="wynik">` i dołączonymi plikami | Identyczny szkielet z kompletnym spięciem i poprawnym wyjściem |
| **Styl CSS (`style.css`)** | Gotowy, ostylowany arkusz stylów przygotowany przez nauczyciela | Identyczny plik stylów (nie podlega edycji ucznia w tym module) |
| **Skrypt JS (`script.js`)** | Przygotowane komentarze instruktażowe `// Twoje rozwiazanie` z zadeklarowanymi zmiennymi | Kompletny kod z w pełni zaimplementowaną instrukcją `switch` i logiką |
| **Kiedy zaglądać?** | Od razu na początku pracy z zadaniem | Wyłącznie po podjęciu własnej, samodzielnej próby lub w celu weryfikacji |

---

## 2. Ściąga składniowa modułu

### Wzorzec podstawowy:
```javascript
let wartosc = 1;

switch (wartosc) {
  case 1:
    document.write("Wybrano wariant 1.<br>");
    break;
  case 2:
    document.write("Wybrano wariant 2.<br>");
    break;
  default:
    document.write("Wartość nierozpoznana.<br>");
    break;
}
```

### Wzorzec z grupowaniem przypadków (fall-through):
```javascript
let kodDnia = 6;

switch (kodDnia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("Dzień powszedni.<br>");
    break;
  case 6:
  case 7:
    document.write("Weekend.<br>");
    break;
  default:
    document.write("Niepoprawny dzień.<br>");
    break;
}
```

### Pobieranie danych — kiedy `Number()`, a kiedy nie:

**A) `case` z liczbami** — konwersja jest konieczna:
```javascript
let wpis = prompt("Podaj cyfrę opcji (1-3):", "1");
let opcja = Number(wpis); // "1" → 1, bo switch porównuje przez ===
```

**B) `case` z tekstami** — porównuj wynik `prompt()` bezpośrednio (tak jak w zadaniach 4–5 i na sprawdzianie Z2):
```javascript
let kod = prompt("Podaj kod (A, B, C):", "B");
// bez Number() — case "A": / case "B": oczekują stringa
```

> `Number("STANDARD")` daje `NaN` i program zawsze trafi do `default`. Stosuj `Number()` wyłącznie wtedy, gdy klauzule `case` zawierają liczby.

---

## 3. Szybkie przypomnienie techniczne (5 punktów)

1. **Konsola DevTools (klawisz F12)**: Zawsze miej otwartą zakładkę Console w przeglądarce. Błędy składniowe (np. brak klamry lub dwukropka) natychmiast pojawią się tam na czerwono.
2. **Pamiętaj o `break;`**: Każda klauzula `case` (oprócz świadomie grupowanych) musi kończyć się słowem `break;`. Jego brak spowoduje wykonanie kodu kolejnych przypadków.
3. **Uwaga na typy danych**: Instrukcja `switch` porównuje wartości operatorem `===`. Tekst `"1"` NIE pasuje do `case 1:` — wtedy użyj `Number()`. Dla `case "A":` wynik `prompt()` zostaw jako tekst.
4. **Wypis w Semestrze 1**: Wyniki prezentujemy na stronie za pomocą `document.write(...)` z użyciem znacznika `<br>` do nowej linii. Nie stosujemy metod `getElementById()` ani `querySelector()`.
5. **Ścieżki do plików**: Skrypt `script.js` oraz arkusz `style.css` znajdują się w tym samym folderze co `index.html`. Dołączamy je bez prefiksów ścieżek (`src="script.js"` i `href="style.css"`).
