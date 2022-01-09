import Loadable from "react-loadable";
import Loading from "../components/Loading";

const HomeComponent = Loadable({
  loader: () => import("../pages/Home"),
  loading: Loading,
  delay: 3000,
});

const UnioneComponent = Loadable({
  loader: () => import("../pages/Unione"),
  loading: Loading,
  delay: 3000,
});

const PortfolioComponent = Loadable({
  loader: () => import("../pages/Portfolio"),
  loading: Loading,
  delay: 3000,
});

const ContattiComponent = Loadable({
  loader: () => import("../pages/Contatti"),
  loading: Loading,
  delay: 3000,
});

const ConosciamociComponent = Loadable({
  delay: 10000,
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
