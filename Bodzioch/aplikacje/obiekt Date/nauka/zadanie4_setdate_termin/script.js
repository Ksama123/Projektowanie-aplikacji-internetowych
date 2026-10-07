// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok = Number(prompt("Rok:"));
const miesiac = Number(prompt("Miesiąc (1–12):"))
const dzien = Number(prompt("Dzień:"))
const n = Number(prompt("Za ile"))
const data = new Date(rok, miesiac - 1, dzien)
const termin = data.setDate(data.getDate()+n)
