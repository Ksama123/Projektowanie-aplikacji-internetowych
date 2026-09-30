// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let wyraz = prompt("Podaj swoje imie i nazwisko")
let wynik1 = wyraz.trim()
let wynik2 = wynik1[0].toUpperCase() + wynik1.slice(1).toLowerCase()
wynik.textContent = `Witaj ${wynik2}` 