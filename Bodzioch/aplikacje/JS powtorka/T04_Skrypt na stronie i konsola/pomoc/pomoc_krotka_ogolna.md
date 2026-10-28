# Pomoc krótka ogólna — Moduł T04: Skrypt na stronie i konsola

Przewodnik szybkiego startu i pigułka składniowa dla modułu **T04 — Skrypt na stronie i konsola**.

---

## 1. Zestawienie: Szablon startowy vs Folder rozwiązania

Podczas pracy nad każdym zadaniem warsztatowym korzystasz ze struktury plików:

| Element | Folder zadania (Szablon startowy) | Podfolder `rozwiazanie/` |
|---|---|---|
| **`index.html`** | Kompletna struktura strony z przygotowanymi sekcjami i znacznikami `<script>` lub miejscem na ich wpisanie | Wzorcowy plik HTML ze wszystkimi podłączonymi skryptami i kontenerami wyjściowymi |
| **`style.css`** | Gotowe reguły wizualne dla strony demonstracyjnej oraz stylizacja kontenera `.wynik` | Identyczny lub rozszerzony arkusz stylów |
| **`script.js`** | Plik z komentarzami prowadzącymi (`// KROK 1`, `// Twoje rozwiazanie`), w którym uczeń wpisuje kod | Gotowy, pełny kod JavaScript realizujący wszystkie polecenia instrukcji |
| **`instrukcja.md`** | Precyzyjny opis wymagań, przykłady ze świata aplikacji i sekcja **Treść do wpisania** | Dokumentacja zadania |

> **Złota zasada:** Zawsze podejmij samodzielną próbę napisania kodu w pliku `script.js` w głównym katalogu zadania. Do podfolderu `rozwiazanie/` zajrzyj dopiero wtedy, gdy napotkasz trudność lub chcesz upewnić się, czy Twój kod spełnia wzorce inżynierskie.

---

## 2. Pigułka składniowa modułu T04

### Dołączanie skryptu w HTML

```html
<!-- 1. Skrypt zewnętrzny w <head> z defer — TYLKO gdy NIE używasz document.write() -->
<head>
  <script src="script.js" defer></script>
</head>

<!-- 2. Skrypt zewnętrzny na końcu sekcji <body> (bez document.write) -->
<body>
  <!-- Treść strony -->
  <script src="script.js"></script>
</body>

<!-- 3. Skrypt wewnętrzny (inline) -->
<script>
  console.log("Witaj w konsoli!");
</script>

<!-- 4. Skrypt z document.write() — ZAWSZE wewnątrz .wynik, BEZ defer/async -->
<div class="wynik">
  <script src="script.js"></script>
</div>
```

### Metody obiektu `console` (Narzędzia deweloperskie F12)

```javascript
// Podstawowy komunikat informacyjny
console.log("Uruchomienie skryptu zakończone sukcesem.");

// Informacja pomocnicza
console.info("Załadowano moduł kalkulatora.");

// Ostrzeżenie (żółty komunikat)
console.warn("Wartość parametru jest bliska wartości maksymalnej!");

// Błąd (czerwony komunikat)
console.error("Nieprawidłowy format danych wejściowych!");

// Czytelna prezentacja tablic w postaci tabeli
console.table(["Produkt A", "Produkt B", "Produkt C"]);
```

### Wypis na stronie za pomocą `document.write()`

```html
<!-- Wzorzec zadań: zewnętrzny skrypt WEWNĄTRZ .wynik (bez defer) -->
<div class="wynik">
  <script src="script.js"></script>
</div>
```

```javascript
// script.js
document.write("<p>Status usługi: <strong>Aktywna</strong></p>");
```

### Operator `typeof` w komunikacie (konkatenacja)

```javascript
let czyOtwarte = true;
console.info("Typ zmiennej czyOtwarte: " + typeof czyOtwarte + ".");
// Wynik w konsoli: Typ zmiennej czyOtwarte: boolean.
```

---

## 3. Szybkie przypomnienie: 5 kluczowych wskazówek

1. **Otwieranie konsoli:** Naciśnij klawisz **F12** lub skrót **Ctrl + Shift + I** w przeglądarce i przejdź do zakładki **Console**. Jeśli nic się nie wyświetla, odśwież stronę (**Ctrl + F5**).
2. **Ścieżki względne:** Jeśli plik `script.js` znajduje się w tym samym katalogu co `index.html`, atrybut dołączający ma postać `src="script.js"`. Nie dodawaj przedrostka `/` ani ścieżek bezwzględnych.
3. **Nie łącz atrybutu `src` z kodem wewnętrznym:** Zewnętrzny skrypt `<script src="plik.js"></script>` musi być pusty w środku.
4. **`document.write` vs `defer`:** Wypis na stronie = skrypt wewnątrz `.wynik` **bez** `defer`/`async`. Atrybut `defer` stosuj tylko przy skryptach bez `document.write()`.
5. **Czego NIE używamy:** W tym module nie stosujemy selektorów `getElementById`, `querySelector` ani obsługi zdarzeń `addEventListener`.
