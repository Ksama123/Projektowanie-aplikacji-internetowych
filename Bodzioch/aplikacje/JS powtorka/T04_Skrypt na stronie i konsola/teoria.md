# Teoria i kompendium wiedzy: Skrypt na stronie i konsola

> ✦ Materiały wspomagane AI — podręcznik teoretyczny opracowany metodycznie dla kwalifikacji INF.03 (Programowanie aplikacji internetowych).

Moduł: **T04 — Skrypt na stronie i konsola**  
Semestr: **1 (Git, GitHub i Fundamenty Języka JavaScript)**

---

## 1. Jak przeglądarka internetowa wykonuje JavaScript?

Przeglądarka internetowa to zaawansowany program, którego głównym zadaniem jest pobranie kodu strony (HTML, CSS, JavaScript) z serwera lub dysku lokalnego, a następnie przetworzenie go i wyświetlenie użytkownikowi w formie graficznej. Proces ten nazywamy **parsowaniem** i **renderowaniem**.

Silnik przeglądarki czyta dokument HTML linijka po linijce od góry do dołu. Gdy napotka znaczniki strukturalne, buduje w pamięci wewnętrzne drzewo dokumentu (DOM — *Document Object Model*). Kiedy jednak natrafi na znacznik `<script>`, proces analizy HTML zostaje wstrzymany — silnik przekazuje sterowanie do interpretera JavaScript (np. silnika V8 w przeglądarkach Chromium czy SpiderMonkey w Firefoksie). Dopiero po pobraniu i wykonaniu kodu skryptu przeglądarka wraca do dalszego przetwarzania kodu HTML.

> [!NOTE]
> ### Po co to jest
> JavaScript został zaprojektowany, aby ożywić statyczny dokument HTML. Dzięki niemu witryna przestaje być tylko nieruchomą gazetą, a staje się interaktywną aplikacją: może reagować na działania użytkownika, przetwarzać wprowadzone dane, przeprowadzać obliczenia matematyczne i na bieżąco aktualizować wyświetlane informacje.

---

## 2. Metody osadzania skryptu w dokumencie HTML

Kod JavaScript możemy dołączyć do strony internetowej na dwa podstawowe sposoby: jako skrypt wewnętrzny (osadzony bezpośrednio w kodzie HTML) lub jako skrypt zewnętrzny (zapisany w osobnym pliku z rozszerzeniem `.js`).

### Sposób A: Skrypt wewnętrzny (inline)

Skrypt umieszczany jest bezpośrednio w dokumencie HTML pomiędzy znacznikami otwierającym `<script>` i zamykającym `</script>`:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Skrypt wewnętrzny</title>
</head>
<body>
  <h1>Witaj w świecie JavaScript</h1>

  <script>
    console.log("Ten kod wykonuje się bezpośrednio ze strony HTML!");
  </script>
</body>
</html>
```

Rozwiązanie to sprawdza się przy bardzo krótkich, jednorazowych fragmentach kodu demonstracyjnego, jednak w profesjonalnym tworzeniu stron jest odradzane przy większych projektach.

### Sposób B: Skrypt zewnętrzny (zalecany standard)

Kod programu zapisujemy w osobnym pliku tekstowym (np. `script.js` lub `app.js`), a w dokumencie HTML łączymy go za pomocą atrybutu `src`:

```html
<script src="script.js"></script>
```

Zalety skryptu zewnętrznego:
- **Rozdzielenie odpowiedzialności:** HTML odpowiada wyłącznie za treść i strukturę, CSS za wygląd, a JavaScript za logikę programu.
- **Wielokrotne użycie:** ten sam plik `.js` może być dołączony do wielu podstron serwisu internetowego.
- **Pamięć podręczna (cache):** przeglądarka pobiera plik skryptu tylko raz przy pierwszej wizycie, co znacząco przyspiesza kolejne otwarcia witryny.
- **Czytelność i organizacja:** łatwiejsze wyszukiwanie błędów i współpraca zespołowa w systemach kontroli wersji Git.

> [!WARNING]
> ### Typowa pomyłka
> Początkujący programiści często próbują jednocześnie podać atrybut `src` oraz wpisać kod wewnątrz tego samego znacznika:
> ```html
> <!-- BŁĄD: Kod wewnątrz znacznika zostanie zignorowany przez przeglądarkę! -->
> <script src="script.js">
>   console.log("Ten tekst nigdy się nie wykona!");
> </script>
> ```
> Jeśli znacznik `<script>` posiada atrybut `src`, jakakolwiek zawartość tekstowa umieszczona między `<script>` a `</script>` jest bezpowrotnie ignorowana. Zewnętrzne podłączenie i kod wewnętrzny wymagają zawsze dwóch oddzielnych znaczników `<script>`.

---

## 3. Lokalizacja skryptu: sekcja `<head>` czy koniec sekcji `<body>`?

Ponieważ przeglądarka przetwarza plik HTML od góry do dołu, miejsce wstawienia znacznika `<script>` ma kluczowe znaczenie dla szybkości ładowania witryny:

1. **Skrypt umieszczony w sekcji `<head>` bez atrybutów:**  
   Przeglądarka przerywa wczytywanie strony, pobiera plik skryptu i go wykonuje. Przez ten czas użytkownik widzi biały, pusty ekran (tzw. zjawisko *parser blocking*).
2. **Skrypt umieszczony tuż przed zamykającym znacznikiem `</body>`:**  
   Przeglądarka najpierw wczyta i wyświetli całą strukturę strony oraz teksty, a dopiero na samym końcu pobierze i uruchomi kod JavaScript. Użytkownik natychmiast widzi treść strony, co zapewnia optymalne doświadczenie wizualne (*First Contentful Paint*).

### Atrybuty sterujące pobieraniem: `defer` i `async`

Gdy zależy nam na umieszczeniu znacznika `<script>` w sekcji `<head>`, możemy użyć specjalnych atrybutów logicznych:

```html
<!-- Atrybut defer: pobieraj w tle, wykonaj po sparsowaniu całego HTML -->
<script src="script.js" defer></script>

<!-- Atrybut async: pobieraj w tle, wykonaj natychmiast po pobraniu -->
<script src="analityka.js" async></script>
```

| Cecha | Bez atrybutu (w `<head>`) | `defer` | `async` |
|---|---|---|---|
| **Pobieranie pliku** | Blokuje parsowanie HTML | W tle (asynchronicznie) | W tle (asynchronicznie) |
| **Moment wykonania** | Natychmiast po pobraniu (blokuje HTML) | Dopiero po zakończeniu parsowania całego HTML | Natychmiast po zakończeniu pobierania (przerywa parsowanie) |
| **Kolejność wielu skryptów** | Zgodna z kolejnością w kodzie | Zawsze zachowana (skrypt 1, potem skrypt 2) | Niezależna (kto pierwszy pobrany, ten pierwszy wykonany) |
| **Główne zastosowanie** | Przypadki specjalne | Główna logika aplikacji, biblioteki | Niezależne skrypty śledzące, liczniki, analityka |

> [!IMPORTANT]
> ### Kiedy NIE stosować `defer` / `async`
> Atrybut `defer` (oraz `async`) opóźnia wykonanie skryptu do momentu **po** sparsowaniu dokumentu HTML. Jeśli skrypt wywołuje `document.write()`, takie opóźnienie wyczyści całą stronę. Dlatego `defer`/`async` stosujemy wyłącznie przy skryptach **bez** `document.write()` (np. sama diagnostyka w konsoli). Przy wypisie do kontenera `.wynik` skrypt dołączamy **bez** tych atrybutów — patrz sekcja 5.

---

## 4. Narzędzia deweloperskie i obiekt `console`

Konsola przeglądarki internetowej (otwierana najczęściej klawiszem **F12** lub skrótem **Ctrl + Shift + I**, zakładka *Console*) to podstawowe środowisko diagnostyczne programisty frontendowego. Konsola pozwala podglądać komunikaty programu, sprawdzać wartości zmiennych oraz diagnozować błędy wykonania.

W języku JavaScript do interakcji z konsolą służy wbudowany globalny obiekt `console`, oferujący szereg metod różniących się przeznaczeniem i wizualną prezentacją:

```javascript
// 1. Podstawowy komunikat informacyjny w standardowym kolorze
console.log("Uruchomiono moduł diagnostyczny.");

// 2. Informacja uzupełniająca (często z niebieską ikoną 'i')
console.info("Załadowano konfigurację domyślną.");

// 3. Ostrzeżenie (żółte tło lub żółty trójkąt z wykrzyknikiem)
console.warn("Wartość parametru zbliża się do limitu pamięci.");

// 4. Błąd krytyczny (czerwony tekst, czerwona ikona 'x' i ślad stosu wywołań)
console.error("Nie udało się połączyć z zasobem.");

// 5. Czytelna prezentacja tablic i obiektów w postaci tabelarycznej
console.table(["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"]);
```

> [!NOTE]
> ### Po co to jest
> Wypisywanie komunikatów do konsoli za pomocą `console.log()` i powiązanych metod pozwala programiście "zajrzeć do wnętrza" działającego programu bez zakłócania widoku witryny dla zwykłego użytkownika. To najszybsza i najbardziej naturalna metoda weryfikacji poprawności obliczeń i przepływu sterowania.

---

## 5. Podstawowy wypis treści na stronę: `document.write()`

W semestrze 1, przed poznaniem zaawansowanych metod manipulacji strukturą strony (DOM), do wyprowadzania wygenerowanych tekstów i wyników obliczeń bezpośrednio do dokumentu służy metoda:

```javascript
document.write("Treść wstawiona przez JavaScript");
```

Metoda `document.write()` wstawia przekazany ciąg znaków (w tym znaczniki HTML) dokładnie w tym miejscu dokumentu, w którym skrypt jest aktualnie wykonywany.

### Rygor kontenera wyjściowego `.wynik`

Zgodnie z zasadami czystego kodu oraz wymogami egzaminacyjnymi CKE, w semestrze 1 kod JavaScript umieszczamy w dedykowanym kontenerze `<div>` o klasie `.wynik`. Skrypt musi wykonać się **w trakcie** parsowania tego miejsca dokumentu — wtedy `document.write()` wstawia treść dokładnie do `.wynik`.

**Wzorzec A — skrypt wewnętrzny (inline) w `.wynik`:**

```html
<main>
  <h2>Raport z wykonania operacji</h2>
  <div class="wynik">
    <script>
      document.write("<p>Status systemu: <strong>Aktywny</strong></p>");
      document.write("<p>Poziom naładowania: 98%</p>");
    </script>
  </div>
</main>
```

**Wzorzec B — skrypt zewnętrzny w `.wynik` (zalecany w zadaniach warsztatowych i na sprawdzianie):**

```html
<div class="wynik">
  <!-- BEZ defer i BEZ async — skrypt musi wykonać się natychmiast w tym miejscu -->
  <script src="script.js"></script>
</div>
```

```javascript
// plik script.js
document.write("<p>Status systemu: <strong>Aktywny</strong></p>");
```

> [!WARNING]
> ### Typowa pomyłka
> 1. Wywołanie `document.write()` **po** zakończeniu wczytywania dokumentu (np. przy `defer`, `async` albo w reakcji na zdarzenie) wyczyści całą stronę i zastąpi ją nowym tekstem.
> 2. Umieszczenie `<script src="script.js" defer>` w `<head>` przy jednoczesnym użyciu `document.write()` w `script.js` — treść nie trafi do `.wynik`, a strona zostanie wyczyszczona.
>
> Dlatego w semestrze 1 przy wypisie na stronę: skrypt **wewnątrz** `.wynik`, **bez** `defer` i **bez** `async`.

---

## 6. Zmienne, stałe, typy proste i komentarze

W języku JavaScript każda informacja przetwarzana przez program przechowywana jest w pamięci pod określoną nazwą — zmienną lub stałą.

### Deklaracja zmiennych: `let` i `const`

W nowoczesnym standardzie JavaScript (ES6+) stosujemy wyłącznie słowa kluczowe `let` oraz `const`:
- `const` (*constant*) — służy do deklaracji wartości, które nie mogą ulec zmianie (ponownemu przypisaniu) w trakcie działania programu. Zawsze preferujemy `const`, chyba że wartość musi ulec zmianie.
- `let` — służy do deklaracji zmiennej, której wartość będzie modyfikowana (np. licznik pętli, bieżący stan).

```javascript
const NAZWA_APLIKACJI = "System Rejestracji Zgłoszeń";
let licznikOdwiedzin = 1;

licznikOdwiedzin = licznikOdwiedzin + 1; // Prawidłowo — zmienna let może być modyfikowana
// NAZWA_APLIKACJI = "Inna nazwa";     // BŁĄD: TypeError: Assignment to constant variable
```

### Typy proste (prymitywne)

JavaScript rozróżnia podstawowe rodzaje danych:
1. **Napis (string):** ciąg znaków w cudzysłowach podwójnych `"..."` lub pojedynczych `'...'`.
2. **Liczba (number):** liczby całkowite i zmiennoprzecinkowe (np. `42`, `3.14`).
3. **Wartość logiczna (boolean):** prawda lub fałsz — `true` albo `false`.

Do sprawdzenia typu wartości służy operator `typeof`. Wynik łączymy z tekstem komunikatu za pomocą operatora `+` (konkatenacja), zamiast wpisywać nazwę typu ręcznie:

```javascript
const miasto = "Gdańsk";
const temperatura = 18.5;
const padaDeszcz = false;

console.log(typeof miasto);      // Wypisze: "string"
console.log(typeof temperatura); // Wypisze: "number"
console.log(typeof padaDeszcz);  // Wypisze: "boolean"

// Dynamiczne wbudowanie typu w dłuższy komunikat:
console.info("Typ zmiennej padaDeszcz: " + typeof padaDeszcz + ".");
// W konsoli: Typ zmiennej padaDeszcz: boolean.
```

### Komentarze w kodzie

Komentarze to fragmenty kodu ignorowane przez interpreter JavaScript, służące wyjaśnieniu działania programu dla programistów:

```javascript
// To jest komentarz jednoliniowy — wyjaśnia następną linijkę

/*
  To jest komentarz wieloliniowy (blokowy).
  Można w nim umieścić obszerniejszy opis algorytmu,
  autora modułu lub instrukcje wdrożeniowe.
*/
```

---

## 7. Czego NIE używamy w semestrze 1?

Dla zachowania dydaktycznego porządku i właściwego przyswajania fundamentów programowania, w module T04 i całym semestrze 1 **bezwzględnie nie stosujemy**:
- Selektorów dynamicznych DOM: `document.getElementById()`, `document.querySelector()`.
- Rejestracji zdarzeń: `addEventListener()`, `onclick`, `onsubmit`.
- Manipulacji klasami CSS: `classList.add()`, `classList.toggle()`.
- Magazynu przeglądarki `localStorage` i zapytań sieciowych `fetch()`.

Wszystkie te technologie zostaną wprowadzone w dedykowanych działach w semestrze 2 i 3, gdy uczeń w pełni opanuje operatory, instrukcje warunkowe, pętle oraz funkcje.
