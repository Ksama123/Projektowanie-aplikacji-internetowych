# Nauka – Wielka litera na początku każdego słowa

## Cel

Strona pyta o zdanie (kilka słów oddzielonych spacjami). W elemencie o id „wynik” pokaż je w formacie Title Case: pierwsza litera każdego słowa wielka, reszta mała. Użyj `split(" ")`, pętli (albo `map`, jeśli znasz) oraz `join(" ")`.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `split(" ")` dzieli zdanie na tablicę słów.
- Dla każdego słowa: pierwsza litera to `slowo[0].toUpperCase()`, reszta to `slowo.slice(1).toLowerCase()`. Uważaj na puste fragmenty przy podwójnej spacji.
- `join(" ")` składa tablicę z powrotem w jeden napis ze spacjami.

## Wymagania

1. Zdanie pobierasz z `prompt` i dzielisz na słowa.
2. W każdym słowie pierwsza litera jest wielka, reszta mała. Puste słowa możesz pominąć albo zostawić.
3. Połączone zdanie ląduje w pudełku.

## Przykład

Wpisz `javascript jest super`. W pudełku pojawia się „Javascript Jest Super”.
