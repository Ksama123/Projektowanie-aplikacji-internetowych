# Zadanie 2: Metody stosu i kolejki

## Cel

Złóż listę zakupów w tablicy `koszyk`. Dodawaj produkty na koniec i na początek, a potem usuń ostatni i pierwszy element. Kolejne stany koszyka pokaż w elemencie o id „wynik”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka etapów zbierasz do linii i wypisujesz raz na końcu (`join("\n")`). Nie używaj `document.write`.

- `push` dodaje na koniec, `unshift` na początek.
- `pop` zdejmuje z końca, `shift` z początku.

## Wymagania

1. Zaczynasz od pustej tablicy `koszyk`.
2. Dwa produkty dodajesz przez `push`, pilny produkt przez `unshift`.
3. Ostatni produkt usuwasz `pop` i pokazujesz `alert` „Usunięto ostatni produkt (za drogi)!”. Potem usuwasz pierwszy przez `shift`.
4. W pudełku widać stany: pusty koszyk, po zakupach, z pilnym towarem i ostateczny koszyk.

## Przykład

Wpisz `Chleb`, `Masło` i pilne `Mleko`. Po `alert` w pudełku widać między innymi linie „Po zakupach: Chleb,Masło”, „Z pilnym towarem: Mleko,Chleb,Masło” i „Ostateczny koszyk: Chleb”.
