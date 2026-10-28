# Teoria: Zmienne, stałe i typy danych w JavaScript

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

## 1. Czym jest zmienna i jak komputer przechowuje dane

Program komputerowy można porównać do sprawnego biura rachunkowego. Aby wykonać jakiekolwiek obliczenia, przygotować raport czy wyświetlić informację użytkownikowi, program musi mieć możliwość tymczasowego zapisania danych w pamięci operacyjnej (RAM). W językach programowania takim „podpisanym pudełkiem” na dane jest **zmienna** lub **stała**.

Gdy deklarujemy zmienną, rezerwujemy w pamięci komputera określony obszar i nadajemy mu czytelną nazwę (identyfikator). Dzięki temu w dalszych linijkach kodu nie musimy odwoływać się do skomplikowanych adresów pamięci, lecz posługujemy się naturalną dla człowieka nazwą, na przykład `cenaNetto` czy `imieKlienta`.

### Deklaracja z użyciem `let`

Słowo kluczowe `let` służy do tworzenia zmiennych, których wartość może ulec zmianie w trakcie działania programu. Zmienną można zadeklarować bez natychmiastowego przypisania wartości (otrzyma wtedy automatycznie wartość początkową `undefined`) lub od razu połączyć deklarację z inicjalizacją.

```javascript
let punktyGracza = 0;
console.log(punktyGracza); // Wypisze: 0

punktyGracza = 15; // Zmiana wartości
console.log(punktyGracza); // Wypisze: 15
```

**Po co to jest:** Słowo kluczowe `let` stosujemy wszędzie tam, gdzie stan aplikacji ulega modyfikacjom w czasie, na przykład przy zliczaniu kliknięć, sumowaniu cen w koszyku czy aktualizowaniu pozycji obiektu.

**Typowa pomyłka:** Próba powtórnej deklaracji tej samej zmiennej w tym samym bloku kodu za pomocą słowa `let` (np. ponowne napisanie `let punktyGracza = 20;`). Spowoduje to natychmiastowy błąd składniowy `SyntaxError: Identifier 'punktyGracza' has already been declared`. W celu zmiany wartości podajemy samą nazwę zmiennej, bez słowa `let`.

---

### Deklaracja z użyciem `const`

Słowo kluczowe `const` służy do definiowania stałych. Wartość przypisana do stałej w momencie jej deklaracji staje się niezmienna w obrębie powiązania identyfikatora. Stałą **musimy** zainicjalizować w tej samej linijce, w której ją deklarujemy.

```javascript
const STAWKA_VAT = 0.23;
const nazwaAplikacji = "Sklep Zoologiczny";

console.log(STAWKA_VAT); // Wypisze: 0.23
```

Próba późniejszego nadpisania stałej wywoła błąd krytyczny i natychmiastowe zatrzymanie wykonywania skryptu:

```javascript
const maksymalnaWaga = 100;
maksymalnaWaga = 120; // Błąd: TypeError: Assignment to constant variable.
```

**Po co to jest:** Zabezpiecza programistę przed przypadkowym nadpisaniem wartości krytycznych, takich jak stałe fizyczne, stawki podatkowe, adresy serwerów czy elementy konfiguracyjne. Zgodnie z zasadą czystego kodu (Clean Code), jeśli dana wartość nie musi ulegać zmianie, domyślnie zawsze deklarujemy ją jako `const`.

**Typowa pomyłka:** Próba zadeklarowania stałej bez natychmiastowego podania wartości (np. `const kursEuro;`), co kończy się błędem `SyntaxError: Missing initializer in const declaration`.

---

### Dlaczego NIE używamy słowa kluczowego `var`?

W starszych wersjach języka JavaScript (przed standardem ECMAScript 2015, czyli ES6) wszystkie zmienne deklarowano słowem `var`. Dziś `var` uznawane jest w nowoczesnym programowaniu i na egzaminie zawodowym INF.03 za rozwiązanie przestarzałe oraz wysoce ryzykowne z trzech zasadniczych powodów:

1. **Brak zasięgu blokowego**: Zmienna `var` ma zasięg funkcyjny lub globalny. Ignoruje bloki ograniczone klamrami `{ ... }`, takie jak instrukcje warunkowe czy pętle, co prowadzi do przypadkowego nadpisywania zmiennych w innych częściach programu.
2. **Problem podnoszenia (hoisting)**: Deklaracje `var` są przenoszone na sam początek zasięgu z wartością `undefined`. Użycie zmiennej przed jej zadeklarowaniem nie wyrzuca błędu, lecz zwraca `undefined`, co maskuje błędy logiczne. Zmienne `let` i `const` również podlegają hoistingowi, lecz znajdują się w tzw. martwej strefie czasowej (Temporal Dead Zone) i ich przedwczesne użycie natychmiast generuje czytelny błąd `ReferenceError`.
3. **Możliwość ponownej deklaracji**: Silnik JavaScript pozwala bez ostrzeżenia zadeklarować `var x = 1;` a kilka linijek niżej `var x = 2;`, co w dużych projektach prowadzi do katastrofalnych pomyłek.

**Po co to jest:** Eliminacja `var` na rzecz `let` i `const` wymusza na programiście dyscyplinę architektoniczną oraz zapobiega trudnym do wykrycia błędom logicznym w pamięci programu.

**Typowa pomyłka:** Przyzwyczajenie do pisania `var` z przestarzałych podręczników lub losowych tutoriali internetowych. W kodzie pisanym w ramach kwalifikacji INF.03 słowo kluczowe `var` jest bezwzględnie zakazane.

---

## 2. Reguły nazewnictwa identyfikatorów

Identyfikator to nazwa nadana zmiennej, stałej lub funkcji. W JavaScript obowiązują ścisłe reguły składniowe:

- Nazwa może składać się z liter (a-z, A-Z), cyfr (0-9), znaku podkreślenia (`_`) oraz znaku dolara (`$`).
- Nazwa **nie może zaczynać się od cyfry** (np. `let 1miejsce = "Jan";` to błąd składni).
- Wielkość liter ma znaczenie (**case-sensitive**): `cena`, `Cena` oraz `CENA` to trzy całkowicie odrębne zmienne.
- Nazwa nie może być słowem zastrzeżonym języka JavaScript (np. `let`, `const`, `class`, `return`, `function`, `typeof`).

### Konwencje czytelności

W środowisku JavaScript powszechnie stosuje się konwencję **camelCase** (wielbłądzia notacja): pierwsza litera jest mała, a każde kolejne słowo rozpoczyna się wielką literą bez spacji i łączników (np. `sredniaOcenSemestru`, `czasTrwaniaMinuty`). W przypadku stałych o globalnym charakterze konfiguracyjnym często stosuje się zapis wielkimi literami z podkreśleniem, tzw. **SCREAMING_SNAKE_CASE** (np. `DOMYSLNY_TIMEOUT_MS`, `MAKS_LICZBA_PROB`).

**Po co to jest:** Stosowanie jednolitych konwencji pozwala zespołowi programistycznemu natychmiast zrozumieć przeznaczenie danego identyfikatora bez konieczności analizowania całego pliku.

**Typowa pomyłka:** Używanie spacji lub myślnika w nazwach zmiennych (np. `let koszt-calkowity = 50;`). Myślnik jest przez silnik JavaScript traktowany jako operator odejmowania, co spowoduje błąd składniowy.

---

## 3. Typy danych w języku JavaScript

JavaScript jest językiem o **dynamicznym typowaniu**. Oznacza to, że nie musimy jawnie deklarować typu zmiennej podczas jej tworzenia (tak jak w C++ czy Javie) – typ danych jest powiązany z wartością przechowywaną w danej chwili w zmiennej, a nie z samą nazwą zmiennej.

Wszystkie typy w JavaScript dzielimy na dwie kategorie:
1. **Typy prymitywne (proste)** – reprezentują pojedyncze, niepodzielne wartości.
2. **Typy referencyjne (obiekty)** – struktury złożone, tablice i funkcje (omawiane w kolejnych semestrach).

### Siedem typów prymitywnych

1. **`string` (ciąg znaków / tekst)**: Służy do przechowywania tekstu. Może być ograniczony pojedynczym cudzysłowem (`'...'`), podwójnym cudzysłowem (`"..."`) lub grawisem/backtickiem (` `...` `).
   ```javascript
   let miasto = "Warszawa";
   let ulica = 'Marszałkowska';
   ```
2. **`number` (liczba)**: Przechowuje zarówno liczby całkowite, jak i liczby zmiennoprzecinkowe (z kropką dziesiętną, nie przecinkiem!). Obejmuje również wartości specjalne:
   - `Infinity` oraz `-Infinity` – wartości nieskończone, np. wynik dzielenia dodatniej liczby przez zero.
   - `NaN` (Not a Number) – oznacza nieudane działanie matematyczne, np. próbę pomnożenia tekstu przez liczbę (`"kot" * 5`).
   ```javascript
   let wiek = 18;
   let cena = 99.99;
   let stanKonta = -45.50;
   ```
3. **`boolean` (typ logiczny)**: Przyjmuje wyłącznie jedną z dwóch wartości: `true` (prawda) lub `false` (fałsz). Jest fundamentem podejmowania decyzji w algorytmach.
   ```javascript
   let czyZalogowany = true;
   let akceptacjaRegulaminu = false;
   ```
4. **`undefined` (niezdefiniowany)**: Wartość automatycznie przypisywana zmiennej zadeklarowanej za pomocą `let`, której nie nadano jeszcze żadnej wartości. Oznacza „pudełko istnieje, ale jest puste”.
   ```javascript
   let komentarz;
   console.log(komentarz); // Wypisze: undefined
   ```
5. **`null` (wartość pusta)**: Celowe, świadome wskazanie przez programistę braku wartości lub braku obiektu. Różni się od `undefined` tym, że `null` jest przypisywany celowo jako symbol pustki.
   ```javascript
   let wybranyRabat = null; // Świadomie oznaczamy brak przypisanego rabatu
   ```
6. **`bigint` (duża liczba całkowita)**: Służy do precyzyjnych obliczeń na liczbach całkowitych przekraczających bezpieczny zakres typu `number` ($2^{53} - 1$). Tworzony przez dodanie litery `n` na końcu liczby.
   ```javascript
   let ogromnyIdentyfikator = 9007199254740995n;
   ```
7. **`symbol`**: Unikalny i niezmienny identyfikator, używany głównie jako klucz w zaawansowanych strukturach obiektowych.
   ```javascript
   let unikalnyKlucz = Symbol("id");
   ```

**Po co to jest:** Typy danych pozwalają komputerowi dobrać odpowiednią ilość pamięci i wiedzieć, jakie operacje są dozwolone na danej wartości (np. mnożenie liczb vs łączenie napisów).

**Typowa pomyłka:** Użycie przecinka zamiast kropki w liczbie zmiennoprzecinkowej (np. `let waga = 72,5;`). W JavaScript przecinek oddziela wyrażenia, co doprowadzi do błędu lub nieoczekiwanego zachowania programu. Poprawny zapis to `let waga = 72.5;`.

---

## 4. Badanie typu za pomocą operatora `typeof`

Operator `typeof` służy do sprawdzania, jakiego typu wartość znajduje się w danej zmiennej lub wyrażeniu. Zwraca on zawsze wynik w postaci łańcucha tekstowego (`string`).

```javascript
console.log(typeof "Cześć");     // Wypisze: "string"
console.log(typeof 42);          // Wypisze: "number"
console.log(typeof 3.14);        // Wypisze: "number"
console.log(typeof NaN);         // Wypisze: "number"
console.log(typeof true);        // Wypisze: "boolean"
console.log(typeof undefined);   // Wypisze: "undefined"
console.log(typeof 100n);        // Wypisze: "bigint"
console.log(typeof Symbol());    // Wypisze: "symbol"
```

### Osobliwość: `typeof null`

Gdy zbadamy operator `typeof` na wartości `null`, silnik JavaScript zwróci wartość `"object"`:

```javascript
console.log(typeof null); // Wypisze: "object"
```

Jest to słynny historyczny błąd z pierwszej implementacji języka JavaScript z 1995 roku. W pamięci wczesnego silnika typ wartości kodowany był w pierwszych bitach (tzw. tag typu), gdzie kod `000` oznaczał obiekt. Ponieważ wskaźnik do `null` był pustym adresem (`0x00`), silnik uznał go błędnie za obiekt. Ze względu na kompatybilność wsteczną milionów stron internetowych błąd ten nie został nigdy zmieniony. Warto o nim pamiętać na egzaminie zawodowym.

**Po co to jest:** Operator `typeof` pozwala zweryfikować, czy dane przekazane do skryptu są odpowiedniego formatu przed przystąpieniem do operacji matematycznych lub przetwarzania tekstu.

**Typowa pomyłka:** Próba porównania `typeof x === number` bez cudzysłowu wokół nazwy typu. Wynik operatora `typeof` to zawsze string, dlatego poprawny warunek musi mieć postać `typeof x === "number"`.

---

## 5. Operatory arytmetyczne i łączenie stringów

JavaScript udostępnia kompletny zestaw podstawowych operatorów arytmetycznych:

| Operator | Nazwa operacji | Przykład | Wynik |
|:--------:|:---------------|:---------|:------|
| `+` | Dodawanie | `10 + 5` | `15` |
| `-` | Odejmowanie | `10 - 5` | `5` |
| `*` | Mnożenie | `10 * 5` | `50` |
| `/` | Dzielenie | `10 / 4` | `2.5` |
| `%` | Reszta z dzielenia (modulo) | `10 % 3` | `1` |
| `**` | Potęgowanie | `2 ** 3` | `8` |

### Skrócone operatory przypisania

Częstym schematem jest modyfikacja istniejącej zmiennej o określoną wartość:

```javascript
let licznik = 10;
licznik += 5; // To samo co: licznik = licznik + 5; (wynik: 15)
licznik -= 3; // To samo co: licznik = licznik - 3; (wynik: 12)
licznik *= 2; // To samo co: licznik = licznik * 2; (wynik: 24)
licznik /= 4; // To samo co: licznik = licznik / 4; (wynik: 6)
```

### Zaokrąglanie kwot pieniężnych (błąd zmiennoprzecinkowy)

Typ `number` w JavaScript przechowuje liczby w formacie zmiennoprzecinkowym. Dlatego niektóre mnożenia i dodawania dają wynik z „śmieciowymi” cyframi po przecinku, na przykład:

```javascript
console.log(50 + 6 * 129.90); // Może wypisać: 829.4000000000001
```

Przy kwotach w PLN zaokrąglamy wynik do dwóch miejsc po przecinku wzorem:

```javascript
let koszt = 50 + 6 * 129.90;
koszt = Math.round(koszt * 100) / 100;
console.log(koszt); // Wypisze: 829.4
```

`Math.round(wartosc)` zaokrągla do najbliższej liczby całkowitej. Mnożenie przez `100` i dzielenie przez `100` przenosi zaokrąglenie na dwa miejsca po przecinku.

**Po co to jest:** Bez zaokrąglenia na stronie może pojawić się nieczytelna kwota w stylu `829.4000000000001 PLN` zamiast oczekiwanej `829.4 PLN`.

**Typowa pomyłka:** Pominięcie zaokrąglenia po obliczeniach na cenach dziesiętnych i porównanie wyniku „na oko” z tekstem z instrukcji.

### Łączenie ciągów znaków (konkatenacja vs literały szablonowe)

W języku JavaScript operator `+` pełni podwójną rolę:
1. Gdy oba argumenty są liczbami – wykonuje dodawanie matematyczne.
2. Gdy **choć jeden** z argumentów jest stringiem – wykonuje **konkatenację** (sklejenie tekstów).

```javascript
let imie = "Anna";
let wiek = 20;

// Tradycyjna konkatenacja operatorem +
let komunikat1 = "Użytkownik " + imie + " ma " + wiek + " lat.";
console.log(komunikat1);

// Nowoczesny literał szablonowy (template literal) z grawisami ` ` i interpolacją ${ }
let komunikat2 = `Użytkownik ${imie} ma ${wiek} lat. Za rok będzie mieć ${wiek + 1} lat.`;
console.log(komunikat2);
```

Literały szablonowe są znacznie bardziej czytelne, eliminują ryzyko pominięcia spacji między słowami oraz pozwalają na wykonywanie wyrażeń bezpośrednio wewnątrz bloku `${...}`.

**Po co to jest:** Składanie komunikatów z danych dynamicznych jest podstawową czynnością w aplikacjach webowych – od wyświetlania powitań po generowanie podsumowań zakupów.

**Typowa pomyłka:** Użycie zwykłego apostrofu `'` zamiast grawisu (znaku backtick znajdującego się pod klawiszem Escape na klawiaturze) przy próbie użycia szablonu `${...}`. W zwykłym apostrofie tekst `${imie}` zostanie wyświetlony dosłownie jako znaki dolar i klamry.

---

## 6. Konwersje i rzutowanie typów

W pracy z aplikacjami internetowymi wartości często pochodzą w formacie tekstowym, nawet gdy logicznie reprezentują liczby. Przetworzenie takich danych wymaga zmiany ich typu.

### Niejawna konwersja (koercja typów)

JavaScript próbuje domyślić się intencji programisty, co bywa źródłem trudnych do wychwycenia pomyłek:

```javascript
console.log("5" + 2); // Wypisze: "52" (dodawanie ze stringiem zawsze zamienia na string!)
console.log("10" - 3); // Wypisze: 7 (operator odejmowania nie istnieje dla tekstu, więc zamienia na liczbę)
console.log("6" * "2"); // Wypisze: 12 (mnożenie wymusza konwersję na liczby)
console.log("kot" * 2); // Wypisze: NaN (silnik nie potrafi zamienić słowa "kot" na liczbę)
```

### Jawne rzutowanie typów

Aby kod był jednoznaczny i odporny na błędy, stosujemy jawne funkcje konwertujące:

1. **Konwersja na liczbę (`Number()`, `parseInt()`, `parseFloat()`):**
   - `Number(wartosc)` – rygorystyczna konwersja całej wartości. Jeśli jakikolwiek znak w ciągu nie jest cyfrą (z wyjątkiem białych znaków i kropki dziesiętnej), zwraca `NaN`.
   - `parseInt(tekst, system)` – odczytuje liczbę całkowitą od początku ciągu znaków do momentu napotkania pierwszego nie-znaku cyfry. Zawsze należy podawać drugi parametr oznaczający bazę systemu liczbowego (dla systemu dziesiętnego jest to `10`).
   - `parseFloat(tekst)` – odczytuje liczbę zmiennoprzecinkową od początku ciągu aż do pierwszego niepoprawnego znaku.

```javascript
console.log(Number("125"));      // Wypisze: 125
console.log(Number("125px"));    // Wypisze: NaN (bo "px" to nie cyfry!)
console.log(parseInt("125px", 10)); // Wypisze: 125 (odciął "px")
console.log(parseFloat("19.99 PLN")); // Wypisze: 19.99
```

2. **Konwersja na ciąg tekstowy (`String()`):**
   ```javascript
   let liczba = 500;
   let napis = String(liczba);
   console.log(typeof napis); // Wypisze: "string"
   ```

3. **Konwersja na wartość logiczną (`Boolean()`):**
   W JavaScript wartości dzielą się na wartości fałszywe (**falsy**) oraz prawdziwe (**truthy**).
   Wartości, które `Boolean()` zamienia na `false`:
   - `false`
   - `0` oraz `-0`
   - `""` (pusty ciąg znaków)
   - `null`
   - `undefined`
   - `NaN`
   
   Wszystkie pozostałe wartości (w tym dowolny niepusty ciąg znaków, np. `"0"` lub `"false"`, oraz każda liczba różna od zera) są zamieniane na `true`.

```javascript
console.log(Boolean(0));       // Wypisze: false
console.log(Boolean(""));      // Wypisze: false
console.log(Boolean(null));    // Wypisze: false
console.log(Boolean(100));     // Wypisze: true
console.log(Boolean("tekst")); // Wypisze: true
```

**Po co to jest:** Jawna konwersja daje programiście pełną kontrolę nad typem danych i zabezpiecza przed nieoczekiwanym zachowaniem operatora dodawania.

**Typowa pomyłka:** Próba dodania dwóch liczb odczytanych z pól wejściowych bez uprzedniej konwersji za pomocą `Number()` lub `parseInt()`. W efekcie operacja `50 + 20` daje wynik `"5020"` zamiast `70`.

---

## 7. Wypis na stronę w Semestrze 1

W semestrze 1 Fundamentów JavaScript koncentrujemy się na czystej logice programistycznej, strukturach danych i składni języka. Aby nie komplikować początkowego etapu nauki zawiłościami manipulacji węzłami drzewa DOM (`document.getElementById()`, `document.querySelector()`), stosujemy dwa proste kanały wyjścia:

1. **Konsola deweloperska (`console.log`)** – podstawowe narzędzie diagnostyczne programisty, służące do podglądu wartości zmiennych i wyników działania algorytmów.
2. **Podstawowy wypis na stronę (`document.write`)** – generowanie prostego kodu HTML bezpośrednio w strumieniu ładowania dokumentu. Wyniki umieszczamy w kontenerze `<div class="wynik">`, a kolejne linie tekstu rozdzielamy znacznikiem nowej linii `<br>`.

Przykład poprawnego wypisu w semestrze 1:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Podsumowanie zamówienia</title>
</head>
<body>
  <h1>Sklep komputerowy</h1>
  <div class="wynik">
    <script>
      const nazwaTowaru = "Mysz bezprzewodowa";
      const cenaNetto = 80;
      const stawkaVat = 0.23;
      const kwotaVat = cenaNetto * stawkaVat;
      const cenaBrutto = cenaNetto + kwotaVat;

      console.log(`Towar: ${nazwaTowaru}, Brutto: ${cenaBrutto}`);

      document.write(`Produkt: ${nazwaTowaru}<br>`);
      document.write(`Cena netto: ${cenaNetto} PLN<br>`);
      document.write(`Cena brutto: ${cenaBrutto} PLN<br>`);
      document.write(`Typ zmiennej cenaBrutto: ${typeof cenaBrutto}<br>`);
    </script>
  </div>
</body>
</html>
```

**Po co to jest:** Ograniczenie narzędzi wyjścia do `console.log()` oraz `document.write()` pozwala uczniowi skupić się w 100% na mechanizmach zmiennych, operatorów i typów danych, bez frustracji wynikającej z błędów w selektorach DOM czy asynchroniczności zdarzeń. Zaawansowane manipulacje elementami DOM zostaną wprowadzone w dedykowanych modułach semestru 3.

**Typowa pomyłka:** Próba użycia `document.getElementById("wynik").innerHTML` w zadaniach semestru 1. W tym semestrze obowiązuje bezwzględny zakaz pobierania elementów przez selektory DOM.
