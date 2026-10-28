// Twoje rozwiazanie
const wynik = document.querySelector("#result")
const btn = document.querySelector("#btnCheck")
const pudelko = document.querySelector("#magicBox")
btn.addEventListener("click", function(){
    wynik.textContent = `Jest ${pudelko.classList.length} klas: ${pudelko.classList.value}`
})