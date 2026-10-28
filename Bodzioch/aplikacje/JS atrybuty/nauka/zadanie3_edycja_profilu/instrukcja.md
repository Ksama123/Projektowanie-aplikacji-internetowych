# Zadanie 3: `disabled` na polach profilu

## Cel

Przycisk `#edit-btn` przełącza wszystkie `input` w `#profile-form` między zablokowanymi a edytowalnymi. Napis na przycisku nadąża za stanem: „Edytuj Dane” albo „Zapisz Zmiany”.

## Przydatne

- Pola zbierasz przez `querySelectorAll("#profile-form input")` i przechodzisz pętlą.
- `toggleAttribute("disabled")` przełącza atrybut. Możesz też sprawdzić `hasAttribute` i potem `setAttribute` albo `removeAttribute`.
- Tekst przycisku zmieniasz przez `przycisk.textContent`.

## Wymagania

1. Na starcie trzy pola (imię, nazwisko, e-mail) są nieedytowalne.
2. Pierwszy klik odblokowuje wszystkie trzy. Drugi znowu je blokuje.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Edytuj Dane”. Da się wpisać w pole Imię. Napis przycisku zmienia się na „Zapisz Zmiany”. Kliknij ponownie. Pola znowu są szare, tylko do odczytu.
