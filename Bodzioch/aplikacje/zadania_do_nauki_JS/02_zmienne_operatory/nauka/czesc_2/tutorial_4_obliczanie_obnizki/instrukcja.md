# Nauka – Procenty: sezonowa obniżka

## Cel

Sklep obniża wszystkie ceny o 20 procent. Pobierz cenę produktu i pokaż kwotę przed rabatem oraz po rabacie.

## Przydatne

- Jeśli stara cena to 100%, po obniżce o 20% zostaje 80%, czyli mnożnik `0.8`. W JavaScript używasz kropki, nie przecinka.
- `cena * 0.8` daje nową cenę.
- Liczby zmiennoprzecinkowe bywają „brzydkie” (na przykład `14.00000001`). Metoda `.toFixed(2)` pokazuje dwie cyfry po kropce.
- Wypis: `document.write(...)`. Nowa linia: `"<br>"`.

## Wymagania

1. Pobierz cenę produktu jako liczbę.
2. Policz nową cenę, mnożąc starą przez `0.8`.
3. W ramce pokaż linię „Cena przed obniżką: [cena] zł” oraz linię „Cena po rabacie (-20%): [nowaCena] zł”.

## Przykład

Wpisz cenę `100`. W ramce widać 100 zł przed obniżką i 80 zł po rabacie. Przy `14.99` warto użyć `.toFixed(2)`, żeby kwoty wyglądały jak w sklepie.
