# Zadanie 4: `toggle` — tryb nocny

## Cel

Szablon ma kontener `#mainContent` z artykułem bloga i przycisk `#btnToggle` o napisie „Tryb Nocny”. Twoja praca jest w `skrypt.js`. Każde kliknięcie przycisku ma przełączać klasę `dark-mode` na `#mainContent`. W CSS ta klasa już ustawia ciemne tło i jasny tekst.

## Przydatne

- `classList.toggle("dark-mode")` dodaje klasę, gdy jej nie ma, i zdejmuje, gdy jest.
- Metoda zwraca `true`, gdy po wywołaniu klasa jest na elemencie, albo `false`, gdy jej nie ma. Tę wartość możesz użyć do zmiany napisu na przycisku.
- Koloru tła nie ustawiasz przez `style.background`. Wygląd bierze arkusz CSS.

## Wymagania

1. Każde kliknięcie przełącza wygląd między jasnym a ciemnym.
2. Styl pochodzi z klasy w CSS, a nie z bezpośredniego ustawiania tła w skrypcie.

## Przykład

Kliknij „Tryb Nocny”. Artykuł i tło robią się ciemne, a tekst jasny. Przycisk może zmienić napis na „Tryb Jasny”. Kliknij ponownie: strona wraca do jasnego tła, a napis przycisku znowu może brzmieć „Tryb Nocny”.
