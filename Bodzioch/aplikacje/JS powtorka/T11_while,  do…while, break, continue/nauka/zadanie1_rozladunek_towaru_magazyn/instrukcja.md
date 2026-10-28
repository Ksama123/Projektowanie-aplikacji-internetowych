# Zadanie 1: Rozładunek towaru w magazynie centralnym

## 1. Cel zadania
Twoim celem jest stworzenie skryptu symulującego proces rozładunku partii kontenerów w magazynie logistycznym przy użyciu pętli `while`. Nauczysz się definiować warunek wejściowy pętli, kontrolować zmniejszający się stan magazynowy (dekrementację) oraz wyprowadzać komunikaty o kolejnych etapach pracy wózka widłowego do kontenera wyniku na stronie.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Systemy zarządzania magazynem (WMS — np. SAP EWM, Manhattan Associates):** monitorowanie postępu rozładunku naczep i przydzielanie zadań operatorom wózków.
- **Aplikacje kurierskie i pocztowe:** pobieranie przesyłek z kosza załadunkowego aż do jego opróżnienia.
- **Gry symulacyjne i strategiczne:** mechanika wyczerpywania surowców lub punktów energii postaci.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałą `PORCJA_KONTENEROW = 3` (liczba kontenerów zabierana w jednym kursie).
2. Zadeklaruj zmienną `let konteneryNaRampie = 12;` (początkowa liczba kontenerów na rampie).
3. Zadeklaruj zmienną `let numerKursu = 1;` (licznik kursów wózka).
4. Skonstruuj pętlę `while`, która wykonuje się dopóki `konteneryNaRampie > 0`.
5. W każdej iteracji pętli:
   - Wypisz za pomocą `document.write` komunikat o zrealizowanym kursie oraz liczbie pozostałych kontenerów.
   - Zmniejsz wartość zmiennej `konteneryNaRampie` o wartość stałej `PORCJA_KONTENEROW`.
   - Zwiększ wartość zmiennej `numerKursu` o 1.
6. Po zakończeniu pętli wypisz komunikat podsumowujący zakończenie rozładunku.

## Treść do wpisania
Dokładne teksty do umieszczenia w `document.write` (skopiuj dosłownie):
- Komunikat w pętli: `` `<p>Kurs wózka widłowego nr ${numerKursu} — pobrano 3 kontenery. Pozostało w strefie przyjęć: ${konteneryNaRampie - PORCJA_KONTENEROW} szt.</p>` ``
- Komunikat podsumowania po pętli: `"<p><strong>Wszystkie kontenery zostały pomyślnie przetransportowane do regałów wysokiego składowania.</strong></p>"`

## 5. Wskazówki techniczne
- Pamiętaj o użyciu słowa kluczowego `let` dla zmiennych, które zmieniają swoją wartość w czasie działania programu.
- Warunek `konteneryNaRampie > 0` jest sprawdzany przed każdą iteracją.
- Zadbaj o to, aby linijka zmniejszająca liczbę kontenerów znalazła się wewnątrz ciała pętli — jej brak wywoła pętlę nieskończoną.
