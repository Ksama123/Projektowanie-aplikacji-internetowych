// Twoje rozwiazanie
const wyslij = document.querySelector("#submit-btn")
const odblokuj = document.querySelector("#unlock-btn")

odblokuj.addEventListener("click", function(){
    if(wyslij.hasAttribute("disabled")){
        wyslij.removeAttribute("disabled")
    }
})