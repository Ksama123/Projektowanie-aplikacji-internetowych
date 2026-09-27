# Nauka – Podsumowanie: rabat w sklepie

## Cel

Policz rabat i kwotę do zapłaty. Wejście to kwota koszyka, informacja czy klient ma kartę (tak/nie) oraz kod promocyjny (jedno słowo). Zasady sprawdzaj od góry — wygrywa pierwszy pasujący próg:

- kwota ujemna daje komunikat błędu i nie liczysz rabatu;
- kwota co najmniej 200 i karta „tak” dają 15%;
- kwota co najmniej 200 bez karty daje 10%;
- kwota co najmniej 100 albo kod dokładnie „START” dają 5%;
- w pozostałych przypadkach rabat to 0%.

## Przydatne

Do progów użyjesz łańcucha `if / else if / else` oraz operatorów `&&`, `||` i `===`. Kwotę do zapłaty policzysz wzorem `kwota - kwota * rabat / 100`, gdzie rabat to liczba, na przykład 15. `Number` stosujesz przy kwocie; kartę i kod zostaw jako tekst. Kilka linii w ramce oddzielisz `"<br>"`.

## Wymagania

1. Pobierz trzy dane.
2. Zastosuj reguły z celu. Kolejność `else if` ma znaczenie.
3. Przy błędzie pokaż tylko komunikat. Przy sukcesie pokaż kwotę, procent rabatu i kwotę do zapłaty.

## Przykład

Otwórz `index.html`. Wpisz kolejno `250`, `tak` i `BRAK`. W ramce wyniku widać kwotę, rabat 15% i do zapłaty 212.5. Odśwież i wpisz `250`, `nie`, `BRAK` — rabat spada do 10%, a do zapłaty jest 225. Przy `80`, `nie`, `START` rabat to 5%, a do zapłaty 76. Przy `40`, `nie`, `BRAK` rabat to 0%, a do zapłaty 40. Przy `-5`, `nie`, `START` pojawia się tylko „Błędna kwota”.
