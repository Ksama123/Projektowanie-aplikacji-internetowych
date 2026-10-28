# Zadanie 7: `data-target` i `hidden` — zakładki

## Cel

Klik `.tab-btn` pokazuje panel o `id` zapisanym w `data-target` i chowa pozostałe `.tab-content`. Aktywny przycisk ma `aria-selected="true"`.

## Przydatne

- Na każdym przycisku dodajesz `"click"`. Cel odczytasz `getAttribute("data-target")` i znajdziesz przez `getElementById`.
- Panele: `setAttribute("hidden", "")` albo `removeAttribute("hidden")`.
- Przyciski: `setAttribute("aria-selected", "true")` albo `"false"`. CSS styluje `[aria-selected="true"]` — **bez** `classList` (to dział 15).

## Wymagania

1. W danym momencie widać jedną treść.
2. „Kontakt” pokazuje kontakt, a „O Nas” i „Oferta” są schowane.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Oferta”. Widać listę usług, a zakładka Oferta jest podkreślona. Kliknij „Kontakt”. Zostaje treść kontaktu, Oferta znika.
