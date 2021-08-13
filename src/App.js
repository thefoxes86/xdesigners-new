import "./scss/style.scss";
import BlockFlower from "./components/BlockFlower";

function App() {
  return (
    <div className="app__grid_area">
      <BlockFlower
        classprop="primula__block block__generic"
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
        classprop="ulivo__block block__generic"
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
        classprop="tarassaco__block block__generic"
        title="il tarassaco"
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
        classprop="edera__block block__generic"
        title="l'edera"
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
        classprop="giglio__block block__generic"
        title="il giglio"
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

      <div className="text__block block__generic"></div>

      <div className="scroll__block block__generic"></div>
    </div>
  );
}

export default App;
