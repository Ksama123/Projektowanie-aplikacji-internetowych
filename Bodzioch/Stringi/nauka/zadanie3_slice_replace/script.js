// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let pesel = prompt("Podaj pesel")
let pesel1 = pesel.replaceAll(" ", "").trim()
let poczatek = pesel1.slice(0,6)
let koniec = pesel1.slice(6)
wynik.textContent = `Data ${poczatek} Seria ${koniec}`