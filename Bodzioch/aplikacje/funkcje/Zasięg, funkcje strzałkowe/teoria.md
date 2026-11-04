# Teoria: Zasięg zmiennych, wyrażenia funkcyjne i funkcje strzałkowe (ES6)

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

## Wstęp do tematu

W module T01 poznaliśmy klasyczną deklarację funkcji za pomocą słowa kluczowego `function`. Dowiedzieliśmy się, jak funkcja przyjmuje parametry i zwraca wartość za pomocą instrukcji `return`. W tym module wchodzimy na kolejny poziom programowania w języku JavaScript: zbadamy, jak silnik przeglądarki zarządza widocznością zmiennych w pamięci komputera oraz poznamy nowoczesny, zwięzły sposób zapisu logiki — **funkcje strzałkowe (Arrow Functions)**, które stanowią standard współczesnego ekosystemu frontendowego.

---

## 1. Zasięg zmiennych (Scope) w JavaScript

Zasięg zmiennej (ang. *scope*) to obszar kodu programu, w którym dana zmienna jest widoczna, osiągalna i może zostać odczytana lub zmodyfikowana. Jeśli spróbujemy odwołać się do zmiennej poza jej zasięgiem, silnik JavaScript zgłosi błąd wykonania `ReferenceError: nazwaZmiennej is not defined`.

W nowoczesnym standardzie JavaScript wyróżniamy trzy podstawowe poziomy zasięgu:
1. **Zasięg globalny (Global Scope)**
2. **Zasięg funkcyjny (Function Scope)**
3. **Zasięg blokowy (Block Scope)**

### 1.1. Zasięg globalny

Zmienna zadeklarowana poza jakimkolwiek blokiem kodu `{ ... }` lub ciałem funkcji znajduje się w zasięgu globalnym. Oznacza to, że jest ona dostępna z każdego miejsca w danym skrypcie — wewnątrz funkcji, instrukcji warunkowych oraz pętli.

```javascript
// Zmienna globalna — widoczna wszędzie
const NAZWA_APLIKACJI = "System Obsługi Zamówień";
let licznikOperacji = 0;

function zarejestrujOperacje() {
  licznikOperacji++; // Dostęp do zmiennej globalnej i jej modyfikacja
  return `${NAZWA_APLIKACJI} — wykonano operacji: ${licznikOperacji}`;
}

console.log(zarejestrujOperacje()); // System Obsługi Zamówień — wykonano operacji: 1
```

> **Po co to jest:** Zasięg globalny służy do przechowywania stałych konfiguracyjnych całego programu (np. stałe stawek podatkowych, adresy zasobów, nazwa aplikacji), do których dostęp musi mieć wiele różnych funkcji.
> 
> **Typowa pomyłka:** Nadużywanie zmiennych globalnych do przechowywania danych tymczasowych. Jeśli wiele funkcji modyfikuje tę samą zmienną globalną, program staje się nieprzewidywalny i podatny na trudne do wykrycia błędy (tzw. zanieczyszczenie przestrzeni nazw).

---

### 1.2. Zasięg funkcyjny

Zmienne zadeklarowane wewnątrz ciała funkcji są zmiennymi lokalnymi tej funkcji. Powstają w pamięci w momencie wywołania funkcji i przestają istnieć w chwili zakończenia jej działania. Próba odczytania zmiennej lokalnej na zewnątrz funkcji kończy się błędem.

```javascript
function obliczRabat(kwota) {
  const mnoznikRabatu = 0.15; // Zmienna lokalna funkcji
  const wartoscRabatu = kwota * mnoznikRabatu;
  return wartoscRabatu;
}

const rabat = obliczRabat(200);
console.log(rabat); // 30

// Próba odwołania się do zmiennej lokalnej z zewnątrz:
// console.log(mnoznikRabatu); // Błąd: ReferenceError: mnoznikRabatu is not defined
```

> **Po co to jest:** Zasięg funkcyjny gwarantuje hermetyzację (izolację) danych. Zmienne pomocnicze użyte wewnątrz obliczeń nie kolidują ze zmiennymi o takich samych nazwach w innych częściach programu.
> 
> **Typowa pomyłka:** Próba odczytania wyniku cząstkowego funkcji w głównym skrypcie bez wcześniejszego zwrócenia go instrukcją `return`. Jeśli zmienna nie zostanie zwrócona, jej wartość ginie po wyjściu z funkcji.

---

### 1.3. Zasięg blokowy (`let` i `const`)

Zasięg blokowy to jedna z najważniejszych nowości wprowadzonych w standardzie ES6. Blok kodu to dowolny fragment zawarty pomiędzy nawiasami klamrowymi `{` oraz `}`. Typowymi przykładami bloków są ciała instrukcji `if`, gałęzie `else`, pętle `for`, `while` oraz samodzielne bloki logiczne.

Zmienne zadeklarowane za pomocą słów kluczowych `let` oraz `const` istnieją **wyłącznie wewnątrz bloku**, w którym zostały zadeklarowane.

```javascript
const punkty = 85;

if (punkty >= 50) {
  const statusZdania = "Zaliczono"; // Zmienna o zasięgu blokowym
  let premia = 10;                  // Zmienna o zasięgu blokowym
  console.log(`Wynik: ${statusZdania}, premia punktowa: ${premia}`);
}

// Poza blokiem instrukcji if zmienne te nie istnieją:
// console.log(statusZdania); // Błąd: ReferenceError: statusZdania is not defined
```

Podobnie zmienna sterująca pętli `for` zadeklarowana słowem `let` żyje tylko wewnątrz pętli:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(`Krok pętli: ${i}`);
}
// console.log(i); // Błąd: ReferenceError: i is not defined
```

> **Po co to jest:** Zasięg blokowy zapobiega wyciekaniu zmiennych pomocniczych poza blok logiczny. Dzięki niemu zmienna sterująca `let i` w jednej pętli nie nadpisuje zmiennej `let i` w kolejnej pętli.
> 
> **Typowa pomyłka:** Definiowanie zmiennej wynikowej wewnątrz bloku `if` zamiast przed nim. Poniższy zapis jest błędny:
> ```javascript
> // ŹLE:
> if (warunek) {
>   const wynik = "Sukces";
> }
> console.log(wynik); // Błąd ReferenceError!
> 
> // DOBRZE:
> let wynik = "Domyślny";
> if (warunek) {
>   wynik = "Sukces";
> }
> console.log(wynik); // Działa poprawnie
> ```

---

### 1.4. Dlaczego w nowoczesnym kodzie nie stosujemy `var`?

W starszych wersjach JavaScriptu (przed rokiem 2015) jedynym słowem kluczowym do deklarowania zmiennych było `var`. Zmienne deklarowane przez `var`:
1. **Nie posiadają zasięgu blokowego** — zmienna `var` zadeklarowana wewnątrz instrukcji `if` lub pętli `for` „wycieka” do otaczającej funkcji lub zasięgu globalnego.
2. **Podlegają problematycznemu windowaniu (hoisting)** — zmienną `var` można odczytać przed jej deklaracją, zwraca wtedy wartość `undefined`, co prowadzi do cichych, niewykrywalnych awarii logiki.

Dlatego w nowoczesnym standardzie INF.03 stosujemy bezwzględnie wyłącznie słowa `let` (dla zmiennych zmieniających wartość) oraz `const` (dla stałych referencji i wartości niezmiennych).

---

## 2. Zjawisko przesłaniania zmiennych (Variable Shadowing)

Przesłanianie zmiennych (ang. *variable shadowing*) występuje wtedy, gdy zmienna zadeklarowana w węższym (wewnętrznym) zasięgu nosi **dokładnie taką samą nazwę** jak zmienna zadeklarowana w zasięgu szerszym (zewnętrznym).

Gdy silnik JavaScript napotka nazwę zmiennej, poszukuje jej definicji zgodnie z tzw. **łańcuchem zasięgów (Scope Chain)**:
1. Najpierw sprawdza bieżący, najbardziej wewnętrzny blok.
2. Jeśli tam jej nie znajdzie, sprawdza blok nadrzędny lub ciało funkcji.
3. Poszukiwanie trwa aż do zasięgu globalnego.
4. Pierwsza napotkana zmienna o danej nazwie zostaje użyta.

W efekcie zmienna wewnętrzna „rzuca cień” na zmienną zewnętrzną — zmienna zewnętrzna nadal istnieje w pamięci, ale z poziomu bloku wewnętrznego jest całkowicie niewidoczna i niedostępna.

```javascript
const stawkaVat = 0.23; // Zmienna zewnętrzna (zasięg nadrzędny)

function obliczPodatek(cenaNetto) {
  // Przesłonięcie zmiennej zewnętrznej przez parametr lub zmienną lokalną:
  const stawkaVat = 0.08; // Zmienna lokalna przesłania globalną
  const podatek = cenaNetto * stawkaVat;
  return `Podatek wewnątrz funkcji (stawka lokalna ${stawkaVat}): ${podatek} zł`;
}

console.log(obliczPodatek(100)); // Użyto stawki 0.08
console.log(`Stawka globalna poza funkcją: ${stawkaVat}`); // Nadal wynosi 0.23!
```

Kolejny przykład — przesłanianie w bloku instrukcji warunkowej:

```javascript
let limitKwotowy = 1000;

if (limitKwotowy > 500) {
  const limitKwotowy = 200; // Nowa zmienna blokowa przesłania zewnętrzną
  console.log(`W bloku if limit wynosi: ${limitKwotowy}`); // Wypisze: 200
}

console.log(`Poza blokiem if limit wynosi: ${limitKwotowy}`); // Wypisze: 1000
```

> **Po co to jest:** Zrozumienie przesłaniania pozwala zachować pewność, do której zmiennej faktycznie się odwołujemy. Czasami przesłanianie parametrów jest zamierzone, jednak w większości przypadków należy go unikać, aby kod pozostał czytelny.
> 
> **Typowa pomyłka:** Przypadkowe ponowne użycie słowa `let` lub `const` wewnątrz funkcji z nazwą zmiennej, którą chcieliśmy zaktualizować na zewnątrz. Zamiast zmodyfikować zmienną zewnętrzną, tworzymy zupełnie nową zmienną lokalną, a stan zewnętrzny pozostaje niezmieniony!

### 2.1. Jak pokazać w raporcie wartość z wnętrza bloku?

Zmienna zadeklarowana wewnątrz bloku `if` **nie istnieje poza tym blokiem**. Jeśli chcesz wypisać jej wartość w raporcie po zamknięciu klamry, musisz **skopiować** ją do zmiennej zewnętrznej jeszcze przed wyjściem z bloku:

```javascript
const statusZlecenia = "W trakcie weryfikacji"; // wartość zewnętrzna
let statusWewnetrzny = "";                      // pojemnik na wartość z bloku

if (true) {
  const statusZlecenia = "Autoryzacja magazynowa zakończona"; // shadowing
  statusWewnetrzny = statusZlecenia; // kopiujemy, zanim blok się skończy
}

// Poza blokiem:
console.log(statusWewnetrzny); // "Autoryzacja magazynowa zakończona"
console.log(statusZlecenia);   // "W trakcie weryfikacji"
```

---

## 3. Wyrażenia funkcyjne (Function Expressions)

W języku JavaScript funkcje są obiektami pierwszej kategorii (ang. *first-class citizens*). Oznacza to, że funkcję można traktować jak zwykłą wartość: zapisać do zmiennej, przekazać jako parametr lub zwrócić z innej funkcji.

**Wyrażenie funkcyjne** polega na przypisaniu anonimowej funkcji do stałej lub zmiennej:

```javascript
// Klasyczna deklaracja funkcji (moduł T01):
function dodajDeklaracja(a, b) {
  return a + b;
}

// Wyrażenie funkcyjne (Function Expression):
const dodajWyrazenie = function(a, b) {
  return a + b;
};

// Wywołanie w obu przypadkach wygląda identycznie:
console.log(dodajDeklaracja(2, 3)); // 5
console.log(dodajWyrazenie(2, 3)); // 5
```

### Różnica w mechanizmie windowania (Hoisting)
- **Deklaracja funkcji (`function`):** Jest w całości windowana na początek skryptu. Można ją wywołać w linijce **przed** jej fizycznym zadeklarowaniem w pliku.
- **Wyrażenie funkcyjne (`const nazwa = function`):** Przypisana jest do stałej `const`. Zgodnie z zasadami `const`, próba wywołania funkcji przed linijką jej przypisania kończy się błędem `ReferenceError: Cannot access before initialization`.

```javascript
// Deklaracja — DZIAŁA dzięki hoistingowi:
witajUczniu("Anna"); // "Witaj, Anna"
function witajUczniu(imie) {
  console.log(`Witaj, ${imie}`);
}

// Wyrażenie funkcyjne — BŁĄD przed zadeklarowaniem:
// pozegnajUcznia("Anna"); // Błąd: Cannot access 'pozegnajUcznia' before initialization
const pozegnajUcznia = function(imie) {
  console.log(`Żegnaj, ${imie}`);
};
```

> **Po co to jest:** Wyrażenia funkcyjne wymuszają logiczny porządek w kodzie — funkcja musi zostać zdefiniowana, zanim zostanie uruchomiona. Zapobiega to chaosowi w dużych plikach źródłowych.
> 
> **Typowa pomyłka:** Zapominanie średnika po klamrze zamykającej wyrażenie funkcyjne (`const f = function() { ... };`). Choć silnik JavaScript często wybacza brak średnika, jego obecność jest wymogiem czystego kodu.

---

## 4. Funkcje strzałkowe (Arrow Functions — ES6)

W standardzie ECMAScript 2015 (ES6) wprowadzono nowoczesną, kompaktową składnię tworzenia funkcji — tzw. **funkcje strzałkowe (Arrow Functions)**, charakteryzujące się operatorem strzałki `=>`.

Funkcja strzałkowa jest zawsze wyrażeniem funkcyjnym — przypisujemy ją do stałej lub przekazujemy jako argument.

### 4.1. Ewolucja składni: od deklaracji do strzałki

Przyjrzyjmy się trzem równoważnym zapisom tej samej logiki obliczeniowej:

```javascript
// 1. Tradycyjna deklaracja:
function podwoj1(liczba) {
  return liczba * 2;
}

// 2. Tradycyjne wyrażenie funkcyjne:
const podwoj2 = function(liczba) {
  return liczba * 2;
};

// 3. Funkcja strzałkowa (pełny zapis z blokiem i return):
const podwoj3 = (liczba) => {
  return liczba * 2;
};

// 4. Funkcja strzałkowa (zwięzły zapis skrócony):
const podwoj4 = liczba => liczba * 2;
```

---

### 4.2. Zasady składniowe funkcji strzałkowych

Funkcje strzałkowe cechuje wysoka elastyczność zapisu, zależna od liczby parametrów i złożoności ciała funkcji.

#### A. Liczba parametrów a nawiasy okrągłe `()`:
1. **Dokładnie jeden parametr:** Nawiasy okrągłe wokół parametru są opcjonalne — można je pominąć:
   ```javascript
   const kwadrat = x => x * x;
   ```
2. **Dwa lub więcej parametrów:** Nawiasy okrągłe są **bezwzględnie obowiązkowe**:
   ```javascript
   const suma = (a, b) => a + b;
   const poleTrojkata = (podstawa, wysokosc) => (podstawa * wysokosc) / 2;
   ```
3. **Brak parametrów (funkcja bezparametrowa):** Puste nawiasy okrągłe `()` są **bezwzględnie obowiązkowe**:
   ```javascript
   const pobierzKomunikatPowitalny = () => "Witamy w panelu klienta!";
   ```

#### B. Ciało jednolinijkowe a niejawny powrót wartości (Implicit Return):
Jeżeli ciało funkcji składa się wyłącznie z pojedynczego wyrażenia obliczeniowego:
- Pomijamy nawiasy klamrowe `{ ... }`.
- Pomijamy słowo kluczowe `return`.
- Wynik wyrażenia zostaje **automatycznie zwrócony** do miejsca wywołania:
  ```javascript
  const przeliczNaBrutto = netto => netto * 1.23;
  console.log(przeliczNaBrutto(100)); // 123
  ```

#### C. Ciało wielolinijkowe (blokowe):
Jeżeli logika funkcji wymaga wielu instrukcji (np. zadeklarowania zmiennych pomocniczych, pętli lub warunku `if`), musimy użyć **nawiasów klamrowych `{ ... }`**.
W takim przypadku słowo kluczowe `return` staje się **obowiązkowe**, aby funkcja przekazała wynik na zewnątrz:

```javascript
const sklasyfikujPrzesylke = (wagaKg) => {
  let kategoria = "standardowa";
  if (wagaKg > 30) {
    kategoria = "gabarytowa";
  } else if (wagaKg > 10) {
    kategoria = "ciezka";
  }
  return `Paczka o wadze ${wagaKg} kg: kategoria ${kategoria}`;
};
```

> **Po co to jest:** Zwięzły zapis strzałkowy znacząco redukuje ilość szablonowego kodu (boilerplate) i poprawia czytelność operacji matematycznych oraz transformacji danych.
> 
> **Typowa pomyłka:** Użycie klamer `{ ... }` bez słowa `return`. Jeżeli postawimy nawiasy klamrowe, funkcja **nie zwróci wartości niejawnie** — zwróci `undefined`!
> ```javascript
> // BŁĄD — zwraca undefined:
> const dodaj = (a, b) => { a + b };
> console.log(dodaj(2, 3)); // undefined!
> 
> // POPRAWNIE (wariant skrócony):
> const dodajOk1 = (a, b) => a + b;
> 
> // POPRAWNIE (wariant blokowy z jawnym return):
> const dodajOk2 = (a, b) => { return a + b; };
> ```

---

## 5. Domyślne wartości parametrów (Default Parameters)

Standard ES6 pozwala przypisać parametrowi wartość domyślną na wypadek, gdyby podczas wywołania argument nie został podany lub miał wartość `undefined`.

```javascript
const obliczCeneKoncowa = (cenaNetto, stawkaPodatku = 0.23, rabatKwotowy = 0) => {
  const cenaPoRabacie = Math.max(0, cenaNetto - rabatKwotowy);
  return cenaPoRabacie * (1 + stawkaPodatku);
};

// Wywołanie z podaniem wszystkich argumentów:
console.log(obliczCeneKoncowa(100, 0.08, 10)); // (100 - 10) * 1.08 = 97.2

// Wywołanie z pominięciem parametrów domyślnych:
console.log(obliczCeneKoncowa(100)); // (100 - 0) * 1.23 = 123
```

> **Po co to jest:** Wartości domyślne chronią funkcję przed operacjami na wartości `undefined` (które w obliczeniach matematycznych dałyby błąd `NaN`) oraz eliminują konieczność pisania uciążliwych warunków `if (parametr === undefined)`.
> 
> **Typowa pomyłka:** Umieszczanie parametrów z wartościami domyślnymi przed parametrami obowiązkowymi. Zawsze umieszczaj parametry opcjonalne / domyślne na **końcu** listy parametrów funkcji!

---

## 6. Operator warunkowy trójargumentowy (`? :`)

Operator trójargumentowy (ang. *ternary*) pozwala zapisać prosty wybór `if / else` w **jednym wyrażeniu**. Składnia:

```javascript
warunek ? wartoscGdyPrawda : wartoscGdyFalsz
```

Przykłady w połączeniu z funkcją strzałkową i niejawnym `return`:

```javascript
// Rabat 15% dla klienta biznesowego, 5% dla indywidualnego:
const obliczStopeRabatu = isBiznes => (isBiznes ? 0.15 : 0.05);

// Koszt usługi zależny od progu:
const obliczKoszt = rozmiar => (rozmiar >= 18 ? 160 : 120);

console.log(obliczStopeRabatu(true)); // 0.15
console.log(obliczKoszt(18));         // 160
```

Gdy warunek jest dłuższy lub ma więcej niż dwie gałęzie, nadal używaj zwykłego `if / else if` w ciele blokowym `{ ... }`.

> **Po co to jest:** Zwięzły zapis wyboru dwóch wartości — szczególnie w jednolinijkowych funkcjach strzałkowych.
>
> **Typowa pomyłka:** Zapominanie nawiasów wokół całego wyrażenia ternarnego w funkcji strzałkowej. Bezpieczny wzorzec: `param => (warunek ? a : b)`.

---

## 7. Standard prezentacji wyników w Semestrze 2

Przypominamy regułę obowiązującą w całym semestrze 2:
- Wypis na stronę realizujemy za pomocą odszukania kontenera o identyfikatorze `wynik` i przypisania wartości do właściwości `textContent`:
  ```javascript
  document.getElementById("wynik").textContent = raportTekstowy;
  ```
- W arkuszu stylów CSS kontener `#wynik` posiada regułę:
  ```css
  #wynik {
    white-space: pre-wrap;
  }
  ```
- Dzięki regule `white-space: pre-wrap;` wszelkie znaki nowej linii `\n` oraz spacje formatujące w szablonach tekstowych (Template Literals) są idealnie zachowywane na stronie bez konieczności używania znaczników `<br>`.

---

## 8. Podsumowanie różnic: Deklaracja vs Funkcja strzałkowa

| Cecha | Tradycyjna deklaracja `function` | Funkcja strzałkowa `() =>` |
|-------|----------------------------------|---------------------------|
| **Słowo kluczowe** | `function nazwa(...)` | brak słowa `function`, operator `=>` |
| **Windowanie (Hoisting)** | Pełne (można wywołać przed deklaracją) | Brak (zmienna `const` blokuje wczesny dostęp) |
| **Nawiasy przy 1 argumencie** | Zawsze obowiązkowe: `(x)` | Opcjonalne: `x => ...` |
| **Puste nawiasy (0 arg.)** | Obowiązkowe: `()` | Obowiązkowe: `() => ...` |
| **Niejawny `return`** | Niedostępny (zawsze wymagany `return`) | Dostępny w ciele jednolinijkowym bez `{}` |
| **Zastosowanie w INF.03** | Główne funkcje modułowe i algorytmiczne | Zwięzłe kalkulatory, transformatory danych, callbacki |
