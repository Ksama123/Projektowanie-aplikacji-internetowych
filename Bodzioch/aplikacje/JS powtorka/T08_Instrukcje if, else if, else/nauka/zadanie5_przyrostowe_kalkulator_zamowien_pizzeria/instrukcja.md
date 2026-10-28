# Zadanie 5 (Przyrostowe): Kalkulator zamówień i rabatów Pizzeria La Bella

## Cel zadania

Celem zadania przyrostowego jest zwieńczenie działu poprzez rozbudowę systemu zamówień online marki wiodącej **Pizzeria La Bella**. Uczeń rozwinie moduł weryfikacji z poprzedniej lekcji o pełną logikę biznesową instrukcji warunkowych `if`, `else if` oraz `else`. Zadanie realizuje zasadę **Zero Regresji** — dotychczasowa weryfikacja logistyczna pozostaje aktywna, a nowe mechanizmy wyliczają rabat, koszt dostawy oraz status realizacji.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy POS i platformy delivery (np. Pyszne.pl, Glovo, Wolt)**: Dynamiczne naliczanie zniżek, dopłat za strefy dowozu oraz sprawdzanie minimalnej wartości zamówienia przed wysłaniem zlecenia do kuchni.
2. **Portale gastronomiczne z programem lojalnościowym**: Łączenie kuponów rabatowych z przywilejami stałego klienta podczas finalizacji transakcji.
3. **Automatyczne systemy dyspozytorskie**: Natychmiastowe odrzucanie zleceń na adresy z czarnej listy lub spoza strefy operacyjnej lokalu.

## Treść do wpisania

W swoim skrypcie wykorzystaj następujące dosłowne dane i teksty etykiet:
- Tekst zapytania w prompt: `"Wprowadź kod promocyjny (lub pozostaw pusty):"`
- Domyślny kod promocyjny w prompt: `"BELLA20"`
- Wartość zamówienia klienta: `110`
- Status stałego klienta: `true`
- Status blokady rejonu: `false`
- Komunikaty i etykiety taryfikatora:
  - `"Pizzeria La Bella - Raport Rozliczenia Zamówienia"`
  - `"Wartość dań w koszyku: "` + kwota + `" zł"`
  - `"Wprowadzony kod rabatowy: "` + kod z prompt
  - `"Status stałego klienta: "` + `"TAK"` albo `"NIE"` (przez `if / else`, bez `? :`)
  - `"Status realizacji: Zamówienie zatwierdzone i przekazane do pieca."`
  - `"Status realizacji: Odrzucono - minimalna kwota zamówienia to 40 zł."`
  - `"Status realizacji: Odrzucono - adres dostawy w strefie zablokowanej."`
  - Linie finansowe (tylko gdy zamówienie zatwierdzone):
    - `"Przyznany rabat kwotowy: "` + kwota rabatu + `" zł ("` + procent + `"%)"`
    - `"Koszty dostawy kurierskiej: "` → gdy 0 zł wypisz `"0 zł (Darmowa dostawa)"`, w przeciwnym razie kwotę + `" zł"`
    - `"Ostateczna kwota do zapłaty: "` + kwota + `" zł"`

**Oczekiwany wynik dla danych startowych (110 zł, kod BELLA20, stały klient, rejon OK):** rabat 10% + bonus 5% = 15%, kwota rabatu 16,5 zł, dostawa 0 zł, do zapłaty **93,5 zł**.

## Instrukcja krok po kroku

1. Otwórz plik `script.js` w katalogu zadania. Zauważ, że zachowano w nim strukturę danych i pobieranie kodu z poprzedniego etapu (Zasada Zero Regresji).
2. Sprawdź warunki wykluczające realizację zamówienia — **całą kalkulację finansową umieść wyłącznie w gałęzi `else` akceptacji**:
   - Jeśli `adresZablokowany === true`, ustaw status realizacji na odrzucenie z powodu strefy zablokowanej.
   - W przeciwnym razie, jeśli `kwotaZamowienia < 40`, ustaw status na odrzucenie z powodu braku kwoty minimalnej.
   - W przeciwnym razie (gałąź `else`) ustaw status zatwierdzenia i wykonaj kroki 3–6 wewnątrz tego bloku.
3. Wewnątrz poprawnego zamówienia wyznacz procent rabatu za pomocą drabiny `else if`:
   - kwota >= 150 zł -> rabat 15%
   - kwota >= 80 zł -> rabat 10%
   - w pozostałych przypadkach -> rabat 0%
4. Zastosuj warunek złożony z operatorem `&&`: jeśli wpisany kod to `"BELLA20"` oraz klient posiada status stałego klienta (`statusStalegoKlienta === true`), zwiększ stawkę rabatu o dodatkowe 5%.
5. Wyznacz koszt dostawy: jeśli `kwotaZamowienia >= 100` LUB `statusStalegoKlienta === true`, koszt dostawy wynosi `0` zł; w przeciwnym razie wynosi `12` zł.
6. Oblicz kwoty według wzorów:
   - `kwotaRabatu = (kwotaZamowienia * stawkaRabatu) / 100`
   - `kwotaDoZaplaty = kwotaZamowienia - kwotaRabatu + kosztDostawy`
7. Wypisz raport podsumowania zamówienia do kontenera `<div class="wynik">`. Linie rabatu, dostawy i kwoty końcowej wypisz **tylko wtedy**, gdy zamówienie zostało zatwierdzone (np. flaga `let zamowienieZatwierdzone = true` ustawiana w gałęzi akceptacji — nie używaj metody `String.includes`).
8. Zarejestruj status i kwotę w konsoli (`console.log`).

## Kryteria sukcesu / definicja ukończenia

- [ ] Zachowano ciągłość logiczną danych z poprzedniego modułu (Zero Regresji).
- [ ] Zastosowano pełną strukturę `if / else if / else` z kalkulacją wyłącznie w gałęzi akceptacji.
- [ ] Wynik wypisano za pomocą `document.write()` ze znacznikami `"<br>"`.
- [ ] Nie użyto operatora `? :` ani metody `includes`.
- [ ] Skrypt przechodzi testy składniowe `node --check` bez błędów.
