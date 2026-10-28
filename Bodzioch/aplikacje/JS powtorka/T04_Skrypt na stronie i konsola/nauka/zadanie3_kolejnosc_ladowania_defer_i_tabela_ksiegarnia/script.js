// Moduł T04 Zadanie 3: Księgarnia Książka i Kawa
// Zadeklaruj stałe NAZWA_KSIEGARNI, LICZBA_NOWOSCI, tablicę bestsellery oraz zmienną czyOtwarte
// Wypisz powitanie w console.log(), sprawdź typeof czyOtwarte w console.info()
// oraz zaprezentuj tablicę bestsellery za pomocą console.table()

// Twoje rozwiazanie:
const NAZWA_KSIEGARNI = "Kameralna Księgarnia i Kawiarnia Książka i Kawa"
const LICZBA_NOWOSCI = 14
let czyOtwarte = true
let bestsellery = ["Czysty Kod", "Algorytmy bez tajemnic", "JavaScript dla dociekliwych"]
console.log("System księgarni Książka i Kawa został pomyślnie zainicjalizowany.")
console.info("Typ zmiennej czyOtwarte: " + typeof czyOtwarte + ".");
console.table(bestsellery)