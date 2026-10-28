// Twoje rozwiazanie
const btn = document.querySelector("#btnHighlight")
const karta = document.querySelector("#card")
btn.addEventListener("click", function(){
    karta.classList.add("featured")
})