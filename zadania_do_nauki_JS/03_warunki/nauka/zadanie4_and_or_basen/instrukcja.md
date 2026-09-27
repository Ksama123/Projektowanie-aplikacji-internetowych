# Nauka – && i ||: wstęp na basen

## Cel

Zasada wstępu: osoba umie pływać oraz ma co najmniej 12 lat albo jest z opiekunem. Pobierz trzy dane i wypisz „Wstęp dozwolony” albo „Brak wstępu”.

## Przydatne

`&&` wymaga obu prawdziwych stron, a `||` wystarcza przy jednej. Przy mieszance stawiaj nawiasy jak w matematyce. Odpowiedzi „tak” i „nie” porównasz przez `=== "tak"`, bo `prompt` zwraca string. `Number` stosujesz tylko przy wieku.

## Wymagania

1. Pobierz wiek, czy osoba umie pływać (tak/nie) oraz czy jest z opiekunem (tak/nie).
2. Złóż warunek z `&&` i `||`. Nie pisz osobnych `if` na każdą kombinację, jeśli da się jednym wyrażeniem.
3. Pokaż decyzję.

## Przykład

Otwórz `index.html`. Wpisz kolejno `10`, `tak` i `nie`. W ramce wyniku pojawia się „Brak wstępu”, bo osoba jest za młoda i bez opiekuna. Odśwież i wpisz `10`, `tak`, `tak` — widać „Wstęp dozwolony”. Przy `14`, `tak`, `nie` wstęp też jest dozwolony. Przy `14`, `nie`, `tak` pojawia się „Brak wstępu”, bo osoba nie umie pływać.
