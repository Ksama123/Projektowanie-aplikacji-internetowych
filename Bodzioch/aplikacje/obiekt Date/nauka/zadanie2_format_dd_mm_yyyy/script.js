// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
const rok = Number(prompt("Rok:"));
const miesiac = Number(prompt("Miesiąc (1–12):"));
const dzien = Number(prompt("Dzień:"));
const data = new Date(rok, miesiac - 1, dzien);
const datawformacie = 
    String(data.getDate()).padStart(2, "0") + "." +
    String(data.getMonth()).padStart(2, "0") + "." +
    data.getFullYear();
wynik.textContent = datawformacie