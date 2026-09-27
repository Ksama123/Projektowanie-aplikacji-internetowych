// Oblicz średnią z 3 ocen
let ocena1 = Number(prompt("Ocena1"))
let ocena2 = Number(prompt("Ocena2"))
let ocena3 = Number(prompt("Ocena3"))
let srednia = ((ocena1 + ocena2 + ocena3) / 3).toFixed(2)
document.write("Twoja średnia to: " + srednia)