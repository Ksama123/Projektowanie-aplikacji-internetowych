// Zadanie 5: Przyrostowy modul sledzenia statusu zgloszenia serwisowego w portalu IT-Partner
// Pobranie kodu statusu od uzytkownika z obowiazkowa wartoscia domyslna "DIAGNOSTYKA"
let kodStatusu = prompt("Podaj kod statusu zgłoszenia (NOWE, DIAGNOSTYKA, NAPRAWA, GOTOWE, ARCHIWUM):", "DIAGNOSTYKA");

// Twoje rozwiazanie:
// Zbuduj instrukcje switch obslugujaca zmienna kodStatusu:
// - "NOWE" — nowe zgloszenie
// - "DIAGNOSTYKA", "NAPRAWA" — sprzet w laboratorium (zastosuj fall-through)
// - "GOTOWE" — gotowe do odbioru
// - "ARCHIWUM" — zarchiwizowane
// - default — nieprawidlowy identyfikator
// Wypisz wynik za pomoca document.write() oraz console.log().
