# Teoria: Pętla for w języku JavaScript

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

## 1. Problem powtarzalności w programowaniu

Wyobraźmy sobie sytuację, w której tworzymy aplikację dla internetowej hurtowni materiałów budowlanych. Na stronie należy wyświetlić listę 20 ponumerowanych stanowisk rozładunkowych lub wygenerować tabelę z cennikiem dla kolejnych kilogramów towaru (od 1 do 10 kg).

Gdybyśmy nie znali konstrukcji pętli, musielibyśmy napisać dwadzieścia niemal identycznych linijek kodu:

```javascript
document.write("<p>Stanowisko rozładunkowe nr 1</p>");
document.write("<p>Stanowisko rozładunkowe nr 2</p>");
document.write("<p>Stanowisko rozładunkowe nr 3</p>");
// ... i tak dalej aż do 20
```

Takie podejście narusza podstawową zasadę czystego kodu: **DRY** (*Don't Repeat Yourself* – nie powtarzaj się). Gdyby właściciel magazynu poprosił o zmianę formatu zapisu na `[Sektor A] Stanowisko nr X`, programista musiałby ręcznie edytować każdą linijkę. Co więcej, gdyby liczba stanowisk wynosiła 1000 lub zależała od danych podanych przez kierownika zmiany, ręczne wpisanie kodu byłoby fizycznie niemożliwe.

Rozwiązaniem tego problemu są **pętle**, a w szczególności klasyczna **pętla `for`**, która pozwala wykonać ten sam blok instrukcji zadaną liczbę razy przy automatycznie zmieniającej się wartości licznika.

---

## 2. Anatomia i mechanika działania pętli `for`

Pętla `for` składa się z nagłówka ujętego w nawiasy okrągłe oraz ciała pętli objętego nawiasami klamrowymi. W nagłówku definiujemy trzy kluczowe elementy, rozdzielane **średnikami**:

```javascript
for (inicjalizacja; warunek_kontynuacji; zmiana_kroku) {
  // Ciało pętli — instrukcje wykonywane w każdym powtórzeniu (iteracji)
}
```

Oto konkretny przykład wypisujący numery kolejnych pięter w budynku biurowym od 1 do 5:

```javascript
for (let i = 1; i <= 5; i++) {
  document.write(`<p>Biuro znajduje się na piętrze: ${i}</p>`);
}
```

### Przebieg cyklu iteracji krok po kroku
Kolejność wykonywania operacji przez interpreter JavaScript jest ściśle określona i warto ją zapamiętać:
1. **Inicjalizacja (`let i = 1`):** Wykonywana jest **dokładnie jeden raz**, na samym początku, przed pierwszym sprawdzeniem warunku. Tworzona jest zmienna sterująca (licznik).
2. **Sprawdzenie warunku (`i <= 5`):** Interpreter bada, czy wyrażenie zwraca wartość logiczną `true`. Jeśli tak, przechodzi do kroku 3. Jeśli warunek zwraca `false`, pętla natychmiast kończy działanie, a interpreter przechodzi do kodu za klamrą zamykającą.
3. **Wykonanie ciała pętli:** Wykonywane są wszystkie instrukcje zawarte między `{` a `}`. W naszym przykładzie następuje wywołanie `document.write`.
4. **Modyfikacja kroku (`i++`):** Po wykonaniu ciała pętli następuje zmiana wartości zmiennej sterującej (tutaj zwiększenie o 1).
5. **Powrót do kroku 2:** Interpreter ponownie sprawdza warunek dla nowej wartości zmiennej `i`. Cykl powtarza się dopóki warunek jest prawdziwy.

**Po co to jest:** Trzyczęściowy nagłówek pętli skupia w jednym czytelnym miejscu całe sterowanie cyklem: skąd zaczynamy, kiedy kończymy i jak zmieniamy licznik. Dzięki temu programista nie musi pamiętać o ręcznym przesuwaniu licznika na końcu bloku kodu.

**Typowa pomyłka:** Zadeklarowanie zmiennej sterującej za pomocą `const` (np. `for (const i = 1; i <= 5; i++)`). Skutkuje to błędem wykonania `TypeError: Assignment to constant variable` już przy próbie wykonania pierwszego kroku `i++`, ponieważ stała nie pozwala na zmianę swojej wartości. Zmienna sterująca pętli musi być zawsze deklarowana przez słowo kluczowe `let`.

---

## 3. Zmienna sterująca i kierunek iteracji

Tradycyjnie zmienne sterujące pętli oznacza się literami `i`, `j`, `k` (od angielskiego słowa *index* lub *iterator*), choć w bardziej rozbudowanych zadaniach warto stosować nazwy kontekstowe, np. `numerPietra`, `dzien`, `miesiac`.

### Iteracja w przód (inkrementacja)
Zwiększanie licznika może odbywać się o dowolną wartość:
```javascript
// Co drugie stanowisko (1, 3, 5, 7, 9)
for (let stanowisko = 1; stanowisko <= 10; stanowisko += 2) {
  document.write(`<p>Stanowisko uprzywilejowane: nr ${stanowisko}</p>`);
}
```

### Iteracja w tył (dekrementacja)
Pętla może również odliczać wartości malejąco. W tym przypadku startujemy od wartości wyższej, warunek sprawdza, czy licznik nie spadł poniżej progu dolnego (`>=`), a w kroku stosujemy operator dekrementacji (`i--` lub `i -= krok`):

```javascript
// Odliczanie do startu systemu rezerwacji
for (let sekunda = 5; sekunda >= 1; sekunda--) {
  document.write(`<p>Uruchomienie serwera za: ${sekunda} s...</p>`);
}
document.write("<p>Serwer aktywny!</p>");
```

**Po co to jest:** Iteracja malejąca jest niezastąpiona wszędzie tam, gdzie przetwarzamy procesy wstecz – np. przy wyliczaniu amortyzacji sprzętu rok po roku, odliczaniu czasu w dół czy wyliczaniu stanów magazynowych po kolejnych wydaniach towaru.

**Typowa pomyłka:** Zastosowanie błędnego operatora w warunku przy odliczaniu w tył, np. `for (let i = 10; i <= 1; i--)`. Ponieważ na starcie `10 <= 1` daje `false`, pętla nie wykona się ani razu. Z kolei błąd w kroku, np. `for (let i = 10; i >= 1; i++)`, prowadzi do pętli nieskończonej, gdyż `i` rośnie w nieskończoność i warunek `i >= 1` jest zawsze spełniony, co zawiesza kartę przeglądarki.

---

## 4. Podstawowe wzorce algorytmiczne w pętli

W praktyce tworzenia aplikacji pętla bardzo rzadko służy wyłącznie do wypisywania samego numeru iteracji. Najczęściej współpracuje ze zmiennymi pomocniczymi zadeklarowanymi **przed pętlą**.

### Wzorzec 1: Sumator (akumulator wartości)
Sumator to zmienna liczbowa zainicjalizowana wartością zero przed wejściem do pętli, do której w każdej iteracji dodajemy kolejną wyliczoną kwotę lub wartość:

```javascript
let lacznyKosztBiletow = 0;
const CENA_JEDNOSTKOWA = 35; // zł

for (let bilet = 1; bilet <= 4; bilet++) {
  lacznyKosztBiletow += CENA_JEDNOSTKOWA;
  document.write(`<p>Dodano bilet ${bilet} (35 zł) — aktualna suma: ${lacznyKosztBiletow} zł</p>`);
}

document.write(`<p><strong>Do zapłaty łącznie za 4 bilety: ${lacznyKosztBiletow} zł</strong></p>`);
```

### Wzorzec 2: Zliczanie warunkowe (licznik zdarzeń)
Możemy wewnątrz pętli umieścić instrukcję warunkową `if / else`, aby badać właściwości licznika (np. czy liczba jest parzysta) lub sprawdzać określone warunki biznesowe:

```javascript
let liczbaDniPromocyjnych = 0;

for (let dzien = 1; dzien <= 7; dzien++) {
  // Dni parzyste tygodnia są dniami z darmową dostawą
  if (dzien % 2 === 0) {
    liczbaDniPromocyjnych++;
    document.write(`<p>Dzień ${dzien}: Darmowa dostawa (Dzień promocyjny)</p>`);
  } else {
    document.write(`<p>Dzień ${dzien}: Standardowy koszt przesyłki</p>`);
  }
}

document.write(`<p>W tym tygodniu przysługuje dni z darmową dostawą: ${liczbaDniPromocyjnych}</p>`);
```

**Parzystość i nieparzystość (operator `%`):**
- `liczba % 2 === 0` — liczba jest **parzysta** (reszta z dzielenia przez 2 wynosi 0),
- `liczba % 2 !== 0` — liczba jest **nieparzysta** (reszta z dzielenia przez 2 jest różna od 0).

Oba warunki są równoważne z użyciem `else` po sprawdzeniu parzystości; wybór zależy od tego, który przypadek chcesz opisać wprost w `if`.

**Po co to jest:** Zmienne akumulujące (sumatory i liczniki) pozwalają wyciągać zbiorcze wnioski z całego cyklu obliczeniowego – np. łączny obrót sklepu, średnią wartość zamówienia (`suma / liczbaElementow`) czy liczbę przesyłek ponadgabarytowych.

**Typowa pomyłka:** Deklarowanie sumatora wewnątrz ciała pętli, np.:
```javascript
for (let i = 1; i <= 5; i++) {
  let suma = 0; // BŁĄD! Sumator zeruje się w każdym powtórzeniu!
  suma += 10;
}
```
Zmienna zadeklarowana wewnątrz pętli przestaje istnieć z końcem danej iteracji i tworzy się na nowo w kolejnej. Sumator musi zawsze znajdować się przed pętlą.

---

## 5. Pętle zagnieżdżone (struktury dwuwymiarowe) — materiał rozszerzający

> **Uwaga metodyczna:** Sekcja służy zrozumieniu mechaniki i pytaniom quizowym. W zadaniach `nauka/` oraz na sprawdzianie T10 **nie** wymagamy pętli zagnieżdżonych — wystarczy jedna pętla `for` (ew. z `if` i sumatorem/licznikiem).

Często spotykanym zadaniem w aplikacjach biznesowych jest wygenerowanie struktury dwuwymiarowej – np. rzędów i miejsc na sali kinowej, siatki kalendarza czy tabliczki mnożenia. Do tego celu służą **pętle zagnieżdżone**, czyli pętla umieszczona wewnątrz innej pętli.

```javascript
const LICZBA_RZEDOW = 3;
const MIEJSCA_W_RZEDZIE = 4;

for (let rzad = 1; rzad <= LICZBA_RZEDOW; rzad++) {
  document.write(`<p>--- Rozpoczęcie rzędu nr ${rzad} ---</p>`);
  
  for (let miejsce = 1; miejsce <= MIEJSCA_W_RZEDZIE; miejsce++) {
    document.write(`<p>Bilet: Rząd ${rzad}, Miejsce ${miejsce}</p>`);
  }
}
```

### Jak działa pętla zagnieżdżona?
1. Pętla zewnętrzna rozpoczyna pierwszą iterację (`rzad = 1`).
2. Następuje wejście do pętli wewnętrznej: wykonuje się ona **w całości** dla `miejsce = 1, 2, 3, 4`.
3. Pętla wewnętrzna kończy działanie.
4. Pętla zewnętrzna przechodzi do kolejnej iteracji (`rzad = 2`).
5. Pętla wewnętrzna startuje **od nowa** od wartości początkowej (`miejsce = 1`) i ponownie wykonuje się 4 razy.
6. Łączna liczba powtórzeń pętli wewnętrznej to iloczyn: $3 \times 4 = 12$ powtórzeń.

**Po co to jest:** Pętle zagnieżdżone umożliwiają obsługę układów współrzędnych $(x, y)$, macierzy, siatek graficznych oraz wielopoziomowych raportów (np. dla każdego działu firmy wypisz wszystkich pracowników).

**Typowa pomyłka:** Użycie tej samej nazwy zmiennej sterującej w pętli zewnętrznej i wewnętrznej, np. `for (let i = 0; ...) { for (let i = 0; ...) { ... } }`. Prowadzi to do przesłonięcia zmiennej (ang. *shadowing*) lub błędów logicznych w sterowaniu pętlą zewnętrzną. Zawsze nadawaj pętlom zagnieżdżonym różne nazwy zmiennych (np. `rzad` i `miejsce`, albo klasycznie `i` oraz `j`).

---

## 6. Wprowadzanie danych: funkcja `prompt()`

> **Uwaga metodyczna:** Część zadań T10 (m.in. nauka Z2 i Z4 oraz sprawdzian Z2) pobiera limit pętli przez `prompt()`. Pozostałe zadania nadal używają stałych w kodzie — zawsze stosuj się do instrukcji danego ćwiczenia.

Gdy liczba iteracji zależy od decyzji użytkownika, używamy okna dialogowego `prompt()`. Zgodnie ze standardem semestru funkcja `prompt()` musi zawsze posiadać drugi argument – bezpieczną wartość domyślną – a wynik liczbowy konwertujemy przez `Number()`:

```javascript
// Wzorzec dwuetapowy:
const pobranaWartosc = prompt("Podaj liczbę generowanych kuponów:", "5");
const liczbaKuponow = Number(pobranaWartosc);

// Wzorzec w jednej linii (stosowany w zadaniach T10):
const limitPetli = Number(prompt("Podaj liczbę generowanych kuponów:", "5"));
```

### Mechanizm wstrzymania skryptu (modal dialog)
Funkcja `prompt()` wyświetla tzw. **modalne okno dialogowe**. Oznacza to, że z chwilą wywołania `prompt()` przeglądarka całkowicie **wstrzymuje wykonywanie całego skryptu JavaScript**, a także blokuje interakcję użytkownika z resztą strony internetowej. Wątek wykonawczy czeka, aż użytkownik wpisze wartość i kliknie przycisk „OK” lub „Anuluj”. Dopiero po zamknięciu okna przypisywana jest wartość zwracana i skrypt kontynuuje pracę, np. uruchamiając pętlę `for`.

**Po co to jest:** Wartość domyślna gwarantuje, że jeśli użytkownik po prostu naciśnie Enter lub nie zmieni tekstu w polu, program otrzyma przewidywalne dane liczbowe i pętla wykona się poprawnie bez generowania błędów `NaN`.

**Typowa pomyłka:** Brak konwersji wyniku `prompt()` na liczbę za pomocą `Number()` lub `parseInt()`. Funkcja `prompt()` zawsze zwraca tekst (`string`). Chociaż w pętli `for (let i = 1; i <= limit; i++)` operator `<=` dokonuje niejawnej konwersji, to przy operacjach dodawania `+` nastąpi sklejanie napisów zamiast sumowania matematycznego.

---

## 7. Standard prezentacji danych na stronie

Przypominamy, że w całym Semestrze 1 obowiązuje rygorystyczny standard wyświetlania danych:
- Kod JavaScript umieszczamy w pliku `script.js` dołączanym do `index.html` przez znacznik `<script src="script.js"></script>`.
- Wyniki działania programu wypisujemy na stronę za pomocą instrukcji `document.write()`.
- Wypisywane elementy powinny być formatowane przy użyciu znaczników HTML takich jak `<p>`, `<strong>`, `<br>`, `<div>` lub `<span>`.
- Nie używamy metod manipulacji drzewem DOM (`getElementById`, `querySelector`, `innerHTML`), które zostaną szczegółowo omówione w Semestrze 3.
- Nie tworzymy własnych funkcji ani tablic – operujemy wyłącznie na zmiennych prostych, instrukcjach warunkowych oraz pętlach.
