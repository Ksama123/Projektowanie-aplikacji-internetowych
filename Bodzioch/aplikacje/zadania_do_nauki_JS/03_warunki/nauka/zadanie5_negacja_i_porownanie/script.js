// Twoje rozwiazanie
let login = prompt("Podaj login użytkownika")
let haslo = prompt("Podaj hasło użytkownika")
let regulamin = prompt("Czy akceptujesz regulamin serwisu (tak/nie)")
if (!(login == "uczen" && haslo == "1234" && regulamin == "tak"))
  document.write("Odmowa dostępu")
else
  document.write("Zalogowano")
