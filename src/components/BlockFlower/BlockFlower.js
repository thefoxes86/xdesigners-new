import "./blockflower.scss";
import { useState } from "react";
import MagnetMouse from "magnet-mouse";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimateSharedLayout, motion } from "framer-motion";
import Form from "../Form";

function BlockFlower(props) {
  const [selectedForm, setSelectedForm] = useState(false);
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
      <AnimateSharedLayout type="crossfade">
        <motion.div
          layoutId="boxForm"
          className={`${props.name}__block block__generic`}
        >
          <h2>{props.title}</h2>

          <LazyLoadImage src={props.image} effect="blur" />

          <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
          <button
            onClick={() => setSelectedForm(true)}
            className={`button__service button__service_${props.name} magnet`}
          >
            È il servizio che cerco !
          </button>
          <p
            className={`citation citation__${props.name}`}
            dangerouslySetInnerHTML={{ __html: props.citation }}
          ></p>
        </motion.div>
        {selectedForm && (
          <Form
            name={props.name}
            selected={selectedForm}
            onClick={() => setSelectedForm(false)}
          />
        )}
      </AnimateSharedLayout>
    </>
  );
}

export default BlockFlower;
