# Zadanie 3: Grupowanie stref doręczeń kurierskich (fall-through)

## Cel zadania
Celem ćwiczenia jest opanowanie techniki świadomego grupowania przypadków (*fall-through*) w instrukcji `switch`. Zobaczysz, jak uniknąć powtarzania tego samego kodu, gdy kilka różnych wartości wejściowych prowadzi do dokładnie takiego samego rezultatu biznesowego.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
Grupowanie klauzul `case` bez instrukcji `break` pomiędzy nimi jest powszechne w logistyce i taryfikatorach:
- **Firmy kurierskie i pocztowe**: wyznaczanie kosztu i czasu dostawy na podstawie pierwszej cyfry kodu pocztowego lub identyfikatora strefy.
- **Koleje i transport miejski**: przypisanie tej samej taryfy biletowej dla kilku kolejnych stacji w ramach jednego okręgu aglomeracyjnego.
- **Kalendarze i harmonogramy**: obsługa dni roboczych (od poniedziałku do piątku) pod jednym wspólnym blokiem instrukcji.

## Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj zmienną `kodStrefy` i przypisz jej wartość początkową `2`.
2. Zbuduj instrukcję `switch (kodStrefy)` z wykorzystaniem grupowania klauzul:
   - Dla stref `1`, `2` oraz `3`: przypisz i wyświetl komunikat o strefie miejskiej (doręczenie w 24h, koszt 12 zł).
   - Dla stref `4` oraz `5`: przypisz i wyświetl komunikat o strefie krajowej (doręczenie w 48h, koszt 18 zł).
   - Dla strefy `6`: przypisz i wyświetl komunikat o strefie zamiejscowej (doręczenie w 72h, koszt 25 zł).
   - Dla każdego innego numeru (`default`): wyświetl informację o błędnym kodzie strefy doręczenia.
3. Zastosuj instrukcję `break;` tylko na końcu każdej zintegrowanej grupy.
4. Wynik wypisz na stronie w elemencie `.wynik` za pomocą `document.write()` i `<br>`, oraz w konsoli `console.log()`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące teksty komunikatów:
- Dla stref 1, 2, 3: `"Strefa miejska (lokalna): Czas doręczenia do 24h, opłata zryczałtowana 12 zł."`
- Dla stref 4, 5: `"Strefa krajowa (międzymiastowa): Czas doręczenia do 48h, opłata standardowa 18 zł."`
- Dla strefy 6: `"Strefa zamiejscowa (trudnodostępna): Czas doręczenia do 72h, opłata specjalna 25 zł."`
- Dla klauzuli default: `"Błąd logistyczny: Nieobsługiwany kod strefy doręczenia. Skontaktuj się z dyspozytorem."`
