# Ćwiczenia Pomocnicze - CSS Flexbox

## Ćwiczenie 1: Podstawy Flexbox

### Zadanie:
Stwórz prosty kontener z 3 elementami ułożonymi obok siebie.

### Kod początkowy:
```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div>
```

### Rozwiązanie:
```css
.container {
    display: flex;
}

.box {
    padding: 20px;
    background-color: #4a90e2;
    margin: 10px;
}
```

---

## Ćwiczenie 2: Flex-wrap

### Zadanie:
Stwórz kontener z wieloma elementami, które przechodzą do nowej linii gdy brakuje miejsca.

### Rozwiązanie:
```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

---

## Ćwiczenie 3: Flex-direction

### Zadanie:
Ułóż elementy pionowo zamiast poziomo.

### Rozwiązanie:
```css
.container {
    display: flex;
    flex-direction: column;
}
```

---

## Ćwiczenie 4: Justify-content

### Zadanie:
Wyrównaj elementy w kontenerze:
- Na początku
- Na końcu
- Wyśrodkowane
- Z równymi odstępami

### Rozwiązanie:
```css
/* Na początku */
.container {
    display: flex;
    justify-content: flex-start;
}

/* Na końcu */
.container {
    display: flex;
    justify-content: flex-end;
}

/* Wyśrodkowane */
.container {
    display: flex;
    justify-content: center;
}

/* Z równymi odstępami */
.container {
    display: flex;
    justify-content: space-between;
}
```

---

## Ćwiczenie 5: Align-items

### Zadanie:
Wyrównaj elementy wzdłuż osi prostopadłej:
- Na górze
- Na dole
- Wyśrodkowane
- Rozciągnięte

### Rozwiązanie:
```css
.container {
    display: flex;
    align-items: flex-start;  /* Na górze */
    align-items: flex-end;    /* Na dole */
    align-items: center;      /* Wyśrodkowane */
    align-items: stretch;     /* Rozciągnięte */
}
```

---

## Ćwiczenie 6: Flex-basis i Flex

### Zadanie:
Kontroluj rozmiary elementów:
- Element 1: 200px szerokości
- Element 2: zajmuje pozostałą przestrzeń
- Element 3: 150px szerokości

### Rozwiązanie:
```css
.container {
    display: flex;
}

.item1 {
    flex-basis: 200px;
}

.item2 {
    flex: 1;  /* Zajmuje pozostałą przestrzeń */
}

.item3 {
    flex-basis: 150px;
}
```

---

## Ćwiczenie 7: Order

### Zadanie:
Zmień kolejność wyświetlania elementów bez zmiany HTML.

### HTML:
```html
<div class="container">
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
    <div class="box3">Box 3</div>
</div>
```

### Rozwiązanie (wyświetl: Box 3, Box 1, Box 2):
```css
.container {
    display: flex;
}

.box1 {
    order: 2;
}

.box2 {
    order: 3;
}

.box3 {
    order: 1;
}
```

---

## Ćwiczenie 8: Kompleksowy układ

### Zadanie:
Stwórz układ strony z headerem, nav, main i footerem.

### Rozwiązanie:
```css
.container {
    display: flex;
    flex-wrap: wrap;
}

header {
    flex-basis: 100%;
    order: 1;
    height: 100px;
}

nav {
    flex-basis: 100%;
    order: 2;
    height: 60px;
}

main {
    flex: 1 1 70%;
    order: 3;
}

aside {
    flex: 1 1 30%;
    order: 4;
}

footer {
    flex-basis: 100%;
    order: 5;
    height: 100px;
}
```

---

## Najczęstsze błędy i jak ich unikać

### Błąd 1: Elementy nie układają się obok siebie
**Problem:** Brak `display: flex`  
**Rozwiązanie:** Dodaj `display: flex` do kontenera

### Błąd 2: Elementy nie przechodzą do nowej linii
**Problem:** Brak `flex-wrap: wrap`  
**Rozwiązanie:** Dodaj `flex-wrap: wrap` do kontenera

### Błąd 3: Niepoprawne proporcje
**Problem:** Użycie `width` zamiast `flex-basis` w kontenerze flex  
**Rozwiązanie:** Użyj `flex-basis` lub `flex: 1 1 X%`

### Błąd 4: Order nie działa
**Problem:** Elementy nie są dziećmi kontenera flex  
**Rozwiązanie:** Upewnij się, że elementy są bezpośrednimi dziećmi kontenera z `display: flex`

---

## Przydatne właściwości Flexbox - szybka ściąga

| Właściwość | Opis | Przykład |
|------------|------|----------|
| `display: flex` | Tworzy kontener flex | `display: flex;` |
| `flex-direction` | Kierunek układu | `flex-direction: row;` (domyślnie) |
| `flex-wrap` | Zawijanie elementów | `flex-wrap: wrap;` |
| `justify-content` | Wyrównanie wzdłuż osi głównej | `justify-content: center;` |
| `align-items` | Wyrównanie wzdłuż osi prostopadłej | `align-items: center;` |
| `flex-basis` | Podstawowy rozmiar elementu | `flex-basis: 200px;` |
| `flex-grow` | Współczynnik wzrostu | `flex-grow: 1;` |
| `flex-shrink` | Współczynnik kurczenia | `flex-shrink: 1;` |
| `flex` | Skrót (grow shrink basis) | `flex: 1 1 200px;` |
| `order` | Kolejność wyświetlania | `order: 2;` |

---

## Wartości justify-content

- `flex-start` - elementy na początku
- `flex-end` - elementy na końcu
- `center` - elementy wyśrodkowane
- `space-between` - równy odstęp między elementami
- `space-around` - równy odstęp wokół elementów
- `space-evenly` - równy odstęp wszędzie

## Wartości align-items

- `flex-start` - elementy na górze
- `flex-end` - elementy na dole
- `center` - elementy wyśrodkowane
- `stretch` - elementy rozciągnięte (domyślnie)
- `baseline` - wyrównanie do linii bazowej tekstu

---

## Ćwiczenie praktyczne - Mini układ strony

### Zadanie:
Stwórz prosty układ strony używając tylko Flexbox.

### Wymagania:
- Header: pełna szerokość, wysokość 80px
- Main: 60% szerokości
- Sidebar: 40% szerokości
- Footer: pełna szerokość, wysokość 60px

### Rozwiązanie:
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Mini układ</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        header {
            flex-basis: 100%;
            height: 80px;
            background-color: #4a90e2;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }

        main {
            flex: 1 1 60%;
            min-height: 400px;
            background-color: #f0f0f0;
            padding: 20px;
        }

        .sidebar {
            flex: 1 1 40%;
            min-height: 400px;
            background-color: #ffd700;
            padding: 20px;
        }

        footer {
            flex-basis: 100%;
            height: 60px;
            background-color: #ff6b6b;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Nagłówek</h1>
        </header>
        <main>
            <h2>Główna treść</h2>
            <p>Treść główna strony...</p>
        </main>
        <aside class="sidebar">
            <h3>Panel boczny</h3>
            <p>Dodatkowe informacje...</p>
        </aside>
        <footer>
            <p>Stopka</p>
        </footer>
    </div>
</body>
</html>
```

---

## Pytania do przemyślenia

1. Kiedy używać `flex-basis`, a kiedy `width`?
2. Jaka jest różnica między `flex: 1 1 200px` a `flex-basis: 200px`?
3. Jak działa właściwość `order`?
4. Co się stanie jeśli użyję `flex-direction: column`?
5. Jak wyrównać elementy zarówno poziomo jak i pionowo?

---

**Powodzenia w nauce Flexbox! 💪**

