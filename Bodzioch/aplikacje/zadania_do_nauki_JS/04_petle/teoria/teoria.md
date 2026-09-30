# Pętle w JavaScript

Pętla powtarza ten sam fragment kodu, zamiast kopiować linie ręcznie. W praktyce służy do wypisania liczb z przedziału, sumowania, pytania o hasło do skutku albo narysowania prostej siatki w tekście.

To dział **semestru 1**, po [`03_warunki`](../03_warunki/). `if` wraca jako **narzędzie wewnątrz** pętli (na przykład tylko liczby parzyste), nie jako nowy temat. Nadal `prompt`, `document.write` i skrypt w ramce `.wynik`. Bez `getElementById` i bez tablic — tablice są w semestrze 2.

Porównania w warunku pętli pisz przez `===` / `!==` / `>=`, tak jak w dziale 03. Unikaj `==`.

## 1. Pętla `for`

Najczęściej używana pętla, gdy wiemy z góry, ile razy chcemy wykonać daną operację.

### Składnia:

```javascript
for (inicjalizacja; warunek; modyfikacja) {
  // kod do wykonania w każdej iteracji
}
```

- **Inicjalizacja**: Ustawienie zmiennej licznikowej (np. `let i = 0`). Wykonuje się tylko raz na początku.
- **Warunek**: Sprawdzany przed każdym obrotem pętli. Jeśli jest `true` (prawda), pętla działa dalej. Jeśli `false` (fałsz) - pętla się kończy.
- **Modyfikacja**: Zmiana licznika po każdym obrocie (np. `i++` czyli zwiększenie o 1).

### Przykład: Wypisanie liczb od 0 do 4

```javascript
for (let i = 0; i < 5; i++) {
  document.write("Liczba: " + i + "<br>");
}
```

Wypisze: 0, 1, 2, 3, 4. Licznik startuje od zera, warunek `i < 5` puszcza wartości 0–4, a `i++` dokłada jeden po każdym obrocie.

Typowa pomyłka: `i <= 5` zamiast `i < 5`, gdy chciałeś pięć obrotów od zera — wtedy pojawi się także 5. Druga: brak `i++` i przeglądarka się zacina (pętla nieskończona).

---

## 2. Pętla `while`

Stosowana, gdy nie wiemy dokładnie, ile razy pętla ma się wykonać, ale znamy _warunek_, dopóki którego ma działać.

### Składnia:

```javascript
while (warunek) {
  // kod wykonywany dopóki warunek jest prawdziwy
}
```

### Przykład: Wypisywanie dopóki liczba < 100

```javascript
let liczba = 10;
while (liczba < 100) {
  document.write(liczba + ", ");
  liczba = liczba * 2; // Zmieniamy liczbę wewnątrz pętli
}
```

Wypisze: 10, 20, 40, 80.
**Uwaga:** Jeśli zapomnisz zmienić zmienną wewnątrz pętli (`liczba = ...`), możesz stworzyć _pętlę nieskończoną_, która zawiesi przeglądarkę!

---

## 3. Pętla `do...while`

Podobna do `while`, ale warunek sprawdzany jest **po** wykonaniu kodu. To gwarantuje, że kod wewnątrz wykona się **przynajmniej raz**.

### Składnia:

```javascript
do {
  // kod wykona się przynajmniej raz
} while (warunek);
```

### Przykład: Pytanie o hasło

Idealna do walidacji danych, gdy musimy najpierw pobrać dane, a potem sprawdzić, czy są OK.

```javascript
let haslo;
do {
  haslo = prompt("Podaj hasło (secret):");
} while (haslo !== "secret");

alert("Hasło poprawne!");
```

### Dlaczego `console.log` słabo sprawdza taką pętlę

`prompt` (jak `alert` i `confirm`) **zatrzymuje cały skrypt**, aż zamkniesz okno — to już było w [`01_skrypt_w_stronie`](../../01_skrypt_w_stronie/teoria.md). W pętli jest gorzej: **każdy obrót** otwiera nowe okno i znowu wstrzymuje kod.

`console.log` wpisany **w środku** pętli pokaże się w F12 dopiero po zamknięciu **tego** `prompt`. Jeśli hasło jest złe, od razu leci następne okno — ledwo zdążysz spojrzeć w konsolę. `console.log` **za** pętlą (np. „hasło OK”) w ogóle nie ruszy, dopóki warunek nie puści, czyli dopóki nie wpiszesz poprawnej wartości. Przy złym haśle program nie „idzie dalej w tle”: stoi i czeka.

Nie da się więc odpalić strony i spokojnie przeczytać logów. Trzeba ręcznie zamykać każde okienko. Do sprawdzenia samej logiki (warunek, liczba obrotów) na chwilę podstaw zwykłą zmienną zamiast `prompt`, albo wypisz wynik na stronę **po** wyjściu z pętli. Konsola w środku `do...while` z `prompt` nie zastąpi przeklikania.

To samo dotyczy zgadywanki (`prompt` w pętli + `alert` po każdym strzale) i `while` z kolejnymi pytaniami.

---

## 4. Przydatne instrukcje

### `break`

Przerywa natychmiast działanie pętli, nawet jeśli warunek jest nadal spełniony.

```javascript
for (let i = 0; i < 10; i++) {
  if (i == 5) break; // Pętla skończy się na 4
  document.write(i);
}
```

### `continue`

Przerywa _tę jedną iterację_ (obrót) i przechodzi do następnej.

```javascript
for (let i = 0; i < 5; i++) {
  if (i == 2) continue; // Pominie wypisanie "2", ale będzie liczyć dalej 3, 4...
  document.write(i);
}
```

Wypisze: 0, 1, 3, 4. `continue` nie kończy całej pętli — tylko ten jeden obrót.

`if` w środku pętli znasz z działu 03. Najpierw warunek, potem `break` albo `continue`, albo zwykły wypis.

---

## 5. Pętle zagnieżdżone

Jedna pętla w drugiej. Zewnętrzna idzie po wierszach, wewnętrzna po kolumnach. Tak powstaje tabliczka mnożenia albo ramka z gwiazdek.

```js
for (let w = 1; w <= 3; w++) {
  for (let k = 1; k <= 3; k++) {
    document.write(w + "×" + k + " ");
  }
  document.write("<br>");
}
```

Po każdym wierszu `"<br>"` łamie linię w ramce. Typowa pomyłka: `<br>` w wewnętrznej pętli — wtedy każda komórka ląduje w nowej linii.

---

## 6. Praca ze znakami napisu w pętli

To **mostek**, nie pełny kurs String (ten jest w dziale [`07_string`](../07_string/)). Przy walidacji w `do...while` często sprawdzasz długość albo początek / koniec wpisu.

### Długość i znak pod indeksem

`napis.length` to liczba znaków. Indeksy idą od zera, tak jak licznik w `for`.

```js
const imie = "Anna";
document.write(imie.length); // 4
document.write(imie.charAt(0)); // "A"
document.write(imie[0]); // "A" — ten sam efekt
```

`charAt(i)` i `napis[i]` dają znak na pozycji `i`. W pętli możesz przejść po znakach: `for (let i = 0; i < napis.length; i++)`.

**Po co:** warunek „co najmniej N znaków” albo odczyt pierwszej / ostatniej litery bez całego API String.

**Typowa pomyłka:** `napis.length()` z nawiasami — `length` to właściwość, nie funkcja.

### `endsWith` / `startsWith` — jeden rzut oka

```js
let imie;
do {
  imie = prompt("Podaj imię żeńskie (min. 4 znaki, kończy się na a):");
} while (imie.length <= 3 || !imie.endsWith("a"));
```

`endsWith("a")` sprawdza koniec napisu, `startsWith("Ab")` — początek. Na sprawdzianie wystarczy taka walidacja w warunku pętli; pełne metody String (`slice`, `includes`, zamiana wielkości liter…) zostawiasz na dział 07.

---

## 7. Wypis na stronę

`document.write` w pętli **dopisuje** kolejne kawałki. Nowa linia to `"<br>"`.

```js
for (let i = 1; i <= 5; i++) {
  document.write(i + "<br>");
}
```

Nie używamy `getElementById` — to od [`06_math`](../06_math/).

---

## 8. Typowe zastosowania

1. **Przedział** — liczby od A do B (`for`).
2. **Akumulacja** — suma albo długi napis w zmiennej, którą powiększasz w każdym obrocie.
3. **Walidacja** — pytaj, aż wpis będzie poprawny (`do...while` z `prompt`).
4. **Siatka** — dwie pętle i `"<br>"` po wierszu.

---

## 9. Częste pułapki

1. **Pętla nieskończona** — zapomniałeś zmienić licznik albo warunek nigdy nie staje się fałszywy.
2. **`=` zamiast `===` w warunku** — przypisanie, nie porównanie.
3. **Off-by-one** — jedno powtórzenie za dużo albo za mało (`<` kontra `<=`).
4. **`prompt` w pętli** — każde okno zatrzymuje skrypt; konsola w środku pętli nie zastąpi przeklikania.
5. **`<br>` w złym miejscu** — przy zagnieżdżeniu łam linię po wewnętrznej pętli.

Funkcje wokół pętli są w [`05_funkcje`](../05_funkcje/).
