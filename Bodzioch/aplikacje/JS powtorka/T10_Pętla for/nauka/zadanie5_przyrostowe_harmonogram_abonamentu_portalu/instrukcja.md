# Zadanie 5 (Przyrostowe): Harmonogram abonamentu portalu IT-Partner

## 1. Cel zadania
Zadanie stanowi zwieńczenie modułu w stałej domenie projektu przewodniego **Portal Usługowo-Handlowy IT-Partner**. Twoim celem jest zbudowanie modułu rozliczeń cyklicznych, który generuje półroczny harmonogram opłat abonamentowych za usługi serwerowe i wsparcie techniczne. Nauczysz się łączyć iterację pętli `for` ze zliczaniem sumarycznym kosztów oraz warunkowym naliczaniem usług dodatkowych w wyznaczonych cyklach rozliczeniowych.

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)
- **Panele rozliczeniowe SaaS (np. Microsoft 365, Google Workspace):** prognozowanie kosztów subskrypcji i generowanie okresowych zestawień księgowych.
- **Platformy chmurowe (np. AWS, OVHcloud):** automatyczne kalkulacje kosztów utrzymania instancji serwerowych i cyklicznych migawek danych (ang. *backups*).
- **Systemy telekomunikacyjne (np. Orange, Play):** generowanie bilingu i harmonogramu płatności rat oraz opłat abonamentowych.

## 3. Wymagania funkcjonalne
1. W pliku `script.js` zadeklaruj stałe:
   - `LICZBA_MIESIECY = 6`
   - `ABONAMENT_BAZOWY = 80` (zł/miesiąc)
   - `KOSZT_KOPII_CLOUD = 25` (zł, doliczany w miesiącach parzystych)
2. Przed pętlą zadeklaruj zmienną `sumaAbonamentu` zainicjalizowaną wartością `0`.
3. Skonstruuj pętlę `for` ze zmienną sterującą `miesiac` od `1` do `LICZBA_MIESIECY` (krok: +1).
4. W każdej iteracji:
   - Sprawdź, czy miesiąc jest parzysty (`miesiac % 2 === 0`).
   - W miesiącach parzystych koszt wynosi `ABONAMENT_BAZOWY + KOSZT_KOPII_CLOUD` (105 zł). Wypisz akapit informujący o pakiecie z kopią zapasową.
   - W miesiącach nieparzystych koszt wynosi `ABONAMENT_BAZOWY` (80 zł). Wypisz akapit informujący o pakiecie standardowym.
   - Zwiększ zmienną `sumaAbonamentu` o wyliczoną kwotę za dany miesiąc.
5. Po zakończeniu pętli oblicz średnią miesięczną (`sumaAbonamentu / LICZBA_MIESIECY`) i wypisz dwa akapity podsumowania: łączną kwotę za półrocze oraz średnią. Oczekiwane wartości: suma **555 zł**, średnia **92.5 zł**.

## Treść do wpisania
Dokładne szablony wypisu (skopiuj do `document.write`):
- Miesiąc parzysty: `` `<p>Rozliczenie portalu IT-Partner — Miesiąc nr ${miesiac} — Pakiet rozszerzony: hosting + kopia cloud (105 zł)</p>` ``
- Miesiąc nieparzysty: `` `<p>Rozliczenie portalu IT-Partner — Miesiąc nr ${miesiac} — Pakiet bazowy: hosting i wsparcie techniczne (80 zł)</p>` ``
- Podsumowanie sumy: `` `<p><strong>Łączny koszt 6-miesięcznego planu abonamentowego IT-Partner wynosi: ${sumaAbonamentu} zł</strong></p>` ``
- Podsumowanie średniej: `` `<p><strong>Średnia miesięczna opłata abonamentowa wynosi: ${sredniaMiesieczna} zł</strong></p>` ``

## 5. Wskazówki techniczne
- Użyj szablonu łańcuchowego z interpolacją `${miesiac}`, `${sumaAbonamentu}` oraz `${sredniaMiesieczna}`.
- Średnią oblicz **po** pętli: `let sredniaMiesieczna = sumaAbonamentu / LICZBA_MIESIECY;`.
- Zadbaj o prawidłowy zasięg zmiennych: sumator musi znajdować się przed pętlą, aby jego wartość nie była zerowana w trakcie iteracji.
