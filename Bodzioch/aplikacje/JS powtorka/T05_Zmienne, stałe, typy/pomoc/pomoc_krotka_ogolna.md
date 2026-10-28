# Pomoc krótka ogólna: Zmienne, stałe, typy

## 1. Organizacja pracy w module

Każde zadanie w katalogu `nauka/` oraz `sprawdzian/` posiada przygotowane pliki bazowe oraz wzorcowe rozwiązanie:

| Lokalizacja | Zawartość i rola | Kiedy z niej korzystać? |
|:------------|:-----------------|:------------------------|
| **Główny folder zadania** (np. `zadanie1_.../`) | Pliki `index.html`, `style.css`, `script.js` z komentarzami `// KROK N: ...` | **Twoje miejsce pracy**. Tutaj wpisujesz własny kod JavaScript rozwiązując zadanie zgodnie z poleceniem w `instrukcja.md`. |
| **Podfolder `rozwiazanie/`** (np. `zadanie1_.../rozwiazanie/`) | Kompletny, w 100% działający kod wzorcowy | **Punkt weryfikacji**. Otwierasz go wyłącznie wtedy, gdy po samodzielnych próbach utkniesz lub chcesz porównać swój kod z wzorcem. |

---

## 2. Minimum składniowe działu (Ściągawka)

### Deklarowanie zmiennych i stałych
```javascript
const STAWKA_VAT = 0.23;     // Wartość stała, nie można jej nadpisać
let cenaNetto = 100;          // Zmienna, jej wartość można modyfikować
cenaNetto = 120;              // Poprawna zmiana wartości (bez ponownego let)
```

### Typy prymitywne i operator `typeof`
```javascript
const nazwa = "Produkt A";    // string
const ilosc = 5;              // number
const dostepny = true;        // boolean
let opis;                     // undefined
const kategoria = null;       // null (uwaga: typeof null zwraca "object")

console.log(typeof nazwa);    // "string"
console.log(typeof ilosc);    // "number"
console.log(typeof dostepny); // "boolean"
```

### Jawne rzutowanie i konwersje
```javascript
const tekstCena = "49.99 PLN";
const liczba1 = Number("49.99");         // 49.99 (liczba)
const liczba2 = parseFloat(tekstCena);   // 49.99 (odcina litery po liczbie)
const calkowita = parseInt("150px", 10); // 150 (drugi parametr to baza dziesiętna)
const jakoNapis = String(2026);          // "2026"
const czyPrawda = Boolean(1);            // true (0, "", null, undefined dają false)
```

### Łączenie stringów (literały szablonowe)
```javascript
const produkt = "Klawiatura";
const cena = 150;

// Zamiast tradycyjnego: "Produkt: " + produkt + ", cena: " + cena + " zł"
// Używamy grawisów (backticków) i interpolacji:
const raport = `Produkt: ${produkt}, cena: ${cena} zł (brutto: ${cena * 1.23} zł)`;
```

### Zaokrąglanie kwot do 2 miejsc po przecinku
```javascript
let koszt = 50 + 6 * 129.90;          // bywa 829.4000000000001
koszt = Math.round(koszt * 100) / 100; // wynik: 829.4
```

### Standard wypisu na stronę w Semestrze 1
```javascript
// 1. Zapis diagnostyczny w konsoli
console.log("Dane załadowane pomyślnie.");

// 2. Wypis do kontenera wyniku na stronie
document.write(`<strong>${produkt}</strong> - ${cena} zł<br>`);
```

---

## 3. Szybkie przypomnienie (Checklista techniczna)

1. **Konsola deweloperska (DevTools)**: Otwieraj konsolę klawiszem `F12` lub skrótem `Ctrl + Shift + I` (zakładka *Console*). Sprawdzaj, czy nie ma tam czerwonych błędów składniowych.
2. **Kropka zamiast przecinka**: W liczbach dziesiętnych w kodzie JavaScript zawsze używamy kropki (`19.99`), nigdy przecinka.
3. **Pary cudzysłowów i grawisów**: Pamiętaj, aby literały szablonowe z `${...}` zamykać tym samym znakiem grawisu (``` ` ```), a nie pojedynczym apostrofem (`'`).
4. **Wypis semestru 1**: W tym dziale posługujemy się instrukcją `document.write()` i zapisem w kontenerze `<div class="wynik">`. Nie używamy metod `document.getElementById()` ani zdarzeń.
5. **Ścieżki do plików**: W starterach tego działu skrypt jest dołączony wewnątrz kontenera `<div class="wynik">` znacznikiem `<script src="script.js"></script>` — dzięki temu `document.write()` trafia do tego bloku.
6. **Kwoty dziesiętne**: Po mnożeniu cen z groszami stosuj `Math.round(kwota * 100) / 100`, aby uniknąć wyniku w stylu `829.4000000000001`.
