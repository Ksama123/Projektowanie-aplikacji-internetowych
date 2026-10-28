// Twoje rozwiazanie
const btn = document.querySelector("#btnLike")
btn.addEventListener("click", function(){
    if(btn.classList.contains("liked") == true){
        btn.classList.remove("liked")
    }else{
        btn.classList.add("liked")
    }
})