// Zadanie 4: Manufaktura Rowerowa VeloCity — Konfigurator Ramy
// Twoje rozwiazanie: Połącz modyfikację kolorów, właściwości z jednostką px oraz przezroczystości

const kolorRamy = document.querySelector("#kolor-ramy");
const suwakProfil = document.querySelector("#suwak-profil");
const suwakPolysk = document.querySelector("#suwak-polysk");
const btnResetRower = document.querySelector("#btn-reset-rower");
const kartaRower = document.querySelector("#karta-rower");

const podsumowanieKolor = document.querySelector("#podsumowanie-kolor");
const podsumowanieProfil = document.querySelector("#podsumowanie-profil");
const podsumowaniePolysk = document.querySelector("#podsumowanie-polysk");

// KROK 1: Zarejestruj zdarzenie "input" na kolorRamy
// Ustaw kartaRower.style.backgroundColor na kolorRamy.value
if (kolorRamy) {
    kolorRamy.addEventListener("input", () => {
        kartaRower.style.backgroundColor = kolorRamy.value
        podsumowanieKolor.textContent = kolorRamy.value
        // TODO: Zmień styl liniowy backgroundColor
        // TODO: Zaktualizuj treść w podsumowanieKolor
    });
}

// KROK 2: Zarejestruj zdarzenie "input" na suwakProfil
// Ustaw kartaRower.style.borderWidth na wartość w pikselach (np. `${suwakProfil.value}px`)
if (suwakProfil) {
    suwakProfil.addEventListener("input", () => {
        kartaRower.style.borderWidth = `${suwakProfil.value}px`
        podsumowanieProfil.textContent = suwakProfil.value
        // TODO: Zmień styl liniowy borderWidth z jednostką px
        // TODO: Zaktualizuj treść w podsumowanieProfil
    });
}

// KROK 3: Zarejestruj zdarzenie "input" na suwakPolysk
// Ustaw kartaRower.style.opacity na wartość bezwymiarową suwakPolysk.value
if (suwakPolysk) {
    suwakPolysk.addEventListener("input", () => {
        kartaRower.style.opacity = suwakPolysk.value
        // podsumowaniePolysk.textContent = (Math.round(parseFloat(suwakPolysk.value) * 100
        // TODO: Zmień styl liniowy opacity
        // TODO: Zaktualizuj treść w podsumowaniePolysk
    });
}

// KROK 4: Zarejestruj zdarzenie "click" na btnResetRower
// Wyczyść style liniowe przypisując pusty ciąg "", przywróć domyślne wartości kontrolek
if (btnResetRower) {
    btnResetRower.addEventListener("click", () => {
        kartaRower.style.opacity = ""
        kartaRower.backgroundColor = ""
        kartaRower.borderWidth = ""
        kolorRamy.value = "#0284c7"
        suwakProfil.value = 4
        suwakPolysk.value = 1.0
        // TODO: Wyzeruj style liniowe kartaRower
        // TODO: Przywróć wartości domyślne kontrolek formularza
    });
}
