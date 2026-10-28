const wynik = document.querySelector("#wynik")
const submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    let imie = document.querySelector("#imie")
    let email = document.querySelector("#email")
    let select = document.querySelectorAll("#select")
    let nazwa = select.value
    for(i = 0; i<select.length; i++){
        if(select[i].hasAttribute(checked)){
            let cena = select[i].getAttribute("cena")
            wynik.append = imie + email + cena + nazwa
        }
    }
})