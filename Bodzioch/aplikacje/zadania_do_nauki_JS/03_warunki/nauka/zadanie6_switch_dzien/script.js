// Twoje rozwiazanie
let dzien = Number(prompt("Jaki mamy dzień tygodnia (1-7)"))
switch (dzien) {
  case 1:
    document.write("Poniedziałek")
    break
  case 2:
    document.write("Wtorek")
    break
  case 3:
    document.write("Środa")
    break
  case 4:
    document.write("Czwartek")
    break
  case 5:
    document.write("Piątek")
    break
  case 6:
    document.write("Sobota")
    break
  case 7:
    document.write("Niedziela")
    break
  default:
    document.write("Podaj numer od 1 do 7")
    break
}
