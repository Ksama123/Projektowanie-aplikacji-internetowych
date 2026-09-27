# Zadanie 1: Tworzenie i dostęp do tablic

## Cel

W szablonie jest puste pudełko o id „wynik”. Zbuduj tablicę `owocowe_marzenia` z trzech ulubionych owoców podanych przez użytkownika. Potem zmień drugi owoc na „Arbuz” i pokaż długość tablicy.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii zbierasz do tablicy stringów i sklejasz `join("\n")`. Nie używaj `document.write`.

- Pusta tablica: `let owocowe_marzenia = []`.
- Element o indeksie 0, 1, 2 ustawiasz przez `owocowe_marzenia[0] = …` albo dodajesz `push`.
- `length` to liczba elementów.

## Wymagania

1. Trzy owoce pobierasz z `prompt` i zapisujesz w jednej tablicy.
2. Drugi element (indeks 1) zmieniasz na „Arbuz”.
3. W pudełku widać trzy linie: listę przed zmianą, listę po zmianie i długość.

## Przykład

Wpisz `Jabłko`, `Gruszka` i `Banan`. W pudełku pojawiają się linie „Moje ulubione owoce: Jabłko,Gruszka,Banan”, „Po zmianie zdania: Jabłko,Arbuz,Banan” i „Długość tablicy: 3”.
