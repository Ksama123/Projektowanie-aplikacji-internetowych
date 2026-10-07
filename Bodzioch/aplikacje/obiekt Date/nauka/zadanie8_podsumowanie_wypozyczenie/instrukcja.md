# Nauka – Podsumowanie: wypożyczenie

## Cel

Biblioteka: strona pyta o datę wypożyczenia, liczbę dni na zwrot oraz datę „dzisiaj”. Policz termin zwrotu (`setDate`), jego dzień tygodnia i status względem dzisiaj. Jeśli dzisiaj jest przed terminem, pokaż „zostało X dni”. Jeśli daty są równe — „zwrot dzisiaj”. Jeśli dzisiaj jest po terminie — „po terminie, opóźnienie X dni”. X to dodatnia liczba dni kalendarzowych.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `setDate`, `getTime`, `Math.round`, format DD.MM.YYYY, `getDay()` i `switch`.
- Status wybierasz przez `if / else if / else` przy porównaniu dzisiaj z terminem.

## Wymagania

1. Wczytujesz datę wypożyczenia, `n` i datę dzisiaj.
2. Termin to wypożyczenie przesunięte o `n` dni.
3. W pudełku widać wypożyczenie, termin, dzień tygodnia zwrotu i status.

## Przykład

Wpisz wypożyczenie `2026`, `9`, `10`, potem `14` dni i dzisiaj `2026`, `9`, `20`. W pudełku pojawiają się linie „Wypożyczenie: 10.09.2026”, „Termin zwrotu: 24.09.2026, czwartek” i „zostało 4 dni”. Gdy dzisiaj to `2026`, `9`, `24`, status to „zwrot dzisiaj”. Gdy dzisiaj to `2026`, `9`, `26`, status to „po terminie, opóźnienie 2 dni”.
