// Zadanie 4: Konfigurator karnetu fitness (Zadanie integrujące)
// Twoje rozwiazanie - zintegruj deklaracje, konwersje, obliczenia i badanie typów

// KROK 1: Zadeklaruj stałą KLUB_NAZWA oraz wejściowe stałe tekstowe z opłatami
const KLUB_NAZWA = "Klub Fitness FitPark Active"
const tekstOplataWpisowa = "50 PLN"
// KROK 2: Sparsuj opłatę wpisową (parseInt) oraz cenę miesięczną (parseFloat)
let oplataWpisowa = parseInt(tekstOplataWpisowa)
const tekstCenaMiesiac = "129.90 PLN"
let cenaMiesiac = parseFloat(tekstCenaMiesiac)
// KROK 3: Zadeklaruj zmienną liczbaMiesiecy (6) oraz flagę czyDarmowyTrener (true)
let liczbaMiesiecy = 6
let czyDarmowyTrener = true
// KROK 4: Oblicz łączny koszt karnetu: opłata wpisowa + (liczba miesięcy * cena miesięczna)
let kosztCalkowity = oplataWpisowa + liczbaMiesiecy*cenaMiesiac
// KROK 5: Zaokrąglij koszt wzorem Math.round(kosztCalkowity * 100) / 100
kosztCalkowity = Math.round(kosztCalkowity * 100)/100
// KROK 6: Zbadaj typy zmiennych za pomocą typeof i zapisz audyt w konsoli
console.log("Generowanie umowy członkowskiej FitPark Active")
// KROK 7: Wypisz sformatowane podsumowanie umowy na stronie za pomocą document.write()
document.write(
    `Podsumowanie karnetu: ${KLUB_NAZWA}<br>
    Opłata wpisowa: ${tekstOplataWpisowa}<br>
    Abonament miesięczny: ${tekstCenaMiesiac}<br>
    Długość karnetu: ${liczbaMiesiecy} miesięcy <br>
    Bezpłatna sesja z trenerem: ${czyDarmowyTrener} typ: ${typeof czyDarmowyTrener}<br>
    Łączny koszt karnetu: ${kosztCalkowity} PLN typ: ${typeof kosztCalkowity}`
)