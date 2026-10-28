# Sprawdzian Grupa B – Zadanie 6: Podsumowanie projektu

## Cel

Strona pyta o deadline i datę dzisiaj. W elemencie o id „wynik” pokaż deadline w formacie DD.MM.YYYY, dzień tygodnia, liczbę dni od dzisiaj do deadline oraz status: „w terminie” gdy dni są dodatnie, „oddanie dzisiaj” gdy zero, „po terminie” gdy ujemne.

## Przydatne

To zadanie łączy format daty, dzień tygodnia i różnicę w dniach. Status bierz z liczby dni (deadline minus dzisiaj), a nie z porównania napisów. Składnia jest na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Wczytujesz deadline i dzisiaj (po trzy liczby).
2. W pudełku widać linię „Deadline: DD.MM.YYYY, nazwa”, linię „Dni: …” i status.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz deadline `2026`, `11`, `4` i dzisiaj `2026`, `10`, `30`. W pudełku pojawiają się linie „Deadline: 04.11.2026, środa”, „Dni: 5” i „w terminie”. Gdy dzisiaj to ten sam dzień, status to „oddanie dzisiaj”. Gdy dzisiaj to `2026`, `11`, `6`, status to „po terminie”, a dni to −2.
