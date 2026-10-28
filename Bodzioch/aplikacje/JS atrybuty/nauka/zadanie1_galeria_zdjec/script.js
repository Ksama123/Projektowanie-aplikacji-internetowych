// Twoje rozwiazanie
const buttons = document.querySelectorAll(".btn")
const img = document.querySelector("#main-image")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        img.src = buttons[i].getAttribute("data-src")
    })
}