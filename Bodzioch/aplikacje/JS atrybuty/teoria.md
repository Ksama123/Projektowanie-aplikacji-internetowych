# Atrybuty elementów DOM

W [`12_selektory_tresc`](../12_selektory_tresc/) szukasz węzła i zmieniasz **tekst**. W [`13_zdarzenia`](../13_zdarzenia/) to samo dzieje się po akcji użytkownika.

**Atrybut** to informacja w znaczniku HTML: `src`, `href`, `alt`, `type`, `disabled`, `data-cena`. JavaScript umie ją odczytać i podmienić — bez przepisywania całego HTML.

```html
<img id="foto" src="start.jpg" alt="Start" data-id="7">
<button id="wyslij" disabled>Wyślij</button>
```

```js
const foto = document.querySelector("#foto");
foto.getAttribute("src");          // "start.jpg"
foto.setAttribute("src", "nowy.jpg");
foto.dataset.id;                   // "7"
document.querySelector("#wyslij").removeAttribute("disabled");
```

Nasłuchiwanie jak w 13: `addEventListener("click", …)` / `"change"`. Tu nowość jest **co** zmieniasz (atrybut), nie **kiedy**.

Skrypt na końcu `body` albo `defer`.

---

## 1. Cztery metody

| Metoda | Działanie |
| ------ | --------- |
| `getAttribute("nazwa")` | wartość albo `null` (brak atrybutu) |
| `setAttribute("nazwa", "wartość")` | ustawia; jeśli nie było — dodaje |
| `hasAttribute("nazwa")` | `true` / `false` |
| `removeAttribute("nazwa")` | usuwa całkowicie |
| `toggleAttribute("nazwa")` | jest → usuwa, nie ma → dodaje (wygodne przy `hidden`, `disabled`) |

```js
const img = document.querySelector("#foto");
img.getAttribute("alt");                 // tekst albo null
img.setAttribute("alt", "Kot na oknie");
if (!img.hasAttribute("alt")) {
  img.setAttribute("alt", "Brak opisu");
}
```

Nazwa atrybutu to string, tak jak w HTML: `"src"`, `"data-price"`, `"aria-pressed"`.

Po tabeli warto zapamiętać jedną pułapkę: **aktualny wpis w polu** to `.value` albo `.checked`, nie `getAttribute("value")`. Atrybut `value` w HTML to wartość startowa. Po pisaniu w polu właściwość i atrybut mogą się rozjechać.

Klasy CSS z JS (`classList`) są w dziale 15. Tu zmieniasz atrybut albo `hidden` / `disabled`, nie listę klas.

---

## 2. Atrybuty logiczne

`disabled`, `readonly`, `hidden`, `checked`, `required` — w HTML **samo istnienie** znaczy „tak”. Wartość może być pusta.

```html
<button disabled>Nieklikalny</button>
<p hidden>Niewidoczny</p>
```

W JS dwa równoważne style (wybierz jeden w zadaniu i trzymaj się go):

```js
przycisk.setAttribute("disabled", "");
przycisk.removeAttribute("disabled");

przycisk.disabled = true;
przycisk.disabled = false;

panel.toggleAttribute("hidden");
```

`hidden` chowa element (przeglądarka nie pokazuje go). To nie `classList` — klasy są tematem 15.

Pole tylko do odczytu: `readonly` (widać wartość, nie da się wpisać). `disabled` — pole nieaktywne i zwykle **nie** idzie w wysyłce formularza.

---

## 3. `data-*` i `dataset`

Własne dane trzymaj w `data-…`, nie w `id` ani w widocznym tekście.

```html
<button class="kolor" data-color="#ffd6a5" data-product-id="101">Pastel</button>
<div class="produkt" data-price="1200">Smartfon</div>
```

```js
const btn = document.querySelector(".kolor");
btn.getAttribute("data-color");   // "#ffd6a5"
btn.dataset.color;                // to samo
btn.dataset.productId;            // "101"  ← myślnik w HTML → camelCase w JS
```

| HTML | JS |
| ---- | -- |
| `data-color` | `dataset.color` |
| `data-product-id` | `dataset.productId` |
| `data-max-value` | `dataset.maxValue` |

Wartość z atrybutu jest **zawsze tekstem**. Do porównań liczbowych: `Number(...)` albo `parseInt(...)`.

Zapis: `element.dataset.status = "ok"` doda `data-status="ok"`.

---

## 4. Atrybut vs właściwość

To, co stoi w HTML, i to, co żyje w obiekcie JS, nie zawsze jest tym samym.

| | `getAttribute` | właściwość (`el.typ`) |
| - | -------------- | --------------------- |
| `input` `value` | wartość **początkowa** z HTML | **aktualny** wpis użytkownika |
| `a` `href` | dokładnie to z kodu (`index.html`) | pełny adres URL |
| `img` `src` | zapis z HTML | często pełny URL |

Do pól formularza w praktyce: **`pole.value`** i **`pole.checked`** (jak w 13). `getAttribute("value")` nie śledzi tego, co uczeń właśnie wpisał.

`type` hasła: `pole.setAttribute("type", "text")` albo `pole.type = "text"`.

---

## 5. Typowe atrybuty w zadaniach

- **`src` / `alt`** — obrazek; `alt` dla opisu (i dostępności).
- **`href` / `target` / `title`** — link; `target="_blank"` nowa karta; `title` dymek po najechaniu.
- **`type`** — `password` ↔ `text`.
- **`disabled` / `readonly` / `hidden`** — stany sterowania.
- **`data-*`** — cena, kolor, id panelu (`data-target`).

Krótko ARIA (egzamin zawodowy bywa o dostępności): `aria-pressed`, `aria-selected`. To zwykłe atrybuty — te same cztery metody. CSS może stylować `[aria-pressed]` albo `[data-checked]` **bez** `classList`.

---

## 6. Problem → narzędzie

- **Podmień zdjęcie** → `getAttribute("data-src")` + `setAttribute("src", …)`
- **Odblokuj przycisk** → `removeAttribute("disabled")` albo `.disabled = false`
- **Pokaż / ukryj blok** → `hidden` / `toggleAttribute("hidden")`
- **Cena, wynik, filtr** → `data-*` + `Number(...)`
- **Link zewnętrzny** → `href` + `setAttribute("target", "_blank")`
- **Czy atrybut w ogóle jest** → `hasAttribute`

Klasy CSS jako główne narzędzie — dział 15. Nowe węzły (`createElement`) — 16.
