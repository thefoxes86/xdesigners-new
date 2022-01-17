import Loadable from "react-loadable";
import Loading from "../components/Loading";

const HomeComponent = Loadable({
  loader: () => import("../pages/Home"),
  loading: Loading,
});

const UnioneComponent = Loadable({
  loader: () => import("../pages/Unione"),
  loading: Loading,
});

const PortfolioComponent = Loadable({
  loader: () => import("../pages/Portfolio"),
  loading: Loading,
});

const ContattiComponent = Loadable({
  loader: () => import("../pages/Contatti"),
  loading: Loading,
});

const ConosciamociComponent = Loadable({
  loader: () => import("../pages/Conosciamoci"),
  loading: Loading,
});

export {
  HomeComponent,
  UnioneComponent,
  PortfolioComponent,
  ConosciamociComponent,
  ContattiComponent,
};
