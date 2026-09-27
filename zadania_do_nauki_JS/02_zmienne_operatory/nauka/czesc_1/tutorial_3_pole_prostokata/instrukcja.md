# Nauka – Number: pole i obwód prostokąta

## Cel

Pobierz dwa boki prostokąta, policz pole i obwód, a potem wypisz oba wyniki. Zrozumiesz, dlaczego tekst z okienka trzeba zamienić na liczbę funkcją `Number()`.

## Przydatne

- `prompt` zawsze zwraca napis. `Number(prompt("..."))` od razu zamienia wpis na liczbę.
- Mnożenie `"5" * "5"` bywa tolerancyjne, ale dodawanie `"5" + "5"` skleja tekst i daje `"55"`, a nie `10`. Nawyk `Number()` przy liczbach oszczędza takich pomyłek.
- Pole prostokąta: `a * b`. Obwód: `2 * a + 2 * b`.
- Wypis: `document.write(...)`. Nowa linia: `"<br>"`.

## Wymagania

1. Pobierz bok A i bok B. Oba zamień na liczbę przez `Number()`.
2. Policz pole i obwód.
3. W ramce pokaż boki oraz oba wyniki, każde w czytelnej linii.

## Przykład

Wpisz bok A `5` i bok B `5`. W ramce widać boki oraz pole `25` i obwód `20`. Jeśli zapomnisz o `Number()`, obwód może wyjść sklejony z tekstu zamiast liczby — warto to raz świadomie sprawdzić.
