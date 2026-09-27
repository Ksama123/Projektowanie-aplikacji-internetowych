// Twoje rozwiazanie
let wiek = Number(prompt("Podaj swój wiek"))
let plywa = prompt("Czy umiesz pływać (tak/nie)")
let opiekun = prompt("Czy wchodzisz z opiekunem (tak/nie)")
if ((wiek >= 12 && plywa == "tak") || opiekun == "tak")
  document.write("Wstęp dozwolony")
else
  document.write("Brak wstępu")
