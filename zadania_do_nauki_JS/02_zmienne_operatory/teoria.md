# Zmienne, typy i operatory w JavaScript

Najpierw dział [`01_skrypt_w_stronie`](../01_skrypt_w_stronie/) (plik `script.js`, konsola, `prompt`, wypis na stronę). Tutaj dokładamy **typy**, zamianę tekstu na liczbę i **operatory**.

To nadal **semestr 1**. Tutoriale używają `document.write` i skryptu w pudełku wyniku — ten sam wzorzec co w dziale 01. Porównań i `if` jeszcze nie ma: są w [`03_warunki`](../03_warunki/).

W praktyce te narzędzia pojawiają się przy każdym prostym liczeniu: bilet, VAT, spalanie, czas pracy, kantor.

---

## 1. Zmienne i stałe

Dane trzymasz w „pudełkach”. Na zajęciach używamy dwóch słów: `let` i `const`.

### `let` — wartość może się zmienić

```js
let imie = "Kasia";
imie = "Basia"; // to jest w porządku
```

Przydaje się, gdy liczba albo napis ma się zmienić w trakcie działania programu (punkty, licznik, kolejna wartość z `prompt`).

### `const` — bez ponownego przypisania

```js
const rokUrodzenia = 2000;
// rokUrodzenia = 2001; // błąd: nie można zmienić stałej
```

Domyślnie wybieraj `const`, gdy wartość jest znana i nie będzie przypisana drugi raz (stawka VAT, rok, imię z jednego pytania). `var` to stary sposób — **nie używamy**.

Typowa pomyłka: literówka w nazwie przy drugim użyciu. Konsola pokaże `... is not defined`. Nazwy pisz tak samo za każdym razem.

---

## 2. Typy danych

Na początek wystarczą dwa:

| Typ | Jak wygląda | Przykład |
| --- | ----------- | -------- |
| Napis (`string`) | w cudzysłowie | `"Ala ma kota"` |
| Liczba (`Number`) | bez cudzysłowu, **kropka** zamiast przecinka | `20`, `3.5` |

Później spotkasz też `boolean` (`true` / `false`) przy warunkach oraz `null` (Anuluj w `prompt`). Na tym dziale nie budujesz jeszcze decyzji — tylko liczysz i sklejasz tekst.

`typeof 20` to `"number"`. `typeof "20"` to `"string"`. Cudzysłów decyduje, czy to liczba do liczenia, czy napis do sklejania.

---

## 3. Pułapka `prompt()`

`prompt` **zawsze** zwraca tekst. Jeśli pobierzesz `"5"` i dodasz `"5"`, dostaniesz `"55"`, a nie `10`. Operator `+` przy dwóch napisach skleja, a nie dodaje.

```js
const a = prompt("Pierwsza liczba:");
const b = prompt("Druga liczba:");
document.write(a + b); // "5" + "5" → "55"
```

Dlatego do obliczeń zamieniasz wpis na liczbę **zanim** użyjesz `+`, `-`, `*` albo `/`.

`prompt` i `alert` wstrzymują dalszy kod, tak jak w dziale 01. `console.log` pod `prompt` pojawi się dopiero po zamknięciu okna.

Anuluj zwraca `null`. `Number(null)` to `0` — na nauce zwykle zakładamy, że uczeń coś wpisze.

---

## 4. Zamiana tekstu na liczbę

| Funkcja | Co robi |
| ------- | ------- |
| `Number(tekst)` | zamienia cały napis na liczbę (także ułamek) |
| `parseInt(tekst, 10)` | liczba całkowita; drugi argument `10` to system dziesiętny |
| `parseFloat(tekst)` | ułamek; zatrzymuje się na pierwszym znaku, który nie pasuje |

```js
const tekst = "50";
const liczba = Number(tekst); // 50
const zOkna = Number(prompt("Podaj liczbę"));
```

`Number("50zł")` daje `NaN` (Not a Number), bo w napisie jest coś poza liczbą. `parseInt("50zł", 10)` da `50`, bo czyta od początku i się zatrzymuje. Na zajęciach wolimy `Number(...)` na całym wpisie — wtedy widać, że dane są złe.

`NaN` nie jest zwykłym zerem. Każde działanie z `NaN` zostaje `NaN`. Na stronie zobaczysz wtedy „NaN” zamiast wyniku — najczęściej zapomniałeś o `Number` albo ktoś wpisał litery.

---

## 5. Operatory matematyczne

| Operator | Znaczenie | Przykład |
| -------- | --------- | -------- |
| `+` | dodawanie liczb **albo** sklejanie napisów | `2 + 2` → `4` |
| `-` | odejmowanie | `5 - 3` → `2` |
| `*` | mnożenie | `2 * 3` → `6` |
| `/` | dzielenie | `10 / 2` → `5` |
| `%` | reszta z dzielenia (modulo) | `10 % 3` → `1` |

Modulo przydaje się przy parzystości (`liczba % 2`) i przy przeliczaniu minut na godziny (`minuty % 60`). Samo porównanie `=== 0` zostawiasz na dział warunków — tu możesz tylko **wypisać** resztę.

Kolejność jest jak w matematyce: mnożenie i dzielenie przed dodawaniem. Nawiasy `()` wymuszają inną kolejność.

```js
const zNawiasami = (2 + 2) * 2; // 8
const bezNawiasow = 2 + 2 * 2; // 6
```

Typowa pomyłka przy cenie: `netto + vat` bez nawiasu, gdy chcesz najpierw dodać procent. Zapisz wzór na kartce, potem włóż nawiasy wokół tego, co ma się wydarzyć pierwsze.

---

## 6. Formatowanie wyniku i część całkowita

Po obliczeniu ceny, VAT-u albo średniej często chcesz **ładny wypis** (dwa miejsca po kropce) albo **całe minuty / godziny** bez ułamka. W zadaniach tego działu pojawiają się dwa narzędzia: `toFixed` i `Math.floor`.

### `liczba.toFixed(n)` — miejsca po kropce (zwraca napis)

Metoda wywołujesz **na liczbie**. Argument `n` mówi, ile cyfr po kropce zostawić. Wynik to zawsze **string** (napis), nie liczba.

```js
const cena = 19.5;
document.write(cena.toFixed(2)); // "19.50" — to jest string

const srednia = (5 + 4 + 3) / 3; // 4
document.write("Średnia: " + srednia.toFixed(2)); // "4.00"
```

Do dalszych obliczeń trzymaj zwykłą liczbę; `toFixed` wołaj dopiero przy wypisie na stronę albo do sklejenia z tekstem (cena + `" zł"`, VAT, średnia ocen).

**Po co:** bilety, rachunki, kantor, spalanie — oczekujesz `12.50`, nie `12.5` ani `12.50000001`.

**Typowa pomyłka:** `cena.toFixed(2) + 1` skleja napis zamiast dodać (`"12.501"`). Najpierw licz na liczbie, na końcu formatuj.

### `Math.floor(x)` — w dół do liczby całkowitej

`Math.floor` obcina część ułamkową **w dół** (największa liczba całkowita nie większa niż `x`). Dla dodatnich: `Math.floor(3.9)` → `3`.

```js
const minuty = 135;
const godziny = Math.floor(minuty / 60); // 2
const reszta = minuty % 60; // 15

const cukierki = 10;
const dzieci = 3;
const dlaKazdego = Math.floor(cukierki / dzieci); // 3, nie 3.33
```

Resztę po pełnych jednostkach dajesz przez `%` (minuty po godzinach, dni po tygodniach).

**Po co:** czas pracy, przelicznik tygodni, „ile pełnych sztuk mieści się w …” — pół cukierka nie oddasz.

**Typowa pomyłka:** samo dzielenie bez `Math.floor` — na stronie pojawia się ułamek, choć sensowny wynik to liczba całkowita.

### Zapowiedź: `Math.ceil` i `Math.round`

W dziale [`06_math`](../06_math/) poznasz pełniej `Math.ceil` (zaokrąglenie w górę) i `Math.round` (do najbliższej całkowitej). Na tym dziale wystarczy `floor` + `toFixed`: pierwsze daje liczbę całkowitą do liczenia, drugie — napis do ładnego wypisu.

---

## 7. Operatory skrócone

Działają tylko na **liczbach** już zapisanych w zmiennej `let` (nie na `const`).

| Zapis | Znaczenie |
| ----- | --------- |
| `x++` | zwiększ o 1 (po użyciu wartości) |
| `x--` | zmniejsz o 1 |
| `x += 5` | to samo co `x = x + 5` |
| `x -= 2` | to samo co `x = x - 2` |
| `x *= 2` | pomnóż i zapisz |
| `x /= 2` | podziel i zapisz |

Na tym dziale wystarczy `+=` i `++`. `++` przed nazwą (`++x`) zwiększa najpierw — na start unikaj tej wersji, żeby nie pomylić kolejności.

---

## 8. Łączenie napisów

Żeby złożyć zdanie ze stałego tekstu i zmiennej, używasz `+`.

```js
const imie = "Adam";
document.write("Witaj " + imie + ", miło Cię widzieć!");
```

Spacja musi być **w cudzysłowie**, inaczej słowa zleją się w jedno. Kilka linii w ramce: znacznik `"<br>"` w napisie, tak jak w dziale 01.

Grawisy (`` `Witaj ${imie}` ``) istnieją, ale na początek zostajemy przy `+`.

---

## 9. Wypis na stronę

Skrypt stoi w pudełku `.wynik`. Tekst z `document.write` ląduje tam, gdzie jest znacznik.

```js
document.write("Suma: " + suma + "<br>");
document.write("Iloczyn: " + iloczyn);
```

Konsola (`console.log`) nie zastępuje ramki — nauczyciel ocenia to, co widać na stronie, chyba że zadanie prosi o konsolę.

Nie używamy `getElementById` — to od działu [`06_math`](../06_math/).

---

## 10. Częste pułapki

1. **`"5" + "5"` → `"55"`** — brak `Number` przed dodawaniem.
2. **Przecinek w liczbie** — JavaScript chce kropki: `3.5`, nie `3,5`. `Number("3,5")` to `NaN`.
3. **Dzielenie przez zero** — wynik to `Infinity`. Na stronie zobaczysz to słowo.
4. **`const` i drugie przypisanie** — błąd w konsoli. Do licznika użyj `let`.
5. **Nawiasy we wzorze** — VAT, rabat i czas często wymagają nawiasu wokół sumy albo różnicy.

---

## 11. Co dalej

[`03_warunki`](../03_warunki/) — porównania (`>=`, `===`) i decyzje (`if`, `else if`, `switch`). Ten sam wypis `document.write`.
