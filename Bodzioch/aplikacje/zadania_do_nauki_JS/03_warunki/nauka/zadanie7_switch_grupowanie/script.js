// Twoje rozwiazanie
let ocena = parseInt(prompt("Jaką dostałeś ocenę?"))
switch (ocena) {
  case 6:
  case 5:
    document.write("wyróżnione")
    break
  case 4:
  case 3:
    document.write("Ocena pozytywna")
    break
  case 2:
  case 1:
    document.write("Do poprawy")
    break
  default:
    document.write("Nie znana wartość")
    break

}
