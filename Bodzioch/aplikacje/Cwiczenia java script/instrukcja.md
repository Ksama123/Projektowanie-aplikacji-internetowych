# Zadanie 3. Atelier „Glina”

**Czas:** ok. 40 minut. **Grupa B.**

## Zlecenie

Strona pracowni ceramicznej: słownik, **siatka Grid** trzech produktów, cennik, formularz. Menu na Flexie.

## Pliki

```
zadanie3_atelier_glina/
  index.html
  style.css
```

## Materiały graficzne

Poniższe adresy wskazują **losowe** zdjęcia z serwisu [picsum.photos](https://picsum.photos/). Przy każdym odświeżeniu strony obraz może być inny — to zamierzone. Parametr `random` rozróżnia trzy karty wyrobów. Wklej adresy dokładnie jak poniżej. Potrzebne jest połączenie z internetem.

Karta 1: https://picsum.photos/400/260?random=1  
Karta 2: https://picsum.photos/400/260?random=2  
Karta 3: https://picsum.photos/400/260?random=3  

---

## Treść

1. HTML5, polski, UTF-8, autor. Zakładka: `Glina — atelier`.
2. Tytuł `Atelier Glina`. Menu: `Wyroby` (`#wyroby`), `Cennik` (`#cennik`), `Zapis` (`#zapis`).
3. Słownik usług: `Kubek` — `od 45 zł`; `Miska` — `od 70 zł`; `Wazon` — `od 90 zł`.
4. Sekcja wyrobów: trzy karty w **trzech równych kolumnach** (Grid), odstęp 16 pikseli — Kubek kamionkowy, Miska na owoce, Wazon wysoki — ze zdjęciami i krótkim opisem.
5. Tabela cennika: `Wyrób`, `Wypał`, `Cena` — Kubek / 2 dni / 45 zł; Miska / 3 dni / 70 zł; Wazon / 4 dni / 90 zł; kwoty pogrubione.
6. Formularz: imię, e-mail, lista `Wyrób`, przycisk `Zapisz się na wypał`.

---

## Wygląd

1. Tło `rgb(241, 250, 238)`, tekst `rgb(27, 67, 50)`. Arial, 16 pikseli, interlinia 1,5. Margines 0.
2. Nagłówek/stopka: `rgb(27, 67, 50)`, tekst biały, wyśrodkowane.
3. Menu Flex w rzędzie, gap 16, odnośniki `#95d5b2`, hover biały.
4. Treść: 960 pikseli, wyśrodkowana, odstęp wewnętrzny 24 piksele (szerokość łącznie z odstępem wewnętrznym).
5. Grid 3×`1fr`, gap 16. Karty z ramką i paddingiem 12. Zdjęcia ~280 pikseli szerokości.
6. Tabela 480 pikseli, ramki, nagłówki ciemne.
7. Formularz 480 pikseli, ramka przerywana 2 piksele `#2d6a4f`, radius 8, padding 16×24.

---

## Oczekiwany wynik

Trzy wyroby w równych kolumnach, kotwice, formularz z wyborem wyrobu.
