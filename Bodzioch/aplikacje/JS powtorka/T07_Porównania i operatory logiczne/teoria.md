# Teoria: Porównania i operatory logiczne

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

## 1. Wstęp: Do czego służy logika w programowaniu?

W aplikacjach internetowych niemal każda operacja wymaga sprawdzenia określonych kryteriów: czy użytkownik ma ukończone 18 lat, czy stan magazynowy produktu jest większy od zera, czy podane hasło ma odpowiednią długość lub czy kwota zamówienia uprawnia do darmowej dostawy.

Komputer wykonuje te testy, obliczając wartość wyrażeń logicznych. Wynikiem takiego porównania jest zawsze jedna z dwóch wartości typu logicznego (`boolean`):
- `true` (prawda)
- `false` (fałsz)

Zanim w kolejnych modułach poznamy instrukcje sterujące przepływem programu (takie jak `if` czy `switch`), musimy precyzyjnie opanować budowanie samych wyrażeń testujących i zrozumieć, w jaki sposób JavaScript interpretuje porównywane dane.

---

## 2. Operatory porównania: ścisłe a luźne

JavaScript oferuje dwa zestawy operatorów równości i nierówności: operatory ścisłe (`===`, `!==`) oraz operatory luźne (`==`, `!=`). Zrozumienie różnicy między nimi to jeden z fundamentów kwalifikacji INF.03.

### 2.1. Porównanie ścisłe (`===` oraz `!==`)

Operator ścisłej równości (`===`) sprawdza dwa warunki jednocześnie:
1. Czy obie wartości są **tego samego typu** (np. obie są liczbami).
2. Czy obie wartości mają **tę samą zawartość**.

Jeśli typy zmiennych się różnią, operator `===` natychmiast zwraca `false`, bez żadnych prób dopasowywania danych na siłę.

```javascript
const punkty = 100;
const tekst = "100";

console.log(punkty === 100);     // true - ten sam typ (number) i ta sama wartość
console.log(punkty === tekst);   // false - różne typy: number i string
console.log(punkty !== 50);      // true - 100 jest różne od 50
console.log(punkty !== "100");   // true - są różne, bo różnią się typami
```

**Po co to jest:**
Operator ścisłego porównania (`===`) gwarantuje absolutne bezpieczeństwo i przewidywalność kodu. Chroni programistę przed przypadkowym uznaniem tekstu za liczbę, co w aplikacjach komercyjnych (np. sklepach internetowych) mogłoby prowadzić do poważnych błędów obliczeniowych.

**Typowa pomyłka:**
Używanie pojedynczego znaku równości `=` zamiast potrójnego `===`. Pojedynczy znak `=` to operator przypisania wartości do zmiennej, a nie test porównania. Zapis `a = 10` nadpisuje wartość zmiennej `a`, zamiast sprawdzić jej równość z liczbą 10.

---

### 2.2. Porównanie luźne (`==` oraz `!=`) i niejawna koercja typów

Operator luźnej równości (`==`) przed porównaniem wartości dokonuje tzw. niejawnej konwersji typów (ang. *type coercion*). Oznacza to, że jeśli porównujemy liczbę z napisem, JavaScript próbuje automatycznie przekształcić napis w liczbę.

```javascript
console.log(5 == "5");           // true (JavaScript przekształca "5" w liczbę 5)
console.log(0 == false);         // true (0 i false są konwertowane do wspólnego mianownika)
console.log("" == false);        // true (pusty napis staje się zerem, które jest równe false)
console.log(null == undefined);  // true (specjalna reguła specyfikacji języka)
```

Taka elastyczność bywa źródłem trudnych do wykrycia błędów. Z tego względu we współczesnym programowaniu oraz w standardach egzaminacyjnych INF.03 stosujemy **wyłącznie operatory ścisłe (`===` oraz `!==`)**.

**Po co to jest:**
Operatory luźne istnieją w JavaScript ze względów historycznych (z czasów wczesnych wersji języka w latach 90.). Choć spotkasz je w starszych podręcznikach i kodzie legacy, w nowoczesnym kodzie unikamy ich stosowania na rzecz świadomej, jawnej konwersji typów.

**Typowa pomyłka:**
Zakładanie, że skoro `5 == "5"` daje `true`, to można swobodnie mieszać typy bez konwersji. Zawsze przed porównaniem liczb upewnij się, że obie zmienne mają typ `number` (np. stosując jawną konwersję `Number()`).

---

## 3. Operatory relacyjne (porównania wielkości)

Operatory relacyjne służą do porównywania relacji wielkościowych między wartościami liczbowymi:
- `>` — większy niż
- `<` — mniejszy niż
- `>=` — większy lub równy
- `<=` — mniejszy lub równy

```javascript
const minimalnyWiek = 18;
const wiekKlienta = 19;

console.log(wiekKlienta > minimalnyWiek);   // true
console.log(wiekKlienta < 18);              // false
console.log(wiekKlienta >= 18);             // true
console.log(wiekKlienta <= 20);             // true
```

### Porównywanie łańcuchów znaków (kolejność alfabetyczna i kody ASCII/Unicode)

Gdy operatory relacyjne stosujemy do tekstów (`string`), JavaScript porównuje je znak po znaku według kodów Unicode:

```javascript
console.log("Adam" < "Bogdan");  // true, ponieważ litera 'A' ma mniejszy kod niż 'B'
console.log("jabłko" > "arbuz"); // true, 'j' występuje po 'a' w alfabecie
console.log("10" < "2");         // true! Ponieważ porównywane są znaki: '1' ma mniejszy kod niż '2'
```

**Po co to jest:**
Operatory relacyjne pozwalają na weryfikację progów kwotowych, limitów punktowych, stanów magazynowych oraz sortowanie haseł i nazw w katalogach produktów.

**Typowa pomyłka:**
Porównywanie wartości liczbowych zapisanych jako tekst (np. `"100" < "20"`). W wyniku porównania znakowego tekst `"100"` jest mniejszy od `"20"`, ponieważ pierwszy znak `"1"` ma mniejszy kod niż `"2"`. Jeśli chcesz porównać liczby, zawsze najpierw przekonwertuj teksty za pomocą `Number(zmienna)`.

---

## 4. Operatory logiczne: koniunkcja, alternatywa i negacja

W rzeczywistych projektach pojedyncze kryterium to za mało. Często musimy sprawdzić, czy użytkownik podał poprawny login **oraz** poprawne hasło, albo czy klient posiada kupon rabatowy **lub** złożył zamówienie na kwotę powyżej 200 zł. Do łączenia warunków służą operatory logiczne.

### 4.1. Koniunkcja logiczna `&&` (AND - „i”)

Operator `&&` zwraca `true` tylko wtedy, gdy **wszystkie** połączone warunki są spełnione (`true`). Jeśli choć jeden warunek jest fałszywy, całe wyrażenie przyjmuje wartość `false`.

| Wyrażenie A | Wyrażenie B | Wynik: A `&&` B |
| :---: | :---: | :---: |
| `true` | `true` | **`true`** |
| `true` | `false` | **`false`** |
| `false` | `true` | **`false`** |
| `false` | `false` | **`false`** |

```javascript
const wiek = 22;
const posiadaPrawoJazdy = true;

// Czy kandydat może wynająć samochód dostawczy? (Wymagany wiek min. 21 lat ORAZ prawo jazdy)
const mozeWynajac = (wiek >= 21) && (posiadaPrawoJazdy === true);
console.log(mozeWynajac); // true
```

**Po co to jest:**
Koniunkcja `&&` służy do zawężania kryteriów — wymusza jednoczesne spełnienie wielu warunków walidacji (np. wiek, zgoda na regulamin i aktywne konto).

**Typowa pomyłka:**
Stosowanie zapisu matematycznego `10 < x < 20`, który w JavaScript jest błędny syntaktycznie i logicznie. W programowaniu musimy rozbić taki zapis na dwa osobne porównania połączone operatorem `&&`: `(x > 10) && (x < 20)`.

---

### 4.2. Alternatywa logiczna `||` (OR - „lub”)

Operator `||` zwraca `true`, gdy **przynajmniej jeden** z połączonych warunków jest prawdziwy (`true`). Zwraca `false` tylko wtedy, gdy wszystkie składowe warunki są fałszywe.

| Wyrażenie A | Wyrażenie B | Wynik: A `\|\|` B |
| :---: | :---: | :---: |
| `true` | `true` | **`true`** |
| `true` | `false` | **`true`** |
| `false` | `true` | **`true`** |
| `false` | `false` | **`false`** |

```javascript
const czyWeekend = false;
const czySwieto = true;

// Czy sklep jest dziś zamknięty? (Wystarczy, że jest weekend LUB święto)
const sklepZamkniety = czyWeekend || czySwieto;
console.log(sklepZamkniety); // true
```

**Po co to jest:**
Alternatywa `||` służy do rozszerzania kryteriów — pozwala na zaliczenie operacji przy spełnieniu dowolnego z alternatywnych warunków (np. płatność kartą, blikiem LUB przelewem).

**Typowa pomyłka:**
Mylenie operatora logicznego `||` z separatorem słownym. Zapis `status === "aktywny" || "oczekujacy"` jest błędny, ponieważ prawa strona `"oczekujacy"` to niepusty ciąg znaków, który w JavaScript jest zawsze traktowany jako prawda (truthy). Prawidłowy zapis to: `status === "aktywny" || status === "oczekujacy"`.

---

### 4.3. Negacja logiczna `!` (NOT - „nie”)

Operator `!` odwraca wartość logiczną wyrażenia: zamienia `true` na `false`, a `false` na `true`.

```javascript
const czyZalogowany = false;
console.log(!czyZalogowany); // true (użytkownik NIE jest zalogowany)

const czyZablokowany = true;
console.log(!czyZablokowany); // false
```

Podwójna negacja `!!` służy do szybkiego przekształcenia dowolnej wartości na czystą wartość logiczną `boolean` (`true` lub `false`).

**Po co to jest:**
Negacja `!` pozwala na czytelne sprawdzanie stanów przeciwnych (np. czy koszyk jest pusty, czy pole formularza nie zostało wypełnione).

**Typowa pomyłka:**
Stawianie wykrzyknika po nazwie zmiennej zamiast przed nią. Prawidłowy zapis negacji to zawsze `!zmienna`.

---

### 4.4. Pierwszeństwo operatorów logicznych i nawiasy

Gdy w jednym wyrażeniu łączysz `||` oraz `&&`, JavaScript **nie** ocenia ich „od lewej do prawej” w równej mierze. Operator koniunkcji `&&` ma **wyższe pierwszeństwo** niż alternatywa `||` — wiąże się ściślej, podobnie jak mnożenie przed dodawaniem.

```javascript
const kwota = 160;
const kartaKlubowa = false;
const towarGabarytowy = false;

// BŁĘDNA intencja bez nawiasów:
// JavaScript czyta to jako: kwota >= 150 || (kartaKlubowa && !towarGabarytowy)
const blad = kwota >= 150 || kartaKlubowa && !towarGabarytowy;

// POPRAWNIE — najpierw alternatywa kryteriów, potem koniunkcja z gabarytem:
const darmowaDostawa =
    (kwota >= 150 || kartaKlubowa === true) && !towarGabarytowy;
```

**Reguła praktyczna:** gdy budujesz warunek w stylu „(A lub B) oraz C”, **zawsze** ujmij część z `||` w nawiasach `(...)`. Nawiasy czynią kolejność oceny jednoznaczną dla Ciebie i dla komputera.

**Po co to jest:**
Bez nawiasów łatwo o cichy błąd logiczny: skrypt działa, konsola milczy, a wynik biznesowy jest inny niż zakładano — szczególnie przy łączeniu progu kwotowego z flagami (`||` + `&&` + `!`).

**Typowa pomyłka:**
Zapis `wynik >= 70 || portfolio && !dyskwalifikacja` zamiast `(wynik >= 70 || portfolio) && !dyskwalifikacja`, gdy oba ścieżki wejścia mają być spięte wspólnym warunkiem końcowym.

---

## 5. Koncepcja wartości Truthy oraz Falsy

W języku JavaScript każda wartość dowolnego typu umieszczona w kontekście logicznym (np. w warunku) zostaje automatycznie zinterpretowana jako prawda (`truthy`) albo fałsz (`falsy`).

W JavaScript istnieje dokładnie **6 podstawowych wartości falsy**:
1. `false` (wartość logiczna fałsz)
2. `0` (liczba zero) oraz `-0`
3. `""` (pusty łańcuch znaków)
4. `null` (brak wartości / obiekt pusty)
5. `undefined` (zmienna zadeklarowana, lecz niezainicjalizowana)
6. `NaN` (Not a Number - wynik niepoprawnej operacji matematycznej)

**Wszystkie pozostałe wartości w języku JavaScript są wartościami TRUTHY**. Wartościami prawdziwymi są m.in.: każda liczba różna od zera (w tym liczby ujemne: `-5`, `42`), każdy niepusty ciąg znaków (nawet spacja `" "`, napis `"false"` czy `"0"`), a także obiekty i tablice.

```javascript
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log(Boolean(15));         // true
console.log(Boolean(-1));         // true
console.log(Boolean("Cześć"));    // true
console.log(Boolean("0"));        // true! Tekst z cyfrą zero jest niepusty!
```

**Po co to jest:**
Rozróżnianie wartości truthy i falsy umożliwia błyskawiczne sprawdzanie, czy zmienna posiada zdefiniowaną treść, czy też jest pusta lub niezainicjalizowana.

**Typowa pomyłka:**
Zakładanie, że napis `"false"` lub napis `"0"` zostaną uznane za fałsz. Każdy niepusty ciąg znaków w cudzysłowie jest wartością TRUTHY!

---

## 6. Zasada zwarcia (Short-Circuit Evaluation)

Operatory logiczne `&&` oraz `||` w JavaScript wykonują tzw. ewaluację leniwą (zwarcie logiczne). Oznacza to, że interpreter przetwarza wyrażenie od lewej do prawej i **przerywa sprawdzanie w momencie, gdy wynik całego wyrażenia jest już przesądzony**.

Co ważne, operatory te nie zawsze zwracają wartość `true` lub `false` — zwracają wartość tego operandu, na którym zakończyła się ewaluacja!

### 6.1. Zwarcie w alternatywie `||`
- Jeśli lewa strona jest **truthy**, interpreter nie sprawdza prawej strony i natychmiast zwraca lewą wartość.
- Jeśli lewa strona jest **falsy**, interpreter przechodzi do prawej strony i zwraca jej wartość.

```javascript
// Wzorzec wartości domyślnej
const wpisaneImie = "";
const imieWyswietlane = wpisaneImie || "Gość";
console.log(imieWyswietlane); // "Gość" (ponieważ "" jest falsy)

const podanyRabat = 15;
const ostatecznyRabat = podanyRabat || 5;
console.log(ostatecznyRabat); // 15 (ponieważ 15 jest truthy)
```

### 6.2. Zwarcie w koniunkcji `&&`
- Jeśli lewa strona jest **falsy**, interpreter natychmiast przerywa i zwraca tę fałszywą wartość.
- Jeśli lewa strona jest **truthy**, interpreter przechodzi do prawej strony i zwraca prawą wartość.

```javascript
const czyAktywny = true;
const komunikat = czyAktywny && "Konto jest w pełni aktywne";
console.log(komunikat); // "Konto jest w pełni aktywne"
```

**Po co to jest:**
Zasada zwarcia pozwala na zwięzłe przypisywanie wartości domyślnych w zmiennych konfiguracyjnych oraz zabezpiecza przed wykonywaniem operacji na pustych obiektach.

**Typowa pomyłka:**
Stosowanie `||` do wartości domyślnych, gdy liczba `0` jest poprawną wartością biznesową (np. `0` punktów). Ponieważ `0` jest falsy, `0 || 10` zwróci `10`, nadpisując poprawny wynik zerowy.

---

## 7. Interakcja z użytkownikiem: funkcja `prompt()` z wartością domyślną

W module T07 wprowadzamy funkcję `prompt()`, która pozwala na pobranie tekstu od użytkownika w wyskakującym oknie modalnym przeglądarki.

### Ważne: wstrzymanie wykonywania skryptu
Wywołanie funkcji `prompt()` otwiera synchroniczne okno dialogowe. W momencie otwarcia tego okna **wykonywanie skryptu JavaScript zostaje całkowicie wstrzymane**. Przeglądarka czeka, aż użytkownik wpisze tekst i kliknie przycisk „OK” (funkcja zwróci wpisany łańcuch) lub „Anuluj” (funkcja zwróci `null`). Dopiero po zamknięciu okna kod przechodzi do kolejnej linii.

### Reguła bezpieczeństwa: obowiązkowy drugi argument
W naszych materiałach i na egzaminie funkcję `prompt()` wywołujemy **zawsze z dwoma argumentami**:
1. Tekstem zachęty / pytania dla użytkownika.
2. Domyślną wartością początkową wprowadzoną w pole edycyjne.

Dzięki podaniu drugiego argumentu zabezpieczamy się przed pustym stanem pola wejściowego:

```javascript
// Pobranie wieku z domyślną wartością "18"
const wpisanyTekst = prompt("Podaj swój wiek:", "18");

// Konwersja odebranego tekstu na typ liczbowy
const wiek = Number(wpisanyTekst);

// Sprawdzenie warunku logicznego
const czyPelnoletni = wiek >= 18;
console.log("Czy pełnoletni:", czyPelnoletni);
```

**Po co to jest:**
Funkcja `prompt()` z wartością domyślną umożliwia testowanie zachowania skryptu z różnymi danymi wejściowymi bez konieczności ingerencji w kod źródłowy.

**Typowa pomyłka:**
Zapominanie, że `prompt()` ZAWSZE zwraca dane typu tekstowego (`string`). Porównanie `wpisanyTekst === 18` zwróci `false`, ponieważ `"18" === 18` to porównanie tekstu z liczbą. Zawsze stosuj `Number(wpisanyTekst)`.

---

## 8. Standard prezentacji wyników w Semestrze 1

Zgodnie z regułami pierwszego semestru, prezentacja wyników na stronie odbywa się za pomocą instrukcji `document.write()` umieszczanej wewnątrz kontenera o klasie `wynik`:

```html
<div class="wynik">
    <script>
        const limitWagowy = 25;
        const wagaBagazu = 22;
        const wagaPrawidlowa = wagaBagazu <= limitWagowy;

        document.write("Limit wagowy: " + limitWagowy + " kg<br>");
        document.write("Waga bagażu: " + wagaBagazu + " kg<br>");
        document.write("Czy waga w normie: " + wagaPrawidlowa + "<br>");
    </script>
</div>
```

W semestrze 1 obowiązuje bezwzględny zakaz stosowania metod DOM takich jak `document.getElementById()`, `document.querySelector()` czy `addEventListener()`. Logikę ćwiczymy na czystym JavaScript, a wyniki wypisujemy liniowo za pomocą `document.write()` oraz w konsoli deweloperskiej za pomocą `console.log()`.

Skrypt podpinamy **wewnątrz** `<div class="wynik">` (`<script src="script.js"></script>`), aby wypis trafiał do ramki wyniku. Nagłówek raportu możesz wyróżnić `<strong>`, a wartości uzupełnić jednostkami (`zł`, `%`, `szt.`) — liczy się poprawna logika i zgodność etykiet z instrukcją zadania.
