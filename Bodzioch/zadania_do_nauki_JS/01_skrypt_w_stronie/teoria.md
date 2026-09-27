# Skrypt w stronie i konsola

To **pierwszy** dział JavaScriptu. HTML i CSS są osobnym przedmiotem — tu uczymy się **podpiąć JS** do prostej strony-nośnika, zobaczyć wynik w **konsoli** i na **stronie**, pobrać tekst przez `prompt`.

Bez modelu DOM (`getElementById`, `querySelector`, `createElement`). Bez pętli i bez `if` (to [`03_warunki`](../03_warunki/)). Typy, `Number()` i operatory są w [`02_zmienne_operatory`](../02_zmienne_operatory/). Tutaj: plik `script.js`, `console.log`, **`document.write`**, `prompt`, `let` / `const`.

`document.write` nie jest metodą do gotowych aplikacji (po wczytaniu strony **zamazuje** dokument). Na semestrze 1 jest świadomym skrótem: jeden sposób wypisu, bez tłumaczenia drzewa HTML. Od działu [`06_math`](../06_math/) (semestr 2) wpiszesz tekst do pudełka `#wynik` przez `getElementById` i `textContent`. Pełny DOM (`querySelector`, zdarzenia, `createElement`) jest w semestrze 3.

---

## 1. Po co osobny plik `.js`?

Strona to trzy role:

| Język | Rola |
| ----- | ---- |
| HTML | struktura (nagłówek, pudełko na wynik) |
| CSS | wygląd kartki |
| JavaScript | **zachowanie**: liczy, pyta, wypisuje |

Trzymamy JS w `script.js`, nie w środku HTML, żeby:

- HTML został czytelny,
- ten sam skrypt dało się podłączyć do innej strony,
- błędy było widać w konsoli przy konkretnym pliku.

---

## 2. Znacznik `<script>`

### Plik zewnętrzny (tak robimy na zajęciach)

```html
<body>
  <div class="wynik">
    <script src="script.js"></script>
  </div>
</body>
```

Skrypt stoi **w pudełku wyniku**. `document.write` dopisuje treść **tam, gdzie jest znacznik** — napis pojawi się w ramce, nie zamiast całego HTML.

- `src` — ścieżka **względem pliku HTML**. `script.js` w tym samym folderze.
- Znacznik jest **pusty**: nic nie pisz między `<script>` a `</script>`, gdy jest `src`.
- `type="text/javascript"` jest zbędny w HTML5.

### Skrypt wbudowany (inline)

```html
<script>
  console.log("od razu w HTML");
</script>
```

Przydaje się na minutę, źle się skaluje. W zadaniach: **osobny `script.js`**.

### `head`, `defer`, `async` (krótko)

Gdy `<script src>` jest w **`<head>`**, przeglądarka może odpalić JS zanim dojdzie do pudełka w `body`. Na semestrze 1 **nie** wstawiasz skryptu do `head`: jest w `body`, w ramce wyniku.

`defer` / `async` / `type="module"` — później. Nie są potrzebne przy tym szablonie.

---

## 3. Wypis na stronę: `document.write`

```js
document.write("Działa");
```

Kilka linii — znacznik `<br>` (łamanie linii w HTML):

```js
document.write("Szkoła: Technikum nr 12<br>Witaj, Ola!");
```

Albo kilka wywołań pod rząd:

```js
document.write("Linia 1<br>");
document.write("Linia 2");
```

### Zasady, żeby się nie zdziwić

1. **Gdzie stoi `<script>`, tam ląduje tekst.** Dlatego skrypt jest wewnątrz `.wynik`.
2. **Tylko w trakcie wczytywania strony.** Jeśli `write` poleci później (np. po kliknięciu, gdy dokument już „gotowy”), przeglądarka **wycina całą stronę** i zostawia sam ten napis. Na tych zajęciach skrypt leci od razu przy otwarciu HTML — to jest bezpieczne.
3. To **nie** jest sposób na produkcyjną witrynę. Semestr 3: znajdź element i zmień jego treść. Semestr 2 (`Math`, `String`) delikatnie do tego wraca.

`document.writeln` dodaje znak nowej linii w źródle HTML; na ekranie i tak zwykle potrzebujesz `<br>`. W zadaniach wystarczy `write`.

---

## 4. Konsola przeglądarki

**F12** (albo PPM → „Zbadaj”) → karta **Console**.

Tam widać:

- to, co wypiszesz `console.log`,
- **błędy** (czerwone) z numerem linii w `script.js`.

Konsola **nie jest** stroną — uczeń i nauczyciel ją otwierają. Na stronie pokazuj to, co ma zostać; konsola służy do sprawdzenia i debugowania.

### Metody `console` (API)

Codziennie:

| Metoda | Po co |
| ------ | ----- |
| `console.log(x)` | zwykły komunikat; można podać kilka argumentów |
| `console.info(x)` | jak log (informacja) |
| `console.warn(x)` | ostrzeżenie (żółte) |
| `console.error(x)` | błąd (czerwone) — **nie** przerywa skryptu, tylko oznacza |
| `console.debug(x)` | log „dla dewelopera” (często ukryty, aż włączysz poziom Verbose) |
| `console.clear()` | czyści konsolę |

Sprawdzenia i liczenie:

| Metoda | Po co |
| ------ | ----- |
| `console.assert(warunek, komunikat)` | loguje błąd, **gdy warunek jest fałszywy** |
| `console.count(etykieta?)` | ile razy tu weszliśmy |
| `console.countReset(etykieta?)` | zeruje licznik |

Grupowanie i czas:

| Metoda | Po co |
| ------ | ----- |
| `console.group(nazwa)` / `groupEnd()` | zwijana grupa logów |
| `console.groupCollapsed(nazwa)` | grupa od razu zwinięta |
| `console.time(nazwa)` / `timeEnd(nazwa)` | pomiar ms |
| `console.timeLog(nazwa)` | pośredni czas, bez zamykania pomiaru |
| `console.timeStamp(nazwa)` | znacznik na osi wydajności (gdy narzędzie to pokazuje) |

Podgląd danych (przyda się przy tablicach i obiektach, działy 09+):

| Metoda | Po co |
| ------ | ----- |
| `console.table(dane)` | tabela z tablicy / obiektu |
| `console.dir(obiekt)` | lista właściwości |
| `console.dirxml(węzeł)` | drzewo XML/HTML |
| `console.trace()` | stos wywołań („jak tu trafiliśmy”) |

Rzadziej: `console.profile` / `profileEnd`.

Na tym dziale **wystarczy** `log`, czasem `warn` / `error` / `clear`.

```js
console.log("Start");
console.log("Imię:", "Ada");
```

---

## 5. Okienka: `alert`, `prompt`, `confirm`

| Funkcja | Działanie |
| ------- | --------- |
| `alert("tekst")` | komunikat, przycisk OK; **blokuje** stronę aż klikniesz |
| `prompt("pytanie")` | pole tekstowe; zwraca **string** albo `null` (Anuluj) |
| `confirm("pytanie")` | OK / Anuluj; zwraca `true` / `false` |

`prompt` **zawsze** daje tekst (`"18"`, nie liczbę `18`). Zamiana na liczbę jest w dziale zmiennych (`Number(...)`).

### Okienko zatrzymuje cały skrypt

`alert`, `prompt` i `confirm` są **synchroniczne**: przeglądarka wstrzymuje dalszy JavaScript (i odświeżanie strony), aż zamkniesz okno. Linia **pod** `prompt` — także `console.log` — nie wykona się wcześniej.

```js
console.log("przed"); // widać od razu w F12
const imie = prompt("Imię:");
console.log("po", imie); // dopiero po OK albo Anuluj
```

Dlatego trudno testować program samą konsolą. Otwierasz F12, a karta stoi na szarym oknie — wygląda to tak, jakby logi „nie działały” albo skrypt się zawiesił. Najpierw zamknij dialog, potem czytaj Console. `console.log` **przed** `prompt` zobaczysz od razu; `console.log` **po** — dopiero po kliknięciu.

Na zajęciach wynik i tak pokazuj na stronie (`document.write`; później `textContent`). Konsola jest dodatkiem, nie jedynym sposobem sprawdzenia, czy kod działa.

Gdy `prompt` wejdzie do pętli `while` / `do...while` (np. hasło do skutku), każdy obrót otwiera kolejne okno. To jest w [`04_petle`](../04_petle/teoria/teoria.md).

Na zajęciach: mało `alert` (irytuje). Wynik na stronę przez `write` + ewentualnie `console.log`.

---

## 6. `let` i `const` — pierwsze pudełko

```js
const imie = prompt("Podaj imię:");
let komunikat = "Witaj, " + imie + "!";
```

- **`const`** — nie przypiszesz drugi raz. Domyślnie tak, gdy wartość się nie zmienia.
- **`let`** — można zmienić później.
- **`var`** — stary sposób, **nie używamy**.

Łączenie napisów: operator `+`. Cudzysłów to stały tekst; nazwa bez cudzysłowu to zawartość pudełka.

Szczegóły typów — dział 02.

---

## 7. Komentarze

```js
// jedna linia — przeglądarka to pomija

/*
  kilka linii
*/
```

---

## 8. Typowe błędy w konsoli

| Komunikat | Częsta przyczyna |
| --------- | ---------------- |
| `Uncaught SyntaxError` | literówka, brak cudzysłowu, złe nawiasy |
| `... is not defined` (`ReferenceError`) | literówka w nazwie zmiennej |
| `(failed) net::ERR_FILE_NOT_FOUND` przy `script.js` | zła ścieżka `src` (inny folder, inna nazwa) |
| pusta ramka, konsola czysta | brak `document.write` albo skrypt niepodłączony |

Kliknij plik i numer linii w konsoli — otworzy się źródło.

---

## 9. Szablon strony na ten kurs

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Zadanie</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h2>Tytuł</h2>
    <div class="wynik">
      <script src="script.js"></script>
    </div>
  </div>
</body>
</html>
```

`charset="UTF-8"` — polskie znaki.

Przycisk i kliknięcie — semestr 3. Na razie skrypt **sam się uruchamia** przy otwarciu strony (albo czeka na `prompt`).

---

## 10. Mini-program (wszystko naraz)

```js
const imie = prompt("Jak masz na imię?");
const tekst = "Witaj, " + imie + "!";
console.log(tekst);
document.write(tekst);
```

1. Pytanie.  
2. Złożenie napisu.  
3. Ślad w konsoli.  
4. To samo na stronie (w ramce, bo tam stoi `<script>`).

---

## 11. Co dalej

[`02_zmienne_operatory`](../02_zmienne_operatory/) — liczby, `Number(prompt)`, operatory. Tamtejsze tutoriale też używają `document.write`.
