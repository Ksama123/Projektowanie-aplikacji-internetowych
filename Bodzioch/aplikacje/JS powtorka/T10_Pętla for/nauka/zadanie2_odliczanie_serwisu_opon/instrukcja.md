# Zadanie 2: Odliczanie stanowisk serwisu wulkanizacyjnego

## 1. Cel zadania
Celem ćwiczenia jest opanowanie konstrukcji pętli `for` odliczającej wartości malejąco (dekrementacja). Zbudujesz skrypt dla stacji diagnostycznej, który dokonuje wstecznej weryfikacji stanowisk montażowych od ostatniego do pierwszego, sprawdzając gotowość sprzętu pneumatycznego przed otwarciem zmiany roboczej.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Aplikacje przemysłowe i IoT (np. Siemens, Bosch):** odliczanie czasu do zakończenia cyklu kalibracji w maszynach produkcyjnych.
- **Portale aukcyjne (np. eBay, Otomoto):** odliczanie liczby pozostałych sztuk towaru w promocji błyskawicznej.
- **Systemy nawigacji i transportu (np. Uber, Bolt):** wyświetlanie malejącego czasu dojazdu kierowcy do klienta.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` pobierz numer stanowiska startowego od użytkownika za pomocą funkcji `prompt()` z obowiązkową wartością domyślną "8" i skonwertuj go na liczbę: `const STARTOWE_STANOWISKO = Number(prompt("Podaj numer startowy stanowiska serwisowego do kontroli:", "8"));`.
2. Zbuduj pętlę `for` ze zmienną sterującą `stanowisko` zainicjalizowaną wartością `STARTOWE_STANOWISKO`.
3. Pętla ma działać dopóki numer stanowiska jest większy lub równy `1` (`stanowisko >= 1`), a w każdym kroku zmniejszać wartość licznika o jeden (`stanowisko--`).
4. W ciele pętli wypisz akapit `<p>` zawierający dokładną treść z sekcji "Treść do wpisania".
5. Po zakończeniu pętli wypisz komunikat podsumowujący o gotowości całego serwisu do przyjęcia pojazdów.

## Treść do wpisania
Dokładne szablony wypisu (skopiuj do `document.write`):
- Wewnątrz pętli: `` `<p>Kontrola techniczna stanowiska serwisowego nr ${stanowisko} — Ciśnienie magistrali pneumatycznej w normie</p>` ``
- Poza pętlą (podsumowanie): `` `<p><strong>Wszystkie stanowiska serwisowe pomyślnie przeszły test sprawności pneumatycznej.</strong></p>` ``

## 5. Wskazówki techniczne
- W pętli odliczającej w dół kluczowy jest operator w warunku: użyj `>=` zamiast `<=`.
- Zastosuj operator dekrementacji `--`, aby zmniejszać numer stanowiska w każdym powtórzeniu.
