// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
const zdanie = prompt("Wpisz swoje zdanie")
const wyraz = prompt("Wpisz swój wyraz")
if(zdanie.toLowerCase().includes(wyraz.toLowerCase())){
    wynik.textContent = "Tak"
}else{
    wynik.textContent = "Nie"
}