# Zadanie 5 (Przyrostowe): Monitor klastra serwerów portalu IT-Partner

## 1. Cel zadania
Zadanie stanowi przyrostowe zwieńczenie modułu w stałej domenie projektu przewodniego **Portal Usługowo-Handlowy IT-Partner**. Twoim celem jest zbudowanie modułu automatycznej diagnostyki klastra serwerów aplikacyjnych portalu. Zastosujesz pętlę `while` do sekwencyjnego badania kolejnych węzłów, instrukcję `continue` do omijania maszyn w trybie serwisowym oraz instrukcję `break` do natychmiastowego przerwania procedury w razie wykrycia krytycznego przeciążenia sprzętowego.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Panele monitoringu infrastruktury chmurowej (np. Zabbix, Prometheus, Datadog):** automatyczne skanowanie stanu zdrowia instancji w klastrach Kubernetes.
- **Równoważenie obciążenia (Load Balancing):** wykrywanie niedostępnych maszyn wirtualnych i natychmiastowe odłączanie uszkodzonych węzłów z puli produkcyjnej.
- **Procedury Disaster Recovery (DR):** automatyczne przerywanie wdrożeń po wykryciu anomalii krytycznych na serwerach bazodanowych.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałą `LICZBA_WEZLOW = 5`.
2. Zadeklaruj zmienne:
   - `let wezel = 0;` (licznik badanego węzła klastra)
   - `let zweryfikowaneWezly = 0;` (licznik węzłów produkcyjnych z pozytywnym wynikiem)
3. Zbuduj pętlę `while`, która wykonuje się dopóki `wezel < LICZBA_WEZLOW`.
4. W ciele pętli:
   - Zwiększ `wezel` o 1 na samym początku iteracji.
   - Jeśli `wezel === 2` (serwer w trybie planowanej konserwacji), wypisz ostrzeżenie i wykonaj instrukcję `continue`.
   - Jeśli `wezel === 5` (krytyczne przeciążenie pamięci RAM), wypisz alert awaryjny i natychmiast przerwij pętlę instrukcją `break`.
   - W standardowym przypadku zwiększ `zweryfikowaneWezly` o 1 i wypisz komunikat o pozytywnej weryfikacji węzła.
5. Po zakończeniu pętli wypisz komunikat podsumowujący raport diagnostyczny z łączną liczbą zweryfikowanych węzłów roboczych.

## Treść do wpisania
Dokładne teksty do umieszczenia w `document.write` (skopiuj dosłownie):
- Węzeł poprawny: `` `<p>Węzeł klastra IT-Partner nr ${wezel} — diagnostyka procesora i usług sieciowych zakończona pomyślnie (status: OK).</p>` ``
- Konserwacja (węzeł nr 2): `"<p style=\"color: #d97706;\">Węzeł nr 2 znajduje się w trybie konserwacji — pomijanie procedury weryfikacji produkcyjnej.</p>"`
- Awaria krytyczna (węzeł nr 5): `"<p style=\"color: #dc2626;\"><strong>Węzeł nr 5 zgłasza krytyczne przeciążenie pamięci RAM — natychmiastowe przerwanie diagnostyki klastra.</strong></p>"`
- Podsumowanie po pętli: `` `<p><strong>Raport diagnostyczny portalu IT-Partner: pomyślnie zweryfikowano ${zweryfikowaneWezly} węzłów roboczych klastra.</strong></p>` ``

## 5. Wskazówki techniczne
- Węzły nr 1, 3 oraz 4 zakończą diagnostykę ze statusem OK (łącznie `zweryfikowaneWezly === 3`).
- Węzeł nr 2 zostanie pominięty instrukcją `continue` (nie zwiększy licznika zweryfikowanych węzłów).
- Węzeł nr 5 wywoła instrukcję `break`, co zakończy całą procedurę diagnostyczną klastra.
- Pamiętaj, aby raport podsumowujący wypisać po klamrze zamykającej pętli `while`.
