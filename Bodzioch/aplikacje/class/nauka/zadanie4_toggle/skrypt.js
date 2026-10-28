// Twoje rozwiazanie
const kontener = document.querySelector("#mainContent")
const btn = document.querySelector("#btnToggle")
btn.addEventListener("click", function(){
    kontener.classList.toggle("dark-mode")
})