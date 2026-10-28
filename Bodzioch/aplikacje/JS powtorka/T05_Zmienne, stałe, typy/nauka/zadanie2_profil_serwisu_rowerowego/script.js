// Zadanie 2: Profil zlecenia serwisu rowerowego i badanie typów
// Twoje rozwiazanie - uzupełnij brakujące deklaracje i badanie typów

// KROK 1: Zadeklaruj stałe modelRoweru oraz rokProdukcji
const modelRoweru = "Trek Marlin 7"
const rokProdukcji = "2023"
// KROK 2: Zadeklaruj zmienną czyWymianaLancucha o wartości true
let czyWymianaLancucha = true
// KROK 3: Zadeklaruj zmienną uwagiKlienta bez wartości początkowej (undefined)
let uwagiKlienta
// KROK 4: Zadeklaruj zmienną przypisanyMechanik o wartości null
let przypisanyMechanik = null
// KROK 5: Zbadaj typ każdej zmiennej operatorem typeof i wypisz audyt do konsoli
console.info("Audyt typów danych zlecenia serwisowego VeloFix")
// KROK 6: Wypisz sformatowany raport na stronie za pomocą document.write()
document.write(`Model roweru: ${modelRoweru} ${typeof modelRoweru} <br> Rok produkcji: ${rokProdukcji} ${typeof rokProdukcji} <br> Wymiana łańcucha: ${czyWymianaLancucha} ${typeof czyWymianaLancucha} <br> Uwagi klienta: ${uwagiKlienta} ${typeof uwagiKlienta} <br> Przypisany mechanik: ${przypisanyMechanik} ${typeof przypisanyMechanik}`)