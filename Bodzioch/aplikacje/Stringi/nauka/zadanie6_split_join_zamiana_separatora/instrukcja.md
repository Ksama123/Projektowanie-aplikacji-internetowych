# Nauka – Split i join (zamiana separatora)

## Cel

Strona pyta o listę słów oddzielonych myślnikami, na przykład „jabłko-gruszka-banan”. W elemencie o id „wynik” pokaż tę samą listę ze słowami oddzielonymi przecinkiem i spacją. Użyj `split` i `join` (`join` to metoda tablicy).

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `split(separator)` dzieli napis na tablicę, na przykład `"a-b-c".split("-")` daje `["a", "b", "c"]`.
- `tablica.join(separator)` składa elementy z powrotem, na przykład `["a", "b", "c"].join(", ")` daje `"a, b, c"`.
- Kolejność: najpierw `split`, potem `join` z nowym separatorem.

## Wymagania

1. Jeden napis z myślnikami pobierasz z `prompt`.
2. Po podziale łączysz elementy separatorem „, ”.
3. W pudełku widać listę z przecinkami.

## Przykład

Wpisz `jabłko-gruszka-banan`. W pudełku pojawia się „jabłko, gruszka, banan”.
