# Teoria: Operatory arytmetyczne i konwersje typów

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Wprowadzenie do obliczeń w JavaScript

W aplikacjach internetowych niemal każdy proces wymaga przetwarzania danych liczbowych: obliczanie sumy koszyka w sklepie internetowym, naliczanie podatku VAT, przeliczanie jednostek miar, obliczanie reszty z dzielenia przy stronicowaniu czy manipulowanie pozycją elementów. Aby poprawnie wykonywać te operacje, programista musi biegle posługiwać się operatorami arytmetycznymi oraz rozumieć, jak JavaScript traktuje poszczególne typy danych podczas obliczeń.

W języku JavaScript zmienne są typowane dynamicznie. Oznacza to, że typ wartości nie jest z góry narzucony zmiennej przy deklaracji, lecz wynika z aktualnie przechowywanej wartości. W konsekwencji silnik JavaScriptu może automatycznie próbować przekształcić dane jednego typu w inny, co bywa niezwykle wygodne, ale bez dokładnej wiedzy prowadzi do subtelnych błędów programistycznych.

---

## 2. Podstawowe operatory arytmetyczne

JavaScript udostępnia kompletny zestaw operatorów służących do wykonywania podstawowych działań matematycznych:

| Operator | Nazwa operacji | Przykład zapisu | Wynik dla `a = 10`, `b = 3` |
|:--------:|----------------|:---------------:|:---------------------------:|
| `+` | Dodawanie | `a + b` | `13` |
| `-` | Odejmowanie | `a - b` | `7` |
| `*` | Mnożenie | `a * b` | `30` |
| `/` | Dzielenie | `a / b` | `3.3333333333333335` |
| `%` | Reszta z dzielenia (modulo) | `a % b` | `1` |
| `**` | Potęgowanie | `a ** b` | `1000` (`10` do sześcianu) |

```javascript
const cenaNetto = 120;
const stawkaVat = 0.23;
const podatek = cenaNetto * stawkaVat;
const cenaBrutto = cenaNetto + podatek;

console.log("Cena brutto wynosi: " + cenaBrutto); // 147.6
```

### Operator modulo (`%`) i `Math.floor`

Operator `%` zwraca całkowitą resztę z dzielenia pierwszej liczby przez drugą. Jest on powszechnie stosowany do sprawdzania podzielności (np. czy liczba jest parzysta: `liczba % 2 === 0`), do cyklicznego ograniczania wartości indeksów oraz do podziału jednostek (np. przeliczanie sekund na minuty i pozostałe sekundy).

Dzielenie `/` w JavaScript zwykle zwraca liczbę z częścią ułamkową (np. `125 / 60` daje `2.0833...`). Gdy potrzebujesz **tylko pełnych jednostek** (pełne wsady pieca, pełne godziny, pełne opakowania), odrzuć ułamek funkcją `Math.floor(wartość)` — zaokrągla w dół do najbliższej liczby całkowitej mniejszej lub równej argumentowi.

```javascript
const wszystkieSekundy = 125;
const minuty = Math.floor(wszystkieSekundy / 60); // 2 (pełne minuty)
const sekundy = wszystkieSekundy % 60; // 5 (reszta z 125 / 60)

console.log(`Czas: ${minuty} min ${sekundy} s`); // "Czas: 2 min 5 s"
```

Typowy wzorzec w zadaniach: `Math.floor(liczba / dzielnik)` daje liczbę pełnych porcji, a `liczba % dzielnik` — to, co zostało.

- **Po co to jest:** Operatory arytmetyczne umożliwiają odwzorowanie praw matematyki i logiki biznesowej w kodzie programu, stanowiąc fundament wszelkich kalkulacji finansowych, technicznych i statystycznych.
- **Typowa pomyłka:** Zapominanie o kolejności wykonywania działań. W zapisie `cena + koszt * rabat` mnożenie wykona się przed dodawaniem. Jeśli chcemy zmienić kolejność, należy bezwzględnie zastosować nawiasy okrągłe: `(cena + koszt) * rabat`. Druga pomyłka: użycie samego `/` zamiast `Math.floor`, gdy na stronie ma pojawić się liczba całkowita pełnych jednostek.

---

## 3. Operatory przypisania złożonego

Częstą operacją w programowaniu jest modyfikacja istniejącej wartości zmiennej i natychmiastowe zapisanie nowego wyniku w tej samej zmiennej. Aby skrócić zapis i zwiększyć czytelność kodu, stosuje się operatory przypisania złożonego:

| Operator | Pełny zapis równoważny | Znaczenie |
|:--------:|:----------------------:|-----------|
| `x += y` | `x = x + y` | Zwiększ `x` o wartość `y` |
| `x -= y` | `x = x - y` | Zmniejsz `x` o wartość `y` |
| `x *= y` | `x = x * y` | Pomnóż `x` przez `y` |
| `x /= y` | `x = x / y` | Podziel `x` przez `y` |
| `x %= y` | `x = x % y` | Zastąp `x` resztą z dzielenia przez `y` |
| `x **= y` | `x = x ** y` | Podnieś `x` do potęgi `y` |

```javascript
let stanMagazynowy = 50;

// Dostawa 20 sztuk towaru
stanMagazynowy += 20; // stanMagazynowy wynosi teraz 70

// Sprzedaż 15 sztuk
stanMagazynowy -= 15; // stanMagazynowy wynosi teraz 55
```

- **Po co to jest:** Zmniejsza powtarzalność kodu (zasada DRY — Don't Repeat Yourself), eliminuje konieczność dwukrotnego wpisywania nazwy tej samej zmiennej i redukuje ryzyko literówki w nazwie identyfikatora.
- **Typowa pomyłka:** Próba użycia operatora przypisania na stałej zadeklarowanej przez `const`. Wywołanie `const punkty = 10; punkty += 5;` zakończy się błędem `TypeError: Assignment to constant variable`. Do zmiennych modyfikowanych należy używać wyłącznie słowa kluczowego `let`.

---

## 4. Inkrementacja i dekrementacja (post- i pre-)

Inkrementacja (`++`) oznacza zwiększenie wartości zmiennej o `1`, natomiast dekrementacja (`--`) to zmniejszenie wartości o `1`. Choć operatory te wydają się proste, ich działanie zależy ściśle od tego, czy symbol umieścimy przed zmienną (prefiks), czy po zmiennej (postfiks).

### Postinkrementacja (`x++`) a Preinkrementacja (`++x`)

Różnica ujawnia się wtedy, gdy wynik operacji jest częścią większego wyrażenia lub jest przypisywany do innej zmiennej:
1. **Preinkrementacja (`++x`):** Silnik najpierw zwiększa wartość zmiennej `x` o 1, a następnie zwraca nową, już powiększoną wartość do wyrażenia.
2. **Postinkrementacja (`x++`):** Silnik najpierw pobiera aktualną (starą) wartość zmiennej `x` na potrzeby wyrażenia, a dopiero po wyliczeniu wyrażenia zwiększa wartość zmiennej `x` o 1 w pamięci.

```javascript
let licznikA = 5;
let wynikA = ++licznikA; 
// 1. licznikA staje się 6
// 2. wynikA otrzymuje 6
console.log(licznikA, wynikA); // 6, 6

let licznikB = 5;
let wynikB = licznikB++; 
// 1. wynikB otrzymuje starą wartość 5
// 2. licznikB w pamięci staje się 6
console.log(licznikB, wynikB); // 6, 5
```

Analogicznie działa dekrementacja:
- `--y` (predekrementacja): zmniejsza i zwraca nową wartość.
- `y--` (postdekrementacja): zwraca starą wartość, a potem zmniejsza zmienną.

- **Po co to jest:** Pozwala w niezwykle zwięzły sposób zarządzać licznikami, numeracją pozycji na liście czy kolejkowaniem zleceń.
- **Typowa pomyłka:** Przypisywanie postinkrementacji do tej samej zmiennej, np. `x = x++`. W takim przypadku `x` zachowa swoją pierwotną wartość, ponieważ stara wartość nadpisze dokonane w tle zwiększenie zmiennej. Zamiast tego należy pisać po prostu samo `x++` jako osobną instrukcję.

---

## 5. Niejawna konwersja typów (koercja)

Koercja (ang. *type coercion*) to automatyczne przekształcenie typu wartości przez silnik JavaScriptu w sytuacji, gdy operator oczekuje określonego typu danych, a otrzymał inny.

### Wyjątkowa rola operatora dodawania (`+`)

Operator `+` jest w języku JavaScript przeciążony — pełni dwie zupełnie różne role:
1. Dodawanie matematyczne (jeśli oba operandy są liczbami).
2. Konkatenacja, czyli scalanie łańcuchów znaków (jeśli przynajmniej jeden operand jest tekstem).

Gdy jeden z operandów jest łańcuchem znaków (np. pobranym z pola formularza lub wpisanym w cudzysłowie), silnik przekształca drugi operand na tekst i dokonuje połączenia napisów:

```javascript
console.log(10 + 20);     // 30 (dodawanie liczb)
console.log("10" + 20);   // "1020" (konkatenacja! Liczba 20 zamieniona na "20")
console.log(20 + "10");   // "2010" (konkatenacja)
console.log(5 + 5 + "px"); // "10px" (od lewej: 5 + 5 = 10, następnie 10 + "px" = "10px")
```

### Działanie pozostałych operatorów arytmetycznych (`-`, `*`, `/`, `%`)

W przeciwieństwie do operatora `+`, operatory odejmowania, mnożenia i dzielenia nie mają odpowiednika tekstowego. Silnik zakłada, że programista zamierza wykonać działanie matematyczne, dlatego **automatycznie próbuje przekształcić tekst w liczbę**:

```javascript
console.log("50" - 10); // 40 (tekst "50" został automatycznie zamieniony na liczbę 50)
console.log("6" * "7"); // 42 (oba teksty przekształcone w liczby)
console.log("100" / "4"); // 25
console.log("20" % 3);  // 2
```

### Wartości logiczne w operacjach arytmetycznych

Gdy wartość typu logicznego (`boolean`) bierze udział w działaniu arytmetycznym, `true` jest konwertowane na cyfrę `1`, a `false` na cyfrę `0`:

```javascript
console.log(10 + true);  // 11 (10 + 1)
console.log(10 - false); // 10 (10 - 0)
console.log(true * 5);   // 5
```

- **Po co to jest:** Elastyczność języka pozwala na uproszczenie niektórych konstrukcji, np. łączenie etykiety z wyliczoną kwotą w jeden komunikat (`"Cena: " + brutto + " zł"`).
- **Typowa pomyłka:** Dodawanie wartości liczbowych pochodzących z pól tekstowych lub zapytań użytkownika bez ich uprzedniej konwersji. Zapis `"100" + "20"` daje `"10020"` zamiast oczekiwanych `120`.

---

## 6. Jawna konwersja typów

Aby uniknąć nieprzewidywalnych zachowań koercji niejawnej, profesjonalny kod zawsze korzysta z **jawnej konwersji typów** (ang. *explicit type casting*). Oznacza to, że programista wprost w kodzie wywołuje funkcję przekształcającą typ.

### 6.1. Konwersja na liczbę: `Number()`, `parseInt()`, `parseFloat()`

Do przekształcania tekstu w liczbę służą trzy podstawowe narzędzia o zróżnicowanym sposobie działania:

#### 1. Konstruktor `Number(wartosc)`
Przekształca całą przekazaną wartość w liczbę. Jeśli w tekście znajdzie się chociaż jeden znak nieliczbowy (poza separatorem dziesiętnym — kropką), funkcja natychmiast zwraca `NaN`.

```javascript
Number("42");     // 42
Number("3.14");   // 3.14
Number("  100  "); // 100 (ignoruje białe znaki na początku i końcu)
Number("");       // 0 (pusty ciąg znaków staje się zerem)
Number("42px");   // NaN (ponieważ zawiera litery "px")
```

#### 2. Funkcja `parseInt(tekst, podstawa)`
Odczytuje tekst od początku znak po znaku, wyodrębnia liczbę całkowitą i zatrzymuje się na pierwszym napotkanym znaku niebędącym cyfrą. **Zawsze należy podawać drugi parametr — podstawę systemu liczbowego (radix), zazwyczaj 10 dla systemu dziesiętnego**.

```javascript
parseInt("42px", 10);     // 42 (odcięło "px")
parseInt("15.99 zł", 10); // 15 (odcina część ułamkową i tekst)
parseInt("kod123", 10);   // NaN (pierwszy znak nie jest cyfrą)
parseInt("08", 10);       // 8 (gwarancja interpretacji dziesiętnej)
```

#### 3. Funkcja `parseFloat(tekst)`
Działa podobnie jak `parseInt`, ale uwzględnia część ułamkową oddzieloną kropką dziesiętną:

```javascript
parseFloat("3.1415cm"); // 3.1415
parseFloat("199.90 PLN"); // 199.9
parseFloat("abc 12");   // NaN
```

#### 4. Unarny operator plus (`+wartosc`)
Jest to skrócona forma zapisu funkcji `Number(wartosc)`:
```javascript
const cena = +"49.99"; // liczba 49.99
```

- **Po co to jest:** Wartości pobierane z formularzy HTML oraz właściwości stylów CSS (np. `width: "300px"`) zawsze trafiają do skryptu jako ciągi znaków (`string`). Bez konwersji nie można wykonać na nich rzetelnych obliczeń.
- **Typowa pomyłka:** Używanie `parseInt` bez podania podstawy `10`, np. `parseInt("08")`. W starszych środowiskach liczby z zerem wiodącym były interpretowane jako zapis ósemkowy, co prowadziło do fałszywych wyników.

---

### 6.2. Konwersja na tekst: `String()`, `.toString()`, szablony ciągów

Gdy zachodzi potrzeba przekształcenia liczby lub innego typu w łańcuch znaków, mamy do dyspozycji:

1. **`String(wartosc)`:** Bezpieczna funkcja globalna, która radzi sobie z każdym typem, w tym z `null` i `undefined` (daje `"null"`, `"undefined"`).
   ```javascript
   String(1234);     // "1234"
   String(true);     // "true"
   ```
2. **Metoda `wartosc.toString()`:** Wywoływana bezpośrednio na zmiennej.
   ```javascript
   const wiek = 18;
   const tekstWieku = wiek.toString(); // "18"
   ```
3. **Szablony ciągów (Template Literals) w grawisach (\`...\`):** Najbardziej czytelny i zalecany sposób łączenia tekstu z wartościami zmiennych.
   ```javascript
   const kwota = 250;
   const komunikat = `Całkowity koszt usługi: ${kwota} zł`;
   ```

- **Po co to jest:** Do formatowania czytelnych komunikatów, raportów i zestawień prezentowanych użytkownikowi na stronie www.
- **Typowa pomyłka:** Wywołanie `.toString()` na wartości `null` lub `undefined`, co natychmiast powoduje błąd wykonania programu `TypeError: Cannot read properties of null (reading 'toString')`. Bezpieczniej jest używać `String(x)` lub szablonów ciągów `` `${x}` ``.

---

### 6.3. Konwersja na wartość logiczną: `Boolean()` oraz wartości Truthy / Falsy

Każda wartość w języku JavaScript posiada swoją wrodzoną równowartość logiczną (`true` lub `false`).

W języku JavaScript istnieje dokładnie **8 wartości falsy** (fałszujących), które po konwersji na typ logiczny dają `false`:
1. `false`
2. `0` (oraz `-0`)
3. `0n` (BigInt zero)
4. `""` (pusty ciąg znaków)
5. `null`
6. `undefined`
7. `NaN`
8. `document.all` (relikt historyczny)

Wszystkie pozostałe wartości w języku JavaScript są **truthy** (prawdziwe), w tym: dowolna liczba różna od zera (np. `-5`, `42`), dowolny niepusty napis (np. `"0"`, `"false"`, `" "`), tablice `[]` oraz obiekty `{}`.

```javascript
Boolean(0);        // false
Boolean("");       // false
Boolean(NaN);      // false
Boolean(null);     // false
Boolean(undefined); // false

Boolean(100);      // true
Boolean("tekst");  // true
Boolean(" ");      // true (ciąg ze spacją nie jest pusty!)
Boolean("0");      // true (niepusty ciąg znaków!)
```

- **Po co to jest:** Umożliwia błyskawiczne weryfikowanie obecności danych (np. czy użytkownik wpisał cokolwiek w formularzu, czy zmienna została zainicjalizowana).
- **Typowa pomyłka:** Zakładanie, że napis `"0"` lub napis `"false"` zostanie przekonwertowany na logiczny fałsz. Ponieważ oba są niepustymi łańcuchami znaków, `Boolean("0")` oraz `Boolean("false")` zwracają `true`.

---

## 7. Wartość specjalna `NaN` i jej bezpieczne badanie

Wartość `NaN` (skrót od *Not-a-Number*, czyli „nie jest liczbą”) jest specjalną wartością numeryczną reprezentującą wynik niepoprawnej lub niezdefiniowanej operacji matematycznej.

Co ciekawe, z punktu widzenia typów JavaScriptu:
```javascript
console.log(typeof NaN); // "number"
```

### Kiedy powstaje `NaN`?
- Próba parsowania tekstu niebędącego liczbą: `Number("jabłko")`, `parseInt("xyz", 10)`.
- Błędne działania matematyczne bez sensu liczbowego: `"pies" * 3`, `undefined + 5`.
- Obliczenia matematyczne o nieoznaczonym wyniku: `0 / 0`, `Math.sqrt(-4)`.

### Wyjątkowa cecha: `NaN` nie jest równe samemu sobie!

Zgodnie ze standardem IEEE 754 dla liczb zmiennoprzecinkowych, wartość `NaN` jest unikalna i nie jest równa żadnej innej wartości, **nawet samej sobie**:

```javascript
console.log(NaN === NaN); // false!
console.log(NaN == NaN);  // false!
```

Oznacza to, że nie wolno sprawdzać poprawności obliczeń przez `x === NaN`. Taki warunek zawsze zwróci `false`.

### Jak badać `NaN`: `isNaN()` a `Number.isNaN()`

W języku JavaScript istnieją dwie funkcje do badania tej wartości, różniące się zasadniczo bezpieczeństwem działania:

1. **Globalna funkcja `isNaN(wartosc)`:**
   Przed wykonaniem testu najpierw **niejawnie próbuje przekonwertować argument na liczbę**. Jeżeli konwersja się nie powiedzie, uznaje, że to `NaN`:
   ```javascript
   isNaN(NaN);       // true
   isNaN("tekst");   // true (bo Number("tekst") to NaN!)
   isNaN("123");     // false (bo Number("123") to 123)
   ```
   Globalne `isNaN("tekst")` daje `true`, mimo że przekazany argument wcale nie jest wartością `NaN`, lecz zwykłym łańcuchem znaków.

2. **Nowoczesna metoda `Number.isNaN(wartosc)` (zalecana):**
   **Nie wykonuje żadnej konwersji typów**. Sprawdza wyłącznie, czy przekazana wartość jest dokładnie typem liczbowym i jednocześnie wartością `NaN`:
   ```javascript
   Number.isNaN(NaN);       // true
   Number.isNaN("tekst");   // false (tekst to nie liczba NaN)
   Number.isNaN(123);       // false
   Number.isNaN(0 / 0);     // true
   ```

- **Po co to jest:** Do walidacji poprawności obliczeń i zabezpieczania skryptów przed propagacją błędu numerycznego na stronę klienta.
- **Typowa pomyłka:** Sprawdzanie `if (wynik === NaN)`. Ponieważ ten warunek nigdy nie będzie spełniony, skrypt nie wykryje błędu obliczeniowego. Należy bezwzględnie stosować `Number.isNaN(wynik)`.

### Komunikat statusu po badaniu `NaN` (bez `if` w tym module)

W module T06 **nie stosujemy** instrukcji `if` / `else` ani operatora warunkowego `? :` (poznacie je w kolejnych działach). W zadaniach dane wejściowe są tak dobrane, że konwersja błędnego tekstu zawsze daje `NaN`. Dlatego:

1. Wywołaj `Number(...)` oraz `Number.isNaN(...)` i zapisz wynik badania (np. w zmiennej oraz w `console.log`).
2. Komunikat statusu na stronę ustaw **dokładnie takim tekstem**, jaki podaje instrukcja zadania w sekcji z treścią do wpisania.

```javascript
const blednyTekst = "brak rabatu";
const wartosc = Number(blednyTekst);           // NaN
const czyNaN = Number.isNaN(wartosc);          // true
console.log("Number.isNaN:", czyNaN);

// Tekst statusu bierzesz dosłownie z instrukcji zadania (tu przykładowo):
const statusTekst = "wykryto brak liczby";
document.write(`Status (Number.isNaN): ${statusTekst}<br>`);
```

---

## 8. Wypis wyników na stronę w Semestrze 1

Zgodnie z rygorem spiralnym nauczania obowiązującym w semestrze 1:
- Wypis informacji dla użytkownika realizujemy za pomocą metody `document.write()`.
- Wypis umieszczamy w kontenerze prezentacyjnym, np. `<div class="wynik">`.
- Do rozdzielania kolejnych wierszy tekstu stosujemy znacznik łamania linii `<br>`.
- Równolegle dla celów kontrolnych i diagnostycznych stosujemy wypis do konsoli `console.log()`.

```javascript
// Przykład standardowego wypisu w Semestrze 1:
const netto = 80;
const vat = 0.23;
const brutto = netto * (1 + vat);

document.write("Cena netto: " + netto + " zł<br>");
document.write("Cena brutto: " + brutto + " zł<br>");
console.log("Obliczenia zakonczone sukcesem. Brutto:", brutto);
```

- **Po co to jest:** `document.write` pozwala uczniom natychmiast zobaczyć wyliczone dane na stronie HTML bez konieczności przedwczesnego poznawania skomplikowanych metod manipulacji drzewem DOM (`getElementById`, `querySelector`), które są fundamentem semestrów 2 i 3.
- **Typowa pomyłka:** Stosowanie znaków nowej linii `\n` wewnątrz łańcucha przekazywanego do `document.write()`. Przeglądarka internetowa renderuje kod HTML, w którym znak `\n` jest traktowany jako zwykła spacja. Aby wymusić przejście do nowego wiersza na stronie, należy użyć znacznika `<br>`.
