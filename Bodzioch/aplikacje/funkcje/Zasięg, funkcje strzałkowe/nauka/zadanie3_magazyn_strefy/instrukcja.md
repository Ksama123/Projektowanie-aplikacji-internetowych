# Zadanie 3: Zasięg blokowy, przesłanianie i funkcja strzałkowa z ciałem blokowym

## Cel zadania
Celem ćwiczenia jest zbadanie zasięgu blokowego zmiennych `let` i `const` oraz mechanizmu przesłaniania (shadowing) w hierarchii bloków instrukcji warunkowych. Zbudujesz funkcję strzałkową z ciałem blokowym `{ ... }`, która klasyfikuje ładunek paletowy do odpowiedniej strefy magazynowej.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy zarządzania magazynem WMS (np. Amazon, InPost):** Automatyczna alokacja miejsca paletowego na regałach wysokiego składowania na podstawie wagi i kubatury.
2. **Systemy kontroli dostępu i odpraw lotniczych:** Weryfikacja wymiarów i wagi bagażu podręcznego przy bramkach odprawy (gate).
3. **Firmy spedycyjne i transportowe:** Dobór typu naczepy (plandeka, chłodnia, mega) w zależności od specyfikacji ładunku.

## Wymagania funkcjonalne
1. W pliku `script.js` zdefiniuj stałe globalne określające limity strefy wysokiej: `LIMIT_WAGI_KG = 800` oraz `LIMIT_WYSOKOSCI_CM = 200`.
2. Zdefiniuj funkcję strzałkową `przypiszStrefeMagazynu` przyjmującą dwa parametry: `wagaKg` oraz `wysokoscCm`. Funkcja musi posiadać ciało blokowe `{ ... }` oraz instrukcję `return`:
   - Wewnątrz funkcji zadeklaruj zmienną lokalną `strefa = "Strefa A (Regał standardowy)"`.
   - Zastosuj warunek: jeśli waga przekracza `LIMIT_WAGI_KG` **lub** wysokość przekracza `LIMIT_WYSOKOSCI_CM`, przypisz `"Strefa C (Składowanie posadzkowe)"`.
   - W przeciwnym razie, jeśli waga > 500, przypisz `"Strefa B (Regał wzmocniony)"`.
   - Zwróć wartość zmiennej `strefa`.
3. Zademonstruj zasięg blokowy i zjawisko przesłaniania (shadowing) na zmiennej `statusZlecenia`:
   - Na poziomie globalnym zdefiniuj `const statusZlecenia = "W trakcie weryfikacji"`.
   - Przed blokiem zadeklaruj `let statusWewnetrzny = ""`.
   - Wewnątrz bloku `if (true)` zdefiniuj nową zmienną `const statusZlecenia = "Autoryzacja magazynowa zakończona"` (przesłania zmienną globalną) i **skopiuj** ją do `statusWewnetrzny` jeszcze przed zamknięciem bloku.
4. Przetestuj ładunek: waga `650` kg, wysokość `180` cm.
5. Dopuszczenie do regału wysokiego wylicz tak:
   - jeśli `wysokoscLadunku <= LIMIT_WYSOKOSCI_CM` → tekst `"TAK"`,
   - w przeciwnym razie → tekst `"NIE (nadwymiar)"`.
6. Zbuduj raport według obowiązkowego szablonu i wpisz do `#wynik.textContent`.

## Treść do wpisania
Dla danych testowych (650 kg, 180 cm) raport musi wyglądać tak:

```text
=== System Logistyczny MagazynCentralny ===
Karta rejestracji ładunku paletowego
-----------------------------------------
Parametry ładunku: waga 650 kg, wysokość 180 cm
Weryfikacja strefy składowania: Strefa B (Regał wzmocniony)
Dopuszczenie do regału wysokiego: TAK
-----------------------------------------
Status wewnątrz bloku weryfikacji: Autoryzacja magazynowa zakończona
Status globalny zlecenia: W trakcie weryfikacji
```

## Podpowiedź / Wskazówki składniowe
- Gdy ciało funkcji strzałkowej wymaga logiki warunkowej `if/else`, konieczne jest użycie klamer:
  ```javascript
  const nazwaFunkcji = (param1, param2) => {
    let zmiennaLokalna = "wartość";
    if (warunek) {
      zmiennaLokalna = "inna";
    }
    return zmiennaLokalna;
  };
  ```
- Wartość z wnętrza bloku pokażesz poza blokiem tylko po skopiowaniu jej do zmiennej zewnętrznej (patrz `teoria.md`, sekcja 2.1).
