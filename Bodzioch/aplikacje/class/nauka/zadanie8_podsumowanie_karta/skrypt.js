// Twoje rozwiazanie
const karta = document.querySelector("#karta")
const wyroznij = document.querySelector("#wyroznij")
const ukryj = document.querySelector("#ukryj")
const reset = document.querySelector("#reset")
const status = document.querySelector("#status")
wyroznij.addEventListener("click", function(){
    karta.classList.toggle("featured")
})
ukryj.addEventListener("click", function(){
    karta.classList.toggle("hidden")
})
reset.addEventListener("click", function(){
    karta.classList.remove("hidden")
    karta.classList.remove("featured")
})