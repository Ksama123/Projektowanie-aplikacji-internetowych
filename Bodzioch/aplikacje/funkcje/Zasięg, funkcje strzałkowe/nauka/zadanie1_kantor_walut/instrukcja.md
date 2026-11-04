# Zadanie 1: Jednoargumentowe funkcje strzałkowe w kantorze internetowym

## Cel zadania
Celem ćwiczenia jest opanowanie najprostszej, skróconej postaci funkcji strzałkowej (Arrow Function) z dokładnie jednym parametrem i niejawnym zwracaniem wartości (implicit return). Zaimplementujesz funkcje przeliczające kwoty walutowe oraz prowizję kantoru.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Kantory internetowe i fintech (np. Revolut, Cinkciarz.pl):** Błyskawiczne przeliczanie kwot według aktualnego kursu w widżecie kalkulatora walutowego na żywo.
2. **Sklepy międzynarodowe (np. Amazon, AliExpress):** Dynamiczne wyświetlanie szacunkowej ceny w walucie lokalnej użytkownika na karcie produktu.
3. **Aplikacje bankowe:** Obliczanie marży banku lub prowizji za przewalutowanie transakcji kartą za granicą.

## Wymagania funkcjonalne
1. W pliku `script.js` zdefiniuj stałą `KURS_EUR = 4.32` reprezentującą kurs euro w złotych.
2. Utwórz funkcję strzałkową `przeliczEurNaPln` przyjmującą jeden parametr `kwotaEur`. Funkcja ma korzystać ze skróconego zapisu: brak nawiasów wokół parametru oraz niejawny return (`kwotaEur => kwotaEur * KURS_EUR`).
3. Utwórz drugą funkcję strzałkową `obliczProwizje`, która dla podanej kwoty w PLN oblicza stałą prowizję kantoru w wysokości 1.5% (`kwotaPln => kwotaPln * 0.015`).
4. Przygotuj transakcję testową dla kwoty `150` EUR:
   - Oblicz równowartość w PLN za pomocą `przeliczEurNaPln` (wartość brutto).
   - Oblicz prowizję od wartości brutto za pomocą `obliczProwizje`.
   - Oblicz kwotę netto do wypłaty: `wartość brutto − prowizja`.
   - Kwoty w raporcie formatuj do 2 miejsc po przecinku (`.toFixed(2)`).
5. Zbuduj raport według obowiązkowego szablonu poniżej i przypisz go do `document.getElementById("wynik").textContent`.

## Treść do wpisania
Raport musi zawierać **dokładnie** poniższy układ linii (wartości liczbowe wynikają z obliczeń; dla 150 EUR oczekiwane kwoty to `648.00`, `9.72` i `638.28`):

```text
=== Kantor Internetowy WalutaOnline ===
Kwota transakcji: 150 EUR
Przelicznik kursowy: 4.32 PLN/EUR
-----------------------------------------
Równowartość brutto: 648.00 PLN
Prowizja operacyjna kantoru: 9.72 PLN
Kwota netto do wypłaty: 638.28 PLN
Status: Transakcja zrealizowana pomyślnie.
```

## Podpowiedź / Wskazówki składniowe
- Składnia skróconej funkcji strzałkowej z jednym parametrem:
  ```javascript
  const nazwaFunkcji = parametr => wyrazenieZwracane;
  ```
- Pamiętaj, że w przypadku braku nawiasów klamrowych `{}` nie wolno pisać słowa `return`.
