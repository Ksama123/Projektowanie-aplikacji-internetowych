// Zadanie 4: Zadanie integrujące — Centrum spedycyjno-logistyczne
// Twoje rozwiazanie

// KROK 1: Pobranie wagi przesyłki poza funkcjami (prompt z wartością domyślną)
let wagaInput = prompt("Podaj wagę przesyłki w kilogramach:", "15");
let wagaKg = parseFloat(wagaInput);
const strefa = 2;
const czyStalyKlient = true;
const wynik = document.querySelector("#wynik")
// KROK 2: Zadeklaruj funkcję obliczOplateWagowa(wagaKg, stawkaZaKg = 4)
// Zastosuj klauzulę strażniczą dla wagi <= 0.
function obliczOplateWagowa(wagaKg, stawkaZaKg =4){
    if(wagaKg<1){
        return 0
    }else
        return wagaKg*stawkaZaKg
}

// KROK 3: Zadeklaruj funkcję wyznaczDoplateStrefowa(nrStrefy)
// Zastosuj instrukcję switch lub if/else dla stref 1, 2, 3.
function wyznaczDoplateStrefowa(nrStrefy){
    switch(nrStrefy){
        case 1:
            return 15
            break
        case 2:
            return 25
            break
        case 3:
            return 40
            break
        default:
            return 15
            break
    }
}

// KROK 4: Zadeklaruj funkcję obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true)
// Zastosuj 10% rabatu dla stałego klienta.
function obliczKosztKoncowy(oplataWagowa,doplataStrefowa,stalyKlient){
    if(stalyKlient ===true){
        return oplataWagowa+doplataStrefowa*0.9
    }else
        return oplataWagowa+doplataStrefowa
}
// KROK 5: Zadeklaruj funkcję pomocniczą formatujWalute(kwota, symbol = "PLN")
function formatujWalute(kwota, symbol ="PLN"){
    return kwota + " " + symbol
}

// KROK 6: Wywołaj funkcje, przygotuj list przewozowy i wypisz do #wynik oraz konsoli.
let oplataWagowa =obliczOplateWagowa(wagaKg)
let doplataStrefowa = wyznaczDoplateStrefowa(strefa)
let kosztKoncowy = (oplataWagowa, doplataStrefowa, czyStalyKlient)
let zWaluta = formatujWalute(kosztKoncowy)
wynik.textContent = zWaluta