# Zadanie 6: pętla — co drugi `li`

## Cel

Szablon ma listę zakupów `#shoppingList` (osiem pozycji, od Mleka do Sałaty) oraz przycisk `#btnEven` o napisie „Zaznacz co drugie”. Twoja praca jest w `skrypt.js`. Po kliknięciu przycisku klasa `highlight` ma trafić na co drugi element `li` na tej liście. W CSS ta klasa już podświetla wiersz.

## Przydatne

- Wszystkie pozycje zbierasz przez `querySelectorAll("#shoppingList li")`.
- W `forEach` drugi argument to indeks (od zera). Reszta z dzielenia przez 2 (`index % 2`) pozwala wybrać co drugi wiersz.
- W pętli wołasz `classList.add("highlight")` tylko na wybranych elementach.
- Ustal jedną konwencję (parzyste albo nieparzyste indeksy) i trzymaj się jej.

## Wymagania

1. Klasę `highlight` dodajesz w pętli, a nie osobno dla każdej pozycji.
2. Nie wszystkie wiersze się podświetlają — tylko co drugi.

## Przykład

Kliknij „Zaznacz co drugie”. Na liście widać naprzemiennie podświetlone wiersze, na przykład Chleb, Masło, Szynka i Sałata, jeśli liczysz od drugiego elementu. Mleko i pozostałe niepodświetlone pozycje zostają bez żółtego tła.
