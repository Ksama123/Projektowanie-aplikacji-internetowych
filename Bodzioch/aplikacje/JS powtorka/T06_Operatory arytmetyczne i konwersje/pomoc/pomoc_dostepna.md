Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Podręcznik ten opisuje zasady wykonywania obliczeń matematycznych oraz zamiany typów danych w języku JavaScript. Każdy krok wykonuj dokładnie w opisanej kolejności.

---

## 1. Słowniczek pojęć tego działu

- **Operator arytmetyczny:** Znak służący do wykonywania operacji matematycznej, na przykład znak plus `+` do dodawania lub gwiazdka `*` do mnożenia.
- **Modulo (`%`):** Działanie matematyczne obliczające resztę z dzielenia całkowitego dwóch liczb, na przykład reszta z dzielenia 7 przez 3 wynosi 1.
- **`Math.floor`:** Funkcja odrzucająca część ułamkową liczby (zaokrąglenie w dół), używana do wyliczania pełnych jednostek, na przykład pełnych godzin lub pełnych opakowań.
- **Potęgowanie (`**`):** Podnoszenie liczby do potęgi, na przykład `40 ** 2` daje pole kwadratu o boku 40.
- **Inkrementacja (`++`):** Zwiększenie wartości zmiennej liczbowej o dokładnie jeden.
- **Dekrementacja (`--`):** Zmniejszenie wartości zmiennej liczbowej o dokładnie jeden.
- **Konwersja jawna:** Świadoma zmiana typu danych wykonana przez programistę za pomocą specjalnej komendy, na przykład `Number("10")`.
- **Koercja typów (konwersja niejawna):** Samoczynna zmiana typu danych dokonana przez przeglądarkę, na przykład zamiana liczby na tekst podczas dodawania do napisu.
- **Wartość `NaN`:** Oznaczenie w języku JavaScript informujące, że wynik operacji nie jest prawidłową liczbą. Po sprawdzeniu `Number.isNaN()` komunikat statusu na stronę bierz dosłownie z instrukcji zadania (w tym module bez `if` i bez `? :`).

---

## 2. Kolejność wykonywania każdego ćwiczenia

Wykonuj zadania pojedynczo według poniższych kroków. Nie przechodź do kolejnego zadania przed poprawnym uruchomieniem bieżącego.

1. **Krok 1:** Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania. Przeczytaj dokładnie cel ćwiczenia oraz tabelę wymaganych danych.
2. **Krok 2:** Otwórz pliki `index.html` oraz `script.js` w swoim edytorze kodu. Zapoznaj się z gotową strukturą strony.
3. **Krok 3:** Odszukaj w pliku HTML komentarze w formacie `<!-- KROK N: ... -->`. W pliku JavaScript pisz kod w miejscach oznaczonych komentarzem `// Twoje rozwiazanie`.
4. **Krok 4:** Zapisz zmiany w plikach za pomocą skrótu Ctrl+S. Otwórz plik `index.html` w przeglądarce internetowej.
5. **Krok 5:** Otwórz konsolę deweloperską wciskając klawisz F12. Sprawdź, czy w konsoli nie ma czerwonych komunikatów o błędach.
6. **Krok 6:** Porównaj wyświetlony wynik z opisem w instrukcji. Jeśli zadanie działa poprawnie, możesz otworzyć folder `rozwiazanie/` i porównać swój kod z kodem wzorcowym.

---

## 3. Zasady dostępności (a11y) w tym module

Podczas tworzenia stron z obliczeniami pamiętaj o czytelności interfejsu dla każdego odbiorcy.

1. Każda strona musi posiadać dokładnie jeden nagłówek główny `<h1>` informujący o temacie kalkulatora.
2. Poszczególne sekcje obliczeń rozdzielaj nagłówkami drugiego stopnia `<h2>`.
3. Tekst z wynikiem obliczeń musi mieć wysoki kontrast względem tła, na przykład ciemny tekst na jasnym tle.
4. Etykiety i jednostki przy wynikach zapisuj pełnymi słowami lub jednoznacznymi skrótami, na przykład „złotych” lub „zł”.
