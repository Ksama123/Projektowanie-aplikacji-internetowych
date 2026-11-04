# Zadanie 4: Konfigurator roweru miejskiego w manufakturze jednośladów

## Cel zadania
Połączysz wszystkie umiejętności z zadań 1, 2 i 3 w spójnej mini-aplikacji konfiguratora jednośladu: zmianę barwy ramy (`backgroundColor`), dynamiczną regulację grubości linii opony (`borderWidth` z jednostką `px`), przezroczystość powłoki ochronnej (`opacity` bez jednostki) oraz procedurę resetu do ustawień bazowych.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Konfiguratory rowerów i sprzętu sportowego (np. Trek, Canyon):** interaktywny dobór koloru ramy, szerokości opon oraz wykończenia akcesoriów.
- **Wirtualne przymierzalnie i salony meblowe:** łączenie doboru barw, wymiarów i wykończenia materiałów w jednym widoku podglądu.
- **Kreatory materiałów promocyjnych:** kompleksowe dopasowywanie barw, obramowań i nasycenia elementów graficznych.

## Wymagania funkcjonalne
1. Pobierz referencje do próbnika koloru ramy (`#kolor-ramy`), suwaka grubości profilu ramy (`#suwak-profil`, zakres 2 do 12px), suwaka połysku lakieru (`#suwak-polysk`, zakres 0.2 do 1.0), przycisku resetu (`#btn-reset-rower`) oraz karty podglądu roweru (`#karta-rower`).
2. Przy zmianie koloru w `#kolor-ramy` (zdarzenie `input`) ustaw `kartaRower.style.backgroundColor` na wybraną wartość oraz zaktualizuj etykietę `#podsumowanie-kolor`.
3. Przy przesuwaniu suwaka `#suwak-profil` (zdarzenie `input`) ustaw `kartaRower.style.borderWidth = `${suwakProfil.value}px`` oraz zaktualizuj etykietę `#podsumowanie-profil`.
4. Przy przesuwaniu suwaka `#suwak-polysk` (zdarzenie `input`) ustaw `kartaRower.style.opacity = suwakPolysk.value` oraz zaktualizuj etykietę `#podsumowanie-polysk` wartością procentową (`Math.round(parseFloat(suwakPolysk.value) * 100)`, np. `1.0` → `100%`).
5. Po kliknięciu przycisku `#btn-reset-rower` wyczyść wszystkie style liniowe karty (`kartaRower.style.backgroundColor = ""`, `kartaRower.style.borderWidth = ""`, `kartaRower.style.opacity = ""`), przywróć kontrolki: `#kolor-ramy` → `#0284c7`, `#suwak-profil` → `4`, `#suwak-polysk` → `1.0`, oraz etykiety do tekstów początkowych z sekcji poniżej.

## Kroki wykonania
1. Otwórz `index.html` i zapoznaj się ze strukturą konfiguratora oraz identyfikatorami pól.
2. W `script.js` odszukaj komentarz `// Twoje rozwiazanie` i pobierz wszystkie wymagane elementy.
3. Utwórz dedykowane funkcje obsługi zdarzeń dla koloru, grubości profilu i przezroczystości.
4. Zaimplementuj funkcję resetującą usuwającą atrybuty inline pustym ciągiem `""`.
5. Otwórz stronę w przeglądarce i przetestuj współpracę wszystkich parametrów wizualnych.

## Treść oczekiwana w interfejsie (już w szablonie HTML)
Nie przepisuj HTML — sprawdź, że poniższe teksty są w szablonie; w JS aktualizuj tylko etykiety dynamiczne:
- Tytuł konfiguratora: "Manufaktura Rowerowa VeloCity — Konfigurator Ramy"
- Podtytuł modelu: "Model: VeloCity Urban Classic 28 cali"
- Etykieta początkowa koloru: "Kolor ramy: #0284c7 (Błękit miejski)"
- Etykieta początkowa profilu: "Grubość ramy: 4px"
- Etykieta początkowa połysku: "Połysk lakieru: 100%"
- Etykieta przycisku resetu: "Przywróć konfigurację fabryczną"
