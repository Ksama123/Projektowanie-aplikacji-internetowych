> Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego działu

* **Instrukcja warunkowa (`if`)**: Polecenie w programie, które wykonuje wyznaczony fragment kodu tylko wtedy, gdy sprawdzany warunek jest prawdziwy.
* **Warunek logiczny**: Wyrażenie porównujące dwie wartości, którego wynikiem jest prawda (`true`) albo fałsz (`false`).
* **Blok kodu**: Grupa poleceń ujęta w nawiasy klamrowe `{ ... }`. Wykonuje się ona jako jedna całość.
* **Gałąź alternatywna (`else`)**: Część instrukcji warunkowej, która uruchamia się wtedy, gdy warunek początkowy okazał się fałszywy.
* **Drabina warunkowa (`else if`)**: Szereg kolejnych warunków sprawdzanych jeden po drugim, gdy wcześniejsze warunki nie zostały spełnione.
* **Funkcja `prompt()`**: Okno dialogowe pobierające dane od użytkownika. Zawsze podaj drugi argument (wartość domyślną). Wynik jest tekstem — przy porównaniach liczbowych użyj `Number()`.

---

## 2. Kolejność wykonywania zadania krok po kroku

1. Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania. Przeczytaj dokładnie cel ćwiczenia oraz sekcję „Treść do wpisania” / „Treść merytoryczna” — tam są dosłowne etykiety i format wypisu.
2. Otwórz plik `script.js` w edytorze kodu. Odszukaj komentarze `// KROK N:` oraz miejsce `// Twoje rozwiazanie` wskazujące, co uzupełnić. Jeśli w szablonie jest już `prompt(...)`, nie usuwaj wartości domyślnej.
3. Wynik skryptu trafia do elementu HTML z klasą `.wynik` (kontener jest już w `index.html` — nie musisz go zmieniać).
4. Zapisz wszystkie otwarte pliki za pomocą skrótu klawiszowego `Ctrl + S`.
5. Otwórz plik `index.html` w przeglądarce internetowej. Wciśnij klawisz `F12` i sprawdź w konsoli, czy nie ma czerwonych komunikatów o błędach.
6. Sprawdź, czy wyświetlony tekst na ekranie jest zgodny z etykietami i przykładem z instrukcji zadania.
7. **Tylko w folderze `nauka/`:** dopiero po zakończeniu własnej pracy możesz otworzyć podfolder `rozwiazanie/` i porównać swój kod z wzorcem. Na sprawdzianie folder `rozwiazanie/` nie jest materiałem pomocniczym dla ucznia.

---

## 3. Proste zasady dostępności cyfrowej (a11y) w tym module

* Dbaj o wysoki kontrast tekstu wypisywanego na stronie względem tła kontenera.
* Każdy nagłówek na stronie musi mieć poprawną hierarchię (od `<h1>` do `<h3>`), bez pomijania poziomów.
* Wszystkie obrazy w kodzie HTML muszą posiadać opisowy atrybut `alt`.
* Wyniki prezentowane użytkownikowi powinny być formułowane pełnymi, jednoznacznymi zdaniami.
