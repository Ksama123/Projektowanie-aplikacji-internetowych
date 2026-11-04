// Zadanie 3: Parametry domyślne i formatowanie — Warsztat samochodowy
// Twoje rozwiazanie

// Dane kosztorysu:
const cenaRobocizny = 250;
const cenaCzesci = 400;
const wynik = document.querySelector("#wynik")

// KROK 1: Zadeklaruj funkcję obliczSumeNetto(cenaRobocizny, cenaCzesci)
// Funkcja ma zwracać sumę obu parametrów.
function obliczSumeNetto(cenaRobocizny, cenaCzesci){
    return cenaRobocizny+cenaCzesci
}
// KROK 2: Zadeklaruj funkcję obliczPodatekVat(kwotaNetto, stawkaVat = 0.23)
// Parametr stawkaVat ma mieć domyślną wartość 0.23. Funkcja zwraca iloczyn.
function obliczPodatekVat(kwotaNetto, stawkaVat = 0.23){
    return kwotaNetto*stawkaVat
}
// KROK 3: Zadeklaruj funkcję formatujCene(kwota, waluta = "PLN")
// Funkcja ma zaokrąglać kwotę do 2 miejsc po przecinku (toFixed(2)) i dołączać walutę.
function formatujCene(kwota, waluta ="PLN"){
    return kwota.toFixed(2)+" " + waluta
}
let sumaNetto = obliczSumeNetto(cenaRobocizny, cenaCzesci)
let podatekVat = obliczPodatekVat(sumaNetto)
let sformatowana = formatujCene(sumaNetto*1.23)
// KROK 4: Oblicz kwotę brutto, przygotuj raport i wypisz do #wynik oraz konsoli.
wynik.textContent = `Kosztorys naprawy pojazdu - Warsztat Auto-centrum\nKoszt robocizny serwisowej: ${cenaRobocizny} PLN\nKoszt części zamiennycg: ${cenaCzesci} PLN\nSuma netto: ${sumaNetto} Podatek VAT(23%) ${(podatekVat)}PLN\nŁączna kwota do zapłaty brutto: ${sformatowana}`