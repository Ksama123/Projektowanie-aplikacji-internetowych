# Zadanie 6: `data-price` — filtr budżetu

## Cel

Przycisk `#filter-btn` chowa te karty `.product`, których `data-price` jest **większa** niż liczba z pola `#budget`. Tańsze i równe budżetowi zostają widoczne.

## Przydatne

- Budżet i cenę zamieniasz na liczby: `Number(budget.value)` oraz `Number(produkt.getAttribute("data-price"))` (albo `dataset.price`).
- Porównanie stringów kłamie: `"800" > "1000"` w tekście nie działa jak przy liczbach.
- Ukrywanie: `setAttribute("hidden", "")` / `removeAttribute("hidden")` albo właściwość `.hidden`. Ponowny filtr z inną kwotą ma z powrotem pokazać tańsze produkty.

## Wymagania

1. Porównujesz liczby, nie napisy.
2. Budżet 1000 zostawia słuchawki, tablet, mysz i smartfon, a chowa laptopa i PC.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

W pole wpisz `2000` i kliknij „Filtruj”. Znikają Laptop (3500) i PC (5000). Reszta kart zostaje. Wpisz `1000` i filtruj ponownie. Zostają tylko produkty do 1000.
