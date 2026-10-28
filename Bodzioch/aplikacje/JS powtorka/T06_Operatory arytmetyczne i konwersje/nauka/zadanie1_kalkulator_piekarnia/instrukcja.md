# Zadanie 1: Kalkulator wypieków piekarni rzemieślniczej

## Cel dydaktyczny
Wprowadzenie bazowego fundamentu obliczeń w języku JavaScript: wykonywania podstawowych działań arytmetycznych (dodawanie `+`, odejmowanie `-`, mnożenie `*`, dzielenie `/`), obliczania reszty z dzielenia całkowitego za pomocą operatora modulo `%`, potęgowania `**` oraz zaokrąglania w dół `Math.floor`. Zadanie uczy również przestrzegania kolejności wykonywania działań przy użyciu nawiasów oraz formatowania wyników za pomocą metody `document.write()` w kontenerze `<div class="wynik">`.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy gastronomiczne i piekarnicze**: Przeliczanie ilości mąki, zakwasu i wody na zadaną liczbę bochenków oraz wyliczanie liczby pełnych blach pieca i sztuk pozostałych.
2. **Kalkulatory e-commerce**: Wyliczanie łącznej wagi przesyłki, podział produktów na paczki kurierskie o określonym limicie wagowym oraz naliczanie rabatów ilościowych.
3. **Aplikacje magazynowe**: Obliczanie liczby pełnych palet magazynowych oraz reszty towaru kierowanej do strefy kompletacji drobnej.

---

## Opis zadania
Jako programista systemu zamówień piekarni *Chleb & Kłos* przygotuj skrypt obliczający bilans porannego wypieku chleba żytniego:
1. Zadeklaruj stałe: `CENA_BOCHENKA = 8` (w złotych) oraz `MIEJSCA_W_PIECU = 12` (ile bochenków mieści się na jednym wsadzie pieca).
2. Zadeklaruj zmienną `liczbaUpieczonychBochenkow` i przypisz jej wartość `38`.
3. Oblicz liczbę pełnych wsadów pieca za pomocą dzielenia i zaokrąglenia w dół `Math.floor(liczbaUpieczonychBochenkow / MIEJSCA_W_PIECU)`.
4. Oblicz liczbę bochenków, które nie zmieściły się do pełnego pieca (resztę) za pomocą operatora modulo: `liczbaUpieczonychBochenkow % MIEJSCA_W_PIECU`.
5. Zadeklaruj stałą `BOK_BLACHY = 40` (bok kwadratowej blachy w cm). Oblicz pole blachy operatorem potęgowania: `BOK_BLACHY ** 2`.
6. Zadeklaruj zmienną `liczbaSprzedanychBochenkow` o wartości `30`. Oblicz liczbę bochenków pozostałych na koniec dnia (odejmowanie) oraz łączny przychód ze sprzedaży (mnożenie).
7. Wypisz informacje diagnostyczne w konsoli deweloperskiej za pomocą `console.log()`.
8. Wygeneruj zestawienie na stronie internetowej wewnątrz elementu `<div class="wynik">` za pomocą `document.write()`. Każdy wiersz rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów w cudzysłowach w wyznaczonych miejscach:
- Komunikat w konsoli: `"Piekarnia Chleb i Klos - raport dziennego wypieku"`
- Wypis na stronie:
  - `"Piekarnia Rzemieślnicza Chleb i Kłos"`
  - `"Łączna liczba upieczonych bochenków: 38 szt."`
  - `"Liczba pełnych wsadów pieca: 3"`
  - `"Bochenki w niepełnym wsadzie (modulo): 2 szt."`
  - `"Pole kwadratowej blachy (potęgowanie **): 1600 cm2"`
  - `"Liczba sprzedanych bochenków: 30 szt."`
  - `"Przychód ze sprzedaży: 240 PLN"`
  - `"Pozostało w piekarni: 8 szt."`

---

## Wymagania techniczne
- Zmienne niezmienne zadeklaruj przez `const`, a wartości modyfikowalne przez `let`.
- Nie używaj słowa kluczowego `var`.
- Nie korzystaj z selektorów DOM ani zdarzeń. Wypis zrealizuj wyłącznie za pomocą `document.write()`.
