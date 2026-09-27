// Pomnóż przez 0.8
let cenaprzed = Number(prompt("Podaj cenę produktu"))
let cenapo =  (cenaprzed * 0.8).toFixed(2)
document.write("Cena przed obniżką: " + cenaprzed + " zł<br>" + "Cena po rabacie (-20%): " + cenapo + " zł")
