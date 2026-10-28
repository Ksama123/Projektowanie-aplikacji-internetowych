# Zadanie 5: `contains` — polubienie

## Cel

Na stronie jest przycisk `#btnLike` z ikoną `#icon` (♡) i tekstem `#text` („Polub to”). Na starcie przycisk nie ma klasy `liked`. Twoja praca jest w `skrypt.js`. Po kliknięciu: jeśli klasy `liked` nie ma, dodajesz ją i zmieniasz ikonę oraz napis na stan „lubisz”; jeśli klasa już jest, zdejmujesz ją i wracasz do startu.

## Przydatne

- `classList.contains("liked")` zwraca `true` albo `false`. Na tym zadaniu ćwiczysz tę decyzję, a nie samo `toggle`.
- W gałęziach `if` / `else` wołasz `add` albo `remove`.
- Tekst i ikonę zmieniasz przez `textContent` na `#text` i `#icon`.

## Wymagania

1. Przycisk ma dwa stany wizualne: zwykły i polubiony (klasa `liked`).
2. Decyzję, którą ścieżkę wykonać, podejmujesz na podstawie `contains`, a nie zgadując.

## Przykład

Pierwszy klik: przycisk dostaje klasę `liked`, ikona zmienia się na „♥”, a napis na „Lubisz to!”. Drugi klik: klasa znika, ikona wraca do „♡”, a napis znowu brzmi „Polub to”.
