# Teoria: pozostałe pola formularza

Znasz szkielet z [`06_formularze`](../06_formularze/): `form`, `label`, `text` / `email` / `password`, przycisk. Teraz **inne kontrolki** i prosta walidacja przeglądarki.

Bez CSS. Bez PHP (`action="#"`). `pattern` (regex) pomijamy — za łatwo się pomylić na arkuszu.

---

## 1. `textarea` — dłuższy tekst

Nie ma `type`. Treść **między** znacznikami, nie w `value`.

```html
<label for="wiadomosc">Wiadomość</label>
<textarea id="wiadomosc" name="wiadomosc" rows="5" cols="40"></textarea>
```

`rows` / `cols` — podpowiedź rozmiaru (bez CSS).

---

## 2. `checkbox` — tak / nie (można wiele)

```html
<input type="checkbox" id="zgoda" name="zgoda" value="tak" />
<label for="zgoda">Zgoda na kontakt mailowy</label>
```

Kilka checkboxów = **różne** `name` (albo `name="zainteresowania"` z różnymi `value`, gdy backend tak chce). Na zajęciach: osobne `name`.

`checked` — zaznaczone od razu.

---

## 3. `radio` — dokładnie jedna z grupy

Ten sam **`name`**, różne `id` i `value`:

```html
<p>Zmiana:</p>
<p>
  <input type="radio" id="r1" name="zmiana" value="pierwsza" />
  <label for="r1">Pierwsza</label>
</p>
<p>
  <input type="radio" id="r2" name="zmiana" value="druga" />
  <label for="r2">Druga</label>
</p>
```

Inny `name` = inna grupa (można zaznaczyć po jednej w każdej).

---

## 4. `select` — lista rozwijana

```html
<label for="sala">Sala</label>
<select id="sala" name="sala">
  <option value="12">12</option>
  <option value="4">4</option>
</select>
```

`value` idzie przy wysyłce; tekst między `<option>` widać na liście. `selected` — opcja domyślna.

---

## 5. Inne `type`

| Typ | Po co |
| --- | ----- |
| `number` | liczba; `min`, `max`, `step` |
| `date` | kalendarz (dzień) |
| `time` | godzina |
| `tel` / `url` | telefon / adres strony (klawiatura, lekka kontrola) |
| `file` | wybór pliku z dysku; często z `accept` |
| `range` / `color` | suwak / kolor — rzadziej na arkuszu |

```html
<label for="osoby">Liczba osób</label>
<input type="number" id="osoby" name="osoby" min="1" max="10" />
```

Godzina (`time`) — ten sam schemat co inne pola z `label` / `id` / `name`:

```html
<label for="start">Godzina rozpoczęcia</label>
<input type="time" id="start" name="start" />
```

Plik z dysku — `accept` ogranicza typy w oknie wyboru (przeglądarka podpowiada; to nie zastępuje kontroli na serwerze):

```html
<label for="zdjecie">Zdjęcie (JPG lub PNG)</label>
<input type="file" id="zdjecie" name="zdjecie" accept=".jpg,.png" />
```

**Po co to jest.** Właściwy `type` daje lepszą klawiaturę na telefonie i prostą kontrolę po stronie przeglądarki zanim dane pójdą dalej.

**Typowa pomyłka.** `type="text"` na datę albo godzinę „bo tak działa”. Albo `file` bez `name` — plik nie wejdzie do wysyłki. Albo `accept` z typami MIME zapisany byle jak, gdy polecenie podaje rozszerzenia `.jpg,.png`.

---

## 6. `required`, `placeholder`, długość tekstu

```html
<input type="email" id="email" name="email" required placeholder="np. jan@szkola.pl" />
```

- `required` — nie wyślesz pustego (komunikat przeglądarki).
- `placeholder` — szary przykład **w** polu; nie zastępuje `label`.

`minlength` / `maxlength` — minimalna / maksymalna długość tekstu (np. hasło). Na `number` / `date` / `time` używasz `min` / `max`, nie `minlength`.

```html
<label for="haslo">Hasło (min. 8 znaków)</label>
<input type="password" id="haslo" name="haslo" minlength="8" required />
```

**Po co to jest.** Uczeń / użytkownik od razu wie, że pole jest obowiązkowe albo że hasło jest za krótkie — zanim „wyślesz w próżnię”.

**Typowa pomyłka.** Sam `placeholder` zamiast `label`. Albo `minlength` na `type="number"`. Albo `required` na polu, które w poleceniu ma być opcjonalne.

---

## 7. Checklist

- Radio: **jeden** `name` w grupie.
- Checkbox i radio też mają `id` + `label`.
- `textarea` ma znacznik zamykający.
- `required` na polach, które naprawdę muszą być.
- `placeholder` nie jest etykietą.
- `file`: `name` + ewentualnie `accept`; `time` / `number` jak inne pola z `label`.
- `minlength` tylko na polach tekstowych (np. `password`), nie na `number`.
