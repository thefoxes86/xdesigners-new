import "./scss/style.scss";
import Loader from "./components/Loader";
import React, { Suspense } from "react";

const BlockFlower = React.lazy(() => import("./components/BlockFlower"));
const Text = React.lazy(() => import("./components/Text"));
const ScrollSquare = React.lazy(() => import("./components/ScrollSquare"));

function App() {
  return (
    <div className="app__grid_area">
      <Suspense fallback={<Loader />}>
        <BlockFlower
          name="primula"
          title="la primula"
          image="images/primula.png"
          text="<strong>Dedicato a tutte le start up<br>che stanno germogliando.</strong><br>Alle aziende nuove che<br>ricercano un supporto nel<br>mondo della comunicazione,<br>che hanno bisogno di un logo<br>identificativo e di<br>un'immagine coordinata<br>efficace e professionale."
          link=""
          citation="È la prima rondine venne iersera a dirmi:<br>È prossima la Primavera!<br>Ridon le primule nel prato, gialle,<br>e ho visto, credimi, già le farfalle.<br>Accarezzandola così le ho detto:<br>Sì è tempo, rondine, vola sul tetto!<br>[ Gianni Rodari ]"
        />
        <BlockFlower
          name="ulivo"
          title="l'ulivo"
          image="images/ulivo.png"
          text="<strong>Dedicato a tutte le realtà<br>sempreverdi.<br></strong>Alle imprese che vogliono<br>rinnovare la propria immagine<br>aziendale mantendendo<br>inalterati storia e valori:<br>restyling del logo; nuovo<br>concept per la diffusione<br>della campagna promozionale."
          link=""
          citation="Com'era bello starsene seduti sotto gli ulivi,<br>appagati e felici di essere insieme<br>in quella specie di paradiso terrestre<br>[ Agatha Christie ]"
        />
        <BlockFlower
          title="il tarassaco"
          name="tarassaco"
          image="images/tarassaco.png"
          text="<strong>Dedicato a chi desidera volare.</strong><br>Alle aziende che ancora non<br>sono on-line, oppure a quelle<br>che hanno già un sito web,<br>ma non sono soddisfatte e<br>vogliono migliorarne il design,<br>l'esperienza di navigazione<br>e il posizionamento sui<br>motori di ricerca."
          link=""
          citation="I soffioni sono lì, vaporosi, a decine,<br>aspettando solo che tu li colga e,<br>sbuffandoci sopra, disperda nei campi<br>le leggerissime minuscole piume<br>[ Ippolita Avanzini ]"
        />
        <BlockFlower
          title="l'edera"
          name="edera"
          image="images/edera.png"
          text="<strong>Dedicato a tutte le aziende<br>avvolgenti<br></strong>Alle attività produttive che<br>necessitano di un packaging<br>rinoscibile e accattivante<br>per i loro prodotti. Una<br>confezione particolare,<br>un'etichetta speciale, una<br>scatola identificativa."
          link=""
          citation="Le foglie dell'agrifoglio<br>del vischio e dell'edera<br>riflettevano la luce come<br>tanti piccoli specchi.<br>[ Charles Dickens ]"
        />

        <BlockFlower
          title="il giglio"
          name="giglio"
          image="images/giglio.png"
          text="<strong>Dedicato alle persone che<br>ricercano bellezza e armonia<br></strong>A chiunque desideri una<br>consulenza artistica a tuttotondo:<br>analisi e ricerca strilistica; idee<br>per una nuova tipologia di<br>comunicazione; suggerimenti<br>e supporto per la realizzazione<br>di campagne promozionali."
          link=""
          citation="Ho colto gigli splendidi e profumati,<br>pudicamente chiusi,<br>come una schiera di fanciulle innocenti.<br>Dai tremuli petali, bagnati di rugiada<br>ho bevuto profumo, felicità, pace.<br>[ Anna Achmatova ]"
        />

        <Text />

        <ScrollSquare />
      </Suspense>
    </div>
  );
}

export default App;
