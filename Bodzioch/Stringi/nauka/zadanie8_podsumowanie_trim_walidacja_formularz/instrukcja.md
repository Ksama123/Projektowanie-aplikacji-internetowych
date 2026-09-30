# Nauka – Podsumowanie: trim i walidacja (symulacja formularza)

## Cel

Strona pyta o login, jak w polu „Nazwa użytkownika”. W elemencie o id „wynik” pokaż login po usunięciu białych znaków z brzegów oraz czy jest poprawny. Poprawny login nie jest pusty po `trim` i ma od 3 do 20 znaków. Przy błędzie dopisz krótki powód: „pusty”, „za krótki” albo „za długi”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `trim()` usuwa białe znaki z początku i końca.
- `length` to liczba znaków. Warunki: puste, krótsze niż 3, dłuższe niż 20, w przeciwnym razie poprawne.
- Komunikat składasz z tekstu i zmiennych (konkatenacja albo template literal).

## Wymagania

1. Login pobierasz z `prompt` i stosujesz `trim`.
2. W pudełku widać login po `trim` oraz status z powodem przy błędzie.

## Przykład

Wpisz `  ab  `. W pudełku pojawia się „Login po trim: "ab", Niepoprawny (za krótki).”. Wpisz `  janek  ` — „Login po trim: "janek", Poprawny.”.
