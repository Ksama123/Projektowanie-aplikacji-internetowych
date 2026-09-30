# Nauka – Metody string: trim i wielkość liter

## Cel

Strona pyta o imię i nazwisko w jednej linii. Usuń zbędne spacje z początku i końca, ustaw pierwszą literę na wielką, a resztę na małe. W elemencie o id „wynik” pokaż powitanie z tak przygotowanym tekstem.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `trim()` usuwa białe znaki z początku i końca.
- `toUpperCase()` i `toLowerCase()` zmieniają wielkość liter.
- Pierwszy znak to `str[0]`. Wzorzec „pierwsza wielka, reszta małe”: `str[0].toUpperCase() + str.slice(1).toLowerCase()`.

## Wymagania

1. Tekst pobierasz jednym `prompt`.
2. Po `trim` pierwsza litera jest wielka, pozostałe małe.
3. W pudełku widać komunikat w stylu „Witaj, Jan nowak!”.

## Przykład

W oknie wpisz `  jan nowak  `. W pudełku pojawia się „Witaj, Jan nowak!”.
