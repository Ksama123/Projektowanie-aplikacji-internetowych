// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let ciag = prompt("Podaj fragment numeru konta")
let zera = ciag.padStart(26, "0")
wynik.textContent = `${zera}`