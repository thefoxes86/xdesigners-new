import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  HomeComponent,
  UnioneComponent,
  ContattiComponent,
  ConosciamociComponent,
  PortfolioComponent,
} from "./utils/loadComponent";
import Layout from "./pages/_base/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { overmind } from "./context/overmind";
import { config } from "./context/overmind";
import { Provider } from "overmind-react";

const client = new ApolloClient({
  uri: "https://xdesigners.it/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
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
