# League of Legends - RP katalog

## Opis projekta

Web stranica prikazuje katalog oglednih paketa Riot Pointsa (RP) za igru League of Legends. Kartice se izrađuju JavaScriptom iz polja objekata u datoteci `js/podaci.js`.

## Svojstva svakog zapisa

- `id` – jedinstveni identifikator
- `naziv` – naziv paketa
- `vrijednost` – ogledna cijena u eurima
- `kategorija` – kategorija paketa
- `slika` – adresa slike
- `poveznica` – poveznica na stranicu s detaljima

## Funkcionalnosti

- Generiranje kartica JavaScriptom
- Filtriranje po kategoriji
- Sortiranje po cijeni
- Brojač prikazanih zapisa
- Poruka za prazno stanje
- Isticanje skupljih paketa pomoću `classList`

## Pokretanje

1. Otvoriti mapu u Visual Studio Codeu.
2. Instalirati proširenje Live Server.
3. Desnom tipkom kliknuti `index.html`.
4. Odabrati **Open with Live Server**.

Budući da se koriste JavaScript moduli (`import` i `export`), projekt pokreni preko lokalnog poslužitelja, a ne izravno preko `file://` adrese.

**Napomena:** Cijene i nazivi paketa su ogledni i nisu službeni cjenik Riota.
