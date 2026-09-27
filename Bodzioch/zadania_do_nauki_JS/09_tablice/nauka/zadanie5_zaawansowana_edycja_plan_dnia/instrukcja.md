# Zadanie 5: Zaawansowana edycja planu dnia

## Cel

Masz tablicę dni tygodnia. Wytnij z niej weekend i dni robocze (`slice`), a potem zamień środę na plan podany przez użytkownika (`splice`). Wszystkie etapy pokaż w elemencie o id „wynik”.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Kilka linii sklejasz znakiem `"\n"`. Nie używaj `document.write`.

- `slice(5)` kopiuje od indeksu 5 do końca (weekend).
- `slice(0, 5)` kopiuje dni robocze (indeksy 0–4).
- `splice(2, 1, nowyPlan)` zamienia jeden element od indeksu 2.

## Wymagania

1. Tablica startowa to `["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]`.
2. Weekend i dni robocze to kopie (`slice`), nie wycinanie z oryginału przed pokazaniem.
3. Środę (indeks 2) zamieniasz na odpowiedź z `prompt`.
4. W pudełku widać tydzień, „Odpoczywam w: …”, „Pracuję w: …” i „Mój nowy tydzień: …”.

## Przykład

Wpisz `Kino`. W pudełku pojawiają się między innymi „Odpoczywam w: Sobota,Niedziela”, „Pracuję w: Poniedziałek,Wtorek,Środa,Czwartek,Piątek” oraz nowy tydzień ze „Kino” zamiast „Środa”.
