# Zadanie 2: `disabled` — odblokowanie

## Cel

Przycisk `#submit-btn` („WYŚLIJ ZGŁOSZENIE”) startuje z atrybutem `disabled`. Klik `#unlock-btn` („Odblokuj wysyłanie”) zdejmuje blokadę.

## Przydatne

- Nasłuch `"click"` ląduje na `#unlock-btn`.
- Stan sprawdzisz przez `hasAttribute("disabled")`. Zdejmujesz go `removeAttribute("disabled")` albo `przycisk.disabled = false`.
- CSS `:disabled` sam zmieni wygląd — nie potrzebujesz `classList` (to dział 15).

## Wymagania

1. Na starcie „WYŚLIJ ZGŁOSZENIE” jest nieklikalny.
2. Po „Odblokuj wysyłanie” przycisk działa.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Przed odblokowaniem kursor nad „WYŚLIJ ZGŁOSZENIE” pokazuje zakaz. Kliknij „Odblokuj wysyłanie”. Przycisk zgłoszenia staje się zwykły i klikalny.
