// Zadanie 3: Kalkulator biletów w muzeum techniki i konwersje typów
// Twoje rozwiazanie - uzupełnij brakujące parsowanie i kalkulację kwot
// KROK 1: Zadeklaruj wejściowe stałe tekstowe z cenami i liczbami biletów
const tekstCenaNormalny = "42.50 PLN"
const tekstCenaUlgowy = "25.00 PLN"
const tekstLiczbaNormalnych = "2 bilety"
const tekstLiczbaUlgowych = "3 bilety"
// KROK 2: Sparsuj ceny jednostkowe za pomocą parseFloat()
let cenaNormalny = parseFloat(tekstCenaNormalny)
let cenaUlgowy = parseFloat(tekstCenaUlgowy)
// KROK 3: Sparsuj liczbę biletów za pomocą parseInt(..., 10)
let liczbaNormalnych = parseInt(tekstLiczbaNormalnych)
let liczbaUlgowych = parseInt(tekstLiczbaUlgowych)
// KROK 4: Oblicz koszt biletów normalnych, ulgowych oraz sumę całkowitą zamówienia
let sumaCalkowita = cenaNormalny*liczbaNormalnych + cenaUlgowy*liczbaUlgowych 
// KROK 5: Zbadaj status opłacenia zamówienia za pomocą funkcji Boolean()
czyZamowienieOplacone = Boolean(sumaCalkowita)
// KROK 6: Wypisz podsumowanie transakcji w konsoli deweloperskiej
console.log("Przetwarzanie transakcji biletowej ArcheoTech")
// KROK 7: Wypisz sformatowany raport na stronie za pomocą document.write()
document.write(
    `Instytucja: Muzeum Techniki i Nauki ArcheoTech<br>
    Bilety normalne: ${liczbaNormalnych} szt. x ${tekstCenaNormalny} = ${cenaNormalny*liczbaNormalnych} PLN<br>
    Bilety ulgowe: ${liczbaUlgowych} szt. x ${tekstCenaUlgowy} = ${cenaUlgowy*liczbaUlgowych} PLN<br>
    Łączna kwota do zapłaty: ${sumaCalkowita} PLN<br>
    Status gotowości do płatności: ${czyZamowienieOplacone}`
)
