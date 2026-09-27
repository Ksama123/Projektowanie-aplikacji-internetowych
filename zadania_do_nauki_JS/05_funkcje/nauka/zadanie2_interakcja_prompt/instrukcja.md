# Nauka – Interakcja: `prompt` w funkcji

## Cel

Funkcja sama pyta o imię i wypisuje powitanie w ramce `#wynik`. `prompt` i `document.write` są wewnątrz funkcji, nie obok niej.

## Przydatne

- Wszystko, co funkcja ma zrobić po wywołaniu, ląduje w jej klamrach: najpierw pytanie, potem sklejenie napisu.
- Operator `+` łączy stały tekst ze zmienną. Nowa linia: `"<br>"`.
- Model zostaje ten sam: definicja w `<head>`, wywołanie w `<script>` wewnątrz `#wynik`.
- Możesz wywołać funkcję dwa razy — każde wywołanie zapyta o imię osobno.

## Wymagania

1. W `<head>` zdefiniuj funkcję `przedstawSie`.
2. Wewnątrz niej pobierz imię przez `prompt` i wypisz „Miło cię widzieć, ” oraz imię.
3. W ramce `#wynik` wywołaj `przedstawSie();`.
4. W stopce wpisz swoje imię, nazwisko i klasę.

## Przykład

Po otwarciu strony wyskakuje okienko. Wpisujesz `Ola`. W ramce `#wynik` pojawia się „Miło cię widzieć, Ola”.
