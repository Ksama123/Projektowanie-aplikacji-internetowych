# Szybka pomoc: Moduł T10 — Pętla for

## 1. Jak pracować z zadaniami w module

| Miejsce w katalogu zadania | Co zawiera | Jak korzystać |
|----------------------------|------------|---------------|
| `instrukcja.md` | Pełny opis zadania, cel biznesowy, wymagania funkcjonalne oraz dosłowne treści do wpisania. | Przeczytaj uważnie przed otwarciem edytora kodu. |
| `index.html`, `style.css`, `script.js` (katalog główny zadania) | Pliki robocze dla ucznia. W `script.js` znajdują się komentarze `// TODO:` wskazujące miejsca do samodzielnego uzupełnienia. | Tutaj piszesz swoje rozwiązanie. Po zapisaniu odśwież stronę w przeglądarce. |
| `rozwiazanie/` | Kompletne, w 100% działające pliki wzorcowe przygotowane przez nauczyciela. | Otwórz wyłącznie po podjęciu samodzielnej próby, aby porównać kod lub znaleźć przyczynę błędu. |

---

## 2. Ściąga składniowa modułu

### Podstawowa pętla `for` (iteracja rosnąca)
```javascript
for (let i = 1; i <= 5; i++) {
  document.write(`<p>Numer elementu: ${i}</p>`);
}
```

### Pętla z krokiem innym niż 1
```javascript
for (let i = 2; i <= 10; i += 2) {
  document.write(`<p>Liczba parzysta: ${i}</p>`);
}
```

### Iteracja malejąca (odliczanie w dół)
```javascript
for (let i = 5; i >= 1; i--) {
  document.write(`<p>Pozostało sekund: ${i}</p>`);
}
```

### Wzorzec sumatora (akumulacja wartości)
```javascript
let suma = 0;
for (let i = 1; i <= 4; i++) {
  suma += 25; // dodajemy kolejną kwotę
}
document.write(`<p>Łączna kwota: ${suma} zł</p>`);
```

### Parzystość i nieparzystość
```javascript
if (i % 2 === 0) {
  // liczba parzysta
} else {
  // liczba nieparzysta
}

if (i % 2 !== 0) {
  // liczba nieparzysta (warunek zapisany wprost)
}
```

### Pętla zagnieżdżona (siatka 2D) — tylko teoria/quiz
> W zadaniach `nauka/` i na sprawdzianie T10 **nie** jest wymagana.
```javascript
for (let wiersz = 1; wiersz <= 3; wiersz++) {
  for (let kolumna = 1; kolumna <= 2; kolumna++) {
    document.write(`<p>Pole [${wiersz}, ${kolumna}]</p>`);
  }
}
```

---

## 3. Szybkie przypomnienie — zasady techniczne i dobre praktyki
1. **Narzędzia deweloperskie (F12):** Jeżeli po odświeżeniu strony nic się nie pojawia, naciśnij klawisz `F12` w przeglądarce i sprawdź zakładkę **Console**. Czerwony komunikat wskaże numer linijki, w której wystąpił błąd.
2. **Zmienna `let` zamiast `const`:** Zmienna w pętli `for` musi zmieniać swoją wartość w każdym kroku (`i++`). Zastosowanie `const` natychmiast zatrzyma program z błędem `Assignment to constant variable`.
3. **Pętla nieskończona:** Upewnij się, że warunek w pętli kiedyś stanie się fałszywy. Jeśli odliczasz w dół (`i--`), warunkiem musi być np. `i >= 1`, a nie `i <= 10`.
4. **Standard wypisu Semestru 1:** Wszystkie komunikaty wypisujemy za pomocą `document.write(...)` bezpośrednio na stronę. W tym semestrze nie używamy metod `getElementById` ani zdarzeń kliknięcia.
5. **`prompt()`:** Gdy zadanie wymaga limitu z okna dialogowego, zawsze podaj drugi argument (wartość domyślną) i skonwertuj wynik przez `Number()`, np. `Number(prompt("Podaj liczbę:", "5"))`. Szablon `script.js` często ma już gotowe to wywołanie — wtedy skup się na pętli.
