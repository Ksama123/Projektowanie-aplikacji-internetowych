# Instrukcje warunkowe w JavaScript

Dotąd skrypt szedł **od góry do dołu** i wykonywał każdą linijkę. Warunki pozwalają **wybrać drogę**: ten sam program może pokazać inny komunikat, inną cenę albo inną ocenę — w zależności od danych.

To dział **semestru 1**, zaraz po zmiennych. Nadal pracujemy na prostej stronie-nośniku: `prompt`, zmienne, `document.write`. **Bez** metod DOM, **bez** pętli (pętle są w [`04_petle`](../04_petle/)).

W praktyce warunki pojawiają się wszędzie: bilet ulgowy, darmowa dostawa, zaliczenie, logowanie, menu, walidacja.

---

## 1. Wyrażenie logiczne (prawda albo fałsz)

Warunek to wyrażenie, którego wynikiem jest **`true`** albo **`false`** (typ `boolean`).

```js
const wiek = 17;
const pelnoletni = wiek >= 18; // false
```

### Operatory porównania

| Operator | Znaczenie | Przykład (`a = 5`) |
| -------- | --------- | ------------------- |
| `>`      | większe   | `a > 3` → `true`    |
| `<`      | mniejsze  | `a < 3` → `false`   |
| `>=`     | większe lub równe | `a >= 5` → `true` |
| `<=`     | mniejsze lub równe | `a <= 4` → `false` |
| `===`    | **równe** (wartość **i** typ) | `a === 5` → `true` |
| `!==`    | różne (wartość lub typ) | `a !== "5"` → `true` |

Na zajęciach używamy **`===` i `!==`**, nie `==` / `!=`.

### `===` kontra `==`

`==` **rzutuje typy** (czasem zaskakująco):

```js
2 == "2";   // true  — string zamieniony na liczbę
2 === "2";  // false — liczba to nie to samo co napis
0 == false; // true
0 === false; // false
```

`===` porównuje **i wartość, i typ**. Dzięki temu warunek oznacza dokładnie to, co napisałeś.

### `prompt` zwraca **string**

```js
const wiek = prompt("Podaj wiek:"); // np. "18" (tekst!)
wiek >= 18; // często zadziała (JS sam spróbuje porównać), ale lepiej jawnie:
const n = Number(prompt("Podaj wiek:"));
```

`Number("18")` → `18`. `Number("abc")` → `NaN` (Not a Number). `NaN >= 18` jest `false`.

---

## 2. `if` — zrób coś, gdy warunek jest prawdziwy

```js
if (warunek) {
  // ten blok wykona się tylko gdy warunek === true
}
```

Nawiasy klamrowe `{ }` wyznaczają **blok**. Nawet przy jednej linijce **zawsze** je stawiaj — łatwiej dodać drugą instrukcję i nie ma pułapki „myślałem, że ta linia jest w `if`”.

```js
const wiek = Number(prompt("Podaj wiek:"));
let komunikat = "Niepełnoletni";
if (wiek >= 18) {
  komunikat = "Pełnoletni";
}
```

Jeśli warunek jest fałszywy, blok `if` jest **pomijany** — program idzie dalej. Dlatego komunikat domyślny ustawia się **przed** `if`.

---

## 3. `else` — druga droga

Gdy warunek jest fałszywy, wykona się blok `else`:

```js
if (wiek >= 18) {
  komunikat = "Bilet normalny";
} else {
  komunikat = "Bilet ulgowy";
}
```

Zawsze wykona się **dokładnie jeden** z tych dwóch bloków. Nie musisz pisać drugiego `if` z przeciwnym warunkiem (`if (wiek < 18)`), jeśli `else` już to pokrywa.

---

## 4. `else if` — kilka przedziałów

Gdy dróg jest więcej niż dwie, dokładasz `else if`. **Kolejność ma znaczenie**: sprawdzane są od góry, wygrywa **pierwszy prawdziwy** warunek. Reszta jest pomijana.

```js
const t = Number(prompt("Temperatura (°C):"));
let opis;
if (t < 0) {
  opis = "mróz";
} else if (t <= 15) {
  opis = "chłodno";
} else if (t <= 25) {
  opis = "ciepło";
} else {
  opis = "gorąco";
}
```

Dla `t = 10`: pierwszy warunek (`< 0`) fałszywy, drugi (`<= 15`) prawdziwy → `"chłodno"`. Trzeci i `else` się nie wykonają.

Typowy błąd: najpierw `if (t <= 25)`, potem `if (t <= 15)` — wtedy `10` spełni **oba**, jeśli to osobne `if` (bez `else`). Przy `else if` drugi w ogóle nie jest sprawdzany, gdy pierwszy już wygrał. Dlatego **szerokie** warunki dawaj **później**, a **węższe / skrajne** wcześniej.

Ostatni `else` to „wszystko inne” (wartość spoza przewidzianych przedziałów).

---

## 5. Operatory logiczne: `&&`, `||`, `!`

Jeden operator porównania to za mało, gdy trzeba **złożyć** kilka faktów.

| Operator | Nazwa | Wynik `true`, gdy… |
| -------- | ----- | ------------------- |
| `&&`     | i (AND) | **oba** wyrażenia są prawdziwe |
| `\|\|`   | lub (OR) | **choć jedno** jest prawdziwe |
| `!`      | nie (NOT) | wyrażenie jest **fałszywe** (odwraca wynik) |

```js
const wiek = 14;
const opiekun = "tak";

wiek >= 16 || (wiek >= 10 && opiekun === "tak"); // true — dziecko z opiekunem
```

Nawiasy jak w matematyce: najpierw `&&` w nawiasie, potem `||`.

### Negacja

```js
const zgoda = prompt("Akceptujesz regulamin? (tak/nie)");
if (zgoda !== "tak") {
  // to samo co: if (!(zgoda === "tak"))
}
```

`!==` znaczy „różne”. `!` przed całym wyrażeniem odwraca `true`/`false`.

### Krótkie spięcie (short-circuit)

- Przy `A && B`: jeśli `A` jest `false`, **`B` się nie liczy** (i tak całość jest fałszem).
- Przy `A || B`: jeśli `A` jest `true`, **`B` się nie liczy**.

To działa i przy wartościach, i przy wywołaniach — na tym etapie wystarczy wiedzieć, że **kolejność** w `&&` / `||` ma znaczenie.

---

## 6. Zagnieżdżony `if`

Można włożyć `if` w `if`. Czytelniej jest często **spłaszczyć** do `else if` albo złożyć warunek przez `&&`.

```js
// zagnieżdżenie
if (karta === "tak") {
  if (kwota >= 200) {
    rabat = 15;
  }
}

// to samo, zwykle czytelniej:
if (karta === "tak" && kwota >= 200) {
  rabat = 15;
}
```

Zagnieżdżenie zostaw, gdy **wewnętrzna** decyzja ma sens tylko po spełnieniu zewnętrznej (np. najpierw „czy w ogóle jest login”, potem „czy hasło się zgadza”).

---

## 7. `switch` — wybór spośród konkretnych wartości

Gdy porównujesz **jedną** zmienną z kilkoma **stałymi** wartościami (`1`, `"A"`, `"pizza"`), `switch` bywa czytelniejszy niż łańcuch `else if (x === ...)`.

```js
const dzien = Number(prompt("Dzień (1–7):"));
let nazwa;
switch (dzien) {
  case 1:
    nazwa = "poniedziałek";
    break;
  case 2:
    nazwa = "wtorek";
    break;
  case 3:
    nazwa = "środa";
    break;
  case 4:
    nazwa = "czwartek";
    break;
  case 5:
    nazwa = "piątek";
    break;
  case 6:
    nazwa = "sobota";
    break;
  case 7:
    nazwa = "niedziela";
    break;
  default:
    nazwa = "nieznany dzień";
}
```

### `break` i `default`

- **`case`** porównuje przez **`===`** (wartość i typ). `case 1` nie złapie `"1"` — stąd `Number(...)` przy wczytywaniu cyfry.
- **`break`** kończy `switch`. **Bez `break`** wykonają się też kolejne `case` (tzw. *fall-through*). Czasem to **celowe** (grupowanie), zwykle to błąd.
- **`default`** — gdy żaden `case` nie pasuje (jak `else`).

### Grupowanie `case`

Kilka etykiet, jeden blok:

```js
switch (ocena) {
  case 5:
  case 6:
    opis = "wyróżnienie";
    break;
  case 3:
  case 4:
    opis = "ocena pozytywna";
    break;
  case 1:
  case 2:
    opis = "do poprawy";
    break;
  default:
    opis = "nieznana ocena";
}
```

Tu **brak `break` między 5 a 6** jest zamierzony: obie oceny mają ten sam opis.

### Kiedy `if`, kiedy `switch`

| Sytuacja | Lepszy wybór |
| -------- | ------------ |
| Przedziały (`>= 18`, `kwota < 100`) | `if` / `else if` |
| Kilka warunków na różnych zmiennych (`&&` / `\|\|`) | `if` |
| Jedna zmienna, kilka konkretnych wartości | `switch` |

---

## 8. Truthy i falsy (krótko)

W `if (x)` JavaScript zamienia `x` na boolean. **Falsy** (traktowane jak fałsz): `false`, `0`, `""`, `null`, `undefined`, `NaN`. Wszystko inne jest **truthy** (w tym `"0"` i `"false"` jako napisy).

```js
const wiek = Number(prompt("Wiek:"));
if (wiek) {
  // UWAGA: wiek 0 nie wejdzie do bloku (0 jest falsy)
}
if (wiek >= 0) {
  // tak sprawdzamy „podano liczbę w zakresie”
}
```

Na tym etapie **pisz porównanie wprost** (`===`, `>=`), nie polecaj się na „goły” `if (zmienna)`.

---

## 9. Operator trójargumentowy `? :` (extra)

Skrót `if/else`, gdy wybierasz **jedną wartość**:

```js
const etykieta = wiek >= 18 ? "dorosły" : "młodzież";
```

To to samo co:

```js
let etykieta;
if (wiek >= 18) {
  etykieta = "dorosły";
} else {
  etykieta = "młodzież";
}
```

Na sprawdzianie jest w zadaniu **dodatkowym**. Najpierw opanuj `if/else`.

---

## 10. Częste pułapki

1. **`=` zamiast `===`** — `if (x = 5)` **przypisuje** 5 do `x` i warunek jest truthy. Chciałeś porównać: `if (x === 5)`.
2. **String kontra liczba w `switch`** — `prompt` daje `"1"`, `case 1` nie pasuje. Użyj `Number(...)` albo `case "1":`.
3. **Brak `break`** — spadanie do następnego `case`.
4. **Kolejność `else if`** — pierwszy prawdziwy warunek wygrywa; złe progi dają złą etykietę.
5. **Anulowanie `prompt`** — zwraca `null`. `Number(null)` to `0`. Na nauce zwykle zakładamy, że uczeń coś wpisze.
6. **`NaN`** — `Number("abc")` → `NaN`; każde porównanie z `NaN` jest `false` (`NaN === NaN` też!).

---

## 11. Wypis wyniku na stronę

Wynik wpisujemy przez `document.write` — tekst ląduje **tam, gdzie stoi** `<script>` (w ramce `.wynik`):

```js
document.write(komunikat);
```

Kilka linii: znacznik `<br>` (np. `"Wiek: " + wiek + "<br>" + komunikat`).

Szablon: `index.html` + `style.css` + `script.js` wewnątrz pudełka wyniku. `getElementById("wynik")` pojawia się od [`06_math`](../06_math/) (semestr 2). `querySelector` i `createElement` — semestr 3.

---

## 12. Co dalej

- [`04_petle`](../04_petle/) — `if` **w środku** pętli (np. tylko liczby parzyste).
- [`05_funkcje`](../05_funkcje/) — warunek w funkcji (`return` wcześniej, gdy dane są złe).

Najpierw ten dział: jedna decyzja, jeden komunikat, bez pętli.
