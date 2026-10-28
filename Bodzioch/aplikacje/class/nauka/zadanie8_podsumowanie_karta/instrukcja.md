# Zadanie 8: Podsumowanie — karta ogłoszenia

## Cel

Szablon ma kartę ogłoszenia `#karta` (Rower miejski), akapit `#status` z tekstem „Status: zwykła” oraz trzy przyciski: `#wyroznij` („Wyróżnij”), `#ukryj` („Ukryj / pokaż”) i `#reset` („Reset”). Twoja praca jest w `skrypt.js`. Przycisk wyróżnienia dodaje klasę `featured` do karty. Przycisk ukrycia przełącza klasę `hidden`. Reset zdejmuje obie klasy. W `#status` ma być widać, czy karta jest wyróżniona.

W stopce zostawiasz „Imię Nazwisko klasa”.

## Przydatne

- Masz trzy przyciski i trzy metody: `add`, `toggle` i `remove`.
- `contains("featured")` służy do komunikatu w `#status`, a nie zamiast `toggle` przy ukrywaniu.
- W CSS `.featured` daje złotą ramkę, a `.hidden` chowa element (`display: none`).

## Wymagania

1. Po „Wyróżnij” karta ma klasę `featured` i widać złote wyróżnienie z CSS.
2. „Ukryj / pokaż” chowa albo pokazuje kartę klasą `hidden`.
3. „Reset” zdejmuje `featured` i `hidden`, więc karta wraca do zwykłego, widocznego stanu.
4. Tekst w `#status` zgadza się ze stanem karty.

## Przykład

Kliknij „Wyróżnij”. Karta dostaje złotą ramkę, a pod spodem widać „Status: wyróżniona”. Kliknij „Ukryj / pokaż”: karta znika ze strony. Kliknij „Reset”: karta znowu jest widoczna, bez złotej ramki, a status wraca do „Status: zwykła”.
