// Twoje rozwiązanie
const wynik = document.querySelector("#wynik")
const zdanie = prompt("Podaj zdanie").trim()
tab = zdanie.split(" ")
for(i = 0; i<tab.length; i++){
    tab[i] = tab[i][0].toUpperCase() + tab[i].slice(1);
}
zdanie2 = tab.join(" ")
wynik.textContent = zdanie2