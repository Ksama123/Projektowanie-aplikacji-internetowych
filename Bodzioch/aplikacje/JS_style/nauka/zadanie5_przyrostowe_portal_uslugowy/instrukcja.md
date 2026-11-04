# Zadanie 5 (Przyrostowe): Portal Usługowo-Handlowy IT-Partner — Personalizacja wizualna stanowiska klienta

## Cel zadania
W zadaniu wieńczącym dział zaimplementujesz moduł personalizacji wizualnej panelu klienta w Portalu Usługowo-Handlowym IT-Partner. Połączysz wiedzę o dynamicznym nadawaniu stylów liniowych (`backgroundColor`, `fontSize`, `borderRadius`, `opacity`) z mechanizmem resetowania stylów pustym ciągiem `""` oraz integracją z komponentami portalu biznesowego.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Panele administracyjne SaaS (np. Shopify, HubSpot, Jira):** personalizacja kolorystyki firmy, zaokrągleń kart i wielkości tekstu w kokpicie klienta (tzw. white-labeling).
- **Platformy B2B i portale korporacyjne:** dostosowywanie kontrastu i rozmiarów typografii dla pracowników wielozmianowych.
- **Kreatory wizytówek biznesowych i ofert handlowych:** interaktywne dopasowywanie parametrów estetycznych oferty przed jej wygenerowaniem.

## Wymagania funkcjonalne
1. W strukturze `index.html` przygotowano:
   - Panel konfiguratora z kontrolkami: próbnik koloru akcentu `#kolor-akcentu`, suwak rozmiaru czcionki `#suwak-font-portalu` (zakres 14px – 24px), suwak zaokrąglenia narożników `#suwak-promien` (zakres 0px – 20px) oraz suwak przezroczystości `#suwak-przezroczystosc` (zakres 0.5 – 1.0).
   - Przycisk przywrócenia domyślnych stylów `#btn-reset-personalizacji`.
   - Główną kartę podglądu usługi portalu `#karta-uslugi-portal` z nagłówkiem `#tytul-uslugi-portal` i etykietą stanu `#komunikat-portalu`.
2. Dynamiczna zmiana barwy akcentu:
   - Podczas zmiany wartości w próbniku `#kolor-akcentu` (zdarzenie `input`) ustaw `kartaUslugiPortal.style.backgroundColor` na wybraną wartość heksadecymalną.
   - Ustaw `#komunikat-portalu` na: `"Status konfiguracji: Zastosowano niestandardowe style klienta"`.
3. Skalowanie typografii nagłówka:
   - Podczas przesuwania suwaka `#suwak-font-portalu` (zdarzenie `input`) ustaw `tytulUslugiPortal.style.fontSize` na wartość z jednostką `px` (np. `` `${suwakFontPortalu.value}px` ``) oraz zaktualizuj `#komunikat-portalu` jak wyżej.
4. Zaokrąglenie narożników karty:
   - Podczas przesuwania suwaka `#suwak-promien` (zdarzenie `input`) ustaw `kartaUslugiPortal.style.borderRadius = `${suwakPromien.value}px`` oraz zaktualizuj `#komunikat-portalu`.
5. Przezroczystość karty:
   - Podczas przesuwania suwaka `#suwak-przezroczystosc` (zdarzenie `input`) ustaw wartość bezwymiarową `kartaUslugiPortal.style.opacity = suwakPrzezroczystosc.value` oraz zaktualizuj `#komunikat-portalu`.
6. Przywrócenie ustawień domyślnych portalu:
   - Po kliknięciu przycisku `#btn-reset-personalizacji` zresetuj wszystkie zmienione style liniowe za pomocą przypisania pustego łańcucha znaków: `kartaUslugiPortal.style.backgroundColor = ""`, `tytulUslugiPortal.style.fontSize = ""`, `kartaUslugiPortal.style.borderRadius = ""`, `kartaUslugiPortal.style.opacity = ""`.
   - Przywróć wartości kontrolek: `#kolor-akcentu` → `#1e3a8a`, `#suwak-font-portalu` → `18`, `#suwak-promien` → `8`, `#suwak-przezroczystosc` → `1.0`.
   - Ustaw `#komunikat-portalu` na: `"Status konfiguracji: Ustawienia domyślne portalu IT-Partner"`.

## Kroki wykonania
1. Otwórz `index.html` i zapoznaj się z identyfikatorami pól panelu personalizacji i karty usługi IT-Partner.
2. W `script.js` pobierz referencje do kontrolek i elementów podglądu za pomocą `document.querySelector`.
3. Zaimplementuj obsługę zdarzeń `input` dla próbnika koloru oraz trzech suwaków.
4. Zaimplementuj procedurę resetu w zdarzeniu `click` przycisku `#btn-reset-personalizacji`.
5. Przetestuj w przeglądarce pełną interakcję z personalizacją pulpitu portalu.

## Treść oczekiwana w interfejsie (już w szablonie HTML)
Nie przepisuj HTML — sprawdź, że poniższe teksty są w szablonie; w JS aktualizuj tylko etykiety dynamiczne:
- Tytuł portalu: "Portal Usługowo-Handlowy IT-Partner — Panel Personalizacji Klienta"
- Nazwa usługi w podglądzie: "Pakiet Wdrożeniowy Cloud Server Enterprise"
- Opis usługi: "Dedykowane środowisko chmurowe z całodobowym wsparciem SLA 99.9%"
- Etykieta początkowa statusu: "Status konfiguracji: Ustawienia domyślne portalu IT-Partner"
- Komunikat po zmianie parametrów: "Status konfiguracji: Zastosowano niestandardowe style klienta"
- Etykieta przycisku resetu: "Przywróć domyślne style portalu"
