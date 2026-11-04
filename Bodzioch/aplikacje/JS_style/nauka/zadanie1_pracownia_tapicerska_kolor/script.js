// Zadanie 1: Pracownia Tapicerska — Dobór Tkaniny Obiciowej
// Twoje rozwiazanie: Zaimplementuj obsługę zmiany koloru za pomocą element.style

const probnikKolor = document.querySelector("#probnik-kolor");
const podgladTkanina = document.querySelector("#podglad-tkanina");
const etykietaKoloru = document.querySelector("#etykieta-koloru");
const przyciskiOdcieni = document.querySelectorAll(".btn-odcien");

// KROK 1: Zdefiniuj funkcję aktualizującą kolor podglądu (ustaw podgladTkanina.style.backgroundColor)
// oraz tekst w etykietaKoloru (np. `Aktualny kolor tkaniny: ${kolor}`).
function ustawKolorTkaniny(kolor) {
    podgladTkanina
    // TODO: Uzupełnij zmianę stylu inline element.style.backgroundColor
    // TODO: Zaktualizuj etykietę textContent
    // TODO: Dla #065f46, #2563eb, #64748b ustaw color = "#ffffff"; w pozostałych przypadkach "#1e293b"
}

// KROK 2: Dodaj nasłuchiwacz zdarzenia "input" na próbniku probnikKolor
if (probnikKolor) {
    probnikKolor.addEventListener("input", () => {
        // TODO: Wywołaj funkcję ustawKolorTkaniny z wartością probnikKolor.value
    });
}

// KROK 3: Dodaj obsługę kliknięcia dla każdego przycisku w kolekcji przyciskiOdcieni
przyciskiOdcieni.forEach((przycisk) => {
    przycisk.addEventListener("click", () => {
        // TODO: Odczytaj kolor z dataset.kolor
        // TODO: Zaktualizuj wartość probnikKolor.value oraz wywołaj ustawKolorTkaniny
    });
});
