# Nauka – Inkrementacja: licznik punktów

## Cel

Zasymuluj krótką rundę gry: startujesz z 10 punktami, potem dodajesz i odejmujesz punkty operatorami skróconymi. Na stronie ma być widać stan po każdej zmianie.

## Przydatne

- `punkty = punkty + 1` i krócej `punkty++` (inkrementacja o 1).
- `punkty += 5` to to samo co `punkty = punkty + 5`. Analogicznie działa `-=`.
- Tu nie pytasz użytkownika — wartości wpisujesz w kodzie.
- Wypis: `document.write(...)`. Nowa linia: `"<br>"`.

## Wymagania

1. Ustaw zmienną `punkty` na `10`.
2. Zwiększ o 1 (walka), potem o 5 (skarb), potem zmniejsz o 2 (pułapka).
3. Po starcie i po każdej operacji wypisz aktualny stan, na przykład „Start: 10”, „Po walce: 11”, „Po skarbie: 16”.
4. Końcowy wynik ma wynosić 14 (bo \(10 + 1 + 5 - 2 = 14\)).

## Przykład

Otwierasz `index.html` i w ramce widzisz kolejne linie: start 10, po walce 11, po skarbie 16, a po pułapce 14.
