# Zadanie 2: Skrypt zewnętrzny i poziomy konsoli — Serwis rowerowy „VeloFix”

## Cel zadania
Celem zadania jest opanowanie dołączania zewnętrznego pliku skryptu JavaScript za pomocą znacznika `<script src="script.js">` umieszczonego na końcu sekcji `<body>` oraz zastosowanie zróżnicowanych poziomów diagnostycznych obiektu `console` (`log`, `info`, `warn`, `error`). Dowiesz się, jak sygnalizować ostrzeżenia i błędy techniczne w konsoli przeglądarki.

Gdzie to się stosuje? (Przykłady ze świata aplikacji):
- Systemy diagnostyczne paneli administracyjnych monitorujące parametry serwera i powiadamiające o przekroczeniu progów krytycznych (ostrzeżenia na żółto).
- Aplikacje obsługi zleceń warsztatowych rejestrujące brak części na magazynie jako błąd operacyjny (czerwony wpis `console.error()`).
- Oddzielenie kodu JavaScript od kodu widoku HTML w architekturze modułowej.

## Wskazówki aktywizujące
- Odsyłacz do teorii: Przeczytaj sekcję 2 (Sposób B: Skrypt zewnętrzny) oraz sekcję 4 (Metody obiektu `console`) w pliku `teoria.md`.
- Pytanie naprowadzające: Dlaczego błędy krytyczne wypisujemy za pomocą `console.error()`, a nie zwykłym `console.log()`? Czym różni się ich widoczność dla programisty?
- DevTools: Zwróć uwagę na ikony i kolory w konsoli: `console.warn()` wyświetla żółty trójkąt ostrzegawczy, a `console.error()` czerwony symbol błędu ze śladem wywołania.

## Treść do wpisania
W pliku `script.js` użyj dokładnie następujących dosłownych tekstów i wartości:
- Nazwa serwisu w stałej `NAZWA_SERWISU`: `"Profesjonalny Serwis Rowerowy VeloFix"`
- Liczba zleceń w toku w zmiennej `zleceniaWToku`: `5`
- Komunikat startowy `console.log()`: `"Inicjalizacja modułu diagnostycznego warsztatu VeloFix."`
- Informacja o statusie `console.info()`: `"Aktualnie przyjęto do realizacji 5 zleceń serwisowych."`
- Ostrzeżenie `console.warn()`: `"Uwaga: Kończy się zapas oleju do łańcuchów w magazynie podręcznym!"`
- Błąd krytyczny `console.error()`: `"Błąd: Brak wolnych stojaków naprawczych dla nowych rowerów."`

## Wymagania
1. W pliku `index.html` przed zamykającym znacznikiem `</body>` dołącz zewnętrzny plik `script.js`: `<script src="script.js"></script>`.
2. W pliku `script.js`:
   - Zadeklaruj stałą `NAZWA_SERWISU` oraz zmienną `zleceniaWToku` z wartościami podanymi w sekcji "Treść do wpisania".
   - Wypisz komunikat startowy za pomocą `console.log()`.
   - Wypisz informację o zleceniach za pomocą `console.info()`.
   - Wypisz ostrzeżenie o zapasach za pomocą `console.warn()`.
   - Wypisz komunikat o braku stojaków za pomocą `console.error()`.
3. Otwórz `index.html` w przeglądarce i otwórz konsolę (F12). Upewnij się, że widzisz cztery wpisy w różnych kolorach (standardowy, niebieski/informacyjny, żółty i czerwony).
4. Pamiętaj o guardrails: nie używaj `getElementById`, `querySelector` ani zdarzeń.
