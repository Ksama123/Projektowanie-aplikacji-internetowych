// Twoje rozwiazanie
const komunikat = document.querySelector("#alert")
const btn = document.querySelector("#btnFix")
btn.addEventListener("click", function(){
    komunikat.classList.remove("error")
    komunikat.classList.add("success")
})