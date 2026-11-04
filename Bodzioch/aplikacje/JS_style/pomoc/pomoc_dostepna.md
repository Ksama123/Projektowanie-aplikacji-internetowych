Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego modułu

- **element.style:** Właściwość w języku JavaScript, która odpowiada atrybutowi liniowemu `style="..."` w elemencie HTML. Służy do bezpośredniej zmiany wyglądu elementu na stronie.
- **camelCase:** Notacja wielbłądzia, w której usuwamy myślniki z nazw CSS, a każde kolejne słowo piszemy z wielkiej litery. Przykład: `background-color` zamienia się w `backgroundColor`.
- **Jednostka miary:** Określenie wymiaru w CSS, na przykład piksele (`px`) lub procenty (`%`). Liczba w JavaScript musi być połączona z jednostką w tekście, na przykład `"24px"`.
- **Styl liniowy (inline):** Styl wpisany bezpośrednio do znacznika HTML za pomocą atrybutu `style`. Ma on wyższy priorytet niż style zapisane w zewnętrznym arkuszu CSS.
- **Reset stylu:** Usunięcie stylu liniowego poprzez przypisanie pustego tekstu `""`. Powoduje to przywrócenie wyglądu elementu zapisanego w pliku `style.css`.

---

## 2. Kolejność wykonywania zadań

Wykonuj każde zadanie według poniższych, ponumerowanych kroków:

1. Otwórz plik `instrukcja.md` w folderze zadania i przeczytaj cel ćwiczenia.
2. Otwórz plik `index.html` w edytorze kodu i sprawdź identyfikatory elementów (`id="..."`), którymi będziesz sterować.
3. Otwórz plik `script.js` w katalogu zadania. Znajdź miejsce oznaczone komentarzem `// Twoje rozwiazanie`.
4. Pobierz referencje do potrzebnych elementów za pomocą metody `document.querySelector("#identyfikator")`.
5. Zarejestruj nasłuchiwanie zdarzenia za pomocą metody `addEventListener("click", ...)` lub `addEventListener("input", ...)`.
6. Wewnątrz funkcji obsługi zdarzenia zmień odpowiednią właściwość `element.style.nazwaWlasciwosci`, pamiętając o jednostce miary. Częste nazwy w tym dziale: `backgroundColor`, `fontSize`, `padding`, `borderWidth`, `borderColor`, `opacity`, `borderRadius`.
7. Gdy kolor pochodzi z przycisku z atrybutem `data-kolor`, odczytaj go przez `przycisk.dataset.kolor`.
8. Zapisz plik `script.js` i otwórz plik `index.html` w przeglądarce internetowej.
9. Przetestuj działanie strony, klikając przyciski lub przesuwając suwaki.
10. Po samodzielnej próbie rozwiązania porównaj swój kod z plikami w podfolderze `rozwiazanie/`.

---

## 3. Wskazówki dostępności (a11y) przy zmianie stylów

- **Kontrast tekstu i tła:** Gdy instrukcja podaje konkretną listę ciemnych kolorów, ustaw dla nich `color = "#ffffff"`, a dla pozostałych ciemniejszy tekst (np. `#1e293b`). Nie zgaduj jasności „na oko”, jeśli lista jest podana.
- **Czytelny rozmiar czcionki:** Przy dynamicznej regulacji wielkości liter nie ustawiaj wartości mniejszych niż `12px`. Zbyt mały tekst jest nieczytelny dla wielu odbiorców.
- **Etykiety dla kontrolek:** Każdy suwak `<input type="range">` oraz próbnik `<input type="color">` musi posiadać powiązany znacznik `<label>` z atrybutem `for`. Pomaga to osobom korzystającym z czytników ekranowych.
