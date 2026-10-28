// Zadanie 5: Moduł wyceny projektu IT (Podsumowanie działu)
// Twoje rozwiazanie - zaimplementuj kompletny kosztorys agencji IT

// KROK 1: Zadeklaruj stałe AGENCJA_NAZWA oraz STAWKA_VAT (0.23)
const AGENCJA_NAZWA = "IT-Partner Solutions"
const STAWKA_VAT = 0.23
// KROK 2: Zadeklaruj wejściowe stałe tekstowe ze stawką, godzinami i rabatem
const tekstStawkaGodzinowa = "160.00 PLN"
const tekstLiczbaGodzin = "40 godzin"
const tekstRabatSpecjalny = "200 PLN"
// KROK 3: Sparsuj wartości za pomocą parseFloat() i parseInt(..., 10)
let stawkaGodzinowa = parseFloat(tekstLiczbaGodzin)
let liczbaGodzin = parseInt(tekstLiczbaGodzin, 10)
let rabatSpecjalny = parseInt(tekstRabatSpecjalny, 10)
// KROK 4: Oblicz kwotę bazową, kwotę netto po rabacie, wartość podatku VAT oraz kwotę brutto
let kwotaBaza = stawkaGodzinowa*liczbaGodzin
let kwotaNettoPoRabacie = kwotaBaza - rabatSpecjalny
let kwotaBrutto = kwotaNettoPoRabacie + kwotaNettoPoRabacie*STAWKA_VAT
// KROK 5: Zadeklaruj flagę czyRabatNaliczony oraz statusKoordynatora (null)
let czyRabatNaliczony = Boolean(rabatSpecjalny)
let statusKoordynatora = null
// KROK 6: Przeprowadź audyt typów w konsoli deweloperskiej
console.log("Generowanie oficjalnego kosztorysu IT-Partner Solutions")

// KROK 7: Wypisz pełny raport wyceny na stronie w kontenerze wyniku

document.write(
    `Wykonawca: ${AGENCJA_NAZWA}<br>
    Wycena bazowa: ${tekstLiczbaGodzin} x ${tekstStawkaGodzinowa} = ${kwotaBaza} PLN<br>
    Zastosowany rabat: ${tekstRabatSpecjalny} (naliczono: ${czyRabatNaliczony})<br>
    Wartość netto po rabacie: ${kwotaNettoPoRabacie} PLN<br>
    Podatek VAT(23%): ${kwotaNettoPoRabacie*STAWKA_VAT} PLN<br>
    Ostateczna kwota brutto: ${kwotaBrutto} typ: ${typeof kwotaBrutto}<br>
    Przypisany koordynator: ${statusKoordynatora} typ: ${typeof statusKoordynatora}`
)