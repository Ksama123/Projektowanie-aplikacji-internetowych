// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok1 = Number(prompt("Rok początku: "))
const miesiac1 = Number(prompt("Miesiąc początku 1-12: "))
const dzien1 = Number(prompt("Dzień początku: "))
const poczatek = new Date(rok1, miesiac1 -1, dzien1)

const rok2 = Number(prompt("Rok końca: "))
const miesiac2 = Number(prompt("Miesiąc końca 1-12: "))
const dzien2 = Number(prompt("Dzień końca: "))
const koniec = new Date(rok2, miesiac2 -1, dzien2)
const dataPoczatek = String(poczatek.getDate()).padStart(2, "0") + "." + String(poczatek.getMonth()+1).padStart(2, "0") + "." + poczatek.getFullYear()
const dataKoniec = String(koniec.getDate()).padStart(2, "0") + "." + String(koniec.getMonth()+1).padStart(2, "0") + "." + koniec.getFullYear()
switch(koniec.getDay()){
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
const dni = (Math.round((poczatek.getTime() - koniec.getTime()) / (1000 * 60 * 60 * 24)))*-1;
wynik.textContent = `Deadline: ${dataKoniec} ${nazwaDnia} Dni: ${dni}`