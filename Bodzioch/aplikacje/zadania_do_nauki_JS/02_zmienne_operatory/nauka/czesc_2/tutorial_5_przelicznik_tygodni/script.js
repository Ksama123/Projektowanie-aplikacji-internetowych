// Math.floor i %
let dni = Number(prompt("Liczba dni"))
let tygodni = Math.floor(dni / 7)
let pozostałe = dni % 7
document.write(dni + " dni to " + tygodni + " tygodnie i " + pozostałe + " dni.")
