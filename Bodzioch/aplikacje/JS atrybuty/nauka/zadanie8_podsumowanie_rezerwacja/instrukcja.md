# Zadanie 8: Podsumowanie — rezerwacja

## Cel

Łączysz `data-*`, `disabled` i zdarzenia z działu 13. Wybór `#termin` pokazuje cenę z `data-cena` w `#cena`. Przycisk `#rezerwuj` jest zablokowany, dopóki `#regulamin` nie jest zaznaczony. Klik rezerwacji **nie** przeładowuje strony: pusty termin pokazuje błąd w `#status`, wybrany — potwierdzenie z nazwą i ceną.

## Przydatne

- `"change"` ląduje na `select` i na checkboxie. `"click"` na przycisku (albo `"submit"` z `preventDefault` na `#formularz`, jeśli wysyłasz formularz).
- Cenę bierzesz z wybranej opcji: `getAttribute("data-cena")` albo `dataset.cena` (`select.options[select.selectedIndex]`).
- Blokadę przycisku ustawiasz `setAttribute("disabled", "")` / `removeAttribute("disabled")` albo `przycisk.disabled = !checkbox.checked`.

## Wymagania

1. Pusty wybór przywraca tekst startowy „Wybierz termin.” w `#cena`.
2. Bez regulaminu przycisk jest nieklikalny. Ptaszek go odblokowuje.
3. Po rezerwacji w `#status` widać komunikat.
4. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Wybierz „Wieczór”. W `#cena` pojawia się „45 zł”. Zaznacz regulamin i kliknij „Rezerwuj”. W `#status` widać „Zarezerwowano: Wieczór (45 zł)”. Bez wybranego terminu status to „Wybierz termin.”.
