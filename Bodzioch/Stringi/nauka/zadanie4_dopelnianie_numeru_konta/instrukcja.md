# Nauka – Dopełnianie numeru (padStart)

## Cel

Strona pyta o fragment numeru konta (na przykład pięć cyfr). W elemencie o id „wynik” pokaż go w formacie 26-cyfrowym: brakujące cyfry na początku uzupełnij zerami. Zakładasz, że użytkownik podaje sam numer, bez spacji.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `padStart(dlugosc, znak)` dopełnia napis z początku do podanej długości; drugi argument to znak, na przykład `"0"`.
- `length` mówi, ile znaków już jest.

## Wymagania

1. Fragment numeru pobierasz z `prompt`.
2. Dopełniasz z początku zerami do 26 znaków.
3. W pudełku widać pełny 26-cyfrowy numer.

## Przykład

Wpisz `12345`. W pudełku pojawia się „0000000000000000000012345”.
