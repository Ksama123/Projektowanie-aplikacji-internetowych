# Sprawdzian Grupa B – Zadanie 6: Podsumowanie – czyszczenie i formatowanie

## Cel

Strona pyta o nazwę miasta, która może mieć zbędne spacje na brzegach. W elemencie o id „wynik” pokaż nazwę po `trim`, czy zaczyna się od wielkiej litery („Tak” albo „Nie”) oraz długość nazwy po `trim`.

## Przydatne

To zadanie łączy czyszczenie, sprawdzenie pierwszego znaku i pomiar długości. Zastanów się, jak odróżnić wielką literę na początku i co zrobić, gdy po `trim` napis jest pusty. Składnia jest na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Nazwę pobierasz z `prompt` i stosujesz `trim`.
2. W pudełku widać trzy linie: „Nazwa: …”, „Wielka litera na początku: Tak” albo „Nie” oraz „Długość: …” i liczba.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `  warszawa  `. W pudełku pojawiają się linie „Nazwa: warszawa”, „Wielka litera na początku: Nie” i „Długość: 8”.
