// FitCatering — System Zamówień Dietetycznych
// Szablon zadania integrującego: funkcje strzałkowe, parametry domyślne, raport

const STAWKA_DZIENNA = 75;

// KROK 1: Pobranie liczby dni przez prompt poza ciałem funkcji
const wejscieDni = prompt("Podaj liczbę dni pakietu dietetycznego:", "5");
let dni = parseInt(wejscieDni, 10);
if (isNaN(dni) || dni < 1) {
  dni = 1;
}

// Twoje rozwiazanie
// KROK 2: Zdefiniuj jednoargumentową funkcję strzałkową obliczRabatDlugoterminowy(dni).
// Zwróć 0.10 gdy dni >= 14, w przeciwnym razie 0.


// KROK 3: Zdefiniuj wieloargumentową funkcję strzałkową obliczCeneCateringu(dni, stawkaZaDzien, kosztDostawyDzien = 12).
// Wylicz koszt posiłków, uwzględnij rabat i dodaj koszt dostawy.


// KROK 4: Zdefiniuj funkcję z ciałem blokowym okreslStatusPakietu(dni) klasyfikującą pakiet.


// KROK 5: Wywołaj funkcje, sformatuj raport do 'raport' i przypisz do document.getElementById("wynik").textContent.
