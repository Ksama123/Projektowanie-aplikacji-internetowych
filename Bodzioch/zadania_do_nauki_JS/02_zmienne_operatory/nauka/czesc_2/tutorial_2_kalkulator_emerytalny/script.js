// Stała WIEK_EMERYTALNY = 65
const emeryt = 65
let imie = prompt("Podaj swoje imię")
let wiek = Number(prompt("Podaj swój wiek"))
if (wiek < emeryt) {
  let doemerytury = emeryt - wiek
  document.write("Witaj " + imie + ". Do emerytury zostało ci " + doemerytury + " lat.")
} else
  document.write("Witaj " + imie + ". Jesteś na emeryturze.")
