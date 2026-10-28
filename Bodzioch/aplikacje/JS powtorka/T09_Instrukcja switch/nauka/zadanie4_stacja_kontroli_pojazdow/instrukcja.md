# Zadanie 4: Zintegrowany kalkulator opłat stacji kontroli pojazdów

## Cel zadania
Celem zadania integrującego jest połączenie umiejętności zdobytych w zadaniach 1, 2 i 3 w spójną mini-aplikację. Wykorzystasz instrukcję `switch` do obsługi kodów tekstowych, zastosujesz grupowanie klauzul (*fall-through*) dla pojazdów o tożsamej stawce urzędowej oraz pobierzesz dane od użytkownika za pomocą okna dialogowego `prompt()` z obowiązkową wartością domyślną.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
Zintegrowany wybór wariantu z grupowaniem i kalkulacją opłat występuje w wielu branżach:
- **Stacje diagnostyczne i warsztaty**: automatyczne naliczanie urzędowej opłaty za badanie techniczne na podstawie kategorii pojazdu z dowodu rejestracyjnego.
- **Myjnie automatyczne i serwisy detailingowe**: dobór programu mycia i cennika w zależności od gabarytów auta (sedan, SUV, van, bus).
- **Parkingi miejskie i lotniskowe**: taryfikacja biletowa zależna od typu pojazdu (jednoślad, samochód osobowy, autokar).

## Wymagania funkcjonalne
1. W pliku `script.js` pobierz kod kategorii pojazdu za pomocą funkcji `prompt()` z obowiązkową wartością domyślną `"B"`:
   `let kategoria = prompt("Podaj kategorię pojazdu (A, B, C, D):", "B");`
2. Zbuduj instrukcję `switch (kategoria)` i w każdym wariancie **wypisz** komunikat zgodny z sekcją „Treść do wpisania” (nie musisz tworzyć osobnych zmiennych na nazwę i opłatę):
   - Dla kategorii `"A"`: komunikat o motocyklu i opłacie urzędowej 62 zł.
   - Dla kategorii `"B"`: komunikat o samochodzie osobowym i opłacie urzędowej 98 zł.
   - Dla kategorii `"C"` oraz `"D"` (zastosuj grupowanie *fall-through*): wspólny komunikat o pojeździe ciężarowym / autobusie i opłacie 176 zł.
   - Dla każdej innej wartości (`default`): komunikat o nierozpoznanej kategorii.
3. Wypisz wynik w kontenerze `.wynik` za pomocą `document.write()` i znacznika `<br>`.
4. Równolegle zarejestruj wynik w konsoli za pomocą `console.log()`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące teksty komunikatów:
- Dla kategorii A: `"Kategoria A (Motocykl): Koszt badania technicznego wynosi 62 zł."`
- Dla kategorii B: `"Kategoria B (Samochód osobowy): Koszt badania technicznego wynosi 98 zł."`
- Dla kategorii C oraz D: `"Kategoria C/D (Pojazd ciężarowy / autobus): Koszt badania technicznego wynosi 176 zł."`
- Dla klauzuli default: `"Błąd: Nierozpoznana kategoria pojazdu. Wybierz symbol A, B, C lub D."`
