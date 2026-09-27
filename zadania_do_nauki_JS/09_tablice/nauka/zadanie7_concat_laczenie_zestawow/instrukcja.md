# Zadanie 7: Concat i podgląd tablicy 2D

## Cel

Masz gotowe tablice owoców i warzyw. Dopisz ulubiony dodatek użytkownika, połącz obie listy w `zakupy` i odczytaj cenę zeszytu z małej tablicy dwuwymiarowej. Wynik pokaż w elemencie o id „wynik”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `push` dodaje dodatek do jednej z list.
- `concat` zwraca nową, połączoną tablicę i nie psuje oryginałów.
- Tablica 2D: `regal[wiersz][kolumna]`. Dla `[["Książka", 20], ["Zeszyt", 5]]` cena zeszytu to `regal[1][1]`.

## Wymagania

1. Start: `owoce = ["Jabłko", "Gruszka"]` i `warzywa = ["Marchew", "Pomidor"]`.
2. Odpowiedź z `prompt` dodajesz do `owoce`.
3. Połączoną listę i cenę zeszytu pokazujesz w pudełku.

## Przykład

Wpisz `Ser`. W pudełku pojawiają się linie „Lista zakupów: Jabłko,Gruszka,Ser,Marchew,Pomidor” i „Cena zeszytu: 5 zł”.
