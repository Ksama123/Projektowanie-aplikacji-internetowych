# Zadanie 6: Sortowanie i odwracanie

## Cel

Strona pyta o pięć imion oddzielonych przecinkami. Zamień je na tablicę, ułóż alfabetycznie, a potem odwróć kolejność. Oba stany pokaż w elemencie o id „wynik”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `split(",")` dzieli tekst na tablicę.
- `sort()` układa alfabetycznie.
- `reverse()` odwraca kolejność.

## Wymagania

1. Imiona pobierasz jednym `prompt`.
2. W pudełku widać wpisane imiona, listę A–Z i listę Z–A.

## Przykład

Wpisz `Kasia,Tomek,Adam,Zosia,Bartek`. W pudełku pojawiają się linie „Wpisane: …”, „Lista obecności (A-Z): Adam,Bartek,Kasia,Tomek,Zosia” i „Od końca (Z-A): Zosia,Tomek,Kasia,Bartek,Adam”.
