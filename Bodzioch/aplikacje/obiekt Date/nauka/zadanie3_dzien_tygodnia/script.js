// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok = Number(prompt("Rok:"));
const miesiac = Number(prompt("Miesiąc (1–12):"))
const dzien = Number(prompt("Dzień:"))
const data = new Date(rok, miesiac - 1, dzien)

switch(data.getDay()){
    case 0:
        nazwadnia = "Niedziela"
        break
    case 1:
        nazwadnia = "Poniedziałek"
        break
    case 2:
        nazwadnia = "Wtorek"
        break
    case 3:
        nazwadnia = "Środa"
        break
    case 4:
        nazwadnia = "Czwartek"
        break
    case 5:
        nazwadnia = "Piątek"
        break
    case 6:
        nazwadnia = "Sobota"
        break
}
const datawformacie = 
    String(data.getDate()).padStart(2, "0") + "." +
    String(data.getMonth()).padStart(2, "0") + "." +
    data.getFullYear();
wynik.textContent = datawformacie + " " + nazwadnia