// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
const numerKonta = String(prompt("Podaj swój numer konta 24 cyfry")).trim()
const bezSpacji = numerKonta.replaceAll(" ", "");
const zeSpacja = bezSpacji.slice(0,4) + " " + bezSpacji.slice(4,8) + " " + bezSpacji.slice(8,12) + " " + bezSpacji.slice(12,16) + " " + bezSpacji.slice(16,20) + " " + bezSpacji.slice(20,24)
wynik.textContent = zeSpacja