# Zadanie 3: Kontrola jakości na linii sortowania paczek

## 1. Cel zadania
W tym zadaniu nauczysz się precyzyjnie sterować przebiegiem pętli `while` przy użyciu instrukcji `break` oraz `continue`. Symulujemy pracę taśmociągu w sortowni przesyłek kurierskich: nauczysz się pomijać uszkodzone paczki bez przerywania pracy systemu oraz awaryjnie zatrzymywać linię w przypadku wykrycia zacięcia mechanicznego.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Centra logistyczne (np. InPost, DPD, DHL):** automatyczne skanery kodów na sorterach, odrzucające nieczytelne paczki na tor serwisowy.
- **Wyszukiwarki i filtry bazodanowe:** przerywanie wyszukiwania po znalezieniu szukanego rekordu (`break`) lub ignorowanie rekordów oznaczonych jako usunięte (`continue`).
- **Przetwarzanie transakcji finansowych:** odrzucanie błędnych wpisów i natychmiastowe blokowanie konta w razie wykrycia próby oszustwa.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałą `LIMIT_PACZEK = 6`.
2. Zadeklaruj zmienną `let numerPaczki = 0;`.
3. Skonstruuj pętlę `while`, która działa dopóki `numerPaczki < LIMIT_PACZEK`.
4. Na samym początku ciała pętli zwiększ `numerPaczki` o 1 (`numerPaczki++`). Jest to kluczowe dla uniknięcia pętli nieskończonej!
5. Sprawdź warunek uszkodzenia:
   - Jeśli `numerPaczki === 3`, wypisz komunikat o uszkodzonej etykiecie i wykonaj instrukcję `continue`, aby pominąć dalsze przetwarzanie tej paczki.
6. Sprawdź warunek awarii:
   - Jeśli `numerPaczki === 5`, wypisz komunikat o zacięciu taśmociągu i wykonaj instrukcję `break`, aby natychmiast przerwać całą pętlę.
7. Jeśli żaden z powyższych warunków nie zachodzi, wypisz komunikat o prawidłowym przeskanowaniu paczki.
8. Po zakończeniu pętli wypisz komunikat informujący o zapisaniu raportu w dzienniku zdarzeń.

## Treść do wpisania
Dokładne teksty do umieszczenia w `document.write` (skopiuj dosłownie):
- Paczka poprawna: `` `<p>Paczka kurierska nr ${numerPaczki} — kod kreskowy zweryfikowany pomyślnie (status: przekazano do doręczenia).</p>` ``
- Pominięcie (paczka nr 3): `"<p style=\"color: #f59e0b;\">Paczka nr 3 ma nieczytelną etykietę adresową — pomijanie skanowania i odrzut na tor rewizyjny.</p>"`
- Awaria (paczka nr 5): `"<p style=\"color: #ef4444;\"><strong>Wykryto zacięcie taśmociągu przy paczce nr 5 — natychmiastowe zatrzymanie linii sortowniczej.</strong></p>"`
- Podsumowanie po pętli: `"<p><strong>Raport z pracy linii sortowniczej został pomyślnie zapisany w dzienniku zdarzeń.</strong></p>"`

## 5. Wskazówki techniczne
- Zwróć szczególną uwagę na pozycję `numerPaczki++`. Gdyby licznik znajdował się na końcu pętli, instrukcja `continue` pominęłaby go, wywołując pętlę nieskończoną dla `numerPaczki === 3`.
- Instrukcja `break` natychmiast wychodzi z pętli — paczka nr 6 w ogóle nie zostanie pobrana do sprawdzenia.
