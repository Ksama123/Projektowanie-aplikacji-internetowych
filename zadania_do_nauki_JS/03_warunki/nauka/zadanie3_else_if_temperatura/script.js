// Twoje rozwiazanie
let temperatura = Number(prompt("Podaj temperaturę"))
if (temperatura < 0)
  document.write("Mróz")
else if (temperatura >= 0 && temperatura <=15)
  document.write("Chłodno")
else if (temperatura>=16 && temperatura<=25)
  document.write("Ciepło")
else
  document.write("Gorąco")
