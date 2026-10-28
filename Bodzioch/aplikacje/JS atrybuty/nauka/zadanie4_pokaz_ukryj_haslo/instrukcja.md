# Zadanie 4: atrybut `type` — pokaż hasło

## Cel

Przycisk `#toggle-btn` (oko) przełącza pole `#password` między `type="password"` a `type="text"`.

## Przydatne

- Obecny typ odczytasz przez `getAttribute("type")`. Nowy ustawisz `setAttribute("type", "text")` albo przez właściwość `.type`.
- To **nie** to samo co zadanie ze sprawdzianu 13 (tam checkbox i `.checked`). Tu pracujesz przyciskiem i atrybutem `type`.

## Wymagania

1. Na starcie znaki są ukryte. Klik oka pokazuje hasło. Kolejny klik znowu chowa znaki.
2. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

W polu jest `TajneHaslo123!` — widać kropki. Kliknij oko. W polu widać „TajneHaslo123!”. Kliknij oko drugi raz. Znowu są kropki.
