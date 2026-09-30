// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
let plik = prompt("Napisz nazwe pliku")
if(plik.endsWith(".txt") || plik.endsWith(".pdf") || plik.endsWith(".html")){
    let bezroz = plik.slice(0, plik.lastIndexOf("."))
    // let roz = plik.slice(plik.lastIndexOf("."))
    wynik.textContent = `Bezpieczny: tak\nnazwa: ${bezroz}`
}else{
    let bezroz = plik.slice(0, plik.lastIndexOf("."))
    // let roz = plik.slice(plik.lastIndexOf("."))
    wynik.textContent = `Bezpieczny: nie\nnazwa: ${bezroz}`
}