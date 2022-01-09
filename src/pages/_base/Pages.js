import loadComponent from "../../utils/loadComponent";

const Home = loadComponent({
  loader: () => import("../Home.js"),
});

const Conosciamoci = loadComponent({
  loader: () => import("../Conosciamoci.js"),
});

const Contatti = loadComponent({
  loader: () => import("../Contatti.js"),
});

const Portfolio = loadComponent({
  loader: () => import("./Portfolio.js"),
});

const Unione = loadComponent({
  loader: () => import("./Unione.js"),
});

export { Home, Portfolio, Contatti, Conosciamoci, Unione };
