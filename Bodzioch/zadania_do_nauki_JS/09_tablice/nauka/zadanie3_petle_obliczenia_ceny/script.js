// Twoje rozwiązanie tutaj
const wynik = document.querySelector("#wynik")
let ceny = []
let suma = 0
for (let i = 1; i <= 4; i++){
  ceny.push(parseInt(prompt("Podaj " + i + " cene")))
}
for (let i = 0; i < ceny.length; i++){
  suma += ceny[i]
  cena = ceny.join("\n")
}
wynik.textContent = cena + "\n" + suma
