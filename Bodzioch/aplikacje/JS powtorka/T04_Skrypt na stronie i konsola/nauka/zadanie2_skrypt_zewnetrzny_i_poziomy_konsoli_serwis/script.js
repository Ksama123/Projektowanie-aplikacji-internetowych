// Moduł T04 Zadanie 2: Serwis rowerowy VeloFix
// Zadeklaruj stałą NAZWA_SERWISU oraz zmienną zleceniaWToku
// Następnie wypisz cztery komunikaty na różnych poziomach konsoli (log, info, warn, error)

// Twoje rozwiazanie:
const NAZWA_SERWISU = "Profesjonalny Serwis Rowerowy VeloFix"
let zleceniaWToku = 5
console.log("Inicjalizacja modułu diagnostycznego warsztatu VeloFix.")
console.info(`Aktualnie przyjęto do realizacji ${zleceniaWToku} zleceń serwisowych.`)
console.warn("Uwaga: Kończy się zapas oleju do łańcuchów w magazynie podręcznym!")
console.error("Błąd: Brak wolnych stojaków naprawczych dla nowych rowerów.")