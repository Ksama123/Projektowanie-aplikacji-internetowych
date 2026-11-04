# Teoria: Funkcje — deklaracja, parametry, return

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Dlaczego programiści tworzą funkcje?

W pierwszym semestrze nauki programowania wszystkie instrukcje w skryptach JavaScript wykonywały się sekwencyjnie — od góry do dołu pliku. Gdy trzeba było obliczyć cenę brutto dla trzech różnych produktów, ten sam wzór matematyczny musiał zostać powielony w kodzie trzykrotnie. Taki sposób pisania programów staje się bardzo szybko nieczytelny, podatny na pomyłki i trudny w modyfikacji. Gdyby zmieniła się stawka podatku, programista musiałby odszukać i poprawić każde powielone miejsce.

Funkcja w programowaniu to nazwany, wyodrębniony blok kodu, który definiujemy raz, a następnie możemy uruchamiać wielokrotnie z różnymi danymi wejściowymi. Funkcję można porównać do wyspecjalizowanej maszyny lub kalkulatora: podajemy jej surowce (dane wejściowe, zwane argumentami), maszyna wykonuje ściśle zaprogramowaną procedurę, a na końcu oddaje gotowy wyrób (wartość zwracaną).

Główne korzyści ze stosowania funkcji to:
- **Reużywalność kodu (zasada DRY — Don't Repeat Yourself):** Kod realizujący dane zadanie piszemy tylko raz i wywołujemy w wielu miejscach.
- **Czytelność i modularność:** Duży problem programistyczny dzielimy na małe, proste podprogramy o zrozumiałych nazwach.
- **Łatwość testowania i usuwania błędów:** Jeśli w obliczeniach pojawi się błąd, poprawiamy go tylko wewnątrz jednej konkretnej funkcji.

---

## 2. Deklaracja i wywołanie funkcji nazwanej

Podstawowym sposobem utworzenia funkcji w JavaScript jest jej deklaracja za pomocą słowa kluczowego `function`. 

```javascript
function wyswietlPowitanie() {
  console.log("Witamy w portalu obsługi klienta!");
}
```

Sama deklaracja funkcji nie powoduje jeszcze wykonania zawartego w niej kodu. Deklaracja jest jedynie zarejestrowaniem przepisu w pamięci przeglądarki. Aby kod wewnątrz funkcji rzeczywiście się wykonał, należy funkcję **wywołać** (ang. *call* lub *invoke*), dopisując po jej nazwie nawiasy okrągłe:

```javascript
wyswietlPowitanie(); // W konsoli pojawi się powitanie
wyswietlPowitanie(); // Ponowne wywołanie — powitanie pojawi się po raz drugi
```

> **Po co to jest:**  
> Deklaracja funkcji pozwala odłożyć wykonanie określonej grupy instrukcji na dowolny późniejszy moment oraz uruchamiać ten sam zestaw operacji tyle razy, ile wymaga tego działanie programu.

> **Typowa pomyłka:**  
> Napisanie samej nazwy funkcji bez nawiasów okrągłych, np. `wyswietlPowitanie;`. W języku JavaScript sama nazwa bez nawiasów jest jedynie odwołaniem do definicji funkcji, a nie jej uruchomieniem. Skrypt nie zgłosi błędu, ale kod funkcji się nie wykona.

---

## 3. Parametry formalne a argumenty wywołania

Funkcja staje się naprawdę użyteczna wtedy, gdy potrafi dostosować swoje działanie do przekazanych jej danych. Mechanizm ten opiera się na **parametrach** oraz **argumentach**.

- **Parametr** to zmienna zadeklarowana w nawiasie definicji funkcji. Służy jako nazwa zastępcza dla danych, które funkcja otrzyma w przyszłości.
- **Argument** to rzeczywista wartość (np. konkretna liczba, tekst lub wynik innego działania), którą wpisujemy w nawiasie podczas wywoływania funkcji.

```javascript
// 'imie' oraz 'rokRejestracji' to parametry formalne funkcji
function wyswietlProfil(imie, rokRejestracji) {
  let komunikat = `Użytkownik: ${imie}, konto aktywne od roku ${rokRejestracji}.`;
  console.log(komunikat);
}

// "Tomasz" oraz 2024 to argumenty przekazane do funkcji
wyswietlProfil("Tomasz", 2024);

// Możemy wywołać tę samą funkcję z zupełnie innymi argumentami:
wyswietlProfil("Anna", 2022);
```

### Wartości domyślne parametrów
Czasami chcemy, aby parametr posiadał z góry ustaloną wartość w sytuacji, gdy osoba wywołująca funkcję pominie ten argument. W nowoczesnym standardzie JavaScript możemy przypisać wartość domyślną bezpośrednio w nagłówku:

```javascript
function naliczOplateSerwisowa(kwota, stawka = 0.05) {
  let oplata = kwota * stawka;
  console.log(`Naliczono opłatę: ${oplata} PLN`);
}

naliczOplateSerwisowa(1000);       // Użyje domyślnej stawki 0.05 -> wynik 50 PLN
naliczOplateSerwisowa(1000, 0.10); // Nadpisze stawkę wartością 0.10 -> wynik 100 PLN
```

> **Po co to jest:**  
> Parametryzacja sprawia, że funkcja jest elastycznym szablonem obliczeniowym. Wartości domyślne chronią natomiast kod przed błędami wynikającymi z przekazania zbyt małej liczby danych.

> **Typowa pomyłka:**  
> Pomylenie kolejności argumentów podczas wywołania wieloparametrowego, np. przekazanie roku jako pierwszego argumentu, a imienia jako drugiego. JavaScript dopasowuje argumenty do parametrów wyłącznie na podstawie ich pozycji na liście (od lewej do prawej), nie analizując ich znaczenia.

---

## 4. Instrukcja `return` i wartość zwracana

Większość funkcji w aplikacjach komercyjnych nie zajmuje się bezpośrednim wypisywaniem tekstu, lecz wykonuje obliczenia i oddaje wynik na zewnątrz, aby inne fragmenty programu mogły go dalej przetwarzać. Służy do tego słowo kluczowe `return`.

```javascript
function obliczPoleProstokata(bokA, bokB) {
  let pole = bokA * bokB;
  return pole; // Instrukcja return zwraca wynik do miejsca wywołania
}

// Wynik zwrócony przez funkcję możemy zapisać do nowej zmiennej:
let powierzchniaPokoju = obliczPoleProstokata(5, 4);
console.log(`Powierzchnia wynosi: ${powierzchniaPokoju} m²`);

// Wynik funkcji możemy od razu wykorzystać w dalszym wyrażeniu matematycznym:
let kosztPaneli = obliczPoleProstokata(5, 4) * 85;
```

### Różnica między `return` a `console.log`
Początkujący programiści często mylą wypisanie czegoś w konsoli z oddaniem wartości przez funkcję:
- `console.log(x)` jedynie drukuje informację w konsoli przeglądarki na ekranie programisty. Wartość ta „znika” w konsoli i program nie może jej nigdzie dalej przekazać.
- `return x` zwraca wartość do wnętrza programu. Wartość ta zastępuje wywołanie funkcji dokładnie w tym miejscu, w którym zostało ono napisane.

Jeśli funkcja nie zawiera słowa kluczowego `return`, po dotarciu do zamykającej klamry automatycznie zwraca specjalną wartość `undefined`.

> **Po co to jest:**  
> `return` umożliwia kompozycję kodu — wynik jednej funkcji staje się argumentem wejściowym dla innej funkcji. Dzięki temu funkcje stają się niezależnymi klockami, które można dowolnie łączyć.

> **Typowa pomyłka:**  
> Pisanie instrukcji programu poniżej słowa kluczowego `return` w ciele funkcji. Instrukcja `return` natychmiast przerywa działanie funkcji i wychodzi z niej. Wszelki kod znajdujący się w tym samym bloku poniżej `return` jest kodem martwym (ang. *unreachable code*) i nigdy się nie wykona.

---

## 5. Wczesne wyjście z funkcji (Guard Clauses)

Tradycyjny kod często zawiera wiele poziomów zagnieżdżonych warunków `if/else`, co czyni go trudnym w czytaniu (tzw. „drabina warunkowa”). Dzięki temu, że `return` natychmiast kończy działanie funkcji, możemy zastosować technikę wczesnego wyjścia (ang. *guard clause* lub klauzula strażnicza).

Zamiast pisać:
```javascript
// Trudniejszy w czytaniu kod z głębokim zagnieżdżeniem:
function obliczRabatZagniezdzony(wiek, kwota) {
  let wynik;
  if (wiek >= 0) {
    if (kwota > 0) {
      if (wiek < 18) {
        wynik = kwota * 0.20;
      } else {
        wynik = kwota * 0.05;
      }
    } else {
      wynik = 0;
    }
  } else {
    wynik = 0;
  }
  return wynik;
}
```

Stosujemy wczesny powrót do wyeliminowania błędnych danych na samym początku:
```javascript
// Czysty, czytelny kod z wczesnym wyjściem:
function obliczRabat(wiek, kwota) {
  // Strażnik 1: weryfikacja poprawności danych
  if (wiek < 0 || kwota <= 0) {
    return 0; // Wychodzimy natychmiast z bezpiecznym wynikiem
  }

  // Strażnik 2: obsługa przypadku ulgowego
  if (wiek < 18) {
    return kwota * 0.20;
  }

  // Główny nurt obliczeń (nie wymaga już słowa 'else')
  return kwota * 0.05;
}
```

> **Po co to jest:**  
> Technika wczesnego wyjścia drastycznie upraszcza strukturę programu, redukuje liczbę wcięć i pozwala obsłużyć wyjątki oraz błędy wejściowe na samym początku funkcji.

> **Typowa pomyłka:**  
> Zapomnienie o słowie `return` przy warunku sprawdzającym, np. napisanie `if (kwota <= 0) { 0; }`. Bez instrukcji `return` program przejdzie do dalszych linijek i wykona niepożądane obliczenia.

---

## 6. Nowy standard prezentacji danych w Semestrze 2 (`textContent`)

W Semestrze 1 wyniki skryptów wypisywane były za pomocą metody `document.write`. Była to technika dydaktyczna pozwalająca skupić się na zmiennych i pętlach bez wchodzenia w szczegóły struktury dokumentu HTML. 

W profesjonalnym tworzeniu stron internetowych metoda `document.write` jest jednak uznawana za przestarzałą i niebezpieczną. Jeśli zostanie uruchomiona po całkowitym załadowaniu strony, powoduje natychmiastowe wyczyszczenie całego dokumentu HTML i zniszczenie układu graficznego.

W Semestrze 2 przechodzimy na nowoczesny, bezpieczny standard separacji kodu:
1. W strukturze HTML umieszczamy dedykowany kontener wyjściowy z unikalnym identyfikatorem:
   ```html
   <div id="wynik" class="wynik"></div>
   ```
2. W arkuszu CSS nadajemy mu regułę zachowującą białe znaki i łamanie linii:
   ```css
   #wynik {
     white-space: pre-wrap;
     font-family: monospace;
   }
   ```
3. W skrycie JavaScript odnajdujemy ten element za pomocą metody `document.getElementById("wynik")` i przypisujemy sformatowany tekst do jego właściwości `textContent`:
   ```javascript
   let podsumowanie = `Raport kalkulacji:\n` +
                      `Cena jednostkowa: 40.00 PLN\n` +
                      `Należność ogółem: 120.00 PLN`;

   document.getElementById("wynik").textContent = podsumowanie;
   ```

### Dlaczego `textContent`, a nie `innerHTML`?
Właściwość `textContent` traktuje wprowadzany ciąg znaków wyłącznie jako czysty tekst. Oznacza to, że żadne znaki specjalne ani znaczniki nie zostaną zinterpretowane jako kod HTML. Zapewnia to pełną ochronę przed atakami typu XSS (Cross-Site Scripting) i stanowi standard zalecany przez wytyczne egzaminacyjne INF.03.

Aby uzyskać podział na wiersze wewnątrz `textContent`, stosujemy znak nowej linii `\n` w połączeniu ze stylem CSS `white-space: pre-wrap;` (zamiast znaczników `<br>`).

> **Po co to jest:**  
> Standard ten gwarantuje bezpieczeństwo aplikacji, chroni strukturę strony przed zniszczeniem oraz uczy oddzielania danych logicznych od wyglądu i struktury dokumentu.

> **Typowa pomyłka:**  
> Wstawianie znacznika HTML `<br>` do właściwości `textContent`. Ponieważ `textContent` nie interpretuje kodu HTML, na stronie wyświetli się dosłowny napis `<br>` zamiast przejścia do nowego wiersza. Do łamania wierszy w `textContent` służy wyłącznie znak `\n`.

---

## 7. Czystość i hermetyzacja funkcji

Bardzo ważną zasadą dobrego programowania jest tworzenie funkcji czystych, które nie posiadają ukrytych zależności od otoczenia. 

Funkcja obliczeniowa powinna opierać się wyłącznie na danych przekazanych przez parametry. **Niedopuszczalne jest:**
- Umieszczanie wywołania `prompt()` wewnątrz ciała funkcji obliczeniowej.
- Umieszczanie odwołań do elementów DOM (np. `document.getElementById`) wewnątrz funkcji obliczeniowej.

Jeśli funkcja ma obliczyć cenę biletu, jej zadaniem jest wyłącznie wykonanie kalkulacji na liczbach. Pobranie danych od użytkownika (np. przez `prompt()` poza funkcją) oraz prezentacja wyniku na stronie (`document.getElementById("wynik").textContent = ...`) powinny odbywać się w głównym nurcie programu:

```javascript
// BŁĘDNIE — funkcja miesza obliczenia z wejściem i wyjściem:
function zlaFunkcja() {
  let cena = Number(prompt("Podaj cenę:", "100")); // BŁĄD ARCHITEKTONICZNY
  let brutto = cena * 1.23;
  document.getElementById("wynik").textContent = brutto; // BŁĄD ARCHITEKTONICZNY
}

// PRAWIDŁOWO — czysta separacja ról:
// 1. Definicja czystej funkcji obliczeniowej:
function obliczBrutto(cenaNetto, stawkaVat = 0.23) {
  return cenaNetto * (1 + stawkaVat);
}

// 2. Główny nurt programu (pobranie danych, wywołanie, prezentacja):
let cenaWejsciowa = 150;
let wynikBrutto = obliczBrutto(cenaWejsciowa);

document.getElementById("wynik").textContent = `Kwota brutto: ${wynikBrutto.toFixed(2)} PLN`;
console.log(`Przeliczono kwotę: ${wynikBrutto}`);
```

> **Po co to jest:**  
> Dzięki czystej separacji funkcji od interfejsu tę samą funkcję `obliczBrutto` możemy wykorzystać w aplikacji konsolowej, w aplikacji okienkowej, na stronie internetowej, a nawet w testach automatycznych bez zmiany ani jednej linijki jej kodu.

> **Typowa pomyłka:**  
> Umieszczanie instrukcji wejścia/wyjścia wewnątrz funkcji matematycznej, co uniemożliwia jej automatyczne przetestowanie i ponowne użycie w innych częściach serwisu.
