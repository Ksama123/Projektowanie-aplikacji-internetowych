// Moduł T04 Zadanie 4: Przychodnia Weterynaryjna Cztery Łapy
// Zadeklaruj stałe NAZWA_PRZYCHODNI, LEKARZ_DYZURNY, grafikZabiegow oraz zmienną pacjenciWKolejce
// Wypisz nagłówek i akapit do kontenera .wynik za pomocą document.write()
// Przeprowadź diagnostykę w konsoli (console.log, console.warn, console.table)

// Twoje rozwiazanie:
const NAZWA_PRZYCHODNI = "Całodobowa Przychodnia Weterynaryjna Cztery Łapy"
const LEKARZ_DYZURNY = "lek. wet. Anna Kowalska"
let pacjenciWKolejce = 3
let grafikZabiegow = ["Szczepienie profilaktyczne", "Badanie ultrasonograficzne", "Toaleta stomatologiczna"]
document.write("<h3>Dyżur Weterynaryjny — Informacja Dnia</h3>")
document.write(`<p>Lekarz przyjmujący: <strong>${LEKARZ_DYZURNY}</strong> | Liczba pacjentów w poczekalni: ${pacjenciWKolejce}</p>`)
console.log("Inicjalizacja modułu dyżuru przychodni Cztery Łapy zakończona pomyślnie.")
console.warn("Uwaga: Poczekalnia ma ograniczoną liczbę miejsc siedzących!")
