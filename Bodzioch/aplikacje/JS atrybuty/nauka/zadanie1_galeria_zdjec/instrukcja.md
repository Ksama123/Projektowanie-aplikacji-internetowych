# Zadanie 1: `data-src` — galeria

## Cel

Trzy przyciski `.btn` (Niebieski, Zielony, Czerwony) mają atrybut `data-src` z adresem obrazka. Klik ustawia `src` dużego zdjęcia `#main-image` na adres z klikniętego przycisku.

## Przydatne

- Przycisków jest kilka, więc nasłuch `"click"` dodajesz na każdym.
- Adres bierzesz z atrybutu: `przycisk.getAttribute("data-src")` albo `przycisk.dataset.src`.
- Nowy adres wstawiasz przez `obraz.setAttribute("src", adres)` albo `obraz.src = adres`.

## Wymagania

1. Każdy z trzech przycisków pokazuje inny obraz.
2. Adres bierzesz z atrybutu, nie wpisujesz URL na sztywno w `if`.
3. W stopce i w `meta author` zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Zielony”. Duży obrazek na górze zmienia się na zielony placehold z napisem „Zielony”. Kliknij „Czerwony”. Główne zdjęcie znowu się podmienia.
