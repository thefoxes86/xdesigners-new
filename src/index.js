import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Unione from "./pages/Unione";
import Conosciamoci from "./pages/Conosciamoci";
import Contatti from "./pages/Contatti";
import Portfolio from "./pages/Portfolio";
import {
  HomeComponent,
  UnioneComponent,
  ContattiComponent,
  ConosciamociComponent,
  PortfolioComponent,
} from "./utils/loadComponent";
import Layout from "./pages/_base/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { overmind } from "./context/overmind";
import { config } from "./context/overmind";
import MyRoute from "./utils/MyRoute";
import { Provider } from "overmind-react";
import Loading from "./components/Loading";

const routes = [
  {
    path: "/",
    component: <Home />,
    setIndex: true,
  },
  {
    path: "unione",
    component: <Unione />,
    setIndex: false,
  },
  {
    path: "portfolio",
    component: <Portfolio />,
    setIndex: false,
  },
  {
    path: "conosciamoci",
    component: <Conosciamoci />,
    setIndex: false,
  },
  {
    path: "contatti",
    component: <Contatti />,
    setIndex: false,
  },
];

const client = new ApolloClient({
  uri: "https://xdesigners.it/graphql",
  cache: new InMemoryCache(),
});
console.log("routes", routes);

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/* {routes.map(({ path, component, setIndex }, index) => (
                <Route key={path} path={path}>
                  {component}
                </Route>
              ))} */}
              <Route key={1} path="/" index element={<HomeComponent />} />

              <Route key={2} path="unione" element={<UnioneComponent />} />

              <Route
                key={3}
                path="portfolio"
                element={<PortfolioComponent />}
              />

              <Route
                key={4}
                path="conosciamoci"
                element={<ConosciamociComponent />}
              />

              <Route key={5} path="contatti" element={<ContattiComponent />} />
              <Route path="*" element={<div>Not found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
