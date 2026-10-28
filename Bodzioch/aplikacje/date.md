# Sprawdzian – Obiekt `Date`

Czas: do 80 minut. Zadanie 6 podsumowuje. Zadanie 7 jest dodatkowe (godzina).

HTML jest w szablonie. Piszesz `script.js`. Wypis jak od Math. Tablice zostawiasz na dział 09 — nazwy dni zrób `switch`.

---

## Ściąga

Poniższy blok przypomina składnię. Pod spodem jest opis, kiedy z czego korzystasz.

```js
const d = new Date(rok, miesiac - 1, dzien);
d.getFullYear();
d.getMonth(); // 0–11
d.getDate(); // dzień miesiąca 1–31
d.getDay(); // dzień tygodnia 0–6, niedziela = 0
d.setDate(d.getDate() + n);
Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
String(d.getDate()).padStart(2, "0");
```

Buduj datę z **liczb**. Użytkownik podaje miesiąc 1–12, konstruktor chce 0–11, stąd `miesiac - 1`. String `"2026-09-10"` bywa UTC i zjeżdża na poprzedni dzień — nie używaj.

`getDate` to numer w miesiącu. `getDay` to dzień tygodnia. To dwie różne rzeczy. `getMonth()` do wypisu musisz powiększyć o 1.

`setDate` przesuwa kalendarz (także przez koniec miesiąca). Różnica dni: odejmij `getTime()` (milisekundy) i podziel przez dobę. Ujemny wynik znaczy, że druga data jest wcześniejsza. `Math.round` gasi resztki strefy.

Format `DD.MM.YYYY`: dopełnij dzień i miesiąc do dwóch znaków. Wypis: `textContent` i `"\n"`.

## Zestawy

Grupa A (festiwal): konstruktor, format, dzień tygodnia, przesunięcie, różnica, podsumowanie. Zadanie 7: `HH:MM`.

Grupa B (szkoła / projekt): analogicznie, inne daty.
