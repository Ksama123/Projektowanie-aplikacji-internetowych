// Zadanie 2: Funkcja z warunkiem i wczesnym wyjściem — Piekarnia rzemieślnicza
// Twoje rozwiazanie
const wynik = document.querySelector("#wynik")
// KROK 1: Pobierz liczbę bochenków od użytkownika (funkcja prompt poza funkcjami!)
let bochenkiInput = prompt("Podaj planowaną liczbę bochenków chleba:", "120");
let liczbaBochenkow = parseInt(bochenkiInput, 10);


// KROK 2: Zadeklaruj funkcję obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek = 500)
// Zastosuj klauzulę strażniczą (guard clause): jeśli liczbaBochenkow <= 0, zwróć 0.
// Oblicz wagę w kilogramach i zwróć wynik.
function obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek){
    if(liczbaBochenkow<=0){
        return 0
    }else
        return liczbaBochenkow*gramNaBochenek /1000
}

// KROK 3: Zadeklaruj funkcję okreslRozmiarPartii(liczbaBochenkow)
// Zwróć odpowiedni opis partii w zależności od wielkości zamówienia.
function obliczRozmiarPartii(liczbaBochenkow){
    if(liczbaBochenkow<=0)
        return "Błędne dane partii"
    else if(liczbaBochenkow>=200)
        return "Partia hurtowa (piec przemyslowy)"
    else if(liczbaBochenkow>=50)
        return "Partia startowa (piec wsadowy)"
    else
        return "Partia próbna (piec rzemieślniczy)"
}


// KROK 4: Wywołaj funkcje, przygotuj raport i wypisz do #wynik oraz konsoli.
