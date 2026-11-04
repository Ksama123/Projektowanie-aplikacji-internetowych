# Szybka Pomoc Składniowa — Moduł T39: Style inline z JS (element.style)

Podręczna ściąga składniowa i organizacyjna do pracy z dynamicznymi stylami liniowymi w drzewie DOM.

---

## 1. Struktura zadania: szablon roboczy a rozwiązanie

| Element | Folder zadania (np. `zadanie1_.../`) | Podfolder `rozwiazanie/` |
|---|---|---|
| **Rola pliku** | Miejsce Twojej samodzielnej pracy na lekcji. | Wzorzec referencyjny do weryfikacji poprawności. |
| **Kod HTML (`index.html`)** | Gotowa struktura z identyfikatorami i klasami. | Identyczny szkielet z podpiętym kompletnym skryptem. |
| **Arkusz CSS (`style.css`)** | Gotowy arkusz stylów wizualnych. | Identyczny arkusz stylów. |
| **Skrypt JS (`script.js`)** | Przygotowane stałe referencji do DOM oraz komentarze z krokami implementacji. | W pełni działający, kompletny kod rozwiązania. |

---

## 2. Podstawowa składnia element.style

```javascript
// 1. Pobranie referencji do elementu DOM
const podglad = document.querySelector("#podglad-karty");

// 2. Nadanie stylu z jednostką miary (notacja camelCase)
podglad.style.fontSize = "20px";
podglad.style.backgroundColor = "#e0f2fe";
podglad.style.borderRadius = "8px";

// 3. Wartość bezwymiarowa (np. przezroczystość od 0 do 1)
podglad.style.opacity = "0.75";

// 4. Połączenie wartości z suwaka z jednostką miary za pomocą template literal
const suwak = document.querySelector("#suwak-szerokosc");
suwak.addEventListener("input", () => {
    podglad.style.width = `${suwak.value}px`;
});

// 5. Resetowanie stylu do wartości z zewnętrznego arkusza CSS
podglad.style.backgroundColor = "";
podglad.style.width = "";

// 6. Odczyt ostatecznego stylu wyliczonego przez przeglądarkę
const stylObliczony = window.getComputedStyle(podglad);
console.log(stylObliczony.fontSize); // np. "20px"
```

---

## 3. Przekształcanie nazw CSS na camelCase

| Reguła w CSS | Odpowiednik w JavaScript | Przykładowa wartość |
|---|---|---|
| `background-color` | `element.style.backgroundColor` | `"#2563eb"` |
| `font-size` | `element.style.fontSize` | `"18px"` |
| `border-radius` | `element.style.borderRadius` | `"12px"` |
| `margin-top` | `element.style.marginTop` | `"24px"` |
| `padding-left` | `element.style.paddingLeft` | `"16px"` |
| `text-align` | `element.style.textAlign` | `"center"` |
| `box-shadow` | `element.style.boxShadow` | `"0 4px 6px rgba(0,0,0,0.1)"` |
| `border-color` | `element.style.borderColor` | `"#1e293b"` |
| `z-index` | `element.style.zIndex` | `"10"` (bezwymiarowe) |
| `opacity` | `element.style.opacity` | `"0.8"` (bezwymiarowe) |

---

## 4. Częste wzorce z zadań tego działu

```javascript
// Odczyt koloru z data-kolor="..." (dataset)
const kolor = przycisk.dataset.kolor;

// Procent z suwaka opacity (0.0–1.0) do etykiety tekstowej
const procent = Math.round(parseFloat(suwak.value) * 100);
etykieta.textContent = `Filtr: ${procent}%`;

// Kolor obramowania (camelCase) — używany na sprawdzianie
element.style.borderColor = probnik.value;
```

---

## 5. Szybkie przypomnienie (dobre nawyki)

1. **Zawsze pamiętaj o jednostce miary:** Przy właściwościach takich jak `width`, `height`, `fontSize`, `padding` czy `borderRadius` bezwzględnie dopisuj jednostkę (np. `${wartosc}px`). Sama liczba zostanie przez silnik CSS zignorowana. `padding` ≠ `margin`.
2. **Używaj zdarzenia input dla suwaków:** Do płynnej aktualizacji podglądu podczas przesuwania suwaka `<input type="range">` stosuj zdarzenie `input`, a nie `change`.
3. **Resetuj pustym ciągiem znaków:** Aby cofnąć styl liniowy i przywrócić definicję z pliku `style.css`, przypisz pusty łańcuch: `element.style.color = ""`.
4. **Weryfikuj w DevTools:** Otwórz narzędzia deweloperskie w przeglądarce (`F12`), przejdź do zakładki **Elements** i obserwuj na żywo atrybut `style="..."` w badanym znaczniku HTML.
5. **classList kontra element.style:** Do włączania/wyłączania stałych stanów używaj klas (`element.classList.toggle("aktywny")`). Do płynnych wartości wyliczanych w locie używaj `element.style`.
