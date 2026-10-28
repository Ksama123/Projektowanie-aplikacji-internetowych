// Zadanie 4: System naliczania rabatów w drogerii internetowej
// Szablon startowy dla ucznia

// KROK 1: Zadeklaruj stałe opisujące zamówienie
const nazwaSklepu = "Drogeria Internetowa NaturaGlow";
const numerZamowienia = "ORD-2026-9934";
const kwotaKoszyka = 220;
const kartaKlubowa = true;

// KROK 2: Jeśli kwotaKoszyka <= 0, wypisz błąd.
// W przeciwnym razie całą dalszą kalkulację umieść w bloku else { ... }
// Twoje rozwiazanie:
if (kwotaKoszyka <= 0) {
  // wypisz komunikat błędu
} else {
  // KROK 3: Wyznacz stawkę rabatu podstawowego za pomocą drabiny else if:
  // - kwotaKoszyka >= 300: 15%
  // - kwotaKoszyka >= 150: 10%
  // - kwotaKoszyka >= 50: 5%
  // - else: 0%
  let rabatProcent = 0;
  // Twoje rozwiazanie:


  // KROK 4: Jeśli kartaKlubowa jest prawdziwa ORAZ rabatProcent > 0, przyznaj bonusKlubowy = 5
  let bonusKlubowy = 0;
  // Twoje rozwiazanie:


  // KROK 5: Oblicz:
  // lacznyRabat = rabatProcent + bonusKlubowy
  // kwotaZnizki = (kwotaKoszyka * lacznyRabat) / 100
  // kwotaDoZaplaty = kwotaKoszyka - kwotaZnizki
  // Przygotuj opisKarty "TAK"/"NIE" przez if/else (bez operatora ? :)
  // Wypisz sformatowany rachunek (wszystkie etykiety z instrukcji)
  // Twoje rozwiazanie:


  // KROK 6: Zarejestruj podsumowanie w konsoli za pomocą console.log()
  // Twoje rozwiazanie:

}
