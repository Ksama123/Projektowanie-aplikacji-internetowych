# Pomoc dostępna: Zmienne, stałe, typy

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Podręcznik ten zawiera bezpośrednie instrukcje krok po kroku oraz definicje kluczowych terminów używanych w tym dziale. Każde działanie opisane jest w sposób dosłowny, bez przenośni i bez skrótów myślowych.

---

## 1. Słowniczek pojęć tego działu

- **Zmienna (`let`)**: Nazwane miejsce w pamięci komputera przeznaczone do przechowywania wartości, którą można zmienić w trakcie działania programu.
- **Stała (`const`)**: Nazwane miejsce w pamięci komputera, do którego wartość przypisuje się dokładnie jeden raz w momencie deklaracji i nie można jej później zmienić.
- **Identyfikator**: Unikalna nazwa nadana zmiennej lub stałej, pisana bez spacji, rozpoczynająca się od litery.
- **Typ danych**: Określenie rodzaju informacji przechowywanej w pamięci (np. tekst, liczba całkowita, wartość logiczna prawda/fałsz).
- **Typ `string`**: Ciąg znaków tekstowych ujęty w cudzysłów lub grawisy.
- **Typ `number`**: Wartość liczbowa (całkowita lub dziesiętna z kropką).
- **Typ `boolean`**: Wartość logiczna przyjmująca wyłącznie stan `true` (prawda) albo `false` (fałsz).
- **Operator `typeof`**: Słowo kluczowe badające typ wskazanej wartości i zwracające nazwę tego typu w postaci tekstu.
- **Konwersja typu**: Zamiana wartości jednego typu na inny typ (np. zamiana tekstu `"25"` na liczbę `25` za pomocą `Number()`).
- **Literał szablonowy**: Tekst ujęty w grawisy \` \`, w którym za pomocą zapisu `${nazwaZmiennej}` można bezpośrednio wstawiać wartości do tekstu.
- **Zaokrąglenie kwoty**: Gdy wynik obliczeń pieniężnych ma „dziwne” cyfry po przecinku (np. `829.4000000000001`), zastosuj wzór `Math.round(kwota * 100) / 100`, aby uzyskać wartość z dwoma miejscami po przecinku (np. `829.4`).

---

## 2. Kolejność postępowania przy rozwiązywaniu każdego zadania

Wykonuj poniższe kroki dokładnie w podanej kolejności:

1. Otwórz plik `instrukcja.md` znajdujący się w folderze wybranego zadania. Przeczytaj uważnie treść zadania oraz sekcję z wymaganymi danymi.
2. Otwórz plik `script.js` w edytorze kodu. Znajdziesz w nim komentarze o strukturze `// KROK 1: ...`, `// KROK 2: ...` wskazujące dokładnie miejsca wpisywania kodu.
3. Wpisz wymagane deklaracje zmiennych oraz operacje w wyznaczonych miejscach. Pamiętaj o używaniu średników na końcu instrukcji i stosowaniu kropek w liczbach dziesiętnych.
4. Zapisz plik skryptu za pomocą skrótu `Ctrl + S`.
5. Otwórz plik `index.html` w przeglądarce internetowej. Sprawdź, czy na stronie w kontenerze wyniku pojawiły się poprawne teksty i wartości.
6. Otwórz konsolę deweloperską przeglądarki, naciskając klawisz `F12` i wybierając zakładkę *Console*. Sprawdź, czy nie wyświetlają się w niej czerwone komunikaty o błędach.
7. Jeżeli napotkasz trudności, których nie potrafisz samodzielnie rozwiązać, otwórz folder `rozwiazanie/` i porównaj swój kod z plikiem wzorcowym. Po zrozumieniu błędu wróć do swojego pliku i popraw go samodzielnie.

---

## 3. Zasady dostępności i czytelności (a11y) w tym dziale

- **Czytelność wypisywanych komunikatów**: Wypisując dane na stronie za pomocą `document.write()`, zawsze dołączaj słowny opis wartości (np. zamiast samej cyfry `45` wypisz `Wiek klienta: 45 lat`).
- **Podział na wiersze**: Każdy oddzielny komunikat kończ znacznikiem nowej linii `<br>`, aby teksty nie zlewały się w jeden nieczytelny blok.
- **Kontrast tekstu**: W pliku stylów `style.css` zadbaj o wysoki kontrast między kolorem tekstu (np. ciemnogranatowy `#111827`) a kolorem tła (np. biały `#ffffff`).
- **Hierarchia nagłówków**: Na stronie zawsze powinien znajdować się dokładnie jeden nagłówek główny `<h1>` opisujący zawartość ekranu.
