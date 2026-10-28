# Zadanie 3: `remove` — komunikat błędu

## Cel

W szablonie jest panel `#alert` z klasą `error` (czerwony komunikat „Awaria Systemu!”) oraz przycisk `#btnFix` o napisie „Napraw błąd”. Twoja praca jest w `skrypt.js`. Po kliknięciu przycisku zdejmujesz klasę `error`. Możesz też dodać klasę `success`, wtedy panel zrobi się zielony.

## Przydatne

- `classList.remove("error")` zdejmuje klasę. Jeśli jej nie ma, nic się nie sypie.
- Opcjonalnie `classList.add("success")` włącza zielony stan ze stylów.
- Tekst w `#statusTitle` i `#statusText` możesz zostawić albo zmienić. To kosmetyka, nie obowiązek.

## Wymagania

1. Na starcie alert jest czerwony, bo w HTML ma klasę `error`.
2. Po kliknięciu „Napraw błąd” czerwieni już nie ma (albo widać zielony stan `success`).

## Przykład

Otwórz stronę: widać czerwony komunikat o awarii. Kliknij „Napraw błąd”. Ramka przestaje być błędem. Jeśli dodasz `success`, panel robi się zielony; możesz wtedy zmienić nagłówek na „System sprawny”, a opis na „Wszystkie parametry w normie.”
