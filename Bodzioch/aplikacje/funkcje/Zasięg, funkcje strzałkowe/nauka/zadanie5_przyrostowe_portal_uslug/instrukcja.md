# Zadanie 5: Zadanie przyrostowe — Moduł wyceny zleceń serwisowych portalu usług

## Cel zadania
Celem zadania przyrostowego jest całościowe podsumowanie i utrwalenie wszystkich mechanizmów modułu T02 w ramach projektu Portalu Usługowo-Handlowego IT-Partner. Zaimplementujesz kompletny moduł wyceny zleceń informatycznych łączący funkcje strzałkowe jednoargumentowe, wieloargumentowe z parametrem domyślnym, funkcję z ciałem blokowym oraz bezpieczną izolację zasięgu zmiennych.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Centra operacyjne usług chmurowych i IT (np. OVHcloud, Beyond.pl):** Wycena i estymacja kosztów realizacji zgłoszeń technicznych, napraw infrastruktury i serwisu IT.
2. **Systemy helpdesk i ITSM (np. Jira Service Management, Zendesk):** Automatyczna kalkulacja kosztorysów napraw sprzętu komputerowego według stawek roboczogodzin i umów SLA.
3. **Marketplace usługodawców (np. Oferteo, Fixly):** Wstępna wycena prac instalacyjnych z uwzględnieniem opłaty za dojazd i rabatów partnerskich.

## Wymagania funkcjonalne
1. W pliku `script.js` zdefiniuj stałe bazowe:
   - `STAWKA_ROBOCZOGODZINY = 120` PLN,
   - `godzinySerwisu = 6`,
   - `czyKlientBiznesowy = true`.
2. Zdefiniuj jednoargumentową funkcję strzałkową `obliczStopeRabatu`, która na podstawie parametru logicznego `isBiznes` zwraca niejawnie stawkę rabatu: `0.15` (15%) dla klientów biznesowych lub `0.05` (5%) dla klientów indywidualnych (zapis skrócony z operatorem `? :`).
3. Zdefiniuj wieloargumentową funkcję strzałkową `obliczKosztZlecenia(godziny, stawkaGodz, oplataDojazd = 50)`:
   - wylicz koszt robocizny (`godziny * stawkaGodz`),
   - odejmij rabat: `kosztRobocizny * obliczStopeRabatu(czyKlientBiznesowy)`,
   - dodaj opłatę za dojazd z parametru domyślnego,
   - zwróć wynik liczbowy (bez `Math.round` — formatowanie do 2 miejsc po przecinku zrób dopiero w raporcie przez `.toFixed(2)`).
4. Zdefiniuj funkcję strzałkową z ciałem blokowym `okreslCzasReakcjiSLA(godziny)`:
   - Jeżeli `godziny >= 8`, przypisz `"Tryb standardowy (realizacja do 48h)"`.
   - W przeciwnym razie jeśli `godziny >= 4`, przypisz `"Tryb przyspieszony (realizacja do 24h)"`.
   - W przeciwnym razie przypisz `"Tryb ekspresowy (realizacja do 12h)"`.
   - Zwróć wyznaczony czas reakcji.
5. Zbuduj raport według sekcji „Treść do wpisania” i wstaw go do `#wynik.textContent`.

## Treść do wpisania
Dla danych bazowych (6 h, klient biznesowy, dojazd domyślny 50 PLN) raport musi zawierać następujące dosłowne napisy:

```text
=== Portal Usługowo-Handlowy IT-Partner — Moduł Wyceny Serwisowej ===
Kalkulacja kosztorysowa zlecenia serwisowego
-----------------------------------------
Liczba roboczogodzin serwisu: 6 h
Stawka roboczogodziny: 120 PLN
Wartość robocizny: 720.00 PLN
Rabat klienta partnerskiego: 15% (-108.00 PLN)
Opłata ryczałtowa za dojazd: 50.00 PLN (stawka bazowa)
-----------------------------------------
Całkowity kosztorys zlecenia: 662.00 PLN
Gwarantowany czas reakcji SLA: Tryb przyspieszony (realizacja do 24h)
Status wyceny: Zatwierdzona do realizacji
```

## Podpowiedź / Wskazówki składniowe
- Połącz wszystkie funkcje w logiczną całość:
  ```javascript
  const kosztKoncowy = obliczKosztZlecenia(godzinySerwisu, STAWKA_ROBOCZOGODZINY);
  const sla = okreslCzasReakcjiSLA(godzinySerwisu);
  ```
- Pamiętaj, aby funkcja z ciałem blokowym `{ ... }` zawierała jawną instrukcję `return`.
