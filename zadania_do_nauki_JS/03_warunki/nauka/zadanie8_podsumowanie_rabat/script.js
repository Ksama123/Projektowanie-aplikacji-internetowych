// Twoje rozwiazanie
let kwota = Number(prompt("Podaj kwotę koszyka"))
let karta = prompt("Czy posiadasz kartę (tak/nie)")
let kod = prompt("Kod promocyjny")
if (kwota < 0)
  document.write("Błąd systemu")
else if (kwota >= 200 && karta == "tak")
  cena = kwota - kwota * 0.15
else if (kwota >= 200)
  cena = kwota-kwota*0.1
else if (kwota >= 100 || kod == "START")
  cena = kwota-kwota*0.05
document.write("Cena wynosi " + cena)
