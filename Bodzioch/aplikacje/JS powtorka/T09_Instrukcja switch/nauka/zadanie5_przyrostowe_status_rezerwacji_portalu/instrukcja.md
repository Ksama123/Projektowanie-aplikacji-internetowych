# Zadanie 5: Przyrostowy moduł śledzenia statusu zgłoszenia serwisowego w portalu IT-Partner

## Cel zadania
Zwieńczeniem działu jest całościowe zadanie podsumowujące wiedzę o instrukcji `switch` w środowisku wiodącego portalu usługowego IT-Partner. Zbudujesz moduł śledzenia stanu zlecenia serwisowego, wykorzystując badanie łańcuchów znaków, świadome grupowanie statusów operacyjnych w laboratorium oraz bezpieczną obsługę wariantów nieznanych.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
Zarządzanie stanem procesów biznesowych za pomocą instrukcji wyboru jest fundamentem systemów CRM i portali klienta:
- **Serwisy naprawcze i gwarancyjne**: wyświetlanie klientowi aktualnego etapu obsługi laptopa lub smartfona na podstawie kodu statusu w bazie danych.
- **Systemy trackingowe firm kurierskich**: informowanie odbiorcy o przesyłce (Zarejestrowana, W drodze, W doręczeniu, Odebrana).
- **Panele rezerwacji usług i biletów**: kontrola ważności vouchera lub rezerwacji wizyty w punkcie obsługi.

## Wymagania funkcjonalne
1. W pliku `script.js` pobierz kod statusu zlecenia za pomocą okna dialogowego `prompt()` z obowiązkową wartością domyślną `"DIAGNOSTYKA"`:
   `let kodStatusu = prompt("Podaj kod statusu zgłoszenia (NOWE, DIAGNOSTYKA, NAPRAWA, GOTOWE, ARCHIWUM):", "DIAGNOSTYKA");`
2. Zbuduj instrukcję `switch (kodStatusu)` obsługującą stany zlecenia:
   - Dla statusu `"NOWE"`: komunikat o przyjęciu zgłoszenia i oczekiwaniu na wstępną weryfikację.
   - Dla statusów `"DIAGNOSTYKA"` oraz `"NAPRAWA"` (zastosuj świadome grupowanie *fall-through*): komunikat o trwających pracach serwisowych w laboratorium sprzętowym IT-Partner.
   - Dla statusu `"GOTOWE"`: informacja o pomyślnym ukończeniu serwisu i gotowości sprzętu do odbioru.
   - Dla statusu `"ARCHIWUM"`: informacja o zleceniu zrealizowanym i przeniesionym do archiwum.
   - Dla każdej innej wartości (`default`): komunikat o błędnym kodzie statusu i konieczności kontaktu z infolinią.
3. Każda grupa instrukcji musi kończyć się poleceniem `break;`.
4. Wynik wypisz na stronie w elemencie `.wynik` za pomocą `document.write()` i znacznika `<br>`, oraz w konsoli deweloperskiej za pomocą `console.log()`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące teksty komunikatów:
- Dla statusu NOWE: `"Status zlecenia: Nowe zgłoszenie serwisowe zarejestrowane. Oczekiwanie na technika."`
- Dla statusów DIAGNOSTYKA oraz NAPRAWA: `"Status zlecenia: Sprzęt w trakcie prac technicznych w laboratorium IT-Partner."`
- Dla statusu GOTOWE: `"Status zlecenia: Naprawa pomyślnie zakończona. Urządzenie gotowe do odbioru w salonie."`
- Dla statusu ARCHIWUM: `"Status zlecenia: Zlecenie zamknięte i zarchiwizowane w historii serwisowej klienta."`
- Dla klauzuli default: `"Błąd systemu IT-Partner: Nieprawidłowy identyfikator statusu. Skontaktuj się z obsługą."`
