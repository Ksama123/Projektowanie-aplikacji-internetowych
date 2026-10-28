// Zadanie 2: Dozowanie płynu nabłyszczającego w myjni samochodowej
// Uzupełnij kod pętli do...while z użyciem prompt() zgodnie z instrukcją.

const DAWKA_WOSKU = 15;
const WYMAGANE_MINIMUM = 45;

let objetoscWosku = 0;
let cykl = 0;
let zgoda;

// Twoje rozwiazanie
// TODO: KROK 1 — Zbuduj pętlę do...while.
// W ciele pętli zwiększ cykl o 1 oraz dodaj DAWKA_WOSKU do objetoscWosku.

// TODO: KROK 2 — Wypisz komunikat wewnątrz pętli za pomocą document.write():
// `<p>Dozownik myjni — cykl nr ${cykl} — wstrzyknięto 15 ml płynu nabłyszczającego. Aktualny stan w zbiorniku: ${objetoscWosku} ml.</p>`

// TODO: KROK 3 — Pobierz decyzję operatora przez prompt() z wartością domyślną "tak":
// zgoda = prompt("Czy dozować kolejną dawkę wosku do komory? (tak/nie):", "tak");

// TODO: KROK 4 — Ustaw warunek pętli while: zgoda === "tak" && objetoscWosku < WYMAGANE_MINIMUM (pamiętaj o średniku po nawiasie!).

// TODO: KROK 5 — Poza pętlą wypisz podsumowanie:
// `<p><strong>Wymagana dawka ochronna wosku została osiągnięta. Rozpoczynanie suszenia karoserii.</strong></p>`
