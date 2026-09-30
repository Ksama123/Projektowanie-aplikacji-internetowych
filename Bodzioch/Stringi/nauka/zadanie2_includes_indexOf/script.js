// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let zdanie = prompt("Wypisz swoje zdanie")
let slowo = prompt("Wypisz swoje słowo")
let zdanie2 = zdanie.toLowerCase()
let slowo2 = slowo.toLowerCase()
if(zdanie2.includes(slowo2)){
    let indeks = zdanie2.indexOf(slowo2)
    wynik.textContent = `${zdanie} zawiera słowo ${slowo} na indeksie ${indeks}`
}
else
    wynik.textContent = `Nie zawiera`
