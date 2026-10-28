# Szybka pomoc: Moduł T08 — Instrukcje warunkowe if, else if, else

---

## 1. Organizacja pracy z zadaniami

Poniższa tabela przedstawia różnicę pomiędzy Twoim miejscem pracy a katalogiem referencyjnym (dotyczy warsztatu `nauka/`):

| Element | Folder zadania (np. `zadanie1_.../`) | Podfolder `rozwiazanie/` |
|---------|--------------------------------------|--------------------------|
| **Rola katalogu** | Twoje główne miejsce pracy i pisania kodu | Wzorcowe rozwiązanie przygotowane przez nauczyciela |
| **Plik `index.html`** | Gotowa struktura z miejscem na wynik (`<div class="wynik">`) | Kompletna strona połączona ze skryptem |
| **Plik `script.js`** | Szablon startowy z komentarzami `// KROK N:` i miejscem na kod | W 100% działający kod JavaScript bez braków |
| **Plik `instrukcja.md`** | Dokładny opis zadania, cele, kroki oraz treść do wpisania | Tożsama instrukcja dla weryfikacji założeń |
| **Kiedy zaglądać?** | Pracujesz w nim przez cały czas trwania ćwiczenia | Dopiero po samodzielnej próbie rozwiązania lub w razie utknięcia |

---

## 2. Ściąga składniowa modułu

```javascript
// 1. Podstawowa instrukcja if
if (warunek) {
  document.write("Warunek spełniony.<br>");
}

// 2. Instrukcja dwuwariantowa if / else
if (punkty >= 50) {
  document.write("Zaliczono.<br>");
} else {
  document.write("Brak zaliczenia.<br>");
}

// 3. Drabina warunkowa else if (zwróć uwagę na kolejność progów!)
if (kwota >= 500) {
  document.write("Rabat 15%<br>");
} else if (kwota >= 200) {
  document.write("Rabat 10%<br>");
} else if (kwota >= 50) {
  document.write("Rabat 5%<br>");
} else {
  document.write("Brak rabatu.<br>");
}

// 4. Warunki złożone z operatorami logicznymi
if (wiek >= 18 && posiadaPrawoJazdy) {
  document.write("Może wypożyczyć auto.<br>");
}

if (dzien === "sobota" || dzien === "niedziela") {
  document.write("Weekend.<br>");
}

// 5. Tekst TAK/NIE zamiast true/false (bez operatora ? :)
let opis = "NIE";
if (kartaKlubowa) {
  opis = "TAK";
}
document.write("Karta aktywna: " + opis + "<br>");

// 6. „Zakończ działanie” przy błędzie — dalszy kod w else
if (kwota <= 0) {
  document.write("Błąd: niepoprawna kwota.<br>");
} else {
  // tu dopiero drabina rabatów i wypis rachunku
}

// 7. Pobranie danych z wartością domyślną i konwersja
const wejscie = prompt("Podaj liczbę sztuk:", "1");
const liczbaSztuk = Number(wejscie);

// 8. Diagnostyka w konsoli (F12 → Console)
console.log("Status:", decyzja);
```

---

## 3. Szybkie przypomnienie (Checklista techniczna)

* **Otwieranie konsoli:** Wciśnij klawisz `F12` (lub `Ctrl + Shift + I`) w przeglądarce i przejdź do zakładki **Console**, aby sprawdzić, czy Twój skrypt nie zgłasza błędów składniowych (`SyntaxError`) lub błędów wykonania.
* **Ścieżki do plików:** Plik `index.html` dołącza skrypt poprzez znacznik `<script src="script.js"></script>` znajdujący się w tym samym folderze. Nie zmieniaj nazw plików `script.js` ani `style.css`.
* **Standard wyjścia Semestru 1:** Wszystkie komunikaty wypisujemy za pomocą `document.write(...)` bezpośrednio w kontenerze wyniku. Nie stosuj metod `getElementById` ani `querySelector` — pojawią się one dopiero w kolejnych semestrach.
* **Znak nowej linii:** Pamiętaj o dodawaniu znacznika `"<br>"` na końcu każdego ciągu znaków wypisywanego przez `document.write`, aby kolejne komunikaty wyświetlały się w nowych wierszach.
* **Znak równości w warunku:** Zawsze używaj operatora ścisłego porównania `===` do sprawdzania równości. Pojedynczy znak `=` oznacza przypisanie nowej wartości do zmiennej i zepsuje Twój warunek logiczny.
* **Zakaz ternary:** Nie używaj operatora warunkowego `? :` — w tym module tekst `"TAK"` / `"NIE"` przygotowujesz zwykłym `if / else`.
* **Wzorzec wypisu:** Trzymaj się dosłownie etykiet i jednostek z instrukcji zadania (np. `" os."`, `" cali"`, `" B"`, `" zł"`).
