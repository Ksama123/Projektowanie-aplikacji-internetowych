// Zadanie 4 (Integrujące): Rejestr sprzedaży w kawiarni rzemieślniczej
// Uzupełnij kod integrujący pętlę while, prompt(), sumator, continue oraz break.

const CENA_KAWY = 16;
const LIMIT_UTARGU = 48;
const maxZamowien = Number(prompt("Podaj maksymalną liczbę zamówień na bieżącej zmianie:", "6"));

let numerZamowienia = 0;
let sumaSprzedazy = 0;
let wydaneKawy = 0;

// Twoje rozwiazanie
// TODO: KROK 1 — Skonstruuj pętlę while, która wykonuje się dopóki numerZamowienia < maxZamowien.

// TODO: KROK 2 — Na początku iteracji zwiększ numerZamowienia o 1.

// TODO: KROK 3 — Jeśli numerZamowienia === 2, wypisz informację o anulowaniu i użyj instrukcji continue:
// `<p style="color: #f59e0b;">Zamówienie nr 2 zostało anulowane przez klienta — pomijanie naliczania opłaty.</p>`

// TODO: KROK 4 — Zwiększ sumaSprzedazy o CENA_KAWY oraz wydaneKawy o 1.
// Wypisz komunikat o zrealizowanym zamówieniu:
// `<p>Zamówienie nr ${numerZamowienia} — wydano kawę latte (16 zł). Aktualny stan utargu: ${sumaSprzedazy} zł.</p>`

// TODO: KROK 5 — Jeśli sumaSprzedazy >= LIMIT_UTARGU, wypisz informację o osiągnięciu limitu i przerwij pętlę za pomocą break:
// `<p style="color: #38bdf8;">Osiągnięto zaplanowany limit utargu (minimum 48 zł) — zamknięcie kasy fiskalnej.</p>`

// TODO: KROK 6 — Poza pętlą wypisz podsumowanie zmiany:
// `<p><strong>Podsumowanie zmiany kawiarni: wydano łącznie ${wydaneKawy} kaw, a łączny przychód wynosi: ${sumaSprzedazy} zł.</strong></p>`
