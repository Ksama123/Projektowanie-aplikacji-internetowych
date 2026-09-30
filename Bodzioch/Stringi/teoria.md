# Obiekt String i jego metody w JavaScript

String (ciąg znaków) to jeden z podstawowych typów danych w JavaScript. Reprezentuje tekst – od pojedynczego znaku po całe dokumenty. W aplikacjach webowych stringi służą do: walidacji formularzy (e-mail, hasło, kod pocztowy), wyświetlania komunikatów, parsowania adresów URL, czyszczenia danych z pól tekstowych czy formatowania numerów i dat. Znajomość metod obiektu `String` pozwala rozwiązywać te problemy bez sięgania po zewnętrzne biblioteki.

W JavaScript stringi są **niezmienne** (immutable): metody nie modyfikują oryginalnego stringa, tylko zwracają **nowy**. Pamiętaj o przypisaniu wyniku do zmiennej, jeśli chcesz go dalej użyć.

To dział **semestru 2**, po [`06_math`](../06_math/). Wypis na stronę jest **ten sam co w Math** (nie `document.write`):

```js
document.getElementById("wynik").textContent = "Witaj, " + imie + "!";
```

Kilka linii: sklejaj z `"\n"`. Szablon: puste `#wynik`, skrypt tuż pod nim. `querySelector` i `createElement` zostawiamy na semestr 3.

---

## Właściwości

### length

- **length** (właściwość, nie metoda) – zwraca liczbę znaków w stringu.
- Indeksy znaków są od **0**; ostatni znak ma indeks `length - 1`.
- Przykład: `"Ala".length` → 3.

---

## Dostęp do znaków

### charAt(index)

- Zwraca znak (jeden UTF-16 code unit) na pozycji `index`.
- Dla indeksu poza zakresem zwraca pusty string `""`.
- Przykład: `"kot".charAt(1)` → `"o"`.

### at(index)

- Podobnie jak `charAt`, ale **akceptuje ujemne indeksy**: `-1` to ostatni znak, `-2` przedostatni itd.
- Przykład: `"JavaScript".at(-1)` → `"t"`.

### charCodeAt(index)

- Zwraca kod UTF-16 (liczbę) znaku na danej pozycji.
- Przydatne przy prostych operacjach na kodach znaków (np. sprawdzanie zakresu liter).
- Przykład: `"A".charCodeAt(0)` → 65.

### codePointAt(pos)

- Zwraca wartość punktu kodu Unicode (code point) znaku zaczynającego się na pozycji `pos`.
- Poprawnie obsługuje znaki spoza płaszczyzny BMP (np. emoji), które w UTF-16 są zapisane jako tzw. surrogate pair (dwa code unity).
- Przykład: dla emoji zwraca pełny code point, a nie tylko pierwszą połowę pary.

---

## Wycinanie i fragmenty

### slice(start, end)

- Zwraca fragment od indeksu `start` do (bez) `end`.
- Jeśli brak `end`, zwraca do końca stringa.
- **Ujemne indeksy** są dozwolone i liczone od końca: `slice(-3)` to ostatnie 3 znaki.
- Przykład: `"JavaScript".slice(0, 4)` → `"Java"`, `"abc".slice(-2)` → `"bc"`.

### substring(start, end)

- Działa podobnie do `slice`: fragment od `start` do (bez) `end`.
- Różnica: ujemne indeksy i `NaN` są traktowane jak **0**; jeśli `start > end`, argumenty są zamieniane.
- W nowym kodzie często wybiera się `slice` ze względu na spójne ujemne indeksy.

### substr(start, length) — przestarzałe

- Zwraca fragment zaczynający się od `start` o długości `length` znaków.
- **Nie jest zalecane** (deprecated). Zamiast tego używaj `slice(start, start + length)`.

---

## Łączenie stringów

### concat(str1, str2, ...)

- Łączy wywołujący string z podanymi argumentami; zwraca nowy string.
- W praktyce częściej używa się operatora `+` lub template literals (`` `...${x}...` ``), które są czytelniejsze.

---

## Wyszukiwanie w stringu

### indexOf(szukany, odIndeksu?)

- Zwraca **indeks pierwszego** wystąpienia podciągu `szukany`.
- Opcjonalny drugi argument: od którego indeksu szukać.
- Zwraca **-1**, gdy nie znaleziono.
- Przykład: `"banan".indexOf("na")` → 2; `"banan".indexOf("na", 3)` → 4.

### lastIndexOf(szukany, odIndeksu?)

- Zwraca **indeks ostatniego** wystąpienia podciągu.
- Opcjonalnie: szukanie wstecz od danego indeksu.
- -1 gdy brak.
- Przykład: `"banan".lastIndexOf("na")` → 4.

### includes(szukany)

- Zwraca **true** lub **false** – czy string zawiera podciąg.
- Bardzo wygodne przy walidacji (np. czy e-mail zawiera `@`).
- Przykład: `"user@mail.pl".includes("@")` → true.

### startsWith(szukany, pozycja?)

- Zwraca **true/false** – czy string zaczyna się od podanego fragmentu.
- Opcjonalnie: sprawdzenie od danej pozycji.
- Przykład: `"https://example.com".startsWith("https")` → true.

### endsWith(szukany, koniec?)

- Zwraca **true/false** – czy string kończy się podanym fragmentem.
- Opcjonalnie: traktuj string tak, jakby kończył się na danej długości (przydatne przy porównywaniu końcówek z ograniczeniem długości).
- Przykład: `"plik.txt".endsWith(".txt")` → true.

---

## Porównywanie stringów

### localeCompare(porównywany, locale?, opcje?)

- Zwraca liczbę: ujemną (wywołujący przed `porównywany`), zero (równe) lub dodatnią (wywołujący po).
- Uwzględnia locale (język), więc sortowanie np. polskich nazwisk jest poprawne (ą, ć, ę itd.).
- Opcje pozwalają m.in. na porównanie bez rozróżniania wielkości liter (np. `sensitivity: "base"`).
- Przykład: `"ą".localeCompare("b", "pl")` zwraca wartość ujemną (ą przed b w polskim alfabecie).

---

## Zmiana wielkości liter

### toLowerCase()

- Zwraca string w **małych** literach.
- Przykład: `"JavaScript".toLowerCase()` → `"javascript"`.

### toUpperCase()

- Zwraca string w **wielkich** literach.
- Przykład: `"Ala".toUpperCase()` → `"ALA"`.

### toLocaleLowerCase(locale?), toLocaleUpperCase(locale?)

- Wersje uwzględniające **locale** (np. tureckie „i” / „I” zachowują się inaczej niż w angielskim).
- Dla większości języków wynik jak przy `toLowerCase()` / `toUpperCase()`; warto użyć przy aplikacjach wielojęzycznych.

---

## Białe znaki (trim)

### trim()

- Usuwa białe znaki (spacje, tabulatory, znaki nowej linii) **z początku i końca** stringa.
- Nie zmienia białych znaków wewnątrz tekstu.
- Bardzo często używane przy danych z formularzy – użytkownik często wkleja spację na początku lub końcu.
- Przykład: `"  witaj  ".trim()` → `"witaj"`.

### trimStart() / trimLeft()

- Usuwa białe znaki tylko z **początku** stringa.

### trimEnd() / trimRight()

- Usuwa białe znaki tylko z **końca** stringa.

---

## Zamiana i powtórzenia

### replace(szukany, zamiennik)

- Zamienia **pierwsze** wystąpienie `szukany` na `zamiennik`.
- `szukany` może być stringiem lub wyrażeniem regularnym; `zamiennik` – string lub funkcja.
- Przykład: `"foo bar foo".replace("foo", "x")` → `"x bar foo"`.
- Aby zamienić **wszystkie** wystąpienia: użyj `replaceAll(...)` albo wyrażenia z flagą `g`: `replace(/foo/g, "x")`.

### replaceAll(szukany, zamiennik)

- Zamienia **wszystkie** wystąpienia.
- Gdy `szukany` jest stringiem, zamienia wszystkie; gdy regexp, musi mieć flagę `g`.
- Przykład: `"a-b-c".replaceAll("-", "_")` → `"a_b_c"`.

### repeat(liczba)

- Powtarza string zadaną liczbę razy; zwraca nowy string.
- Argument musi być nieujemny (całkowity).
- Przykład: `"ab".repeat(3)` → `"ababab"`.

---

## Dopełnianie (padding)

### padStart(dlugosc, znak?)

- Dopełnia string **z początku** do podanej długości znakiem `znak` (domyślnie spacja).
- Typowe zastosowania: formatowanie numerów (np. „00042”), wyrównanie kolumn w tekście.
- Przykład: `"42".padStart(5, "0")` → `"00042"`.

### padEnd(dlugosc, znak?)

- Dopełnia **z końca** do podanej długości.
- Domyślny znak: spacja.
- Przykład: `"Hi".padEnd(5, ".")` → `"Hi..."`.

---

## Rozdzielanie i łączenie

### split(separator, limit?)

- Dzieli string na **tablicę** fragmentów w miejscach wystąpienia `separator`.
- `separator` może być stringiem lub wyrażeniem regularnym.
- Pusty string `""` jako separator dzieli na **pojedyncze znaki** (uwaga: dla emoji może to rozdzielić surrogate pair).
- Opcjonalnie `limit` – maksymalna liczba elementów w tablicy.
- Przykłady: `"a,b,c".split(",")` → `["a","b","c"]`; `"abc".split("")` → `["a","b","c"]`.

**Uwaga:** `join(separator)` to metoda **tablicy**, nie stringa – łączy elementy tablicy w jeden string. W połączeniu ze `split` pozwala np. zamienić separator w tekście: `"a-b-c".split("-").join("_")` → `"a_b_c"`.

---

## Wyrażenia regularne (RegExp) a string

### match(regexp)

- Dopasowuje string do wyrażenia regularnego. Zwraca tablicę dopasowań lub `null`.
- Z flagą `g` zwraca wszystkie dopasowania; bez – pierwsze dopasowanie z grupami.
- Przydatne przy wyciąganiu fragmentów (np. liczby z tekstu), choć do prostych sprawdzeń często wystarczy `test()` na regexie.

### matchAll(regexp)

- Zwraca **iterator** wszystkich dopasowań; regexp **musi** mieć flagę `g` (global).
- Każde dopasowanie zawiera indeks, grupy itd. – wygodne przy złożonym parsowaniu.

### search(regexp)

- Zwraca **indeks** pierwszego dopasowania wyrażenia regularnego lub **-1**.
- Gdy potrzebujesz tylko „czy jest” / „gdzie jest”, `search` jest lżejsze niż `match`.

---

## Unicode i normalizacja

### normalize(form?)

- Zwraca string w jednej z form normalizacji Unicode: `"NFC"`, `"NFD"`, `"NFKC"`, `"NFKD"`.
- Stosuje się przy porównywaniu tekstów z różnymi reprezentacjami tego samego znaku (np. „é” jako jeden znak vs. „e” + znak akcentu).
- Domyślnie często używa się `"NFC"`.

### isWellFormed()

- Zwraca **true**, jeśli string nie zawiera tzw. lone surrogates (pojedynczych połówek pary UTF-16).
- Przydatne przed wysłaniem danych do API lub zapisem do pliku, gdy wymagany jest poprawny UTF-8/UTF-16.

### toWellFormed()

- Zastępuje lone surrogates znakiem zastępczym Unicode (U+FFFD).
- Daje „bezpieczny” string do dalszego przetwarzania.

---

## Konwersja i reprezentacja

### toString()

- Zwraca wartość stringa (dla prymitywu zwraca ten sam string).
- Dla obiektu `String` (utworzonego przez `new String(...)`) zwraca opakowaną wartość prymitywną.

### valueOf()

- Zwraca prymitywną wartość stringa; głównie używane wewnętrznie przy konwersji typu.

---

## Metody statyczne String

Wywołuje się je na konstruktorze `String`, a nie na instancji.

### String.fromCharCode(code1, code2, ...)

- Tworzy string z podanych **kodów UTF-16** (liczby).
- Przykład: `String.fromCharCode(65, 66, 67)` → `"ABC"`.
- Nie obsługuje poprawnie punktów kodu powyżej 65535 (trzeba użyć surrogate pair).

### String.fromCodePoint(codePoint1, ...)

- Tworzy string z podanych **punktów kodu Unicode**.
- Poprawnie obsługuje znaki spoza BMP (np. emoji).
- Przykład: `String.fromCodePoint(0x1F600)` → `"😀"`.

### String.raw(szablon, ...wyrazenia)

- Służy do tworzenia stringów z **szablonów tagowanych**: zwraca „surowy” tekst bez interpretacji escape’ów (np. `\n` jako dwa znaki, a nie nowa linia).
- Stosowane rzadziej, głównie przy bardziej zaawansowanym przetwarzaniu szablonów lub ścieżek.

---

## Iteracja po stringu

### [Symbol.iterator]()

- String jest iterowalny: `for (const c of "abc")` lub `[..."abc"]` daje kolejne **punkty kodu** (dla zwykłych znaków = kolejne znaki; dla emoji złożonych może być więcej elementów).
- Rozłożenie `"text".split("")` opiera się na jednostkach UTF-16; `[..."text"]` – na punktach kodu (lepsze dla Unicode).

---

## Metody HTML (przestarzałe)

Metody takie jak `anchor()`, `bold()`, `italics()`, `link()`, `fontcolor()`, `fontsize()` itd. owijają string w tagi HTML (np. `"x".bold()` → `"<b>x</b>"`). Są **przestarzałe** (deprecated), tworzą niebezpieczny markup przy wstrzykiwaniu przez `innerHTML` i nie pokrywają współczesnego HTML. Zamiast nich używa się DOM: `document.createElement()`, `textContent`, właściwości elementu itd.

---

## Zastosowania w aplikacjach

- **Walidacja:** `trim()` + `length` przy logowaniu/hasłach; `includes("@")`, `indexOf`, `slice` przy prostym sprawdzeniu e-maila; `startsWith`/`endsWith` przy rozszerzeniach plików.
- **Formatowanie:** `padStart` przy numerach kont, kodach; `slice` przy wyświetlaniu skrótów (np. „pierwsze 50 znaków…”); `toUpperCase()`/`toLowerCase()` przy jednolitym zapisie.
- **Czyszczenie danych:** `trim()`, `replaceAll(" ", "")` przy kodach pocztowych; usuwanie zbędnych znaków przed wysłaniem do API.
- **Parsowanie:** `split()` przy CSV lub linijkach tekstu; `slice` przy wyciąganiu fragmentów (np. data w formacie YYYY-MM-DD).
- **Bezpieczeństwo:** unikanie `innerHTML` z surowymi stringami; przy wyświetlaniu treści użytkownika – `textContent` lub sanitizacja; `isWellFormed()`/`toWellFormed()` przy danych z zewnątrz, jeśli wymagany jest poprawny Unicode.

Teoria powyżej obejmuje **wszystkie** istotne metody i właściwości obiektu `String` w JavaScript (włącznie z metodami statycznymi i Unicode). Na egzaminie i w codziennej pracy najczęściej wystarczy wybór: `length`, `trim`, `toLowerCase`/`toUpperCase`, `slice`, `indexOf`/`includes`, `startsWith`/`endsWith`, `replace`/`replaceAll`, `split`, `padStart`/`padEnd`, `repeat` – reszta uzupełnia wiedzę przy bardziej zaawansowanych zadaniach.

Dalej: [`08_date`](../08_date/) — `padStart` przyda się do formatu `DD.MM.YYYY`.
