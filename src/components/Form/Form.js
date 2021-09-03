import "./form.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

function Form({ name, selected }) {
  return (
    <>
      {selected && (
        <motion.div
          layoutId="boxForm"
          initial={false}
          animate={{ height: "100%" }}
          transition={spring}
          className={`${name}__form form__generic`}
        ></motion.div>
      )}
    </>
  );
}

export default Form;
