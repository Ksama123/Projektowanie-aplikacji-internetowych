// Twoje rozwiązanie tutaj
const wynik = document.querySelector("#wynik")
let owocowe_marzenia = []
for (i = 0; i < 3; i++){
  owocowe_marzenia[i] = prompt("Podaj swój " + (i+1) +" ulubiony owoc")
}
let owoce1 =
  owocowe_marzenia.join("\n");
owocowe_marzenia[1] = "arbuz"
let owoce2 =
  owocowe_marzenia.join("\n");
wynik.textContent = owoce1 + "\n" +owoce2 + "\nDługość tablicy to: " + owocowe_marzenia.length
