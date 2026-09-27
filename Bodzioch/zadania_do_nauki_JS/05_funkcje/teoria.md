# Funkcje w JavaScript

Funkcja to wydzielony fragment kodu, który wykonuje jedno zadanie. Definiujesz go raz, a potem wywołujesz w wielu miejscach. Dzięki temu kod jest krótszy, czytelniejszy i łatwiej znaleźć błąd.

To dział **semestru 1**, po [`04_petle`](../04_petle/). Nadal `document.write` i ramka `.wynik`. `if` i pętla mogą być **w środku** funkcji. Bez `getElementById` i bez kliknięć — to semestr 3.

W praktyce funkcja liczy pole, składa napis stopki, sprawdza zaliczenie albo zwraca kwotę, której użyjesz dalej.

---

## 1. Czym są funkcje?

Funkcja to wydzielony fragment kodu, który wykonuje określone zadanie. Możemy o niej myśleć jak o "podprogramie" lub "przepisie", który definiujemy raz, a potem możemy go używać (wywoływać) wielokrotnie w różnych miejscach programu.

Dzięki funkcjom:

- Nasz kod jest czytelniejszy.
- Nie musimy wielokrotnie pisać tego samego kodu (zasada DRY - Don't Repeat Yourself).
- Możemy łatwiej znajdować i naprawiać błędy.

### Definiowanie funkcji

Aby stworzyć funkcję, używamy słowa kluczowego `function`, podajemy jej nazwę, nawiasy okrągłe `()` oraz blok kodu w nawiasach klamrowych `{}`.

```javascript
function nazwaFunkcji() {
  // Kod do wykonania
  document.write("To jest kod wewnątrz funkcji!");
}
```

### Wywoływanie funkcji

Samo zdefiniowanie funkcji nie powoduje jej uruchomienia. Aby kod zadziałał, musimy funkcję **wywołać** (uruchomić), podając jej nazwę wraz z nawiasami.

```javascript
nazwaFunkcji(); // To wywołanie uruchomi kod z definicji powyżej
```

### Gdzie stoi definicja, a gdzie wywołanie

Samo napisanie `function ...` nic nie wypisuje. Przepis musi być **znany**, zanim go wywołasz.

Na tym dziale często trzymamy definicję w `<head>` (albo na górze `script.js`), a **wywołanie** w ramce wyniku. `document.write` z wywołania ląduje tam, gdzie stoi drugi znacznik `<script>` — w pudełku, nie zamiast całej strony.

```html
<head>
  <script>
    function powitanie() {
      document.write("Cześć!");
    }
  </script>
</head>
<body>
  <div class="wynik">
    <script>
      powitanie();
    </script>
  </div>
</body>
```

Jeśli wywołasz funkcję, zanim przeglądarka wczyta definicję, konsola pokaże, że nazwa nie istnieje. Dlatego przepis jest wyżej, a start — w ramce.

W nowszych działach (od Math) wszystko ląduje w jednym `script.js` pod `#wynik`. Tu zostajemy przy `write`, żeby nie mieszać DOM.

---

## 2. Parametry i Argumenty

Funkcje mogą być interaktywne - mogą przyjmować dane wejściowe.

- **Parametry**: To zmienne zadeklarowane w nawiasach `()` podczas _tworzenia_ funkcji. Działają jak pojemniki na dane.
- **Argumenty**: To konkretne wartości przekazywane do funkcji podczas jej _wywoływania_.

### Przykład:

```javascript
// 'imie' to PARAMETR
function powitanie(imie) {
  document.write("Cześć, " + imie + "!<br>");
}

// "Jan", "Anna" to ARGUMENTY
powitanie("Jan"); // Wypisze: Cześć, Jan!
powitanie("Anna"); // Wypisze: Cześć, Anna!
```

Możemy definiować wiele parametrów, oddzielając je przecinkami:

```javascript
function poleProstokata(bokA, bokB) {
  let pole = bokA * bokB;
  document.write("Pole wynosi: " + pole);
}

poleProstokata(5, 10);
```

---

## 3. Zwracanie wartości (`return`)

Dotychczasowe funkcje tylko wyświetlały wynik (np. przez `document.write`). Częściej jednak chcemy, aby funkcja **obliczyła** coś i **zwróciła** wynik, abyśmy mogli go użyć dalej w kodzie (np. zapisać do zmiennej). Służy do tego instrukcja `return`.

**Ważne:** Instrukcja `return` kończy działanie funkcji. Kod napisany po `return` nie zostanie wykonany.

```javascript
function dodaj(a, b) {
  let wynik = a + b;
  return wynik; // Funkcja "oddaje" wynik
}

let suma = dodaj(10, 5); // Wynik 15 trafia do zmiennej 'suma'
alert("Wynik dodawania: " + suma);

// Możemy też użyć wyniku od razu w innej operacji
let podwojnaSuma = dodaj(3, 3) * 2;
```

---

## 4. Zasięg zmiennych (Scope) - BARDZO WAŻNE!

W JavaScript miejsce, w którym utworzymy zmienną, decyduje o tym, gdzie ta zmienna jest widoczna. Nazywamy to **zasięgiem** (scope).

Wyróżniamy dwa podstawowe rodzaje zasięgu:

### A. Zasięg Globalny (Global Scope)

Zmienne utworzone **poza jakąkolwiek funkcją** są zmiennymi globalnymi.

- Są widoczne wszędzie w kodzie (wewnątrz wszystkich funkcji też).
- Istnieją tak długo, jak otwarta jest strona.
- **Ryzyko:** Łatwo je przez pomyłkę nadpisać w innej części programu.

```javascript
let imie = "Globalny Jan"; // Zmienna globalna

function pokazImie() {
  // Funkcja widzi zmienną globalną
  document.write(imie);
}
```

### B. Zasięg Lokalny (Local/Function Scope)

Zmienne utworzone **wewnątrz funkcji** (w tym również parametry funkcji!) są zmiennymi lokalnymi.

- Są widoczne **TYLKO** wewnątrz tej konkretnej funkcji.
- Poza funkcją te zmienne nie istnieją (próba ich użycia spowoduje błąd).
- Są tworzone przy wywołaniu funkcji i usuwane po jej zakończeniu.
- **Zaleta:** Bezpieczeństwo. Możemy mieć zmienne o nazwie `wynik` w 10 różnych funkcjach i nie będą sobie przeszkadzać.

```javascript
function oblicz() {
  let wynik = 100; // Zmienna lokalna
  document.write(wynik); // Działa
}

oblicz();
// document.write(wynik); // BŁĄD! Zmienna 'wynik' tutaj nie istnieje!
```

### Przesłanianie (Shadowing)

Co jeśli mamy zmienną globalną i lokalną o tej samej nazwie?
Funkcja zawsze "woli" swoje zmienne lokalne. Zmienna lokalna **przesłania** zmienną globalną wewnątrz funkcji.

```javascript
let liczba = 50; // GLOBALNA

function test() {
  let liczba = 10; // LOKALNA (nowa zmienna o tej samej nazwie)
  document.write("W środku: " + liczba); // Wypisze 10
}

test();
document.write("Na zewnątrz: " + liczba); // Wypisze 50 (Globalna nie została zmieniona!)
```

**Uważaj!** Jeśli wewnątrz funkcji zapomnisz słowa kluczowego `let` (lub `var`) podczas przypisywania wartości, możesz przez pomyłkę nadpisać zmienną globalną!

```javascript
let licznik = 0;

function zlaFunkcja() {
  licznik = 5; // Brak 'let'! Modyfikujemy zmienną GLOBALNĄ!
}

zlaFunkcja();
// Teraz licznik wynosi 5 wszędzie. Czasami to celowe, ale często to błąd.
```

---

## Dobre praktyki

1.  **Nazywaj funkcje czasownikami**: `obliczPole`, `pobierzImie`, `wyswietlWynik`. Nazwa powinna mówić, co funkcja robi.
2.  **Jedna funkcja = jedno zadanie**: Nie twórz funkcji "do wszystkiego". Lepiej mieć dwie mniejsze funkcje niż jedną ogromną.
3. **Unikaj zmiennych globalnych.** Dane do funkcji podawaj parametrami, wynik wyciągaj przez `return`. Globalna zmienna ma sens przy jednym liczniku na całą stronę, nie przy każdej liczbie pomocniczej.

---

## 5. Wypis i `return`

Funkcja może sama wołać `document.write` albo tylko **zwrócić** liczbę / napis. Drugi sposób jest czytelniejszy: liczysz w funkcji, a wypisujesz w jednym miejscu.

```js
function brutto(netto) {
  return netto * 1.23;
}

document.write("Do zapłaty: " + brutto(100));
```

Typowa pomyłka: liczysz w funkcji, ale zapominasz `return` — wtedy wynik to `undefined` i na stronie widać to słowo. Druga: `return` za wcześnie i reszta funkcji się nie wykona.

---

## 6. Częste pułapki

1. **Definicja bez wywołania** — ramka pusta, bo nikt nie napisał `nazwa();`.
2. **Wywołanie przed definicją** w złej kolejności plików — `is not defined`.
3. **Parametr to nie to samo co `prompt`.** `prompt` pytasz tam, gdzie chcesz okienko. Parametr dostaje wartość przy wywołaniu: `pole(5, 10)`.
4. **Cienie (shadowing)** — lokalne `let liczba` nie zmienia globalnej `liczba`.
5. **Brak `let` w funkcji** — przypadkiem nadpisujesz globalną zmienną.

---

## 7. Co dalej

[`06_math`](../06_math/) — obiekt `Math` i nowy wypis: `getElementById("wynik").textContent`. Funkcje zostają, zmienia się tylko sposób pokazania wyniku.
