// Zadanie 3: Kontrola jakości na linii sortowania paczek
// Uzupełnij kod pętli while z instrukcjami continue i break zgodnie z instrukcją.

const LIMIT_PACZEK = 6;
let numerPaczki = 0;

// Twoje rozwiazanie
// TODO: KROK 1 — Skonstruuj pętlę while, która wykonuje się dopóki numerPaczki < LIMIT_PACZEK.

// TODO: KROK 2 — Na początku pętli zwiększ numerPaczki o 1.

// TODO: KROK 3 — Jeśli numerPaczki === 3, wypisz komunikat o odrzucie paczki i użyj instrukcji continue:
// `<p style="color: #f59e0b;">Paczka nr 3 ma nieczytelną etykietę adresową — pomijanie skanowania i odrzut na tor rewizyjny.</p>`

// TODO: KROK 4 — Jeśli numerPaczki === 5, wypisz komunikat o zacięciu i przerwij pętlę za pomocą break:
// `<p style="color: #ef4444;"><strong>Wykryto zacięcie taśmociągu przy paczce nr 5 — natychmiastowe zatrzymanie linii sortowniczej.</strong></p>`

// TODO: KROK 5 — W przeciwnym razie wypisz standardowy komunikat o powodzeniu skanowania:
// `<p>Paczka kurierska nr ${numerPaczki} — kod kreskowy zweryfikowany pomyślnie (status: przekazano do doręczenia).</p>`

// TODO: KROK 6 — Poza pętlą wypisz podsumowanie:
// `<p><strong>Raport z pracy linii sortowniczej został pomyślnie zapisany w dzienniku zdarzeń.</strong></p>`
