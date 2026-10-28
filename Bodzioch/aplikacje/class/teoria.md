# Klasy CSS z JavaScript — `classList`

W [`14_atrybuty`](../14_atrybuty/) chowałeś element atrybutem `hidden` albo zmieniałeś `src`. Często wygląd jest już opisany w CSS (`.error`, `.open`, `.active`) — w JS tylko **włączasz / wyłączasz nazwę klasy**.

`element.classList` to lista tokenów (obiekt `DOMTokenList`), nie zwykły string.

```js
const karta = document.querySelector("#card");
karta.classList.add("featured");
```

Szablony tego działu ładują `skrypt.js` z atrybutem `defer` w `<head>`. Drzewo dokumentu i tak istnieje, zanim skrypt ruszy. Na stronę wypisujesz przez `textContent`.

---

## 1. Metody

| Metoda | Działanie |
| ------ | --------- |
| `add("a", "b")` | dodaje; drugi raz ta sama nazwa nic nie psuje |
| `remove("a", "b")` | zdejmuje; braku klasy nie zgłasza błędu |
| `toggle("a")` | jest → zdejmuje, nie ma → dodaje; zwraca `true` gdy **po** wywołaniu klasa **jest** |
| `toggle("a", true)` / `false` | wymusza dodanie / zdjęcie (`force`) |
| `contains("a")` | `true` / `false` |
| `replace("stara", "nowa")` | podmienia jedną nazwę na drugą |

```js
btn.addEventListener("click", function () {
  box.classList.toggle("dark-mode");
});

if (pole.classList.contains("invalid")) {
  pole.classList.remove("invalid");
  pole.classList.add("valid");
}
```

`replace` jest wygodny przy dwóch wykluczających się stanach (`error` → `success`).

---

## 2. Jak tablica, ale nie tablica

`classList.length` mówi, ile klas ma element. `classList[0]` albo `classList.item(0)` zwraca nazwę pierwszej. `classList.value` to cały string taki jak w atrybucie `class`. Po nazwach możesz przejść `classList.forEach(function (nazwa) { ... })`.

Do `map` albo `filter` potrzebujesz zwykłej tablicy. Zrób `[...element.classList]` albo `Array.from(element.classList)`. Sam `classList` nie jest tablicą, choć wygląda podobnie.

---

## 3. `classList` vs `className`

| | `classList` | `className` |
| - | ----------- | ----------- |
| typ | lista nazw | jeden string |
| dodaj jedną | `add("x")` — reszta zostaje | łatwo nadpisać cały `class` |
| sprawdź | `contains("x")` | sklejanie / `includes` na stringu kłamie (`"red".includes("re")`) |

`className = "box"` **kasuje** poprzednie klasy. Do sterowania stanem — zawsze `classList`.

---

## 4. Wzorce

**Jeden aktywny** (zakładki, plan, miniatura). Najpierw zdejmujesz klasę `active` ze wszystkich kart, potem dodajesz ją tylko na klikniętej. Dzięki temu widać dokładnie jedną aktywną rzecz.

```js
karty.forEach(function (k) {
  k.classList.remove("active");
});
kliknieta.classList.add("active");
```

**Ukryj klasą**, nie przez `style.display`. W CSS jest `.hidden { display: none; }`. W JS wołasz `add("hidden")` albo `remove("hidden")`. Wygląd zostaje w arkuszu, skrypt tylko przełącza nazwę.

**Klasa z `data-*`.** Nazwa klasy może stać w HTML, na przykład `data-kolor="red"`. Wtedy `pudelko.classList.add(przycisk.dataset.kolor)` nie wymaga wpisywania koloru w skrypcie.

**Rodzic.** W akordeonie klikasz nagłówek, a klasę `.open` dajesz na `.accordion-item`. Rodzica bierzesz z `this.parentElement` albo `naglowek.parentElement`.

**Gwiazdki / wypełnienie po indeksie.** Ocena gwiazdkami to nie „jeden active”. Po kliknięciu *i*-tej gwiazdki klasę `filled` albo `active` dostają **wszystkie** z indeksem `≤ i`, a te z prawej tę klasę tracą. Indeks bierzesz z `forEach` (drugi argument) albo z `Array.from(gwiazdki).indexOf(kliknieta)`.

```js
gwiazdki.forEach(function (g, indeks) {
  if (indeks <= kliknietyIndeks) {
    g.classList.add("filled");
  } else {
    g.classList.remove("filled");
  }
});
```

**Po co:** wizualnie widać ocenę 1–5 jako ciąg wypełnionych gwiazdek, nie jako jedną zapaloną ikonę. **Typowa pomyłka:** zostawić klasę tylko na klikniętej (wzór „jeden active”) — wtedy ocena 4 wygląda jak jedna złota gwiazdka zamiast czterech.

**Stepper (kroki kreatora).** Trzymasz numer bieżącego kroku w zmiennej. Na kółkach / znacznikach jednocześnie rządzą trzy stany klas:

| Stan kroku | Klasy na znaczniku |
| ---------- | ------------------ |
| już zaliczony (`nr < current`) | `completed`, bez `active` |
| bieżący (`nr === current`) | `active`, bez `completed` |
| jeszcze przed nami (`nr > current`) | ani `active`, ani `completed` |

Treść paneli: tylko bieżący `.step` ma `active` (reszta bez). Przyciski: na pierwszym kroku `btnPrev.disabled = true`, na ostatnim `btnNext.disabled = true` — to właściwość DOM, nie klasa `disabled` w CSS (choć CSS może stylować `[disabled]`).

**Po co:** uczeń widzi, gdzie jest, co już przeszedł i że nie wyjdzie poza zakres. **Typowa pomyłka:** dawać `active` na wszystkie dotychczasowe kroki (jak przy gwiazdkach) albo zostawić `completed` na bieżącym — stany się mieszają i CSS pokazuje zły kolor.

---

## 5. Jaki problem, jakie narzędzie

Gdy chcesz wyróżnić kartę, dodajesz klasę przez `add`. Gdy chcesz zdjąć ramkę błędu, wołasz `remove`. Tryb nocny albo „serce” (lubię / nie lubię) to `toggle`, ewentualnie `contains` i `if`. Gdy ma być widoczna tylko jedna zakładka, zdejmujesz `active` ze wszystkich i dodajesz na jednej. Gdy filtrujesz listę, chowasz niepasujące `li` klasą `hidden`. Gdy oceniasz gwiazdkami, wypełniasz wszystkie do indeksu włącznie. Gdy prowadzisz stepper, rozdzielasz `active` / `completed` na znacznikach i `disabled` na przyciskach brzegowych.

Nowe węzły (`createElement`) są w dziale 16. Tu klasy wkładasz na **istniejące** elementy z HTML.
