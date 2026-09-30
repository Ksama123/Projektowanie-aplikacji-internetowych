# Teoria: formularz — szkielet i pola tekstowe

Formularz zbiera dane (zapis na zajęcia, logowanie). **W tym dziale:** `form`, etykieta, `text` / `email` / `password`, przycisk. Reszta pól (`textarea`, `select`, radio, checkbox, data, plik, `required`) — [`07_formularze_pola`](../07_formularze_pola/).

Nie ma tu PHP. `action="#"` i `method="post"` — strona się przeładuje; na egzaminie bywa `action="kontakt.php"` (plik backendu **nie** piszesz).

Bez CSS (wygląd pól: [`css/08_formularze`](../../css/08_formularze/), semestr 2).

---

## 1. `<form>`

```html
<form action="#" method="post">
  <!-- pola -->
</form>
```

| Atrybut | Po co |
| ------- | ----- |
| `action` | dokąd iść po wysłaniu; tu `"#"` |
| `method` | `post` — dane nie w pasku adresu (logowanie, zapis); `get` — widać w URL (wyszukiwarka) |

Na zajęciach zwykle **`post`**.

---

## 2. Etykieta i pole

Klik w tekst etykiety ustawia kursor w polu, gdy `for` = `id`:

```html
<p>
  <label for="imie">Imię</label>
  <input type="text" id="imie" name="imie" />
</p>
```

Bez pary `for` / `id` etykieta jest tylko napisem.

---

## 3. `name` — to idzie „na serwer”

Przeglądarka wysyła pary **nazwa = wartość**. Bez `name` pole **nie wchodzi** do wysyłki (nawet gdy widać je na stronie).

`id` służy etykiecie i kotwicy. `name` służy danym. Często są takie same (`id="email"` i `name="email"`), ale to dwa atrybuty.

---

## 4. Typy w tym dziale

| `type` | Zachowanie |
| ------ | ---------- |
| `text` | zwykły wiersz (imię, login) |
| `email` | klawiatura z `@`; przeglądarka lubi adres z małpą |
| `password` | znaki ukryte |

Inne `type` (`number`, `date`, `file` …) — dział 07.

---

## 5. Przycisk

```html
<p>
  <button type="submit">Wyślij</button>
</p>
```

`type="submit"` wysyła formularz. Samo `<button>` w formularzu też bywa submit — i tak dopisuj `type="submit"`, żeby nic nie zgadywać.

Na zajęciach w zestawach punktowanych zostajesz przy **`button`**. Alternatywa (bywa na zadaniu extra):

```html
<input type="submit" value="Wyślij" />
```

Tu etykieta przycisku jest w atrybucie `value`, a nie między znacznikami. Nie myl z `type="button"` (nie wysyła formularza).

**Po co to jest.** Jednoznaczne „wyślij” bez zgadywania domyślnego zachowania przycisku.

**Typowa pomyłka.** `<button>` bez `type` obok innego przycisku w formularzu — przeglądarka może potraktować oba jako submit. Albo `input type="submit"` bez `value` — na przycisku widać domyślny tekst przeglądarki.

---

## 6. Checklist

- Jest `<form action="#" method="post">`.
- Każde pole tekstowe: `label` + `for`/`id` + `name`.
- Przycisk `type="submit"`.
- Szkielet strony: `header` / `main` / `footer`, UTF-8, autor, `title`.
- Bez `required`, bez `textarea`, bez radio — to 07.
