# Zadanie 1: Dobór barwy tkaniny w pracowni tapicerskiej

## Cel zadania
Nauczysz się modyfikować właściwości stylu liniowego elementu DOM (`element.style.backgroundColor` oraz `element.style.color`) w reakcji na wybór koloru z próbnika systemowego `<input type="color">` oraz kliknięcie przycisków szybkich próbek tkanin.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Konfiguratory mebli e-commerce (np. IKEA, Agata Meble):** natychmiastowa zmiana koloru tapicerki sofy lub fotela po kliknięciu próbki tkaniny.
- **Kreatory koszulek i gadżetów reklamowych:** wybór barwy materiału przed nałożeniem własnego nadruku.
- **Sklepy z farbami i materiałami wykończeniowymi:** interaktywne próbniki barw ścian w wirtualnym pokoju.

## Wymagania funkcjonalne
1. Pobierz referencje do próbnika koloru (`#probnik-kolor`), elementu podglądu tkaniny (`#podglad-tkanina`), przycisków gotowych odcieni (`.btn-odcien`) oraz etykiety informacyjnej (`#etykieta-koloru`).
2. Zarejestruj nasłuchiwacz zdarzenia `input` na próbniku `#probnik-kolor`. Podczas wybierania koloru ustaw `podgladTkanina.style.backgroundColor` na wartość z próbnika (`probnikKolor.value`) oraz zaktualizuj tekst w `#etykieta-koloru` (np. `` `Aktualny kolor tkaniny: ${kolor}` ``).
3. Dla każdego przycisku `.btn-odcien` zarejestruj zdarzenie `click`. Po kliknięciu odczytaj przypisany kolor z atrybutu `dataset.kolor` (w HTML: `data-kolor="..."`), ustaw go jako tło podglądu oraz zaktualizuj wartość próbnika `#probnik-kolor`.
4. Ustaw kontrastowy kolor tekstu w podglądzie według **stałej listy** (bez liczenia jasności RGB):
   - jeśli `kolor` to `#065f46`, `#2563eb` albo `#64748b` → `podgladTkanina.style.color = "#ffffff"`;
   - w każdym innym przypadku (w tym `#d97706` oraz dowolny kolor z próbnika spoza tej listy) → `podgladTkanina.style.color = "#1e293b"`.

## Kroki wykonania
1. Otwórz `index.html` i przeanalizuj identyfikatory kontrolek oraz strukturę karty próbnika.
2. W pliku `script.js` w wyznaczonym miejscu pobierz elementy za pomocą `document.querySelector` i `document.querySelectorAll`.
3. Napisz funkcję pomocniczą aktualizującą kolor podglądu i etykietę informacyjną.
4. Zarejestruj zdarzenie `input` na próbniku koloru oraz pętlę zdarzeń `click` na przyciskach próbek tkanin.
5. Zapisz pliki i przetestuj działanie aplikacji w przeglądarce.

## Treść oczekiwana w interfejsie (już w szablonie HTML)
Nie przepisuj HTML — sprawdź, że poniższe teksty są w szablonie; w JS aktualizuj tylko etykiety dynamiczne:
- Tytuł próbnika: "Pracownia Tapicerska — Dobór Tkaniny Obiciowej"
- Etykieta początkowa: "Aktualny kolor tkaniny: #2563eb (Niebieski szafirowy)"
- Etykiety przycisków szybkich: "Szary welur", "Butelkowa zieleń", "Ciepły beż"
- Podpis próbki w podglądzie: "Wzorzec tkaniny tapicerskiej Premium"
