import "./scss/style.scss";
import Loader from "./components/Loader";
import React, { Suspense } from "react";
import MagnetMouse from "magnet-mouse";
import { useEffect } from "react";

const BlockFlower = React.lazy(() => import("./components/BlockFlower"));
const Text = React.lazy(() => import("./components/Text"));
const ScrollSquare = React.lazy(() => import("./components/ScrollSquare"));

function App() {
  return (
    <div className="app__grid_area">
      <Suspense fallback={Loader}>
        <BlockFlower
          name="primula"
          title="la primula"
          image="images/primula.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
          id augue pharetra cursus vitae et odio. Suspendisse iaculis augue quis
          diam porttitor vehicula. Maecenas vitae ante et arcu aliquam
          scelerisque. Nunc condimentum nec massa ut feugiat. Suspendisse velit
          ante, rutrum quis ipsum ac, egestas lacinia mauris. Ut sit amet velit
          porta, ultrices massa sit amet, malesuada eros. Donec eget egestas
          dui."
          link=""
        />
        <BlockFlower
          name="ulivo"
          title="l'ulivo"
          image="images/ulivo.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
          id augue pharetra cursus vitae et odio. Suspendisse iaculis augue quis
          diam porttitor vehicula. Maecenas vitae ante et arcu aliquam
          scelerisque. Nunc condimentum nec massa ut feugiat. Suspendisse velit
          ante, rutrum quis ipsum ac, egestas lacinia mauris. Ut sit amet velit
          porta, ultrices massa sit amet, malesuada eros. Donec eget egestas
          dui."
          link=""
        />
        <BlockFlower
          title="il tarassaco"
          name="tarassaco"
          image="images/tarassaco.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
          id augue pharetra cursus vitae et odio. Suspendisse iaculis augue quis
          diam porttitor vehicula. Maecenas vitae ante et arcu aliquam
          scelerisque. Nunc condimentum nec massa ut feugiat. Suspendisse velit
          ante, rutrum quis ipsum ac, egestas lacinia mauris. Ut sit amet velit
          porta, ultrices massa sit amet, malesuada eros. Donec eget egestas
          dui."
          link=""
        />
        <BlockFlower
          title="l'edera"
          name="edera"
          image="images/edera.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
          id augue pharetra cursus vitae et odio. Suspendisse iaculis augue quis
          diam porttitor vehicula. Maecenas vitae ante et arcu aliquam
          scelerisque. Nunc condimentum nec massa ut feugiat. Suspendisse velit
          ante, rutrum quis ipsum ac, egestas lacinia mauris. Ut sit amet velit
          porta, ultrices massa sit amet, malesuada eros. Donec eget egestas
          dui."
          link=""
        />

        <BlockFlower
          title="il giglio"
          name="giglio"
          image="images/giglio.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
          id augue pharetra cursus vitae et odio. Suspendisse iaculis augue quis
          diam porttitor vehicula. Maecenas vitae ante et arcu aliquam
          scelerisque. Nunc condimentum nec massa ut feugiat. Suspendisse velit
          ante, rutrum quis ipsum ac, egestas lacinia mauris. Ut sit amet velit
          porta, ultrices massa sit amet, malesuada eros. Donec eget egestas
          dui."
          link=""
        />

        <Text />

        <ScrollSquare />
      </Suspense>
    </div>
  );
}

export default App;
