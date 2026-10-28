# Zadanie 2: `add` — wyróżnienie

## Cel

Na stronie jest karta produktu `#card` (Super Laptop 3000) i przycisk `#btnHighlight` o napisie „Wyróżnij produkt”. Karta na starcie wygląda zwyczajnie. Twoja praca jest w `skrypt.js`. Po kliknięciu przycisku karta ma dostać klasę `featured`. W CSS ta klasa już daje złotą ramkę i lekkie powiększenie.

## Przydatne

- Klasę dodajesz przez `element.classList.add("featured")`.
- Drugie wywołanie `add` z tą samą nazwą nie duplikuje klasy. W inspektorze nadal widać jedną `featured`.
- Nie zmieniasz tła ani ramki przez `style`. Wygląd jest już w arkuszu CSS.

## Wymagania

1. Przed kliknięciem karta wygląda zwyczajnie i nie ma klasy `featured`.
2. Po kliknięciu „Wyróżnij produkt” karta ma klasę `featured` i widać złote wyróżnienie.

## Przykład

Otwórz stronę: karta laptopa ma zwykłą szarą ramkę. Kliknij „Wyróżnij produkt”. Karta dostaje złote obramowanie, jaśniejsze tło i lekko się powiększa. Kolejne kliknięcie nic nie psuje — wyróżnienie zostaje.
