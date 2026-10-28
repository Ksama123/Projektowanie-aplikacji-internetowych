# Teoria: Instrukcja wyboru switch w języku JavaScript

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Wprowadzenie: dlaczego potrzebujemy instrukcji switch?

W poprzednim module poznaliśmy instrukcję `if...else if...else`, która pozwala programowi podejmować decyzje na podstawie dowolnych warunków logicznych (nierówności, przedziałów, złożonych koniunkcji). Często jednak w programowaniu spotykamy sytuację, w której musimy sprawdzić, czy **jedna konkretna zmienna** ma jedną z wielu z góry określonych wartości (np. numer wybranego dania w menu, kod statusu przesyłki, nazwa wybranego formatu pliku).

Gdybyśmy użyli do tego celu drabiny `if...else if`, kod stałby się powtarzalny i mało czytelny:

```javascript
// Rozwiązanie z użyciem if...else if (dużo powtórzeń tej samej zmiennej)
let rola = "edytor";

if (rola === "admin") {
  document.write("Pełny dostęp administracyjny.<br>");
} else if (rola === "edytor") {
  document.write("Dostęp do edycji treści.<br>");
} else if (rola === "czytelnik") {
  document.write("Dostęp wyłącznie do odczytu.<br>");
} else {
  document.write("Nieznana rola użytkownika.<br>");
}
```

W języku JavaScript do eleganckiego rozwiązywania takich problemów służy **instrukcja `switch`**. Umożliwia ona jednokrotne podanie badanej zmiennej i zdefiniowanie listy dopuszczalnych wariantów (`case`).

**Po co to jest:**
Instrukcja `switch` służy do czytelnego rozgałęziania kodu na podstawie wartości jednego wyrażenia, zastępując długie, powtarzające się drabiny porównań równościowych (`if...else if`). Poprawia przejrzystość kodu i ułatwia jego późniejszą modyfikację.

**Typowa pomyłka:**
Próba użycia `switch` do sprawdzania przedziałów liczbowych lub warunków nierówności (np. `case x > 10:`). Klauzula `case` oczekuje konkretnej wartości do porównania, a nie wyrażenia logicznego (chyba że badana zmienna to `true`, co jednak jest nietypowym i niezalecanym wzorcem na poziomie podstawowym).

---

## 2. Podstawowa składnia instrukcji switch

Konstrukcja `switch` składa się z nagłówka przyjmującego sprawdzaną wartość oraz bloku objętego nawiasami klamrowymi `{ ... }`, w którym znajdują się klauzule `case`, instrukcje `break` oraz opcjonalna (lecz wysoce zalecana) klauzula `default`.

```javascript
let kodStatusu = 2;

switch (kodStatusu) {
  case 1:
    document.write("Status: Nowe zamówienie.<br>");
    break;
  case 2:
    document.write("Status: W trakcie realizacji.<br>");
    break;
  case 3:
    document.write("Status: Wysłane do klienta.<br>");
    break;
  default:
    document.write("Status: Nieznany kod zamówienia.<br>");
    break;
}
```

### Elementy składowe:
1. `switch (wyrażenie)` — wyrażenie w nawiasie okrągłym jest obliczane dokładnie raz na początku.
2. `case wartość:` — etykieta wskazująca punkt startu wykonywania kodu, jeśli obliczone wyrażenie jest ściśle równe podanej wartości.
3. `break;` — instrukcja natychmiastowo przerywająca działanie całego bloku `switch` i przenosząca wykonanie programu do pierwszej instrukcji za klamrą zamykającą.
4. `default:` — klauzula domyślna, wykonywana w sytuacji, gdy żadna z podanych wartości w klauzulach `case` nie pasowała do badanego wyrażenia.

**Po co to jest:**
Struktura `case` i `default` tworzy czytelną mapę możliwych ścieżek wykonania programu, jasno wskazując, co powinno się wydarzyć dla każdej oczekiwanej wartości wejściowej oraz w przypadku podania wartości nieobsługiwanej.

**Typowa pomyłka:**
Pominięcie dwukropka `:` po słowie `case wartość` lub `default`. Dwukropek jest obowiązkowym elementem składni języka JavaScript oddzielającym nagłówek wariantu od przypisanych mu instrukcji.

---

## 3. Rola instrukcji break i mechanizm fall-through

Instrukcja `break` jest kluczowym elementem sterującym wewnątrz `switch`. Kiedy silnik JavaScript napotka pasujący `case`, rozpoczyna wykonywanie instrukcji od tego miejsca i **kontynuuje wykonywanie wszystkich kolejnych instrukcji w dół**, aż do napotkania słowa `break` lub końca bloku `switch`.

Jeśli programista zapomni wpisać `break`, nastąpi zjawisko zwane **niezamierzonym przeskoczeniem (fall-through)** — program wykona kod pasującego przypadku ORAZ kod wszystkich kolejnych przypadków pod nim!

### Przykład błędu zapomnianego break:

```javascript
let poziom = 1;

switch (poziom) {
  case 1:
    document.write("Poziom podstawowy.<br>");
    // UWAGA: Brak break! Program przejdzie do case 2!
  case 2:
    document.write("Poziom średniozaawansowany.<br>");
    break;
  case 3:
    document.write("Poziom zaawansowany.<br>");
    break;
}
// Wynik na ekranie dla poziom = 1:
// Poziom podstawowy.
// Poziom średniozaawansowany.
```

### Świadome grupowanie przypadków (zamierzony fall-through)
Zjawisko przeskakiwania można wykorzystać w sposób kontrolowany i pożyteczny, gdy chcemy przypisać dokładnie to samo działanie dla kilku różnych wartości wejściowych:

```javascript
let dzienTygodnia = 6; // 1 - poniedziałek, ..., 7 - niedziela

switch (dzienTygodnia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("Dzień roboczy — biuro czynne w godzinach 8:00 - 16:00.<br>");
    break;
  case 6:
  case 7:
    document.write("Weekend — biuro nieczynne.<br>");
    break;
  default:
    document.write("Niepoprawny numer dnia tygodnia (podaj 1-7).<br>");
    break;
}
```

**Po co to jest:**
Świadome grupowanie klauzul `case` pozwala uniknąć duplikowania tego samego kodu dla wielu wartości, które podlegają identycznej regule biznesowej (np. przypisanie stawki podatkowej, identyfikacja dni wolnych czy obsługa synonimów poleceń).

**Typowa pomyłka:**
Próba łączenia wartości w jednym `case` za pomocą przecinka lub operatora logicznego, np. `case 1, 2, 3:` lub `case 1 || 2:`. W standardowym JavaScript każda dopuszczalna wartość musi posiadać własną osobną klauzulę `case wartość:`.

---

## 4. Porównanie ścisłe (===) wewnątrz switch — pułapka typów

Jedną z najważniejszych właściwości instrukcji `switch` w JavaScript jest to, że porównanie badanego wyrażenia z wartościami w `case` odbywa się **wyłącznie za pomocą operatora ścisłej równości (`===`)**. Oznacza to, że dopasowanie następuje tylko wtedy, gdy zgadza się **zarówno wartość, jak i typ danych**.

Nie zachodzi tutaj żadna niejawna konwersja (koercja) typów!

```javascript
let wyborTekstowy = "2"; // łańcuch znaków (String)

switch (wyborTekstowy) {
  case 1: // Liczba (Number)
    document.write("Wybrano opcję 1.<br>");
    break;
  case 2: // Liczba (Number)
    document.write("Wybrano opcję 2.<br>");
    break;
  default:
    document.write("Nie dopasowano żadnej opcji (wykonano default)!<br>");
    break;
}
// Na ekranie pojawi się: "Nie dopasowano żadnej opcji (wykonano default)!"
// Dzieje się tak, ponieważ "2" === 2 zwraca false!
```

### Jak poprawnie przetwarzać dane z prompt():
Funkcja `prompt()` zawsze zwraca wartość typu tekstowego (`string`) lub `null` (jeśli użytkownik kliknie Anuluj).

**Reguła decyzyjna:**
- Gdy klauzule `case` zawierają **liczby** (np. `case 1:`), musisz **jawnie przekonwertować** wpis za pomocą `Number()` lub `parseInt()`.
- Gdy klauzule `case` zawierają **teksty** (np. `case "B":`, `case "STANDARD":`), porównuj wynik `prompt()` **bez** `Number()` — w przeciwnym razie `Number("B")` da `NaN` i program zawsze wykona `default`.

Jeśli Twój `switch` operuje na liczbach całkowitych, konwersja wygląda tak:

```javascript
let daneWejsciowe = prompt("Wybierz opcję (1 - Kawa, 2 - Herbata):", "1");
let opcjaLiczbowa = Number(daneWejsciowe);

switch (opcjaLiczbowa) {
  case 1:
    document.write("Wybrano: Aromatyczna kawa.<br>");
    break;
  case 2:
    document.write("Wybrano: Herbata z cytryną.<br>");
    break;
  default:
    document.write("Nieprawidłowy wybór napoju.<br>");
    break;
}
```

Jeśli natomiast badasz kody tekstowe (np. `"A"`, `"B"`, `"PL"`), pamiętaj o umieszczeniu wartości w cudzysłowach wewnątrz `case`:

```javascript
let rozmiar = "M";

switch (rozmiar) {
  case "S":
    document.write("Rozmiar: Mały.<br>");
    break;
  case "M":
    document.write("Rozmiar: Średni.<br>");
    break;
  case "L":
    document.write("Rozmiar: Duży.<br>");
    break;
  default:
    document.write("Nierozpoznany rozmiar odzieży.<br>");
    break;
}
```

**Po co to jest:**
Ścisłe porównanie (`===`) gwarantuje niezawodność i bezpieczeństwo kodu. Zapobiega trudnym do wykrycia błędom logicznym wynikającym z automatycznej konwersji typów (np. utożsamieniu `0` z pustym ciągiem `""` lub wartością `false`).

**Typowa pomyłka:**
Porównywanie wyniku z `prompt()` bezpośrednio z liczbami w `case 1:` bez wcześniejszej konwersji typu `Number()`. Ponieważ `prompt()` zwraca tekst `"1"`, warunek `"1" === 1` nie jest spełniony i program niesłusznie trafia do sekcji `default`. Odwrotna pomyłka: stosowanie `Number()` do kodów tekstowych (np. `Number("STANDARD")` → `NaN`) — wtedy żaden `case "STANDARD":` nie pasuje.

---

## 5. Rola klauzuli default jako bezpiecznika aplikacji

Klauzula `default` odpowiada klauzuli `else` w tradycyjnej instrukcji warunkowej. Jest to blok kodu, który zostaje uruchomiony wtedy, gdy żadna wcześniejsza klauzula `case` nie pasowała do badanego wyrażenia.

Zalecenia dotyczące `default`:
1. **Umieszczaj `default` na końcu bloku `switch`**: Chociaż technicznie JavaScript pozwala umieścić `default` w dowolnym miejscu, umieszczenie go na samym końcu jest standardem branżowym zwiększającym czytelność.
2. **Stosuj `default` w każdym komercyjnym kodzie**: Nawet jeśli wydaje Ci się, że przewidziałeś wszystkie możliwe warianty, `default` chroni aplikację przed niespodziewanymi danymi wejściowymi, ułatwiając debugowanie.
3. **Zakończ `default` instrukcją `break`**: Jeśli `default` znajduje się na końcu bloku, `break` nie jest ściśle wymagany przez interpreter, ale jest dobrą praktyką chroniącą przed błędami w razie dopisania nowego `case` na dole.

```javascript
let kodBiletu = "VIP";

switch (kodBiletu) {
  case "NORMALNY":
    document.write("Cena biletu: 30 zł.<br>");
    break;
  case "ULGOWY":
    document.write("Cena biletu: 15 zł.<br>");
    break;
  case "SENIOR":
    document.write("Cena biletu: 20 zł.<br>");
    break;
  default:
    document.write("Błąd: Nieznany typ biletu (" + kodBiletu + "). Zgłoś się do kasy.<br>");
    break;
}
```

**Po co to jest:**
Klauzula `default` działa jak siatka bezpieczeństwa. Zapobiega sytuacji, w której program po podaniu błędnych lub nietypowych danych milczy i nie wyświetla użytkownikowi żadnej informacji zwrotnej.

**Typowa pomyłka:**
Zakładanie, że użytkownik zawsze wpisze poprawną wartość z listy i całkowite pomijanie bloku `default`. Skutkuje to brakiem jakiejkolwiek reakcji aplikacji na niepoprawne dane.

---

## 6. Wypis wyników i interakcja w Semestrze 1

W bieżącym semestrze fundamentów JavaScript obowiązuje ścisły standard prezentacji danych:
1. **Wyjście na stronę**: Wyłącznie za pomocą `document.write()` umieszczanego wewnątrz kontenera o klasie `wynik` (np. `<div class="wynik">`). Do łamania wierszy używamy znacznika `<br>`.
2. **Wyjście do konsoli**: Dodatkowo pomocnicze wypisywanie stanu za pomocą `console.log()`.
3. **Wejście danych**: Zmienne inicjalizowane w kodzie lub pobierane przez `prompt()` z **obowiązkową wartością domyślną** (drugi parametr), np. `prompt("Wybierz opcję (1-3):", "1")`.
4. **Wstrzymanie wątku**: Pamiętaj, że wywołanie okna dialogowego `prompt()` wstrzymuje wykonywanie kodu strony do momentu zatwierdzenia lub odrzucenia dialogu przez użytkownika.
5. **Zakaz manipulacji DOM**: Nie używamy metod `document.getElementById()`, `document.querySelector()` ani obsługi zdarzeń (`addEventListener`).
