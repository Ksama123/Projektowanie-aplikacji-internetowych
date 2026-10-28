# Zadanie 7: jeden aktywny — plany

## Cel

Na stronie są trzy karty z klasą `.plan`: Start, Pro i VIP. Karta Pro ma już w HTML klasę `active`. Twoja praca jest w `skrypt.js`. Kliknięcie dowolnej karty ma zostawić klasę `active` tylko na tej klikniętej. Pozostałe karty mają tę klasę stracić.

## Przydatne

- Karty zbierasz przez `querySelectorAll(".plan")` i wieszasz nasłuch na każdej.
- W handlerze najpierw zdejmujesz `active` ze wszystkich kart, a potem dodajesz ją tylko na klikniętej (`this` albo element z pętli).
- Dzięki temu w danej chwili widać dokładnie jedną wyróżnioną kartę.

## Wymagania

1. W danej chwili tylko jedna karta ma klasę `active`.
2. Na starcie karta Pro jest już wyróżniona, bo tak jest w HTML.

## Przykład

Otwórz stronę: wyróżniony jest plan Pro. Kliknij kartę „VIP”. VIP dostaje klasę `active` i wygląda jak wybrany, a Start i Pro wracają do zwykłego wyglądu. Kliknij „Start”: teraz tylko Start jest aktywny.
