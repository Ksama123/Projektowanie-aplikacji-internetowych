# Teoria: Pętle warunkowe while, do…while oraz instrukcje break i continue w języku JavaScript

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Ograniczenia pętli for i potrzeba pętli warunkowych

W poprzednim module poznaliśmy pętlę `for`. Jest ona idealnym narzędziem w sytuacjach, gdy przed rozpoczęciem powtarzania dokładnie wiemy, ile razy dana czynność ma zostać wykonana. Jeśli chcemy wygenerować cennik dla 10 kolejnych kilometrów przejazdu taksówką, wypisać 30 ponumerowanych biletów do kina lub przeiterować przez stały zakres liczb od 1 do 100 – pętla `for` sprawdza się doskonale.

Rzeczywistość tworzenia aplikacji biznesowych stawia przed nami jednak zupełnie inne wyzwania. Pomyślmy o następujących sytuacjach:
- system magazynowy wydaje paczki z rampy załadunkowej do momentu, aż łączna masa załadowanego towaru osiągnie dopuszczalną ładowność samochodu ciężarowego (np. 3500 kg),
- automat biletowy przyjmuje monety od pasażera dopóki wpłacona kwota nie pokryje ceny wybranego biletu,
- aplikacja w kawiarni pobiera kolejne zamówienia od klientów w kolejce dopóki zapas ziaren kawy w ekspresie nie spadnie poniżej poziomu krytycznego.

W żadnym z tych przypadków programista piszący kod nie wie z góry, ile powtórzeń (iteracji) będzie potrzebnych. Liczba ta zależy od danych wprowadzanych w trakcie działania programu, stanu symulacji lub decyzji użytkownika.

Do rozwiązywania takich problemów służą **pętle warunkowe**: pętla `while` oraz pętla `do...while`.

---

## 2. Anatomia i mechanika działania pętli while

Pętla `while` (z języka angielskiego: *dopóki*, *podczas gdy*) wykonuje blok kodu tak długo, jak długo jej warunek logiczny jest prawdziwy (`true`). Jest to pętla z **warunkiem początkowym** (wejściowym) – sprawdzenie warunku następuje **przed** każdym wykonaniem ciała pętli, w tym również przed wykonaniem pierwszym.

### Składnia pętli `while`

```javascript
// 1. Inicjalizacja stanu przed pętlą
let stanPoczatkowy = wartosc;

// 2. Nagłówek pętli z warunkiem wejściowym
while (warunek_logiczny) {
  // 3. Ciało pętli — instrukcje wykonywane w każdej iteracji

  // 4. Modyfikacja stanu wpływająca na warunek logiczny
  modyfikacja;
}
```

### Praktyczny przykład biznesowy: Rozładunek magazynu palet

Wyobraźmy sobie aplikację rejestrującą rozładunek palet w centrum logistycznym. W magazynie znajduje się 15 palet, a wózek widłowy pobiera jednorazowo po 3 palety. Chcemy symulować kolejne kursy wózka aż do całkowitego opróżnienia strefy buforowej:

```javascript
let pozostalePalety = 15;
let numerKursu = 1;

document.write("<div class=\"wynik\">");
document.write("<h3>Rozpoczęcie rozładunku strefy buforowej</h3>");

while (pozostalePalety > 0) {
  document.write(`<p>Kurs nr <strong>${numerKursu}</strong>: pobrano 3 palety. Pozostało w strefie: <strong>${pozostalePalety - 3}</strong> palet.</p>`);
  pozostalePalety -= 3;
  numerKursu++;
}

document.write("<p><strong>Rozładunek zakończony. Strefa buforowa jest pusta.</strong></p>");
document.write("</div>");
```

### Przebieg wykonania krok po kroku:
1. Przed wejściem do pętli deklarujemy i inicjalizujemy zmienne `pozostalePalety = 15` oraz `numerKursu = 1`.
2. Interpreter sprawdza warunek: `15 > 0`, co daje `true`.
3. Wykonywane jest ciało pętli: na ekranie pojawia się informacja o kursie 1, zmienna `pozostalePalety` zmniejsza się do 12, a `numerKursu` zwiększa się do 2.
4. Interpreter wraca do nagłówka pętli i bada warunek dla nowej wartości: `12 > 0` (`true`).
5. Cykl powtarza się dla wartości 9, 6 oraz 3.
6. Przy wartości `pozostalePalety = 0` interpreter bada warunek: `0 > 0`, co daje `false`.
7. Pętla natychmiast kończy działanie, a interpreter przechodzi do instrukcji znajdujących się za klamrą zamykającą `}`.

**Po co to jest:** Pętla `while` jest niezastąpiona, gdy liczba iteracji zależy od zmieniającego się w trakcie programu stanu zmiennych, a my nie chcemy wykonywać żadnej operacji, jeśli warunek od samego początku nie jest spełniony (np. magazyn był pusty już w chwili uruchomienia skryptu).

**Typowa pomyłka:** Zapomnienie o modyfikacji zmiennej warunkowej wewnątrz ciała pętli (np. pominięcie linijki `pozostalePalety -= 3;`). Sprawia to, że warunek `pozostalePalety > 0` pozostaje prawdziwy na zawsze, co wywołuje pętlę nieskończoną i zawiesza kartę przeglądarki.

---

## 3. Pętla do…while – gwarancja co najmniej jednego wykonania

W pętli `while` może zdarzyć się sytuacja, w której warunek początkowy jest fałszywy od samego początku (np. `let stanKonta = 0; while (stanKonta > 0) { ... }`). Wówczas ciało pętli nie wykona się ani razu.

Istnieją jednak sytuacje, w których pewną czynność **musimy wykonać przynajmniej jeden raz**, a dopiero po jej wykonaniu możemy sprawdzić, czy należy ją powtórzyć. Klasycznymi przykładami są:
- pobranie od użytkownika danych za pomocą okna dialogowego i sprawdzenie ich poprawności,
- wykonanie pierwszego rzutu kostką w grze i sprawdzenie, czy wyrzucono oczekiwaną liczbę oczek,
- próba nawiązania połączenia diagnostycznego przed sprawdzeniem kodu odpowiedzi.

W takich sytuacjach stosujemy konstrukcję `do...while` (z warunkiem **wyjściowym**).

### Składnia pętli `do...while`

```javascript
// 1. Inicjalizacja stanu
let zmienna = wartosc;

do {
  // 2. Ciało pętli — wykona się ZAWSZE co najmniej raz

  // 3. Modyfikacja stanu
  modyfikacja;

} while (warunek_logiczny); // 4. Średnik na końcu konstrukcji!
```

### Praktyczny przykład: Kontrola minimalnej wpłaty w myjni samochodowej

Klient podjeżdża do myjni bezdotykowej. Minimalna opłata za uruchomienie programu mycia wynosi 10 zł. Automat przyjmuje kolejne żetony (każdy o wartości 5 zł). Bez względu na wszystko, klient musi wrzucić co najmniej jeden żeton, po czym automat wyświetla aktualną sumę i sprawdza, czy kwota jest już wystarczająca:

```javascript
let wplaconaKwota = 0;
let wrzuconeZetony = 0;
const KOSZT_ZETONU = 5; // zł
const WYMAGANE_MINIMUM = 10; // zł

document.write("<div class=\"wynik\">");
document.write("<h3>Automat myjni bezdotykowej</h3>");

do {
  wrzuconeZetony++;
  wplaconaKwota += KOSZT_ZETONU;
  document.write(`<p>Wrzucono żeton nr <strong>${wrzuconeZetony}</strong> (5 zł). Łącznie: <strong>${wplaconaKwota} zł</strong> / wymagane min. ${WYMAGANE_MINIMUM} zł.</p>`);
} while (wplaconaKwota < WYMAGANE_MINIMUM);

document.write("<p style=\"color: green;\"><strong>Wymagana kwota osiągnięta. Uruchamianie programu mycia...</strong></p>");
document.write("</div>");
```

### Interakcja z użytkownikiem przez prompt() i wstrzymanie skryptu

Funkcja `prompt(komunikat, wartoscDomyslna)` zawsze wymaga drugiego argumentu (wartości domyślnej). Wynik jest typu tekstowego (`string`), dlatego **limity i liczniki liczbowe** konwertujemy przez `Number()`:

```javascript
// Limit / stan początkowy przed pętlą while (wzór z zadań nauka i sprawdzianu):
const maxZamowien = Number(prompt("Podaj maksymalną liczbę zamówień na bieżącej zmianie:", "6"));
let kajakiWHangarze = Number(prompt("Podaj początkową liczbę kajaków w hangarze:", "16"));
```

Gdy w pętli `do...while` pobieramy **odpowiedź tekstową** (np. tak/nie lub kod PIN), `Number()` nie jest potrzebne:
```javascript
let kodDostepu;
do {
  kodDostepu = prompt("Podaj 4-cyfrowy kod PIN do bramy:", "1234");
} while (kodDostepu !== "1234");
```

Należy pamiętać o kluczowym mechanizmie przeglądarki: **okno dialogowe `prompt()` jest synchroniczne i wstrzymuje wykonanie całego wątku JavaScript na stronie**. Oznacza to, że dopóki użytkownik nie wpisze wartości i nie kliknie przycisku „OK” lub „Anuluj”, przeglądarka zatrzymuje odliczanie i nie przetwarza dalszego kodu.

**Po co to jest:** Konstrukcja `do...while` gwarantuje, że kod wewnątrz bloku wykona się przed pierwszą ewaluacją warunku logicznego. Eliminuje to konieczność sztucznego powielania kodu (np. pisania pierwszego zapytania `prompt()` przed pętlą `while`, a kolejnego w jej wnętrzu).

**Typowa pomyłka:** (1) Brak `Number()` przy limicie liczbowym — wtedy przy `+` może dojść do sklejania napisów. (2) Zapomnienie o obowiązkowym średniku `;` po nawiasie zamykającym `while (warunek);`. W języku JavaScript brak średnika po `do { ... } while (...)` jest częstym źródłem trudnych do wykrycia błędów składniowych, zwłaszcza gdy kolejny wiersz zaczyna się od nawiasu lub literału szablonu.

---

## 4. Sterowanie przepływem w pętlach: instrukcje break i continue

Czasami w trakcie wykonywania iteracji zachodzi zdarzenie nadzwyczajne, które wymaga natychmiastowej zmiany domyślnego zachowania pętli. Do precyzyjnego sterowania służą dwa słowa kluczowe: `break` oraz `continue`.

### Instrukcja break – natychmiastowe przerwanie pętli

Słowo kluczowe `break` natychmiast przerywa działanie całej pętli. Sterowanie programem zostaje bezwarunkowo przekazane do pierwszej instrukcji znajdującej się za blokiem pętli.

Instrukcję `break` stosujemy najczęściej w sytuacjach awaryjnych lub poszukiwawczych:
- gdy wykryto błąd krytyczny (np. uszkodzenie czujnika na linii produkcyjnej),
- gdy znaleziono poszukiwany element i dalsze sprawdzanie nie ma uzasadnienia ekonomicznego ani wydajnościowego,
- gdy przekroczono limit bezpieczeństwa.

#### Przykład: Limit wagowy windy towarowej

Winda towarowa w hurtowni budowlanej pobiera kolejne worki z cementem (każdy o wadze 25 kg). Maksymalny dopuszczalny udźwig windy wynosi 100 kg. Jeśli kolejny worek przekroczyłby dopuszczalną nośność, załadunek musi zostać natychmiast przerwany:

```javascript
let wagaCalkowita = 0;
let numerWorka = 1;
const WAGA_WORKA = 25; // kg
const MAX_UDZWIG = 80; // kg — winda pomieści max 3 worki (75 kg)

document.write("<div class=\"wynik\">");
document.write("<h3>Załadunek windy towarowej</h3>");

while (numerWorka <= 10) {
  if (wagaCalkowita + WAGA_WORKA > MAX_UDZWIG) {
    document.write(`<p style=\"color: red;\"><strong>UWAGA: Przekroczenie udźwigu! Worek nr ${numerWorka} nie został załadowany.</strong></p>`);
    break; // Natychmiastowe przerwanie pętli
  }

  wagaCalkowita += WAGA_WORKA;
  document.write(`<p>Załadowano worek nr <strong>${numerWorka}</strong> (25 kg). Łączna waga w windzie: <strong>${wagaCalkowita} kg</strong>.</p>`);
  numerWorka++;
}

document.write(`<p>Winda gotowa do odjazdu. Masa całkowita ładunku: <strong>${wagaCalkowita} kg</strong>.</p>`);
document.write("</div>");
```

**Po co to jest:** `break` pozwala uniknąć zbędnych przebiegów pętli po osiągnięciu zamierzonego celu lub natychmiast zareagować na stan awaryjny bez konieczności komplikowania głównego warunku w nagłówku pętli.

**Typowa pomyłka:** Próba użycia `break` poza pętlą lub instrukcją `switch`. Użycie `break` np. wewnątrz samodzielnego bloku `if` (który nie znajduje się w pętli) spowoduje błąd składniowy `SyntaxError: Illegal break statement`.

---

### Instrukcja continue – pominięcie bieżącej iteracji

Słowo kluczowe `continue` nie przerywa całej pętli. Powoduje ono natychmiastowe zakończenie **tylko bieżącej iteracji** – wszystkie instrukcje znajdujące się w ciele pętli poniżej słowa `continue` zostają pominięte, a interpreter przechodzi od razu do kolejnego sprawdzenia warunku (lub kroku inkrementacji w pętli `for`).

Instrukcję `continue` stosujemy do filtrowania i omijania danych:
- pomijanie wadliwych partii towaru przy kontroli jakości,
- pomijanie sobót i niedziel przy generowaniu harmonogramu dni roboczych,
- ignorowanie pustych lub niepełnych rekordów.

#### Przykład: Kontrola jakości butelek w rozlewni soków

Na taśmie produkcyjnej przemieszcza się 6 butelek oznaczonych numerami od 1 do 6. Butelka numer 3 ma skazę fabryczną i musi zostać pominięta przez dyszę napełniającą:

```javascript
let numerButelki = 0;

document.write("<div class=\"wynik\">");
document.write("<h3>Linia rozlewnicza soków owocowych</h3>");

while (numerButelki < 6) {
  numerButelki++; // Bardzo ważne: inkrementacja PRZED instrukcją continue!

  if (numerButelki === 3) {
    document.write(`<p style=\"color: orange;\">Butelka nr <strong>${numerButelki}</strong> odrzucona przez czujnik (skaza szkła). Pomijanie napełniania.</p>`);
    continue; // Przeskok do kolejnej iteracji
  }

  document.write(`<p>Butelka nr <strong>${numerButelki}</strong>: napełniono sokiem pasteryzowanym i zakapslowano.</p>`);
}

document.write("<p>Partia produkcyjna obsłużona pomyślnie.</p>");
document.write("</div>");
```

### Pułapka pętli nieskończonej przy użyciu continue w while

Zwróćmy szczególną uwagę na położenie instrukcji `numerButelki++` w powyższym kodzie. Gdybyśmy umieścili licznik na samym końcu pętli, tak jak to zwykle robimy:

```javascript
// BŁĘDNY KOD — PĘTLA NIESKOŃCZONA!
let numerButelki = 0;
while (numerButelki < 6) {
  if (numerButelki === 3) {
    continue; // BŁĄD: przeskakujemy instrukcję numerButelki++, więc numerButelki na zawsze pozostaje 3!
  }
  document.write(`<p>Butelka nr ${numerButelki}</p>`);
  numerButelki++;
}
```
wtedy przy `numerButelki === 3` instrukcja `continue` spowodowałaby ominięcie linijki `numerButelki++`. W efekcie zmienna `numerButelki` nigdy nie osiągnęłaby wartości 4, a pętla wykonywałaby się w nieskończoność dla wartości 3!

**Po co to jest:** `continue` pozwala pisać czytelny, płaski kod bez konieczności głębokiego zagnieżdżania instrukcji w kolejnych blokach `if { ... } else { ... }`. Pomijamy przypadki nieistotne na początku pętli, a właściwy kod wykonujemy poniżej.

**Typowa pomyłka:** Umieszczenie modyfikatora zmiennej sterującej (`i++`, `i += krok`) poniżej instrukcji `continue` w pętli `while`, co natychmiast prowadzi do pętli nieskończonej.

---

## 5. Pętla nieskończona – dlaczego przeglądarka zamarza?

Jednym z najczęstszych błędów początkującego programisty jest stworzenie **pętli nieskończonej** (*infinite loop*).

Środowisko uruchomieniowe JavaScript w przeglądarce internetowej wykonuje kod skryptu w **jednym głównym wątku** (tzw. *Main Thread*). Ten sam wątek odpowiada za:
- wykonywanie obliczeń JavaScript,
- przeliczanie stylów CSS i renderowanie grafiki na ekranie,
- odbieranie interakcji użytkownika (klikanie przycisków, przewijanie strony, wpisywanie tekstu).

Gdy interpreter napotka pętlę, której warunek nigdy nie przyjmuje wartości `false`:
```javascript
let i = 10;
while (i > 0) {
  // Brak dekrementacji i-- powoduje, że 10 > 0 jest zawsze prawdziwe!
  document.write("<p>Pętla trwa...</p>");
}
```
główny wątek zostaje w 100% uwięziony w wykonywaniu iteracji. Ponieważ interpreter nigdy nie opuszcza pętli, przeglądarka nie ma możliwości odświeżenia widoku ani zareagowania na kliknięcia. Karta przeglądarki przestaje odpowiadać („zamarza”), a jedynym ratunkiem jest jej wymuszone zamknięcie przez menedżer zadań.

### Zasady bezpiecznego tworzenia pętli:
1. **Zawsze upewnij się, że warunek stopu jest osiągalny:** każda iteracja musi przybliżać stan programu do niespełnienia warunku (zmniejszanie licznika, zwiększanie sumatora, pobranie flagi stopu).
2. **Sprawdź relację operatora i kroku:** jeśli krok rośnie (`i++`), warunek powinien badać górną granicę (`i < max`). Jeśli krok maleje (`i--`), warunek musi badać dolną granicę (`i > min`).
3. **Uważaj na instrukcję `continue`:** modyfikacja zmiennej warunkowej w pętli `while` musi nastąpić przed instrukcją `continue`.

**Po co to jest:** Zrozumienie jednowątkowej natury języka JavaScript uczy szacunku do zasobów procesora i zapobiega błędom krytycznym paraliżującym interfejs użytkownika.

**Typowa pomyłka:** Zastosowanie błędnego operatora logicznego w warunku pętli, np. `while (x !== 0)` zamiast `while (x > 0)`. Jeśli zmienna `x` startuje od 5 i w każdym kroku odejmujemy 2 (5, 3, 1, -1, -3...), wartość `x` przeskoczy zero i nigdy nie będzie równa dokładnie 0, co wywoła pętlę nieskończoną.

---

## 6. Standard wyprowadzania danych na stronę w Semestrze 1

W bieżącym semestrze obowiązuje ścisły standard prezentacji wyników działania skryptów:
- Wypisujemy wyniki za pomocą polecenia `document.write()`.
- Wszystkie generowane elementy HTML umieszczamy wewnątrz dedykowanego kontenera wyniku: `<div class="wynik">...</div>`.
- Do strukturyzacji tekstu stosujemy czytelne znaczniki semantyczne: nagłówki `<h3>`, akapity `<p>`, wyróżnienia `<strong>` oraz przełamania linii `<br>`.
- Równolegle z wypisem na stronę rejestrujemy kluczowe etapy przetwarzania w konsoli za pomocą `console.log()`.

Wszelkie metody manipulacji obiektami DOM znane z późniejszych semestrów, takie jak `document.getElementById()`, `document.querySelector()` czy `addEventListener()`, są w Semestrze 1 **bezwzględnie zabronione**. Pozwala to skupić się w 100% na czystej logice algorytmicznej i strukturach sterujących języka JavaScript bez rozpraszania uwagi na architekturę zdarzeniową przeglądarki.

**Po co to jest:** Zastosowanie `document.write` w kontenerze `<div class="wynik">` pozwala natychmiast zobaczyć wygenerowany przez pętlę dokument HTML bezpośrednio w oknie przeglądarki, ucząc jednocześnie czytelnego łączenia tekstu z tagami języka HTML.

**Typowa pomyłka:** Próba użycia `document.getElementById("wynik").innerHTML = ...`, co stanowi naruszenie rygoru programowego Semestru 1 i skutkuje odrzuceniem kodu podczas automatycznego audytu.
