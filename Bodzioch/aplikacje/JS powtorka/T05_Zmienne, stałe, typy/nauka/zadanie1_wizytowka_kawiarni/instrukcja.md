# Zadanie 1: Wizytówka i kalkulator zamówienia kawiarni

## Cel dydaktyczny
Wprowadzenie i utrwalenie bazowego fundamentu języka JavaScript: deklaracji stałych (`const`) dla parametrów niezmiennych oraz zmiennych (`let`) dla danych modyfikowalnych. Przećwiczenie typów prostych (`string`, `number`), podstawowych operacji mnożenia oraz prezentacji wyników za pomocą `console.log()` i `document.write()` w kontenerze `<div class="wynik">`.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Cyfrowe menu restauracyjne**: Wyświetlanie nazwy dania, ceny jednostkowej oraz dynamiczne wyliczanie kosztu porcji w zależności od wybranej liczby sztuk.
2. **Kasy samoobsługowe (systemy POS)**: Przechowywanie w pamięci kasy stałego numeru stanowiska oraz zmiennej sumy rachunku aktualizującej się po zeskanowaniu każdego kolejnego produktu.
3. **Wizytówki e-commerce**: Prezentacja nagłówka oferty sklepu wraz z dynamicznym komunikatem o cenie wybranego wariantu kawy.

---

## Opis zadania
Jako programista frontendu kawiarni rzemieślniczej *Aroma Bean* masz za zadanie utworzyć skrypt, który:
1. Zadeklaruje stałą `NAZWA_LOKALU` o wartości `"Palarnia Kawy Aroma Bean"` oraz stałą `CENA_ESPRESSO` o wartości `14`.
2. Zadeklaruje zmienną `liczbaKupionychKaw` i nada jej początkową wartość `2`.
3. Obliczy koszt całkowity i zapisze go w nowej zmiennej `kwotaRazem` (iloczyn liczby kaw i ceny jednostkowej).
4. Następnie zasymuluje domówienie jeszcze jednej kawy – zwiększy wartość zmiennej `liczbaKupionychKaw` do `3` i zaktualizuje `kwotaRazem`.
5. Wypisze wszystkie dane diagnostycznie w konsoli deweloperskiej za pomocą `console.log()`.
6. Wygeneruje czytelne podsumowanie na stronie internetowej za pomocą instrukcji `document.write()` umieszczonych wewnątrz kontenera `<div class="wynik">`. Każdy wiersz tekstu rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów i wartości w podanych miejscach:
- Nazwa kawiarni: `"Palarnia Kawy Aroma Bean"`
- Wypis powitania w konsoli: `"Inicjalizacja systemu sprzedaży Aroma Bean"`
- Wypis na stronie:
  - `"Lokal: Palarnia Kawy Aroma Bean"`
  - `"Cena pojedynczego espresso: 14 PLN"`
  - `"Liczba zamówionych kaw: 3 szt."`
  - `"Łączny koszt zamówienia: 42 PLN"`

---

## Wymagania techniczne
- Użyj `const` dla nazwy lokalu i ceny pojedynczej kawy.
- Użyj `let` dla liczby kaw oraz łącznego kosztu.
- Całkowity zakaz używania słowa kluczowego `var`.
- Nie używaj selektorów DOM (`getElementById`, `querySelector`). Wypis realizuj wyłącznie instrukcją `document.write()`.
