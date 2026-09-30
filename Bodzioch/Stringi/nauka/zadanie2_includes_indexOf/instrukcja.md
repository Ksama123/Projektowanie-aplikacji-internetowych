# Nauka – includes i indexOf

## Cel

Strona pyta o zdanie i o słowo. W elemencie o id „wynik” pokaż, czy zdanie zawiera to słowo, a jeśli tak — na którym indeksie jest pierwsze wystąpienie. Przy sprawdzaniu ignorujesz wielkość liter, więc „Ala” ma być znalezione w „Ala ma kota”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`. Kilka linii sklejasz znakiem `"\n"`.

- `includes(szukany)` zwraca `true` albo `false`.
- `indexOf(szukany)` zwraca indeks pierwszego wystąpienia albo `-1`.
- Żeby zignorować wielkość liter, porównuj wersje po `toLowerCase()`.

## Wymagania

1. Zdanie i słowo pobierasz z dwóch `prompt`.
2. Sprawdzenie robisz na wersjach w małych literach.
3. W pudełku widać „Zawiera, indeks …” albo „Nie zawiera.”.

## Przykład

Wpisz zdanie `JavaScript jest super` i słowo `jest`. W pudełku pojawia się „Zawiera, indeks 11.”.
