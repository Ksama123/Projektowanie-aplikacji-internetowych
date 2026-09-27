# Nauka – Zasięg lokalny: sejf

## Cel

Zobacz, że zmienna utworzona wewnątrz funkcji jest niewidoczna na zewnątrz. To zasięg lokalny. Najpierw funkcja wypisze kod, a próba sięgnięcia po tę samą zmienną poza funkcją spowoduje błąd.

## Przydatne

- `let` wewnątrz klamer funkcji tworzy zmienną lokalną. Poza funkcją ta nazwa nie istnieje.
- Wywołanie `otworzSejf()` działa, bo w środku zmienna jeszcze „żyje”.
- `document.write` poza funkcją z tą samą nazwą kończy się błędem w konsoli (F12 → Console).
- To nie jest błąd do ukrycia: masz go zobaczyć. Potem, jako dodatek, możesz zakomentować linię poza funkcją, żeby strona znów była czysta.

## Wymagania

1. W `<head>` zdefiniuj funkcję `otworzSejf` i wewnątrz niej ustaw `let tajnyKod = 1234;`.
2. Wewnątrz funkcji wypisz „Kod w środku sejfu: ” oraz wartość kodu.
3. W ramce `#wynik` najpierw wywołaj `otworzSejf()`, a potem spróbuj wypisać `tajnyKod` poza funkcją.
4. W stopce wpisz swoje imię, nazwisko i klasę.
5. Uruchom stronę i otwórz konsolę — ma być widać błąd.

## Przykład

W ramce pojawia się „Kod w środku sejfu: 1234”, a konsola zgłasza, że `tajnyKod` nie jest zdefiniowany. Po zakomentowaniu linii poza funkcją błąd znika, a napis z sejfu zostaje.
