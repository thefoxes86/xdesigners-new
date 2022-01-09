import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import withGlobalFunction from "../../context/withGlobalFunction";
import { ReactSVG } from "react-svg";
import { useActions, useAppState } from "../../context/overmind";
import logo from "../../images/logo.svg";
import { randomProperty } from "../../utils/usefullFunctions";
import coreImages from "../../images/coreImages";
import BlockCaption from "../../components/BlockCaption";
import { overmind } from "../../context/overmind";
import "./Home.scss";

const GET_HOME = gql`
  query home($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
    }
  }
`;

const Home = (props) => {
  const { data, error, loading } = useQuery(GET_HOME, {
    variables: {
      id: 13,
    },
  });
  const [images, setImages] = useState([]);
  const [hoveredCaption, setHoveredCaption] = useState(false);
  const actions = useActions();
  const state = useAppState();
  useEffect(() => {
    actions.changePage("home");
    // actions.changeImagePage(texture);
    setImages(randomProperty(coreImages, 4));
  }, []);

  overmind.eventHub.on("action:end", (execution) => {
    if (state.activeHoveredMouse.hovered === true) {
      setHoveredCaption(true);
    } else {
      setHoveredCaption(false);
    }
  });

  return (
    <>
      <div className="wrapperHome">
        <ReactSVG
          className={hoveredCaption ? "logo removeLogo" : "logo"}
          fill="black"
          src={logo}
        />{" "}
        <div
          className={
            hoveredCaption ? "experienceBar removeAnimation" : "experienceBar"
          }
        >
          start the experience
        </div>
        <BlockCaption images={images} />
      </div>
    </>
  );
};

export default withGlobalFunction()(Home);
