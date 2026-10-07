# Nauka – konstruktor i gettery

## Cel

Strona pyta o rok, miesiąc (1–12) i dzień. Zbuduj obiekt `Date` i w elemencie o id „wynik” pokaż rok z `getFullYear`, miesiąc z `getMonth` (0–11), miesiąc kalendarzowy (1–12) oraz dzień z `getDate`.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- Konstruktor: `new Date(rok, miesiac - 1, dzien)`. Miesiąc w konstruktorze to indeks 0–11, więc z promptu (1–12) odejmujesz 1.
- `getFullYear()` zwraca rok, `getMonth()` zwraca 0–11, `getDate()` zwraca dzień miesiąca.
- `Number(prompt(...))` zamienia tekst z okna na liczbę.

## Wymagania

1. Trzy liczby pobierasz z `prompt`.
2. Przy tworzeniu daty zamieniasz miesiąc człowieka (1–12) na indeks konstruktora.
3. W pudełku widać cztery linie z etykietami jak w przykładzie.

## Przykład

Wpisz `2026`, `9` i `10`. W pudełku pojawiają się linie „Rok: 2026”, „Miesiąc (getMonth): 8”, „Miesiąc (kalendarz): 9” i „Dzień: 10”.
