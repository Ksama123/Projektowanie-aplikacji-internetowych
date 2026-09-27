// Użyj % do obliczenia reszty
let cukierki = Number(prompt("Ile mamy cukierków"))
let dzieci = Number(prompt("Ile mamy dzieci"))
let ile = Math.floor(cukierki / dzieci)
let reszta = cukierki % dzieci
document.write("Każde dziecko dostanie: " + ile + " cukierków<br> a zostanie: " + reszta)