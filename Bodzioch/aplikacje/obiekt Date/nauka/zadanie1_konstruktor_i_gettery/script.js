// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok = Number(prompt("Rok:"));
const miesiac = Number(prompt("Miesiąc (1–12):"));
const dzien = Number(prompt("Dzień:"));
const data = new Date(rok, miesiac - 1, dzien);
let rok1 = data.getFullYear()
let miesiac2 = data.getMonth()
let dzien2 = data.getDate()
wynik.textContent = `Rok: ${rok1} miesiąc(getMonth): ${miesiac2} miesiąc kalendarzowy(${miesiac}) dzień: ${dzien2}`