# Zadanie 3: Symulator przyciemniania szyb i reset lakieru w autodetailingu

## Cel zadania
Nauczysz się obsługiwać właściwości bezwymiarowe (`element.style.opacity`), przełączać widoczność elementu oraz prawidłowo czyścić style liniowe do wartości zdefiniowanych w arkuszu stylów CSS za pomocą przypisania pustego ciągu znaków (`""`).

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Konfiguratory salonów samochodowych (np. Audi, BMW):** symulacja stopnia fabrycznego przyciemnienia szyb tylnych (privacy glass) oraz wybór wariantu wykończenia.
- **Panele kontrolne i modale w aplikacjach biznesowych:** płynne ściemnianie tła (overlay) oraz przycisk "Przywróć domyślne filtry".
- **Aplikacje graficzne i mapowe:** suwak przezroczystości warstw tematycznych i zdjęć satelitarnych.

## Wymagania funkcjonalne
1. Pobierz referencje do suwaka przyciemnienia (`#suwak-krycie`), przycisku resetu (`#btn-reset`), przycisku przełączania warstwy ochronnej (`#btn-filtr`), elementu szyby (`#szyba-podglad`) oraz wskaźnika stopnia przyciemnienia (`#etykieta-krycia`).
2. Zarejestruj zdarzenie `input` na suwaku `#suwak-krycie` (zakres 0.1 do 1.0). Ponieważ właściwość `opacity` jest bezwymiarowa, przypisz bezpośrednio wartość liczbową jako tekst: `szybaPodglad.style.opacity = suwakKrycie.value`. Zaktualizuj etykietę procentem: `Math.round(parseFloat(suwakKrycie.value) * 100)` (np. `"Aktualna przejrzystość powłoki: 85%"`).
3. Zarejestruj zdarzenie `click` na przycisku `#btn-filtr` jako **przełącznik** (toggle):
   - utwórz zmienną `let filtrWlaczony = false`;
   - przy każdym kliknięciu odwróć flagę (`filtrWlaczony = !filtrWlaczony`);
   - gdy `filtrWlaczony === true`: ustaw `szybaPodglad.style.backgroundColor = "#0f172a"` oraz tekst przycisku na `"Wyłącz filtr ceramiczny"`;
   - gdy `filtrWlaczony === false`: wyczyść styl pustym ciągiem `szybaPodglad.style.backgroundColor = ""` oraz przywróć tekst przycisku `"Zastosuj filtr ceramiczny"`.
4. Zarejestruj zdarzenie `click` na przycisku `#btn-reset`. Przywróć wartości domyślne z pliku `style.css`, przypisując pusty ciąg znaków do zmienionych stylów liniowych: `szybaPodglad.style.opacity = ""` oraz `szybaPodglad.style.backgroundColor = ""`. Zresetuj suwak do `1.0`, ustaw `filtrWlaczony = false`, przywróć tekst przycisku filtra oraz etykietę przejrzystości.

## Kroki wykonania
1. Otwórz `index.html` i zapoznaj się ze strukturą podglądu szyby samochodowej.
2. W `script.js` pobierz potrzebne elementy DOM za pomocą selektorów `#`.
3. Zaimplementuj obsługę suwaka przezroczystości `opacity` ze zdarzeniem `input`.
4. Zaimplementuj działanie przycisku powłoki ceramicznej.
5. Zaimplementuj funkcję resetującą przypisującą pusty łańcuch `""` do stylów inline.
6. Sprawdź w przeglądarce, jak po kliknięciu resetu atrybut `style` traci deklaracje i element powraca do reguł z pliku `style.css`.

## Treść oczekiwana w interfejsie (już w szablonie HTML)
Nie przepisuj HTML — sprawdź, że poniższe teksty są w szablonie; w JS aktualizuj tylko etykiety i tekst przycisku dynamicznie:
- Tytuł modułu: "AutoDetailing Studio — Symulator Przyciemniania i Powłok"
- Etykieta suwaka: "Stopień przepuszczalności światła (0.10 do 1.00):"
- Komunikat początkowy: "Aktualna przejrzystość powłoki: 100% (Fabryczna)"
- Etykieta przycisku powłoki: "Zastosuj filtr ceramiczny"
- Etykieta przycisku resetu: "Przywróć stan fabryczny pojazdu"
- Podpis elementu: "Szyba atermiczna z certyfikatem homologacji"
