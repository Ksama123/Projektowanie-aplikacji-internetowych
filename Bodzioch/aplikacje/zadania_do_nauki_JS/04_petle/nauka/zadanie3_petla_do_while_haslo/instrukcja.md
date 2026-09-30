# Nauka – Pętla `do...while`: hasło

## Cel

Poproś o hasło i pytaj tak długo, aż użytkownik wpisze dokładnie `tajne`. Pętla `do...while` pasuje tu, bo okienko ma pojawić się przynajmniej raz.

## Przydatne

- Zmienną `haslo` możesz zadeklarować bez wartości (`let haslo;`) i dopiero w pętli przypisać wynik `prompt`.
- Blok `do { ... } while (warunek);` wykonuje się, a dopiero potem sprawdza warunek. Średnik po `while` jest potrzebny.
- Operator „różne” to `!=`. Pętla ma trwać, dopóki wpis jest inny niż `"tajne"`.
- `alert("Brawo! Hasło poprawne.");` dajesz **za** pętlą — wykona się dopiero po poprawnym haśle.
- `prompt` w pętli zatrzymuje skrypt przy każdym obrocie. Wpis w konsoli zobaczysz dopiero po zamknięciu okienka; komunikat „Brawo” nie pojawi się, dopóki nie wpiszesz `tajne`. Konsola nie zastąpi przeklikania okienek.

## Wymagania

1. Użyj pętli `do...while`.
2. Pytaj o hasło tak długo, aż wpis będzie równy `tajne`.
3. Po sukcesie pokaż alert „Brawo! Hasło poprawne.”.

## Przykład

Najpierw wpisz `haslo`. Okienko pojawia się ponownie. Potem wpisz `tajne`. Pętla się kończy i wyskakuje alert „Brawo! Hasło poprawne.”.
