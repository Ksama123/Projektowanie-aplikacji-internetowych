# Nauka – slice i replace

## Cel

Strona pyta o numer PESEL (11 znaków). W elemencie o id „wynik” pokaż pierwsze sześć cyfr (datę urodzenia w formacie YYMMDD) oraz ostatnie cztery cyfry (serię). Jeśli użytkownik wklei spacje w środku, usuń je przed wycinaniem.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`. Kilka linii sklejasz znakiem `"\n"`.

- `slice(start, end)` wycina fragment; indeksy liczą się od zera; bez `end` idziesz do końca.
- `replace(" ", "")` zamienia pierwsze wystąpienie; wszystkie spacje: `replaceAll(" ", "")`.
- `trim()` czyści początek i koniec.

## Wymagania

1. Numer pobierasz z `prompt`. Możesz założyć, że po usunięciu spacji zostaje 11 znaków.
2. W pudełku widać dwie linie: „Data (YYMMDD): …” oraz „Seria: …”.

## Przykład

Wpisz `44051401358`. W pudełku pojawiają się linie „Data (YYMMDD): 440514” i „Seria: 1358”.
