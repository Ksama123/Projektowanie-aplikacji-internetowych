# Teoria: Dynamiczne style CSS z poziomu JavaScript (element.style)

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Właściwość element.style i obiekt CSSStyleDeclaration

Każdy węzeł drzewa DOM reprezentujący element HTML udostępnia właściwość `style`. Właściwość ta zwraca obiekt typu `CSSStyleDeclaration`, który reprezentuje atrybut liniowy `style="..."` danego elementu w dokumencie HTML.

Gdy modyfikujemy właściwości tego obiektu w kodzie JavaScript, przeglądarka natychmiast dopisuje lub aktualizuje odpowiednie reguły CSS w atrybucie `style` danego znacznika, co wywołuje natychmiastowe przerysowanie elementu na ekranie.

```javascript
const baner = document.querySelector("#baner-promocyjny");

// Nadanie koloru tła za pomocą stylu liniowego w JavaScript
baner.style.backgroundColor = "#2563eb";
baner.style.color = "#ffffff";
```

W wyniku wykonania tego skryptu silnik przeglądarki zaktualizuje kod elementu w pamięci DOM do postaci:
```html
<div id="baner-promocyjny" style="background-color: rgb(37, 99, 235); color: rgb(255, 255, 255);">
```

**Po co to jest:** Właściwość `element.style` umożliwia natychmiastową, płynną zmianę wyglądu pojedynczego elementu w reakcji na akcje użytkownika, zwłaszcza wtedy, gdy docelowe parametry wizualne nie są znane podczas pisania arkusza stylów i wynikają z bieżących obliczeń, pozycji myszy lub danych wprowadzanych w formularzu.

**Typowa pomyłka:** Oczekiwanie, że odczytanie `element.style.color` zwróci kolor zdefiniowany w zewnętrznym pliku `style.css`. Obiekt `element.style` widzi wyłącznie style liniowe (przypisane w atrybucie `style` znacznika lub nadane wcześniej przez JS). Jeśli właściwość określono wyłącznie w arkuszu CSS, odczyt `element.style.color` zwróci pusty łańcuch znaków (`""`).

---

## 2. Reguła notacji: z kebab-case na camelCase

W języku CSS wielowyrazowe nazwy właściwości zapisujemy z użyciem łącznika (notacja kebab-case), na przykład `background-color`, `font-size`, `border-radius`, `margin-top`. W języku JavaScript znak minus (`-`) jest operatorem arytmetycznym odejmowania. Zapis `element.style.background-color` parser czyta jako odejmowanie: `element.style.background - color`. Jeśli identyfikator `color` nie istnieje, pojawi się `ReferenceError`; zapis z myślnikiem **nie** jest poprawną nazwą właściwości stylu.

Dlatego w obiekcie `CSSStyleDeclaration` wszystkie nazwy właściwości CSS zostają przekształcone do notacji wielbłądziej (**camelCase**):
- Myślnik zostaje usunięty.
- Litera następująca bezpośrednio po usuniętym myślniku staje się wielką literą.

| Właściwość w arkuszu CSS (kebab-case) | Właściwość w obiekcie JS (camelCase) | Przykładowa poprawna wartość |
|---|---|---|
| `background-color` | `backgroundColor` | `"#10b981"` |
| `font-size` | `fontSize` | `"18px"` |
| `border-radius` | `borderRadius` | `"8px"` |
| `margin-top` | `marginTop` | `"24px"` |
| `padding-left` | `paddingLeft` | `"12px"` |
| `text-align` | `textAlign` | `"center"` |
| `border-width` | `borderWidth` | `"2px"` |
| `border-color` | `borderColor` | `"#1e293b"` |
| `z-index` | `zIndex` | `"10"` |
| `box-shadow` | `boxShadow` | `"0 2px 4px rgba(0, 0, 0, 0.2)"` |

### Przykład zastosowania:
```javascript
const karta = document.querySelector("#karta-produktu");

karta.style.backgroundColor = "#f8fafc";
karta.style.fontSize = "16px";
karta.style.borderRadius = "12px";
karta.style.textAlign = "center";
```

**Po co to jest:** Notacja camelCase pozwala odwoływać się do właściwości stylów CSS jak do zwykłych właściwości obiektów języka JavaScript, bez wywoływania konfliktów z operatorami języka.

**Typowa pomyłka:** Zapisywanie nazw z myślnikiem, na przykład `karta.style.font-size = "20px"`, co powoduje błąd składniowy. Inną częstą pomyłką jest literówka w wielkości liter, na przykład `karta.style.fontsize` (małe `s`), co nie wywoła błędu w konsoli, ale utworzy sztuczną, niezrozumiałą dla silnika CSS właściwość obiektu, pozostawiając wygląd elementu bez zmian.

---

## 3. Bezwzględna konieczność podawania jednostek miar

Wszystkie wartości przypisywane do właściwości obiektu `element.style` muszą być łańcuchami znaków (typ `string`). Jeżeli dana reguła w specyfikacji CSS wymaga jednostki miary (np. `px`, `%`, `rem`, `em`, `deg`, `s`), jednostka ta musi bezwzględnie znaleźć się w przypisywanym łańcuchu.

Przypisanie do właściwości wymagającej jednostki samej liczby spowoduje, że silnik CSS przeglądarki odrzuci taką deklarację jako nieprawidłową składniowo.

```javascript
const suwak = document.querySelector("#suwak-rozmiaru");
const podglad = document.querySelector("#ramka-podgladu");

suwak.addEventListener("input", () => {
    const rozmiar = suwak.value;
    
    // PRAWIDŁOWO: Wartość liczbowa połączona z jednostką "px" za pomocą literału szablonowego
    podglad.style.width = `${rozmiar}px`;
    podglad.style.height = `${rozmiar}px`;
});
```

### Właściwości bezwymiarowe (wyjątki od reguły jednostek):
Nieliczne właściwości w CSS przyjmują czyste wartości liczbowe bez jednostek. Do najczęściej stosowanych należą:
- `opacity` (zakres od `0` do `1` lub od `"0"` do `"1"`),
- `zIndex` (liczba całkowita określająca kolejność nakładania warstw),
- `lineHeight` (mnożnik wielkości czcionki, np. `"1.5"`).

```javascript
// Poprawne deklaracje bezwymiarowe
podglad.style.opacity = "0.85";
podglad.style.zIndex = "5";
```

**Po co to jest:** Standard CSS precyzyjnie rozróżnia jednostki bezwzględne (`px`) od względnych (`%`, `rem`). Przeglądarka nie może domyślać się intencji programisty, dlatego deklaracja bez jednostki jest traktowana jako błąd składni CSS.

**Typowa pomyłka:** Przypisywanie czystej liczby do właściwości wymiarowej: `podglad.style.width = 350;` lub `podglad.style.fontSize = 20;`. W konsoli deweloperskiej nie pojawi się żaden błąd JavaScript, ale szerokość i rozmiar tekstu nie ulegną zmianie, ponieważ parser CSS przeglądarki po cichu zignoruje niekompletną wartość.

---

## 4. Resetowanie i usuwanie stylów liniowych

Gdy nadamy elementowi styl liniowy przez JavaScript, styl ten zyskuje bardzo wysoki priorytet kaskady (specyficzności CSS) i przesłania reguły zdefiniowane w zewnętrznym arkuszu stylów `style.css`.

Aby usunąć styl liniowy i przywrócić domyślny wygląd elementu określony w zewnętrznym pliku CSS, należy przypisać do danej właściwości pusty łańcuch znaków (`""`) lub wywołać metodę `removeProperty()`.

```javascript
const btnReset = document.querySelector("#btn-przywroc-domyslne");
const ramka = document.querySelector("#ramka-podgladu");

btnReset.addEventListener("click", () => {
    // Sposób 1: Przypisanie pustego ciągu znaków (najwygodniejsze i najpopularniejsze)
    ramka.style.backgroundColor = "";
    ramka.style.width = "";
    ramka.style.height = "";
    
    // Sposób 2: Metoda removeProperty (wymaga nazwy w formacie kebab-case!)
    ramka.style.removeProperty("border-radius");
});
```

Przypisanie pustego łańcucha powoduje całkowite wycięcie danej deklaracji z atrybutu `style` w kodzie HTML elementu. W efekcie element natychmiast przejmuje styl zdefiniowany w klasie CSS lub regule znacznika w pliku `style.css`.

**Po co to jest:** Pozwala na tworzenie przycisków "Przywróć domyślne", czyszczenie filtrów podglądu oraz wyłączanie dynamicznych wyróżnień po zakończeniu interakcji bez konieczności pamiętania pierwotnych wartości z arkusza stylów.

**Typowa pomyłka:** Próba resetowania stylu przez przypisanie wartości `"none"`, `null` lub `undefined`. Na przykład `ramka.style.backgroundColor = "none"` to próba ustawienia nieistniejącego koloru, która zostanie odrzucona przez parser CSS, a styl liniowy nadal pozostanie aktywny. Jedynym prawidłowym sposobem usunięcia stylu jest przypisanie pustego ciągu `""`.

---

## 5. Odczyt stylów obliczonych: window.getComputedStyle() *(teoria / nieobowiązkowe na ćwiczeniach)*

W praktyce programistycznej często potrzebujemy sprawdzić rzeczywisty, aktualny wygląd elementu na ekranie (np. jego faktyczną szerokość w pikselach lub aktualny kolor tekstu wynikający z kaskady arkusza CSS). W zadaniach tego działu **nie musisz** używać `getComputedStyle` — wystarczy świadomość różnicy względem `element.style`.

Jak wiemy, `element.style.color` widzi jedynie styl liniowy. Aby odczytać ostateczny styl elementu po uwzględnieniu arkusza zewnętrznego, dziedziczenia i stylów domyślnych przeglądarki, używamy globalnej metody `window.getComputedStyle(element)`.

```javascript
const naglowek = document.querySelector("#tytul-sekcji");

// element.style widzi tylko pusty ciąg, jeśli styl pochodzi z pliku style.css:
console.log(naglowek.style.fontSize); // ""

// getComputedStyle zwraca rzeczywisty, przeliczony styl wyrenderowanego elementu:
const obliczonyStyl = window.getComputedStyle(naglowek);
console.log(obliczonyStyl.fontSize); // np. "28px"
console.log(obliczonyStyl.color);    // np. "rgb(15, 23, 42)"
```

Ważne cechy `window.getComputedStyle`:
1. Zwraca obiekt `CSSStyleDeclaration`, który jest **tylko do odczytu** (próba przypisania `obliczonyStyl.fontSize = "30px"` zakończy się błędem).
2. Wartości wymiarowe są zawsze przeliczane na piksele (`px`), a kolory na format `rgb(...)` lub `rgba(...)`.

**Po co to jest:** Umożliwia bezpieczny odczyt aktualnych wymiarów i parametrów elementu na ekranie, na przykład w celu dynamicznego wyliczenia przesunięcia, proporcji lub animacji na podstawie stanu początkowego z arkusza CSS.

**Typowa pomyłka:** Próba modyfikacji stylu za pomocą obiektu zwróconego przez `getComputedStyle`. Do modyfikacji służy wyłącznie `element.style`.

---

## 6. Masowe ustawianie stylów: właściwość element.style.cssText *(teoria / nieobowiązkowe na ćwiczeniach)*

Jeżeli zachodzi potrzeba jednoczesnego zdefiniowania wielu deklaracji stylu w jednym kroku, wygodnym rozwiązaniem jest właściwość `cssText`. Przyjmuje ona łańcuch znaków dokładnie taki sam, jak zawartość atrybutu `style` w kodzie HTML (z nazwami w formacie kebab-case i średnikami).

```javascript
const komunikat = document.querySelector("#komunikat-statusu");

// Nadpisanie całego atrybutu style jednym ciągiem deklaracji
komunikat.style.cssText = "background-color: #fef2f2; color: #991b1b; padding: 12px; border-radius: 6px;";
```

**Po co to jest:** Pozwala zaktualizować kilka właściwości naraz w pojedynczej operacji na drzewie DOM, co może być wygodne przy inicjalizacji złożonych szablonów wizualnych.

**Typowa pomyłka:** Zapominanie, że przypisanie do `element.style.cssText` bezwzględnie **nadpisuje cały dotychczasowy atrybut style**. Jeśli element posiadał wcześniej inne style liniowe, zostaną one bezpowrotnie usunięte. Aby dopisać styl bez usuwania poprzednich, należałoby zastosować operator `+=`: `element.style.cssText += " display: block;"`.

---

## 7. Kiedy używać element.style, a kiedy element.classList?

W nowoczesnym programowaniu interfejsów webowych zmiana wyglądu elementu może być zrealizowana zarówno przez dodanie klasy CSS (`element.classList.add()`), jak i przez bezpośrednią modyfikację stylu liniowego (`element.style`). Świadomy programista dobiera właściwe narzędzie w zależności od charakteru zmiany:

| Aspekt porównania | `element.classList` | `element.style` |
|---|---|---|
| **Charakter wartości** | Wartości dyskretne, stany binarne i skończone warianty (np. aktywny/nieaktywny, widoczny/ukryty, motyw jasny/ciemny). | Wartości płynne, ciągłe i dynamicznie wyliczane (np. suwak rozmiaru 10–500px, pozycja kursora, kolor z palety RGB). |
| **Miejsce definicji reguł** | Reguły i deklaracje estetyczne znajdują się w zewnętrznym pliku `style.css`. | Wartości generowane są w locie i wstrzykiwane bezpośrednio do znacznika HTML jako styl inline. |
| **Separacja kodu** | Czysty podział: CSS odpowiada za wygląd, JavaScript za logikę i przełączanie stanów. | Związanie kodu JS z konkretnymi wartościami wizualnymi. |
| **Priorytet w kaskadzie** | Standardowy priorytet selektora klasy (`0-0-1-0`). | Bardzo wysoki priorytet stylu liniowego (`0-1-0-0`), nadpisujący arkusze stylów. |

### Złota zasada architektoniczna:
- Jeśli zmiana wyglądu polega na włączeniu lub wyłączeniu z góry zaprojektowanego stanu (np. `.ukryty`, `.aktywny`, `.blad-walidacji`, `.motyw-kontrastowy`) — **zawsze stosuj `classList`**.
- Jeśli wartość jest wynikiem działania użytkownika w czasie rzeczywistym lub kalkulacji matematycznej (np. szerokość paska postępu w `%`, dynamiczne współrzędne elementu `left` i `top`, kolor z próbnika barw) — **stosuj `element.style`**.

**Po co to jest:** Chroni projekt przed bałaganem architektonicznym i koniecznością tworzenia setek sztucznych klas w CSS (np. `.szerokosc-10px`, `.szerokosc-11px`, `.szerokosc-12px`).

**Typowa pomyłka:** Nadużywanie `element.style.display = "none"` i `element.style.display = "block"` do sterowania widocznością komponentów interfejsu zamiast semantycznej klasy pomocniczej `.ukryty` zarządzanej przez `classList.toggle("ukryty")`.

---

## 8. Integracja stylów z kontrolkami formularza

W zadaniach praktycznych i egzaminacyjnych dynamiczne style najczęściej współpracują z kontrolkami formularza:
- `<input type="range">` — suwaki liczbowe o określonym zakresie (`min`, `max`, `step`), idealne do regulacji rozmiarów, dopełnienia (`padding`) i zaokrągleń,
- `<input type="color">` — systemowe próbniki barw zwracające kod koloru w formacie heksadecymalnym (`#rrggbb`),
- `<input type="number">` — precyzyjne pola liczbowe,
- `<select>` — listy rozwijane z predefiniowanymi wariantami.

### Płynna obsługa zdarzenia input:
Do płynnej regulacji suwaków i próbników kolorów należy używać zdarzenia `input`, które wyzwala się natychmiast przy każdym przesunięciu suwaka lub zmianie barwy:

```javascript
const suwakPrzezroczystosci = document.querySelector("#suwak-krycie");
const probnikTla = document.querySelector("#probnik-kolor");
const elementPodgladu = document.querySelector("#karta-podgladu");

// Zmiana barwy tła na żywo podczas wybierania z próbnika
probnikTla.addEventListener("input", () => {
    elementPodgladu.style.backgroundColor = probnikTla.value;
});

// Płynna regulacja przezroczystości podczas przesuwania suwaka
suwakPrzezroczystosci.addEventListener("input", () => {
    // Opacity jest wartością bezwymiarową z zakresu 0.0 - 1.0
    elementPodgladu.style.opacity = suwakPrzezroczystosci.value;
});
```

**Po co to jest:** Zdarzenie `input` zapewnia natychmiastową informację zwrotną dla użytkownika, dając wrażenie interaktywnej aplikacji działającej w czasie rzeczywistym bez potrzeby klikania dodatkowych przycisków zatwierdzających.

**Typowa pomyłka:** Użycie zdarzenia `change` zamiast `input` dla suwaków `<input type="range">`. Zdarzenie `change` wyzwala się dopiero w momencie puszczenia suwaka przez użytkownika, co odbiera interfejsowi pożądaną płynność.
