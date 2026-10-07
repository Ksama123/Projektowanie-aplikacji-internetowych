# Obiekt `Date` w JavaScript

`Date` to wbudowany obiekt do **daty i czasu**. W aplikacjach pojawia się przy: terminie dostawy, ważności biletu, terminie zwrotu, harmonogramie, logach („kiedy kliknięto”), formatowaniu daty na plakacie albo na fakturze.

To dział **semestru 2**, po [`07_string`](../07_string/) (przyda się `padStart`) i przed [`09_tablice`](../09_tablice/). Wypis: `getElementById("wynik").textContent` — jak od [`06_math`](../06_math/), **nie** `document.write`. **Nie** budujemy list z JS.

Na zajęciach pracujemy na **dacie kalendarzowej** (rok, miesiąc, dzień) i czasem na godzinie. Pełne API jest niżej — na INF.03 najczęściej wystarczą: konstruktor `new Date(y, m, d)`, gettery, `setDate`, `getTime`, format `DD.MM.YYYY`.

---

## 1. Tworzenie daty

`Date` **jest konstruktorem** — prawie zawsze z `new`:

```js
const teraz = new Date(); // bieżąca chwila (lokalna strefa przeglądarki)
```

`Date()` **bez** `new` zwraca **string**, nie obiekt. Do obliczeń używaj `new Date()`.

### Warianty konstruktora

| Wywołanie | Znaczenie |
| --------- | --------- |
| `new Date()` | teraz |
| `new Date(ms)` | chwila z timestampu (ms od 1.01.1970 UTC) |
| `new Date(y, m, d)` | lokalna północ danego dnia; **`m` to miesiąc 0–11** |
| `new Date(y, m, d, h, min, s, ms)` | data i czas lokalny |
| `new Date("2026-09-10")` | **pułapka** — patrz niżej |
| `new Date(Date.UTC(y, m, d))` | chwila w UTC |

Na zajęciach **buduj datę z liczb**:

```js
const rok = Number(prompt("Rok:"));
const miesiac = Number(prompt("Miesiąc (1–12):"));
const dzien = Number(prompt("Dzień:"));
const data = new Date(rok, miesiac - 1, dzien);
```

Użytkownik podaje miesiąc **1–12**, konstruktor chce **0–11**, stąd `miesiac - 1`.

### Dlaczego nie string `"2026-09-10"`

`new Date("2026-09-10")` (sama data ISO, bez czasu) jest interpretowany jako **UTC**. W Polsce (UTC+1/+2) wychodzi **poprzedni wieczór** 9 września. Format `DD.MM.YYYY` też nie jest pewnie parsowany. **Nie polegaj na `Date.parse` / stringu** — podawaj liczby do konstruktora.

---

## 2. Dwie pułapki, które trzeba znać na pamięć

### Miesiąc `0–11`

`getMonth()` zwraca `0` = styczeń, `11` = grudzień.

```js
const d = new Date(2026, 8, 10); // 10 września 2026 (8 = wrzesień)
d.getMonth();     // 8
d.getMonth() + 1; // 9  ← to pokazujesz człowiekowi
```

### `getDay()` to **dzień tygodnia**, nie dzień miesiąca

| `getDay()` | Dzień |
| ---------- | ----- |
| `0` | niedziela |
| `1` | poniedziałek |
| `2` | wtorek |
| `3` | środa |
| `4` | czwartek |
| `5` | piątek |
| `6` | sobota |

Dzień **miesiąca** to `getDate()` (1–31). To **nie** jest ten sam numer co w `switch` z działu warunków (tam często 1 = poniedziałek). Tu **0 = niedziela**.

---

## 3. Gettery — czas lokalny

Odczytują składowe w **strefie przeglądarki**.

| Metoda | Co zwraca |
| ------ | --------- |
| `getFullYear()` | rok, np. `2026` |
| `getMonth()` | miesiąc **0–11** |
| `getDate()` | dzień miesiąca **1–31** |
| `getDay()` | dzień tygodnia **0–6** (0 = niedziela) |
| `getHours()` | godzina **0–23** |
| `getMinutes()` | minuty **0–59** |
| `getSeconds()` | sekundy **0–59** |
| `getMilliseconds()` | 0–999 |
| `getTime()` | timestamp (ms od 1.01.1970 UTC) |
| `getTimezoneOffset()` | różnica lokalna vs UTC w **minutach** (np. −120 zimą w PL) |

`getYear()` jest **przestarzałe** (rok − 1900). Zawsze `getFullYear()`.

---

## 4. Gettery UTC

Te same składowe, ale w **UTC** (bez lokalnej strefy): `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()`, `getUTCDay()`, `getUTCHours()`, `getUTCMinutes()`, `getUTCSeconds()`, `getUTCMilliseconds()`.

Przydają się przy API i `toISOString()`. Na tym dziale **nie musisz** ich używać w zadaniach — wystarczy wiedzieć, że istnieją i że UTC ≠ czas polski.

---

## 5. Settery — zmiana daty

Settery **modyfikują ten sam obiekt** i zwracają nowy timestamp. Przepełnienie jest **przenoszone** (31 stycznia + 1 dzień → 1 lutego; 29 lutego w roku nieprzestępnym → 1 marca).

| Metoda | Co ustawia |
| ------ | ---------- |
| `setFullYear(y, m?, d?)` | rok (opcjonalnie miesiąc i dzień) |
| `setMonth(m, d?)` | miesiąc 0–11 |
| `setDate(d)` | dzień miesiąca; **można podać 32 albo −1** — JS przesunie miesiąc |
| `setHours(h, min?, s?, ms?)` | godzina |
| `setMinutes(min, s?, ms?)` | |
| `setSeconds(s, ms?)` | |
| `setMilliseconds(ms)` | |
| `setTime(ms)` | cała chwila z timestampu |

Wersje UTC: `setUTCFullYear`, `setUTCMonth`, `setUTCDate`, `setUTCHours`, `setUTCMinutes`, `setUTCSeconds`, `setUTCMilliseconds`. `setYear` — przestarzałe.

### Termin za *n* dni: `setDate`

```js
const d = new Date(2026, 8, 10);
d.setDate(d.getDate() + 14); // 24 września 2026
```

To jest **bezpieczniejsze** niż dodawanie `14 * 24 * 60 * 60 * 1000` milisekund: przy zmianie czasu (DST) doby nie zawsze mają 24 godziny. `setDate` liczy **dni kalendarzowe**.

---

## 6. Timestamp, `Date.now()`, porównywanie

```js
Date.now();          // liczba (ms), bez tworzenia obiektu
d.getTime();         // to samo dla konkretnej daty
d.valueOf();         // alias getTime — dzięki temu działa d1 - d2
```

Porównanie:

```js
if (d1.getTime() < d2.getTime()) { /* d1 wcześniej */ }
if (d1.getTime() === d2.getTime()) { /* ta sama chwila */ }
```

Dwie daty zbudowane jako `new Date(y, m, d)` to lokalna północ — wtedy „ten sam dzień” = ten sam `getTime()`.

---

## 7. Różnica w dniach

```js
const msDzien = 1000 * 60 * 60 * 24;
const dni = Math.round((b.getTime() - a.getTime()) / msDzien);
```

`Math.round` (nie `floor`) — przy północy lokalnej i zmianie czasu doba ma czasem 23 lub 25 godzin; zaokrąglenie daje poprawną liczbę **dni kalendarzowych**.

Ujemny wynik znaczy: `b` jest **przed** `a`.

---

## 8. Format `DD.MM.YYYY`

```js
const dd = String(d.getDate()).padStart(2, "0");
const mm = String(d.getMonth() + 1).padStart(2, "0");
const yyyy = d.getFullYear();
const napis = dd + "." + mm + "." + yyyy; // np. 10.09.2026
```

Godzina: `padStart(2, "0")` na `getHours()` i `getMinutes()` → `09:05`.

Wygodnie, ale **zależne od języka przeglądarki**:

- `toLocaleDateString("pl-PL")` — data po polsku
- `toLocaleTimeString("pl-PL")` — czas
- `toLocaleString("pl-PL")` — data i czas

Na sprawdzianie **nie wymagamy** locale — licz z getterów, wtedy wynik jest przewidywalny.

---

## 9. Konwersja na napis (wszystkie istotne)

| Metoda | Typowy wynik |
| ------ | ------------ |
| `toString()` | data i czas lokalny, czytelny |
| `toDateString()` | sama data, bez godziny |
| `toTimeString()` | sam czas + strefa |
| `toUTCString()` | data/czas w UTC (RFC) |
| `toISOString()` | `"2026-09-10T07:00:00.000Z"` (**zawsze UTC**, końcówka `Z`) |
| `toJSON()` | to samo co `toISOString()` (używane przy `JSON.stringify`) |
| `toLocaleString(locale, opcje)` | według locale |
| `toLocaleDateString(locale, opcje)` | |
| `toLocaleTimeString(locale, opcje)` | |

`toISOString().slice(0, 10)` daje `YYYY-MM-DD` **w UTC**, niekoniecznie „dzisiejszą datę kalendarzową” w Polsce. Do plakatu w PL lepiej własne `DD.MM.YYYY` z getterów lokalnych.

Obiekt `Date` ma też `[Symbol.toPrimitive]` (żeby `"Data: " + d` zadziałało). W zadaniach i tak zrzucamy wynik do `textContent` jako **własny** string.

---

## 10. Metody statyczne

### `Date.now()`

Aktualny timestamp (liczba). Szybciej niż `new Date().getTime()`, gdy nie potrzebujesz obiektu.

### `Date.parse(napis)`

Parsuje string na timestamp. **Niepewne** przy `"10.09.2026"` i przy samej dacie ISO. Unikaj na tym dziale.

### `Date.UTC(y, m, d, ...)`

Zwraca timestamp dla chwili w UTC (miesiąc znów **0–11**). `new Date(Date.UTC(2026, 8, 10))` to 10 września 2026, 00:00 UTC.

---

## 11. Nieistniejąca data (`Invalid Date` i przepełnienie)

```js
const zla = new Date("nic");
zla.toString();           // "Invalid Date"
Number.isNaN(zla.getTime()); // true
```

Inny przypadek: **konstruktor nie krzyczy** przy 31 lutego — **przesuwa** do marca:

```js
const d = new Date(2025, 1, 29); // 2025 nie jest przestępny
d.getMonth(); // 2 (marzec)
d.getDate();  // 1
```

Sprawdzenie „czy dzień istnieje”:

```js
const d = new Date(rok, miesiac - 1, dzien);
const ok =
  d.getFullYear() === rok &&
  d.getMonth() === miesiac - 1 &&
  d.getDate() === dzien;
```

Jeśli JS „przewinął” miesiąc, `ok` jest `false`.

Rok przestępny: luty ma 29 dni (np. 2024, 2028). 2025 — nie.

---

## 12. Dzień tygodnia — `switch` (bez tablicy)

Tablice są w następnym dziale. Tu nazwy dni z `switch` i `getDay()`:

```js
let nazwa;
switch (d.getDay()) {
  case 0:
    nazwa = "niedziela";
    break;
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
  default:
    nazwa = "nieznany";
}
```

---

## 13. Wypis na stronę

Od działu [`06_math`](../06_math/) wynik wpisujemy do pudełka `#wynik` (skrypt **pod** pustym `div`, nie `document.write`):

```js
document.getElementById("wynik").textContent = napis;
```

Kilka linii: sklejaj z `"\n"` (`white-space: pre-wrap` w CSS). To nadal **nie** jest `querySelector` ani `createElement` (semestr 3).

---

## 14. Szybkie mapowanie: problem → narzędzie

- **Pokazać datę po polsku** → gettery + `padStart` (`DD.MM.YYYY`)
- **Który dzień tygodnia** → `getDay()` + `switch`
- **Za tydzień / za 14 dni** → `setDate(getDate() + n)`
- **Ile dni między terminami** → `getTime()` i dzielenie przez `86400000`, `Math.round`
- **Czy termin minął** → porównaj `getTime()`
- **Czy 31.02 istnieje** → porównaj gettery z tym, co podałeś
- **Teraz (ms)** → `Date.now()` albo `new Date()`

---

## 15. Co dalej

[`09_tablice`](../09_tablice/) — wtedy nazwy miesięcy i dni można trzymać w tablicy zamiast w `switch`. Daty wrócą przy DOM (komentarz z `toLocaleString`) i przy klasach (`new Date()` w konstruktorze).
