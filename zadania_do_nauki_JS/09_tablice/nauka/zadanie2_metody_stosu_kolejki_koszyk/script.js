// Twoje rozwiązanie tutaj
let koszyk = []
const wynik = document.querySelector("#wynik")
for (i = 0; i < 2; i++){
  koszyk.push(prompt("Podaj swój " + (i + 1) + " produkt"))
}
let poZakupach = koszyk.join(", ")
koszyk.unshift(prompt("Podaj swój priorytetowy produkt"))
let pilny = koszyk.join(", ")
koszyk.pop(alert("Usunięto ostatni produkt(Za drogi)"))
koszyk.shift()
let ostateczny = koszyk.join(", ")
wynik.textContent = "Po zakupach: " +  poZakupach + "\nZ pilnym towarem: " + pilny + "\nOstateczny koszyk: " + ostateczny
