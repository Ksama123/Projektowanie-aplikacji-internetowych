# Zadanie 2: Licznik przyjęć i wydań w magazynie elektroniki

## Cel dydaktyczny
Opanowanie stosowania operatorów przypisania złożonego (`+=`, `-=`, `*=`, `/=`) oraz zrozumienie fundamentalnej różnicy w mechanizmie działania preinkrementacji (`++zmienna`) i postinkrementacji (`zmienna++`). Zadanie demonstruje, kiedy nowa wartość licznika staje się dostępna w bieżącym wyrażeniu, a kiedy operacja zwiększenia następuje dopiero po odczytaniu wartości pierwotnej.

### Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy zarządzania magazynem (WMS)**: Błyskawiczna aktualizacja stanów magazynowych na regałach po skanowaniu kodów kreskowych dostawy lub wysyłki.
2. **Generatory numerów zamówień**: Automatyczne przydzielanie unikalnego kolejnego identyfikatora transakcji przed zapisem rekordu w bazie danych.
3. **Liczniki prób i limity w aplikacjach**: Zliczanie nieudanych logowań lub wykonanych zapytań w określonym oknie czasowym.

---

## Opis zadania
Jako programista hurtowni podzespołów komputerowych *ElectroVolt* przygotuj skrypt ewidencjonujący ruch dysków SSD:
1. Zadeklaruj zmienną `stanDyskowSSD` o początkowej wartości `100`.
2. Zarejestruj dostawę hurtową 50 sztuk za pomocą operatora `+=`.
3. Zarejestruj wydanie 20 sztuk dla sklepu stacjonarnego za pomocą operatora `-=`.
4. Przetestuj działanie inkrementacji na identyfikatorach dokumentów WZ (Wydanie Zewnętrzne):
   - Zadeklaruj `numerDokumentuA` o wartości `1000`. Utwórz zmienną `wystawionyWzA` i przypisz jej wartość `++numerDokumentuA` (preinkrementacja).
   - Zadeklaruj `numerDokumentuB` o wartości `2000`. Utwórz zmienną `wystawionyWzB` i przypisz jej wartość `numerDokumentuB++` (postinkrementacja).
5. Zarejestruj podwojenie zapasu bezpieczeństwa dla dysków specjalnych za pomocą operatora `*= 2` na nowej zmiennej `zapasKrytyczny = 15`.
6. Wypisz dane diagnostyczne w konsoli deweloperskiej za pomocą `console.log()`.
7. Wypisz czytelne zestawienie na stronie internetowej za pomocą `document.write()` wewnątrz kontenera `<div class="wynik">`. Każdy wiersz rozdziel znacznikiem `<br>`.

---

## Treść do wpisania
W skrypcie użyj dosłownie następujących tekstów w cudzysłowach w wyznaczonych miejscach:
- Komunikat w konsoli: `"Magazyn Centralny ElectroVolt - ewidencja operacji"`
- Wypis na stronie:
  - `"Magazyn Centralny ElectroVolt - Ewidencja Towarowa"`
  - `"Aktualny stan dysków SSD: 130 szt."`
  - `"Dokument preinkrementacji: 1001 (zmienna: 1001)"`
  - `"Dokument postinkrementacji: 2000 (zmienna: 2001)"`
  - `"Zapas krytyczny po podwojeniu: 30 szt."`

---

## Wymagania techniczne
- Wszystkie zmienne podlegające modyfikacjom deklaruj za pomocą słowa kluczowego `let`.
- Przestrzegaj całkowitego zakazu używania słowa kluczowego `var`.
- Wypis na stronie realizuj wyłącznie za pomocą instrukcji `document.write()` bez odwołań do metod DOM.
