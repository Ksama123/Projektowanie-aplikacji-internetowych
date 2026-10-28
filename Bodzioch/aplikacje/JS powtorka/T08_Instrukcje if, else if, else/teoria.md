# Teoria: Instrukcje warunkowe if, else if, else w JavaScript

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Sterowanie przepływem programu — od sekwencji do decyzji

Dotychczas pisane skrypty JavaScript wykonywały się ściśle sekwencyjnie — instrukcja po instrukcji, od góry do dołu pliku źródłowego. Każda linijka kodu była uruchamiana dokładnie raz. W rzeczywistych aplikacjach internetowych taki model jest niewystarczający. Strona sklepu musi wyświetlić inny komunikat, gdy koszyk jest pusty, a inny, gdy znajdują się w nim towary. Panel logowania musi zareagować inaczej na poprawne hasło, a inaczej na błędne.

Do podejmowania decyzji w kodzie służą **instrukcje warunkowe**. Sprawdzają one podany warunek logiczny (wyrażenie dające w wyniku `true` lub `false`) i na tej podstawie wybierają jedną ze ścieżek wykonania programu.

---

## 2. Podstawowa instrukcja `if`

Najprostszą formą podejmowania decyzji jest instrukcja `if`. Umożliwia ona warunkowe wykonanie bloku kodu tylko wtedy, gdy podany w nawiasach okrągłych warunek zostanie spełniony (przyjmie wartość logiczną `true`).

### Składnia

```javascript
if (warunek) {
  // kod wykonywany tylko wtedy, gdy warunek jest prawdziwy
}
```

### Przykład praktyczny

```javascript
const stanMagazynowy = 3;

if (stanMagazynowy < 5) {
  document.write("Ostrzeżenie: niski stan towaru na magazynie!<br>");
}
```

Gdy wartość zmiennej `stanMagazynowy` wynosi 3, wyrażenie `3 < 5` jest prawdziwe (`true`), więc przeglądarka wykona kod zawarty w nawiasach klamrowych. Gdyby wartość wynosiła 10, warunek `10 < 5` dałby `false`, a interpreter pominąłby cały blok klamrowy i przeszedł do kolejnych linijek skryptu.

> **Po co to jest:**  
> Instrukcja `if` chroni program przed wykonywaniem operacji niepożądanych w danym stanie aplikacji, na przykład przed próbą pobrania opłaty przy zerowej kwocie zamówienia lub wyświetleniem komunikatu o sukcesie przy braku danych.

> **Typowa pomyłka:**  
> Postawienie średnika bezpośrednio po nawiasie okrągłym warunku: `if (stanMagazynowy < 5); { ... }`. Średnik w tym miejscu kończy instrukcję warunkową, traktując ją jako instrukcję pustą. W efekcie kod w nawiasach klamrowych wykona się **zawsze**, bez względu na wartość logiczną warunku. Drugim częstym błędem jest użycie pojedynczego znaku równości `=` (przypisanie) zamiast operatora porównania `===`. Zapis `if (stan = 0)` nadpisze zmienną i zwróci wartość `0` (falsy), co niemal zawsze prowadzi do trudnych do wykrycia błędów logicznych.

---

## 3. Klauzula alternatywna `else`

W wielu sytuacjach aplikacja musi podjąć działanie zarówno wtedy, gdy warunek jest spełniony, jak i wtedy, gdy nie jest spełniony. Do obsługi ścieżki alternatywnej służy słowo kluczowe `else`.

### Składnia

```javascript
if (warunek) {
  // kod wykonywany, gdy warunek to true
} else {
  // kod wykonywany, gdy warunek to false
}
```

### Przykład praktyczny

```javascript
const wiekKlienta = 17;

if (wiekKlienta >= 18) {
  document.write("Dostęp przyznany: konto pełnoletnie.<br>");
} else {
  document.write("Odmowa dostępu: wymagana zgoda opiekuna prawnego.<br>");
}
```

W powyższej konstrukcji interpreter gwarantuje wykonanie **dokładnie jednej** z dwóch gałęzi. Nigdy nie dojdzie do sytuacji, w której wykonają się oba bloki lub żaden z nich.

> **Po co to jest:**  
> Klauzula `else` eliminuje potrzebę pisania drugiego, przeciwstawnego warunku `if (wiekKlienta < 18)`. Zapewnia to elegancję kodu, szybsze działanie programu oraz gwarancję pełnego pokrycia przestrzeni możliwych stanów logicznych (zasada dychotomii).

> **Typowa pomyłka:**  
> Próba dopisania warunku po słowie `else`, np. `else (wiekKlienta < 18) { ... }`. Słowo `else` nie przyjmuje żadnego warunku w nawiasach — jest to gałąź domyślna, przechwytująca wszystkie pozostałe przypadki. Jeżeli potrzebny jest kolejny warunek, należy użyć konstrukcji `else if`.

---

## 4. Drabina warunkowa `else if` (decyzje wielowariantowe)

Gdy problem wymaga rozpatrzenia więcej niż dwóch wzajemnie wykluczających się możliwości, stosujemy tzw. drabinę warunkową `else if`. Interpreter sprawdza kolejne warunki od góry do dołu. Gdy napotka pierwszy warunek prawdziwy, wykonuje powiązany z nim blok kodu i natychmiast opuszcza całą strukturę warunkową, ignorując wszystkie pozostałe gałęzie.

### Składnia

```javascript
if (warunek1) {
  // kod dla warunku 1
} else if (warunek2) {
  // kod dla warunku 2
} else if (warunek3) {
  // kod dla warunku 3
} else {
  // kod domyślny, gdy żaden warunek nie był prawdziwy
}
```

### Przykład praktyczny: Taryfikator biletów

```javascript
const wiek = 14;
let cenaBiletu = 0;

if (wiek < 4) {
  cenaBiletu = 0; // Maluchy bezpłatnie
} else if (wiek <= 18) {
  cenaBiletu = 15; // Bilet ulgowy szkolny
} else if (wiek < 65) {
  cenaBiletu = 30; // Bilet normalny
} else {
  cenaBiletu = 10; // Seniorzy
}

document.write(`Wiek pasażera: ${wiek} lat, cena biletu: ${cenaBiletu} zł.<br>`);
```

### Kluczowa zasada: Kolejność sprawdzania progów

Kolejność warunków w drabinie `else if` ma fundamentalne znaczenie. Jeśli progi liczbowe zostaną uporządkowane w niewłaściwej kolejności, bardziej ogólny warunek może "zasłonić" warunek bardziej szczegółowy.

Rozważmy błędny przykład rabatów handlowych:

```javascript
// KOD BŁĘDNY - NIEPOPRAWNA KOLEJNOŚĆ PROGÓW:
const kwota = 650;
let rabat = 0;

if (kwota >= 100) {
  rabat = 5;
} else if (kwota >= 500) {
  rabat = 15; // TEN KOD NIGDY SIĘ NIE WYKONA DLA KWOTY 650!
}
```

Dla kwoty 650 warunek `kwota >= 100` jest prawdziwy, więc klient otrzyma jedynie 5% rabatu, mimo że przekroczył próg 500 zł. Poprawna konstrukcja musi sprawdzać progi od najbardziej restrykcyjnego (od góry) do najmniej restrykcyjnego, lub stosować precyzyjne przedziały:

```javascript
// KOD POPRAWNY:
if (kwota >= 500) {
  rabat = 15;
} else if (kwota >= 100) {
  rabat = 5;
} else {
  rabat = 0;
}
```

> **Po co to jest:**  
> Drabina `else if` modeluje wielostopniowe reguły biznesowe: progi podatkowe, skale ocen szkolnych, kategorie wagowe przesyłek czy statusy zamówień w sklepie internetowym.

> **Typowa pomyłka:**  
> Zastąpienie drabiny `else if` serią niezależnych instrukcji `if`. Jeśli napiszemy trzy osobne instrukcje `if`, interpreter sprawdzi każdy z nich, a zmienna wynikowa może zostać wielokrotnie nadpisana, dając zły rezultat końcowy.

---

## 5. Warunki zagnieżdżone (decyzje wielopoziomowe)

Instrukcję `if` można umieścić wewnątrz bloku innej instrukcji `if` lub `else`. Nazywamy to zagnieżdżaniem warunków. Jest to przydatne, gdy druga decyzja ma sens dopiero po pozytywnej weryfikacji pierwszego kryterium (np. najpierw sprawdzamy, czy użytkownik jest zalogowany, a dopiero potem, czy ma uprawnienia administratora).

### Przykład praktyczny

```javascript
const zalogowany = true;
const rola = "kierownik";

if (zalogowany) {
  if (rola === "kierownik") {
    document.write("Dostęp do panelu kierownika przyznany.<br>");
  } else {
    document.write("Dostęp do panelu pracownika przyznany.<br>");
  }
} else {
  document.write("Błąd: Użytkownik niezalogowany.<br>");
}
```

> **Po co to jest:**  
> Zagnieżdżanie pozwala budować hierarchiczne drzewa decyzyjne, w których kolejne pytania logiczne zależą od odpowiedzi na pytania nadrzędne.

> **Typowa pomyłka:**  
> Tworzenie zbyt głębokich zagnieżdżeń (powyżej 2–3 poziomów), co dramatycznie obniża czytelność kodu (tzw. "kod piramidowy"). Jeśli warunki są od siebie niezależne, znacznie czytelniej jest połączyć je operatorami logicznymi `&&` lub `||`.

---

## 6. Warunki złożone z operatorami logicznymi (`&&`, `||`, `!`)

W module T07 poznaliśmy operatory logiczne koniunkcji (`&&`), alternatywy (`||`) oraz negacji (`!`). W instrukcjach warunkowych stanowią one podstawowe narzędzie do budowy precyzyjnych kryteriów decyzyjnych bez potrzeby sztucznego zagnieżdżania instrukcji.

### Koniunkcja (`&&`) — wszystkie warunki muszą być spełnione

```javascript
const temperatura = 22;
const wilgotnosc = 45;

if (temperatura >= 20 && temperatura <= 25 && wilgotnosc < 60) {
  document.write("Warunki w szklarni optymalne.<br>");
} else {
  document.write("Uwaga: Parametry mikroklimatu poza normą!<br>");
}
```

### Alternatywa (`||`) — wystarczy spełnienie co najmniej jednego warunku

```javascript
const dzienTygodnia = "sobota";
const czySwieto = false;

if (dzienTygodnia === "sobota" || dzienTygodnia === "niedziela" || czySwieto) {
  document.write("Biuro obsługi nieczynne — weekend lub święto.<br>");
} else {
  document.write("Biuro obsługi otwarte w godzinach 8:00 - 16:00.<br>");
}
```

### Mechanizm zwarcia (Short-Circuit Evaluation) w instrukcjach `if`

JavaScript ewaluuje wyrażenia logiczne w sposób leniwy:
* Dla operatora `&&`: jeśli lewa strona daje `false`, prawa strona **w ogóle nie jest sprawdzana**, ponieważ całe wyrażenie nie ma już szans na bycie prawdą.
* Dla operatora `||`: jeśli lewa strona daje `true`, prawa strona **nie jest sprawdzana**, ponieważ całe wyrażenie jest już na pewno prawdziwe.

> **Po co to jest:**  
> Łączenie warunków operatorami logicznymi upraszcza strukturę programu, eliminuje zduplikowany kod i czyni reguły biznesowe bardziej zwięzłymi i czytelnymi dla innych programistów.

> **Typowa pomyłka:**  
> Próba zapisu matematycznego przedziału w postaci `if (10 < x < 20)`. Taki zapis w JavaScript jest błędem semantycznym! Interpreter najpierw obliczy `10 < x`, co da wartość `true` lub `false`. Następnie wartość logiczna zostanie skonwertowana na liczbę (`1` lub `0`), a na końcu porównana z `20` (`1 < 20` lub `0 < 20`), co w obu przypadkach da `true`! Prawidłowy zapis przedziału zawsze wymaga rozbicia na dwa porównania połączone koniunkcją: `if (x > 10 && x < 20)`.

---

## 7. Rygor wejścia i wyjścia danych w Semestrze 1

Podczas tworzenia rozwiązań zadań w tym module obowiązują ścisłe standardy kwalifikacji INF.03 dla pierwszego semestru nauki:

### Pobieranie danych wejściowych (`prompt`)

Do interaktywnego pobierania wartości od użytkownika służy okno dialogowe `prompt()`. W tym semestrze obowiązuje **bezwzględny wymóg podawania wartości domyślnej** jako drugiego argumentu:

```javascript
const suroweWejscie = prompt("Podaj kwotę zamówienia w PLN:", "150");
const kwotaZamowienia = Number(suroweWejscie);
```

> **Ważna uwaga metodyczna:**  
> Wywołanie funkcji `prompt()` całkowicie wstrzymuje wykonywanie wątku JavaScript oraz renderowanie strony w przeglądarce do momentu, aż użytkownik kliknie przycisk "OK" lub "Anuluj". Pamiętaj również, że `prompt()` zawsze zwraca ciąg znaków (`string`), dlatego przed wykonaniem porównań liczbowych konieczna jest konwersja za pomocą `Number()` lub `parseInt()`.

### Wyprowadzanie danych na stronę (`document.write`)

Wszelkie wyniki obliczeń i komunikaty generowane przez skrypt należy umieszczać w elemencie o klasie `.wynik` przy użyciu instrukcji `document.write`. Aby przejść do nowej linii, wstawiamy znacznik HTML `"<br>"`:

```javascript
document.write(`Wprowadzona kwota: ${kwotaZamowienia} zł.<br>`);
if (kwotaZamowienia >= 200) {
  document.write("Kwalifikacja: Darmowa dostawa kurierska.<br>");
} else {
  document.write("Kwalifikacja: Standardowa opłata za dostawę (15 zł).<br>");
}
```

Stosowanie metod manipulacji drzewem DOM (`getElementById`, `querySelector`, `innerHTML`, obsługa zdarzeń `addEventListener`) jest w tym semestrze surowo zabronione — narzędzia te zostaną wprowadzone w kolejnych semestrach.

### Diagnostyka w konsoli (`console.log`)

Do weryfikacji działania skryptu w narzędziach deweloperskich przeglądarki (F12 → Console) używamy `console.log`. Nie zastępuje ona wypisu na stronę — służy wyłącznie do diagnostyki:

```javascript
console.log("Decyzja systemu:", decyzja);
```

### Tekst TAK/NIE zamiast wartości logicznej

Gdy raport ma pokazać `"TAK"` albo `"NIE"` zamiast `true` / `false`, przygotuj osobną zmienną tekstową zwykłą instrukcją `if / else`. Operator warunkowy `? :` **nie należy** do zakresu tego modułu:

```javascript
let opisKarty = "NIE";
if (kartaKlubowa) {
  opisKarty = "TAK";
}
document.write("Karta klubowa aktywna: " + opisKarty + "<br>");
```
