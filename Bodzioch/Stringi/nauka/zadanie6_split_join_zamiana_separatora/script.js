// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let lista = prompt("Napisz liste słów oddzielonych myślnikim")
let tab = lista.split("-")
let slowa = tab.join(", ")
wynik.textContent = slowa