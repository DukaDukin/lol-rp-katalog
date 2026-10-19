
const katalog = document.getElementById("katalog");
const brojZapisa = document.getElementById("broj-zapisa");
const praznoStanje = document.getElementById("prazno-stanje");
const filter = document.getElementById("filter");
const sortiranje = document.getElementById("sortiranje");

function izradiKarticu(paket) {
    const kartica = document.createElement("article");
    kartica.classList.add("kartica");
    kartica.dataset.id = paket.id;

    if (paket.vrijednost >= 30) {
        kartica.classList.add("istaknuto");
    }

    const slika = document.createElement("img");
    slika.src = paket.slika;
    slika.alt = paket.naziv;
    slika.loading = "lazy";

    const naslov = document.createElement("h2");
    naslov.textContent = paket.naziv;

    const cijena = document.createElement("p");
    cijena.classList.add("cijena");
    cijena.textContent = paket.vrijednost.toLocaleString("hr-HR", {
        style: "currency",
        currency: "EUR"
    });

    const poveznica = document.createElement("a");
    poveznica.href = paket.poveznica;
    poveznica.textContent = "Više";
    poveznica.target = "_blank";
    poveznica.rel = "noopener noreferrer";

    kartica.append(slika, naslov, cijena, poveznica);

    return kartica;
}

function prikaziKatalog(zapisi) {
    katalog.replaceChildren();

    brojZapisa.textContent = paketi.length;

    praznoStanje.hidden = zapisi.length !== 0;

    zapisi.forEach(function (paket) {
        katalog.appendChild(izradiKarticu(paket));
    });
}

function osvjeziKatalog() {
    let filtriraniPaketi = [...paketi];

    if (filter.value !== "Sve") {
        filtriraniPaketi = filtriraniPaketi.filter(function (paket) {
            return paket.kategorija === filter.value;
        });
    }

    if (sortiranje.value === "naziv") {
        filtriraniPaketi.sort(function (a, b) {
            return a.naziv.localeCompare(b.naziv, "hr");
        });
    } else if (sortiranje.value === "cijena-rastuce") {
        filtriraniPaketi.sort(function (a, b) {
            return a.vrijednost - b.vrijednost;
        });
    } else if (sortiranje.value === "cijena-silazno") {
        filtriraniPaketi.sort(function (a, b) {
            return b.vrijednost - a.vrijednost;
        });
    }

    prikaziKatalog(filtriraniPaketi);
}

filter.addEventListener("change", osvjeziKatalog);
sortiranje.addEventListener("change", osvjeziKatalog);

osvjeziKatalog();
