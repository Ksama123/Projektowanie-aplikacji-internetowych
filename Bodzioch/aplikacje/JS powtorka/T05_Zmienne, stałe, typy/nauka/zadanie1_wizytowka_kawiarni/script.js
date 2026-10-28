// Zadanie 1: Wizytówka i kalkulator zamówienia kawiarni
// Twoje rozwiazanie - uzupełnij brakujące instrukcje w wyznaczonych krokach

// KROK 1: Zadeklaruj stałe NAZWA_LOKALU oraz CENA_ESPRESSO
const NAZWA_LOKALU = "Palarnia Kawy Aroma Bean"
const CENA_ESPRESSO = 14
// KROK 2: Zadeklaruj zmienną liczbaKupionychKaw o wartości początkowej 2
let liczbaKupionychKaw =2
// KROK 3: Oblicz początkowy koszt całkowity kwotaRazem jako iloczyn liczby kaw i ceny jednostkowej
let kwotaRazem = liczbaKupionychKaw * CENA_ESPRESSO
// KROK 4: Zwiększ wartość liczbaKupionychKaw do 3 i przelicz ponownie kwotaRazem
liczbaKupionychKaw++
kwotaRazem = liczbaKupionychKaw * CENA_ESPRESSO
// KROK 5: Wypisz powitanie oraz szczegóły w konsoli deweloperskiej za pomocą console.log()
// KROK 6: Wypisz podsumowanie zamówienia na stronie za pomocą instrukcji document.write()
document.write(`Lokal: ${NAZWA_LOKALU} <br> Cena pojedyńczego espresso: ${CENA_ESPRESSO} <br> Liczba zamówionych kaw: ${liczbaKupionychKaw} <br> Łączny koszt zamówienia: ${kwotaRazem}`)

