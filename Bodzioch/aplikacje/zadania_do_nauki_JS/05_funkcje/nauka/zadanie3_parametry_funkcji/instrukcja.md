# Nauka – Parametry funkcji

## Cel

Napisz funkcję, która dostaje imię jako parametr i wypisuje je na liście uczniów. To samo ciało funkcji obsłuży kilka różnych imion — zmieniasz tylko argument przy wywołaniu.

## Przydatne

- Parametr wpisujesz w nawiasie przy definicji, na przykład `function powitajUcznia(imie)`.
- Przy wywołaniu wstawiasz konkretny napis w cudzysłowie. Ten napis trafia do parametru `imie`.
- Wypis nadal jest `document.write` z `"<br>"` na końcu linii.
- Ramka tym razem ma `id` `listaUczniow` — wywołania wstawiasz w `<script>` wewnątrz niej.

## Wymagania

1. W `<head>` zdefiniuj funkcję `powitajUcznia(imie)`.
2. Wewnątrz wypisz „Uczeń: ” oraz przekazane imię.
3. W ramce `#listaUczniow` wywołaj funkcję trzy razy dla trzech różnych imion.
4. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

Wywołujesz funkcję dla `Anna`, `Bartek` i `Celina`. W ramce `#listaUczniow` widać trzy linie: „Uczeń: Anna”, „Uczeń: Bartek” i „Uczeń: Celina”.
