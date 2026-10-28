// Zadanie 5 (Przyrostowe): Kalkulator zamówień i rabatów Pizzeria La Bella
// Szablon startowy dla ucznia (Zasada Zero Regresji)

// Pobranie kodu promocyjnego przez prompt() z domyślną wartością "BELLA20" (wzorzec z T08 Z1)
const wpisanyKod = prompt("Wprowadź kod promocyjny (lub pozostaw pusty):", "BELLA20");

// Stałe zamówienia klienta (stan bazowy z T07)
const kwotaZamowienia = 110;
const statusStalegoKlienta = true;
const adresZablokowany = false;

let statusRealizacji = "";
let zamowienieZatwierdzone = false;
let stawkaRabatu = 0;
let kwotaRabatu = 0;
let kosztDostawy = 0;
let kwotaDoZaplaty = 0;

// KROK 1: Sprawdź warunki wykluczające — kalkulację umieść TYLKO w gałęzi else akceptacji
// - Jeśli adresZablokowany === true -> odrzuć (strefa zablokowana)
// - W przeciwnym razie jeśli kwotaZamowienia < 40 -> odrzuć (brak kwoty minimalnej)
// - W przeciwnym razie (else): ustaw status zatwierdzenia, zamowienieZatwierdzone = true
//   i wykonaj kroki 2–4 wewnątrz tego bloku
// Twoje rozwiazanie:
if (adresZablokowany) {
  // status odrzucenia — strefa zablokowana
} else if (kwotaZamowienia < 40) {
  // status odrzucenia — kwota minimalna
} else {
  // KROK 2: Drabina else if dla stawki rabatu:
  // - kwotaZamowienia >= 150: 15%
  // - kwotaZamowienia >= 80: 10%
  // - else: 0%
  // Twoje rozwiazanie:


  // KROK 3: Jeśli wpisanyKod === "BELLA20" && statusStalegoKlienta === true, dodaj bonus +5%
  // Twoje rozwiazanie:


  // KROK 4: Koszt dostawy: 0 zł jeśli kwotaZamowienia >= 100 || statusStalegoKlienta, inaczej 12 zł
  // Oblicz: kwotaRabatu = (kwotaZamowienia * stawkaRabatu) / 100
  //         kwotaDoZaplaty = kwotaZamowienia - kwotaRabatu + kosztDostawy
  // Twoje rozwiazanie:

}

// KROK 5: Wypisz raport document.write().
// Linie rabatu / dostawy / kwoty końcowej tylko gdy zamowienieZatwierdzone === true.
// TAK/NIE i tekst darmowej dostawy przygotuj przez if/else (bez ? : i bez .includes).
// Na końcu console.log statusu i kwoty.
// Twoje rozwiazanie:

