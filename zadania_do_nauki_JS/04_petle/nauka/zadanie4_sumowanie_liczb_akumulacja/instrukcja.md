# Nauka – Akumulacja: suma od 1 do n

## Cel

Policz sumę liczb od 1 do wartości podanej przez użytkownika. Dla 5 ma wyjść \(1+2+3+4+5 = 15\). Nauczysz się akumulatora: zmiennej, która rośnie w pętli.

## Przydatne

- `prompt` zwraca tekst. `parseInt(...)` (albo `Number`) zamienia go na liczbę całkowitą.
- Zmienną `suma` ustawiasz na `0` **przed** pętlą — to czysta kartka przed dodawaniem.
- W pętli `for` od 1 do `n` dodajesz licznik do sumy: `suma = suma + i` albo krócej `suma += i`.
- Wynik wypisujesz **po** pętli. Gdyby `document.write` był w środku, suma migałaby po każdym dodaniu.
- Wypis: `document.write(...)`.

## Wymagania

1. Pobierz liczbę końcową `n` i zamień ją na liczbę.
2. Zsumuj wszystkie liczby całkowite od 1 do `n` włącznie.
3. Po pętli pokaż wynik na stronie.

## Przykład

Wpisz `5`. Na stronie pojawia się suma `15`. Wpisz `1` — wynik to `1`.
