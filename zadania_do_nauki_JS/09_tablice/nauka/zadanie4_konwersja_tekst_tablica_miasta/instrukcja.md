# Zadanie 4: Konwersja tekst – tablica

## Cel

Strona pyta o pięć miast oddzielonych przecinkami. Zamień ten napis na tablicę, dopisz „Radom” na końcu i w elemencie o id „wynik” pokaż drugie miasto oraz całą trasę złożoną separatorem „ -> ”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `split(",")` dzieli tekst na tablicę.
- `push` dodaje miasto na koniec.
- `join(" -> ")` składa tablicę z powrotem w jeden napis.

## Wymagania

1. Miasta pobierasz jednym `prompt`.
2. W pudełku widać wpisane dane, drugie miasto (indeks 1) i trasę po dodaniu „Radom”.

## Przykład

Wpisz `Paryż,Rzym,Londyn,Praga,Wiedeń`. W pudełku pojawiają się linie „Wpisane dane: Paryż,Rzym,Londyn,Praga,Wiedeń”, „Drugie miasto do odwiedzenia: Rzym” i „Twoja trasa wycieczki: Paryż -> Rzym -> Londyn -> Praga -> Wiedeń -> Radom”.
