# Zadanie 8: Podsumowanie — lista uczestników wycieczki

## Cel

Uporządkuj listę osób jadących na wycieczkę. W jednym skrypcie łączysz `split`, `trim`, `indexOf`, `splice`, `push`, `sort`, `join` i `length`. Wynik pokaż w elemencie o id „wynik”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `split(",")` zamienia tekst z przecinkami na tablicę.
- `trim()` w pętli zdejmuje spacje przy każdym imieniu.
- `indexOf(imie)` daje indeks albo `-1`, gdy osoby nie ma.
- `splice(indeks, 1)` usuwa jedną osobę.
- `push`, `sort`, `join(" | ")`, `length`.

## Wymagania

1. Imiona oddzielone przecinkami pobierasz z `prompt` i przycinasz spacje.
2. Pytasz, kto zrezygnował. Jeśli jest na liście — usuwasz. Jeśli nie ma, nic nie usuwasz.
3. Pytasz o jedną nową osobę i dodajesz ją na koniec.
4. Listę sortujesz alfabetycznie.
5. W pudełku widać listę po `join(" | ")` oraz liczbę uczestników.

## Przykład

Wpisz `Ania, Bartek, Celina, Darek`, potem rezygnację `Bartek` i nową osobę `Ewa`. W pudełku pojawiają się linie „Lista: Ania | Celina | Darek | Ewa” i „Liczba osób: 4”.
