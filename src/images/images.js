import einstein from "./Albert-Einstein_bassa.jpeg";
import munari from "./Bruno-Munari_bassa-1.jpeg";
import arbus from "./Diane-Arbus_bassa.jpeg";
import morricone from "./Ennio-Morricone_bassa.jpeg";
import coppola from "./Francis-Ford-Coppola_bassa-2.jpeg";
import proust from "./Marcel-Proust_bassa.jpeg";
import abramovich from "./Marina-Abramovic_bassa.jpeg";
import picasso from "./Pablo-picasso_bassa.jpeg";
import capa from "./Robert-Capa_bassa.jpeg";
import freud from "./Sigmund-Freud_bassa.jpeg";

import thum1 from "./thum1.jpeg";
import thum2 from "./thum2.jpeg";
import thum3 from "./thum3.jpeg";
import thum4 from "./thum4.jpeg";
import thum5 from "./thum5.jpeg";
import thum6 from "./thum6.jpeg";

import * as THREE from "three";

let coreImages = [
  {
    img: arbus,
    name: "Diane Arbus",
    text: "“Credo davvero che ci siano cose che nessuno riesce a vedere prima che vengano fotografate.“",
    selected: false,
  },
  {
    img: munari,
    name: "Bruno Munari",
    text: "“Quando qualcuno dice:questo lo so fare anch’io,vuol dire che lo sa rifarealtrimenti lo avrebbe già fatto prima.”",
    selected: false,
  },
  {
    img: einstein,
    name: "Albert Einstein",
    text: "“La creatività è contagiosa.Trasmettila”",
    selected: false,
  },
  {
    img: morricone,
    name: "Ennio Morricone",
    text: "“Nell’amore come nell’artela costanza è tutto.Non so se esistanoil colpo di fulmine,o l’intuizione soprannaturale.So che esistono la tenuta,la coerenza, la serietà, la durata”",
    selected: false,
  },
  {
    img: coppola,
    name: "Francis Ford Coppola",
    text: "“Un elemento essenzialedell’arte è il rischio.Se non rischicome potrai creare qualcosadi autenticamente belloche non è mai stato visto prima?”",
    selected: false,
  },
  {
    img: proust,
    name: "Marcel Proust",
    text: "“Il mondo non è stato creatouna volta, ma tutte le volte cheè sopravvenuto un artista originale.”",
    selected: false,
  },
  {
    img: abramovich,
    name: "Marina Abramović",
    text: "“Il mio motto è “fallo e basta!”.Credo sia anche un modoper ispirare e incoraggiare gli altri,specialmente le donne.”",
    selected: false,
  },
  {
    img: picasso,
    name: "Pablo Picasso",
    text: "“Gli altri hanno visto quello che c’è già e si si sono chiesti perché.Io ho visto ciò che potrebbe esseree mi sono chiesto perché no.”",
    selected: false,
  },
  {
    img: capa,
    name: "Robert Capa",
    text: "“Le immagini sono lì, basta catturarle”",
    selected: false,
  },
  {
    img: freud,
    name: "Sigmund Freud",
    text: "“La creatività è un tentativo di risolvere un conflitto generato da pulsioni istintive biologiche non scaricate, perciò i desideri insoddisfatti sono la forza motrice della fantasia ed alimentano i sogni notturni e quelli a occhi aperti.”",
    selected: false,
  },
];

const portfolioImages = [
  {
    img: new THREE.TextureLoader().load(thum1),
  },
  {
    img: new THREE.TextureLoader().load(thum2),
  },
  {
    img: new THREE.TextureLoader().load(thum3),
  },
  {
    img: new THREE.TextureLoader().load(thum4),
  },
  {
    img: new THREE.TextureLoader().load(thum5),
  },
  {
    img: new THREE.TextureLoader().load(thum6),
  },
];

export { coreImages, portfolioImages };
