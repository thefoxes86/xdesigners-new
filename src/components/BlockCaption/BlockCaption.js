import "./BlockCaption.scss";
import { useActions, useAppState } from "../../context/overmind";
import { useState } from "react";

const BlockCaption = ({ images }) => {
  const [hovered, setHovered] = useState({ state: false, index: "" });
  const actions = useActions();
  const state = useAppState();

  return (
    <>
      {images &&
        images.map(({ img, name, text }, index) => (
          <>
            {hovered.state === false ? (
              <div
                key={index}
                className={`block__caption block__caption_${index + 1}`}
                // style={{
                //   opacity: state.activeHoveredMouse.hovered ? 1 : 0,
                // }}
                onMouseEnter={() => {
                  actions.activeHoveredObject([true, name, img, text, index]);
                  setHovered({ state: true, index: index });
                }}
                onMouseLeave={() => {
                  actions.activeHoveredObject([false, "", "", "", ""]);
                  setHovered({ state: false, index: "" });
                }}
              >
                {!hovered.state ? <p>[{name}]</p> : <p>{text}</p>}
                <span></span>
              </div>
            ) : (
              <>
                {hovered.index === index && (
                  <div
                    key={index}
                    className={`block__caption block__caption_${index + 1}`}
                    // style={{
                    //   opacity: state.activeHoveredMouse.hovered ? 1 : 0,
                    // }}
                    onMouseEnter={() => {
                      actions.activeHoveredObject([
                        true,
                        name,
                        img,
                        text,
                        index,
                      ]);
                      setHovered({ state: true, index: index });
                    }}
                    onMouseLeave={() => {
                      actions.activeHoveredObject([false, "", "", "", ""]);
                      setHovered({ state: false, index: "" });
                    }}
                  >
                    {!hovered.state ? <p>[{name}]</p> : <p>{text}</p>}
                    <span></span>
                  </div>
                )}
              </>
            )}
          </>
        ))}
    </>
  );
};
export default BlockCaption;
