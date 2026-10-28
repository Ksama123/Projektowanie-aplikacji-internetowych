// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok = Number(prompt("Rok: "))
const miesiac = Number(prompt("Miesiąc 1-12: "))
const dzien = Number(prompt("Dzień: "))
const data = new Date(rok, miesiac -1, dzien)
const dataWFormacie = String(data.getDate()).padStart(2, "0") + "." + String(data.getMonth()+1).padStart(2, "0") + "." + data.getFullYear()
switch(data.getDay()){
    case 0:
        nazwaDnia = "Niedziela"
        break
    case 1:
        nazwaDnia = "Poniedziałek"
        break
    case 2:
        nazwaDnia = "Wtorek"
        break
    case 3:
        nazwaDnia = "Środa"
        break
    case 4:
        nazwaDnia = "Czwartek"
        break
    case 5:
        nazwaDnia = "Piątek"
        break
    case 6:
        nazwaDnia = "Sobota"
        break
    default:
        nazwaDnia = "Nieznany"
    break
}
wynik.textContent = `${dataWFormacie}, ${nazwaDnia}`