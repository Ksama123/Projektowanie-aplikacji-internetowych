# Zadanie 2: Konfigurator typografii w studiu druku cyfrowego

## Cel zadania
Nauczysz się dynamicznie sterować właściwościami wymiarowymi tekstu (`fontSize` oraz `padding`) za pomocą suwaków `<input type="range">`, pamiętając o bezwzględnej konieczności dołączania jednostki miary `px` w literałach szablonowych. Uwaga: w CSS `padding` (dopełnienie / wypełnienie wewnętrzne) to nie to samo co `margin` (margines zewnętrzny).

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Kreatory wizytówek i zaproszeń online (np. Canva, VistaPrint):** suwaki do precyzyjnego skalowania rozmiaru imienia, nazwiska i dopełnienia wewnętrznego projektu.
- **Czytniki e-booków i artykułów (np. Pocket, Kindle Web):** personalizacja wielkości czcionki tekstu dla wygody czytania.
- **Edytory napisów w serwisach wideo:** dobór wielkości i odstępów tekstu wyświetlanego w kadrze.

## Wymagania funkcjonalne
1. Pobierz referencje do suwaka rozmiaru czcionki (`#suwak-font`), suwaka dopełnienia (`#suwak-padding`), karty wizytówki (`#podglad-wizytowka`) oraz etykiet informacyjnych (`#wartosc-font`, `#wartosc-padding`).
2. Zarejestruj zdarzenie `input` na suwaku `#suwak-font`. Zaktualizuj styl liniowy `podgladWizytowka.style.fontSize` z wartością w pikselach (np. `` `${suwakFont.value}px` ``) oraz wyświetl wartość liczbową w etykiecie `#wartosc-font`.
3. Zarejestruj zdarzenie `input` na suwaku `#suwak-padding`. Zaktualizuj styl liniowy `podgladWizytowka.style.padding` (również z jednostką `px`) oraz zaktualizuj tekst w `#wartosc-padding`.
4. Zadbaj o to, by zmiana była płynna w czasie rzeczywistym i nie generowała błędów w konsoli.

## Kroki wykonania
1. Otwórz `index.html` i zapoznaj się z zakresem wartości suwaków (`min`, `max`, `value`).
2. W `script.js` odszukaj sekcję `// Twoje rozwiazanie` i pobierz referencje do elementów DOM.
3. Utwórz funkcję aktualizującą rozmiar fontu i powiąż ją ze zdarzeniem `input` pierwszego suwaka.
4. Utwórz funkcję aktualizującą **padding** (dopełnienie) i powiąż ją ze zdarzeniem `input` drugiego suwaka.
5. Sprawdź w DevTools przeglądarki, jak w atrybucie `style` wizytówki dopisywane są wartości `font-size: ...px` oraz `padding: ...px`.

## Treść oczekiwana w interfejsie (już w szablonie HTML)
Nie przepisuj HTML — sprawdź, że poniższe teksty są w szablonie; w JS aktualizuj tylko etykiety dynamiczne:
- Tytuł modułu: "Studio Druku Cyfrowego — Konfigurator Wizytówki"
- Dane personalne na wizytówce: "Jan Kowalski — Główny Architekt Systemów Web"
- Nazwa pracowni w podtytule: "Drukarnia Cyfrowa PixelArt Studio"
- Domyślna wartość w etykiecie czcionki: "Rozmiar czcionki: 18px"
- Domyślna wartość w etykiecie dopełnienia: "Dopełnienie (padding): 20px"
