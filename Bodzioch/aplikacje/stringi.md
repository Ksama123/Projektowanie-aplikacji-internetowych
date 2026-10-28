# Sprawdzian – Metody napisów

Czas: do 80 minut. Zadanie 6 podsumowuje. Zadanie 7 jest dodatkowe.

HTML jest w szablonie. Piszesz `script.js`. Wypis jak od Math: `getElementById("wynik").textContent`. Napisy są **niezmienne** — metoda zwraca nowy string.

---

## Ściąga

Poniższy blok przypomina składnię. Pod spodem jest opis, kiedy z czego korzystasz.

```js
const t = prompt("Tekst:").trim();
t.length;
t.toLowerCase();
t.toUpperCase();
t.slice(0, 3);
t.includes("@");
t.startsWith("http");
t.indexOf("@");
t.replace("a", "b");
t.split(" ");
t.padStart(6, "0");
```

`length` to właściwość, nie funkcja — bez `()`. Indeksy od zera. `trim` zdejmuje spacje z brzegów; same spacje zostają pustym napisem.

`slice(start, end)` nie obejmuje `end`. Ujemny indeks liczy od końca. `replace` zmienia **pierwsze** trafienie. Wszystkie: `replaceAll`.

`indexOf` zwraca `-1`, gdy nic nie ma. Nie porównuj wyniku z `0` w ciemno — zero to pierwsze miejsce, nie porażka.

`split` daje tablicę. `join` (metoda tablicy) składa z powrotem. Przy `split(",")` zrób `trim` na kawałkach, bo zostają spacje.

Pierwsza litera wielka: wielka pierwsza + `slice(1)` małymi. Dopełnienie zerami: `padStart(długość, "0")`.

Wypis: `textContent` i `"\n"`. Nie `document.write`.

## Zestawy

Grupa A: inicjały, e-mail, skrót, kod pocztowy, maska hasła, walidacja. Zadanie 7: domena z URL.

Grupa B: wielka litera, zawiera słowo, wycinek daty, numer konta, tytuły słów, czyszczenie. Zadanie 7: liczba słów.
