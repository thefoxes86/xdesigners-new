import MeshPortfolio from "../../classes/MeshPortfolio";
import AnimatedCursor from "react-animated-cursor";

const Canvas = () => {
  const classAnimation = new MeshPortfolio();

  classAnimation.init();
  classAnimation.initPost();
  classAnimation.addObjects();
  classAnimation.eventListener();
  classAnimation.animate();

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={48}
        color="0, 0, 0"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={10}
      />
    </>
  );
};

export default Canvas;
