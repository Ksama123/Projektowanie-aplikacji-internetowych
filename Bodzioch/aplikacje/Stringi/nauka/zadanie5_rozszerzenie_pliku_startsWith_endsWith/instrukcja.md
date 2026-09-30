# Nauka – Rozszerzenie pliku (startsWith, endsWith)

## Cel

Strona pyta o nazwę pliku, na przykład „raport.pdf”. W elemencie o id „wynik” pokaż, czy plik wygląda na bezpieczny do podglądu (bezpieczne rozszerzenia to `.txt`, `.pdf` i `.html`) oraz samą nazwę bez rozszerzenia, czyli wszystko do ostatniej kropki. Nie używaj wyrażeń regularnych — tylko metody string.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`. Kilka linii sklejasz znakiem `"\n"`.

- `endsWith(tekst)` sprawdza, czy napis kończy się podanym fragmentem.
- `lastIndexOf(".")` daje indeks ostatniej kropki; `slice(0, lastIndexOf("."))` wycina nazwę bez rozszerzenia. Uważaj na brak kropki.
- Kilka rozszerzeń sprawdzisz przez `endsWith(".txt") || endsWith(".pdf") || …`.

## Wymagania

1. Nazwę pliku pobierasz z `prompt`.
2. W pudełku widać „Bezpieczny: Tak” albo „Bezpieczny: Nie”.
3. Druga linia to „Nazwa bez rozszerzenia: ” i nazwa; gdy nie ma kropki, pokazujesz cały napis.

## Przykład

Wpisz `raport.pdf`. W pudełku pojawiają się linie „Bezpieczny: Tak” i „Nazwa bez rozszerzenia: raport”. Dla `script.exe` pierwsza linia to „Bezpieczny: Nie”, a nazwa to „script”.
