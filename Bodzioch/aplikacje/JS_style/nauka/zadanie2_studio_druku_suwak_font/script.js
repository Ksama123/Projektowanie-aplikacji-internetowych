// Zadanie 2: Studio Druku Cyfrowego — Konfigurator Wizytówki
// Twoje rozwiazanie: Zaimplementuj skalowanie parametrów za pomocą suwaków z jednostką "px"

const suwakFont = document.querySelector("#suwak-font");
const suwakPadding = document.querySelector("#suwak-padding");
const podgladWizytowka = document.querySelector("#podglad-wizytowka");
const wartoscFont = document.querySelector("#wartosc-font");
const wartoscPadding = document.querySelector("#wartosc-padding");

// KROK 1: Zarejestruj zdarzenie "input" na suwaku suwakFont
// Ustaw styl inline podgladWizytowka.style.fontSize z jednostką "px"
// Zaktualizuj treść w wartoscFont: `Rozmiar czcionki: ${suwakFont.value}px`
if (suwakFont) {
    suwakFont.addEventListener("input", () => {
        podgladWizytowka.style.fontSize = `${suwakFont.value}px`
        wartoscFont.textContent = suwakFont.value
        // TODO: Zastosuj właściwość fontSize z dołączoną jednostką "px"
        // TODO: Zaktualizuj etykietę wartoscFont
    });
}

// KROK 2: Zarejestruj zdarzenie "input" na suwaku suwakPadding
// Ustaw styl inline podgladWizytowka.style.padding z jednostką "px"
// Zaktualizuj treść w wartoscPadding: `Dopełnienie (padding): ${suwakPadding.value}px`
if (suwakPadding) {
    suwakPadding.addEventListener("input", () => {
        podgladWizytowka.style.padding = `${suwakPadding.value}px`
        wartoscPadding.textContent = suwakPadding.value
        // TODO: Zastosuj właściwość padding z dołączoną jednostką "px"
        // TODO: Zaktualizuj etykietę wartoscPadding
    });
}
