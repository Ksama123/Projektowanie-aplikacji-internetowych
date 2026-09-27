# Tablice w JavaScript - Kompendium Wiedzy

Tablica (Array) to uporządkowana lista danych. W przeciwieństwie do zwykłej zmiennej, która przechowuje jedną wartość, tablica może przechowywać ich wiele pod jedną nazwą.

To dział **semestru 2**, po [`08_date`](../08_date/). Wypis jak od Math — **nie** `document.write`, **nie** `querySelector` / `createElement` (semestr 3):

```js
document.getElementById("wynik").textContent = "Owoc: " + owoce[0];
```

Kilka linii: zbieraj tekst i sklejaj z `"\n"` (w CSS `#wynik` ma `white-space: pre-wrap`). Jedno przypisanie na końcu — każde kolejne `textContent =` **nadpisuje** pudełko (w przeciwieństwie do `write`, które dopisywało).

## 1. Tworzenie tablicy

Najprostszym sposobem na utworzenie tablicy jest użycie nawiasów kwadratowych `[]`.

```javascript
// Pusta tablica
let pustyKoszyk = [];

// Tablica z elementami (liczby)
let oceny = [4, 5, 3, 2, 6];

// Tablica z tekstami (stringami)
let owoce = ["jabłko", "banan", "gruszka"];

// Tablica mieszana (różne typy danych - możliwe, ale rzadko stosowane w prostych zadaniach)
let osoba = ["Jan", "Kowalski", 17, true];
```

## 2. Dostęp do elementów (Indeksowanie)

Elementy w tablicy są numerowane od **0**. Ten numer nazywamy **indeksem**.

```javascript
let owoce = ["jabłko", "banan", "gruszka"];

document.getElementById("wynik").textContent =
  owoce[0] + "\n" + owoce[1] + "\n" + owoce[2];
// jabłko, banan, gruszka — każda nazwa w nowej linii
```

Aby zmienić element, również używamy indeksu:

```javascript
owoce[1] = "truskawka"; // Zmienia "banan" na "truskawka"
// Teraz tablica to: ["jabłko", "truskawka", "gruszka"]
```

## 3. Długość tablicy (length)

Właściwość `.length` mówi nam, ile elementów znajduje się w tablicy.

```javascript
let kolory = ["czerwony", "zielony", "niebieski"];
document.getElementById("wynik").textContent = String(kolory.length); // 3
```

**Ważne:** Ostatni element tablicy ma zawsze indeks o 1 mniejszy niż długość tablicy (`tablica.length - 1`).

## 4. Dodawanie i usuwanie elementów

JavaScript oferuje gotowe metody do zarządzania zawartością tablic.

| Metoda             | Opis                                    | Przykład                        |
| :----------------- | :-------------------------------------- | :------------------------------ |
| `push(element)`    | Dodaje element na **koniec** tablicy.   | `owoce.push("mango");`          |
| `pop()`            | Usuwa **ostatni** element i go zwraca.  | `let ostatni = owoce.pop();`    |
| `unshift(element)` | Dodaje element na **początek** tablicy. | `owoce.unshift("ananas");`      |
| `shift()`          | Usuwa **pierwszy** element i go zwraca. | `let pierwszy = owoce.shift();` |

`push` i `pop` pracują na **końcu** — tak budujesz kolejkę dopisywaną na dole. `unshift` i `shift` ruszają **początek**, więc reszta elementów zmienia indeks. Typowa pomyłka: `pop` gdy chciałeś zdjąć pierwszą osobę z kolejki — do tego jest `shift`.

Te metody **zmieniają** tablicę w miejscu. Nie dostajesz kopii, tylko ten sam koszyk po operacji.

## 5. Iteracja (Pętle)

Aby wykonać operację na każdym elemencie tablicy, używamy pętli `for`.

```javascript
let liczby = [10, 20, 30, 40];

let linie = [];
for (let i = 0; i < liczby.length; i++) {
  linie.push("Liczba: " + liczby[i]);
}
document.getElementById("wynik").textContent = linie.join("\n");
```

Każde przypisanie `textContent =` **nadpisuje** pudełko. Dlatego zbierasz linie w pętli, a na stronę wpisujesz **raz**, na końcu. `document.write` z semestru 1 dopisywał — tu tak nie działa.

## 6. Operacje na tekście (String <-> Array)

Często musimy zamienić tekst na tablicę lub odwrotnie.

- **`split(separator)`**: Zamienia tekst na tablicę, dzieląc go według separatora.
- **`join(separator)`**: Łączy elementy tablicy w jeden tekst, wstawiając separator między nimi.

```javascript
let zdanie = "Ala ma kota";
let slowa = zdanie.split(" "); // ["Ala", "ma", "kota"]

let noweslowa = ["To", "jest", "test"];
let tekst = noweslowa.join("-"); // "To-jest-test"
```

## 7. Inne przydatne metody

- **`reverse()`**: Odwraca kolejność elementów w tablicy (mutuje tablicę - zmienia ją na stałe).
- **`sort()`**: Sortuje tablicę (alfabetycznie). Dla liczb wymaga specjalnej funkcji pomocniczej, ale w podstawowych zadaniach sortujemy teksty.
- **`splice(start, ile, co_dodać)`**: Potężna metoda do usuwania i dodawania elementów w środku tablicy.
  - `start`: indeks, od którego zaczynamy.
  - `ile`: ile elementów usunąć (0 jeśli tylko dodajemy).
  - `co_dodać`: (opcjonalnie) nowe elementy do wstawienia.
- **`slice(start, koniec)`**: Kopiuje fragment tablicy od indeksu `start` do `koniec` (nie wliczając `koniec`). Nie zmienia oryginalnej tablicy.
- **`concat(tablica2)`**: Łączy dwie tablice w nową.

```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]
```

## 8. Interakcja z Użytkownikiem

Aby nasze programy były ciekawsze, możemy pobierać dane od użytkownika.

### `prompt()`

Funkcja `prompt("Pytanie")` wyświetla okienko, w którym użytkownik może wpisać tekst.

```javascript
let imie = prompt("Podaj swoje imię:");
let imiona = [];
imiona.push(imie); // Dodajemy imię do tablicy
```

### Konwersja typów (Tekst -> Liczba)

**Ważne:** `prompt` zawsze zwraca **tekst** (string). Jeśli wpiszesz "5", program widzi to jako napis "5", a nie liczbę 5.
Aby wykonywać obliczenia matematyczne, musisz zamienić tekst na liczbę.

- **`Number(tekst)`**: Zamienia tekst na liczbę (również zmiennoprzecinkową).
- **`parseInt(tekst)`**: Zamienia tekst na liczbę całkowitą (ucina część po przecinku).

```javascript
let cenaTekst = prompt("Podaj cenę:"); // np. "10"
let cenaLiczba = Number(cenaTekst); // 10 (jako liczba)

// Lub skrócony zapis w jednej linii:
let wiek = Number(prompt("Ile masz lat?"));
```

---

## 9. Szukanie: `indexOf` i `includes`

`indexOf(szukany)` zwraca indeks pierwszego trafienia albo `-1`, gdy nic nie ma. `includes(szukany)` zwraca `true` albo `false`. Do odpowiedzi „czy jest na liście” wystarczy `includes`. Do „na której pozycji” — `indexOf`.

Porównanie jest ścisłe. `"Mleko"` i `"mleko"` to dwa różne elementy, dopóki nie sprowadzisz obu do małych liter.

---

## 10. Częste pułapki

1. **Indeks od zera** — trzeci element to `[2]`, nie `[3]`.
2. **Puste miejsce po `split(",")`** — `"a, b"` da `" b"` ze spacją. Przed porównaniem zrób `trim` na elemencie.
3. **`sort()` na liczbach** — bez funkcji porównującej sortuje jak napisy (`10` przed `2`). Na tym dziale sortuj raczej teksty albo podaj `(a, b) => a - b`.
4. **`textContent` w pętli** — zostaje tylko ostatnia linia. Zbieraj, potem jedno przypisanie.
5. **Nie buduj listy znacznikami HTML** — semestr 3 (`createElement`). Tu wynik to tekst w `#wynik`.

Tablice 2D i `map` / `filter` / `reduce` są w [`10_tablice_2d`](../10_tablice_2d/). Literał obiektu — [`11_literal_obiektu`](../11_literal_obiektu/).
