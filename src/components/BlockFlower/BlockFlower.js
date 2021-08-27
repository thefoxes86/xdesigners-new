import "./blockflower.scss";
import MagnetMouse from "magnet-mouse";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlockFlower(props) {
  useEffect(() => {
    let mm = new MagnetMouse({
      magnet: {
        element: ".magnet",
      },
    });

    mm.init();
  }, []);
  return (
    <>
      <div className={`${props.name}__block block__generic`}>
        <h2>{props.title}</h2>

        <LazyLoadImage src={props.image} effect="blur" />

        <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
        <button
          className={`button__service button__service_${props.name} magnet`}
        >
          È il servizio che cerco !
        </button>
        <p
          className={`citation citation__${props.name}`}
          dangerouslySetInnerHTML={{ __html: props.citation }}
        ></p>
      </div>
    </>
  );
}

export default BlockFlower;
