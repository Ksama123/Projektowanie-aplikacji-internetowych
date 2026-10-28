// Zadanie 5 (Przyrostowe): Harmonogram abonamentu portalu IT-Partner
// Zaimplementuj półroczny kalkulator subskrypcji.

const LICZBA_MIESIECY = 6;
const ABONAMENT_BAZOWY = 80;
const KOSZT_KOPII_CLOUD = 25;

// TODO: KROK 1 — Zadeklaruj zmienną sumaAbonamentu i przypisz jej wartość 0.

// TODO: KROK 2 — Skonstruuj pętlę for ze zmienną miesiac od 1 do LICZBA_MIESIECY (krok: +1).

// TODO: KROK 3 — W ciele pętli:
// - Jeśli miesiac % 2 === 0 (miesiąc parzysty z kopią zapasową cloud):
//     kosztMiesiaca = ABONAMENT_BAZOWY + KOSZT_KOPII_CLOUD
//     Wypisz: `<p>Rozliczenie portalu IT-Partner — Miesiąc nr ${miesiac} — Pakiet rozszerzony: hosting + kopia cloud (105 zł)</p>`
// - W przeciwnym razie (miesiąc nieparzysty):
//     kosztMiesiaca = ABONAMENT_BAZOWY
//     Wypisz: `<p>Rozliczenie portalu IT-Partner — Miesiąc nr ${miesiac} — Pakiet bazowy: hosting i wsparcie techniczne (80 zł)</p>`
// - Dodaj kosztMiesiaca do sumatora sumaAbonamentu.

// TODO: KROK 4 — Poza pętlą oblicz średnią miesięczną:
// let sredniaMiesieczna = sumaAbonamentu / LICZBA_MIESIECY;
// Następnie wypisz oba podsumowania:
// `<p><strong>Łączny koszt 6-miesięcznego planu abonamentowego IT-Partner wynosi: ${sumaAbonamentu} zł</strong></p>`
// `<p><strong>Średnia miesięczna opłata abonamentowa wynosi: ${sredniaMiesieczna} zł</strong></p>`
