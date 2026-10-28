// Moduł T04 Zadanie 5: Portal Usługowo-Handlowy (Zadanie przyrostowe Capstone)
// Zadeklaruj stałe NAZWA_PORTALU, WERSJA_SYSTEMU, MODUL_AKTYWNY, tablicę glowneKategorie oraz zmienną liczbaDostepnychUslug
// Wygeneruj nagłówek i dwa akapity do kontenera .wynik metodą document.write()
// Przeprowadź pełną diagnostykę startową w konsoli (console.log, console.info, console.table)

// Twoje rozwiazanie:
const NAZWA_PORTALU = "Portal Usługowo-Handlowy — Platforma Klienta"
const WERSJA_SYSTEMU = "1.0.4-beta"
const MODUL_AKTYWNY = "Moduł T04: Fundament Skryptu i Konsola"
let liczbaDostepnychUslug = 6
let glowneKategorie = ["Usługi gastronomiczne", "Serwis techniczny", "Księgarnia i multimedia"]
document.write("<h3>Karta Startowa Systemu Klienta</h3>")
document.write(`<p>Platforma: <strong>${NAZWA_PORTALU}</strong> | Wersja: ${WERSJA_SYSTEMU}</p>`)
document.write("<p class=\"status-aktywny\">Status środowiska: <em>Aktywne i gotowe do ewidencji zamówień</em></p>")
console.log("Inicjalizacja środowiska klienta dla Portalu Usługowo-Handlowego.")
console.info("Załadowano moduł: Moduł T04: Fundament Skryptu i Konsola.")
console.table(glowneKategorie)