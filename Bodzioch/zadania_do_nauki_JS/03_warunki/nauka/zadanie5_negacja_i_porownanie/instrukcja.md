# Nauka – !== i !: logowanie i regulamin

## Cel

Wpuszczamy użytkownika tylko wtedy, gdy login to dokładnie „uczen”, hasło to dokładnie „1234” oraz regulamin zaakceptowano słowem „tak”. W przeciwnym razie pokaż odmowę. Użyj `===` / `!==` (nie `==`) i możesz użyć `!` przy całym wyrażeniu.

## Przydatne

`===` porównuje wartość i typ, więc napis `"1234"` to nie liczba `1234`. `!==` oznacza „różne”. Zapis `!(A && B && C)` czyta się jako „nie wszystkie trzy naraz”. Loginu i hasła nie rzutuj przez `Number` — to teksty.

## Wymagania

1. Pobierz login, hasło i akceptację regulaminu (tak/nie).
2. Sukces pokazuj tylko przy wszystkich trzech zgodnościach.
3. Komunikat to „Zalogowano” albo „Odmowa dostępu”.

## Przykład

Otwórz `index.html`. Wpisz kolejno `uczen`, `1234` i `tak`. W ramce wyniku pojawia się „Zalogowano”. Odśwież i wpisz `uczen`, `1234`, `nie` — tekst zmienia się na „Odmowa dostępu”. Przy loginie `admin`, haśle `1234` i zgodzie `tak` też widać odmowę.
