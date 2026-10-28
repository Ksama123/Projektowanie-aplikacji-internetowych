# Zadanie 1: odczyt `classList`

## Cel

W szablonie jest już pudełko `#magicBox` z kilkoma klasami w HTML (`box`, `shadow`, `rounded`, `gradient`, `border-thick`) oraz przycisk `#btnCheck` o napisie „Pokaż klasy”. Akapit `#result` na starcie pokazuje wielokropek. Twoja praca jest w `skrypt.js`. Po kliknięciu przycisku w `#result` ma pojawić się liczba klas pudełka oraz ich nazwy.

## Przydatne

- `classList.length` mówi, ile klas ma element. `classList.value` zwraca te nazwy jako jeden tekst, taki jak w atrybucie `class`.
- Nazwy możesz też złożyć z listy, na przykład przez `[...box.classList].join(", ")`.
- Nasłuchujesz zdarzenia `"click"` na przycisku. Na stronę wypisujesz przez `textContent`.
- Wynik ma się pojawić dopiero po kliknięciu, a nie od razu po wczytaniu strony.

## Wymagania

1. Komunikat w `#result` pojawia się po kliknięciu „Pokaż klasy”, a nie od razu po otwarciu strony.
2. W komunikacie widać liczbę klas oraz listę ich nazw.
3. Pudełko `#magicBox` ma już kilka klas w HTML — odczytujesz je, nie dopisujesz nowych.

## Przykład

Kliknij „Pokaż klasy”. Pod przyciskiem pojawia się tekst w stylu „Liczba klas: 5. Lista klas: box shadow rounded gradient border-thick”. Nazwy mogą być rozdzielone spacją albo przecinkiem.
