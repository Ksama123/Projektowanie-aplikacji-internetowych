// Wypożyczalnia Pojazdów AutoRent Express
// Szablon kalkulatora rezerwacji z parametrem domyślnym

// KROK 1: Pobranie liczby dób przez prompt poza ciałem funkcji
const wejscieDoby = prompt("Podaj liczbę dób wynajmu pojazdu:", "3");
let doby = parseInt(wejscieDoby, 10);
if (isNaN(doby) || doby < 1) {
  doby = 1;
}

const STAWKA_DOBOWA = 180;

// Twoje rozwiazanie
// KROK 2: Zdefiniuj funkcję strzałkową obliczKosztWynajmu(doby, stawkaDoba, ubezpieczenieDoba = 35).
// Oblicz i zwróć sumę kosztu bazowego (doby * stawkaDoba) oraz ubezpieczenia (doby * ubezpieczenieDoba).


// KROK 3: Zdefiniuj funkcję strzałkową pomocniczą formatujKwote(kwota) zwracającą sformatowany tekst.


// KROK 4: Oblicz koszt całkowity (wywołaj obliczKosztWynajmu bez trzeciego argumentu),
// sformatuj wielowierszowy raport i przypisz do document.getElementById("wynik").textContent.
