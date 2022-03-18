import withGlobalFunction from "../context/withGlobalFunction";
import { gql, useQuery } from "@apollo/client";
import { useActions } from "../context/overmind";
import { useEffect } from "react";
import { overmind } from "../context/overmind";
import texture from "../images/Diane-Arbus_bassa.jpeg";

// ID: 66
const GET_CONTATTI = gql`
  query contatti($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
`;

const Contatti = (props) => {
  const { data, error, loading } = useQuery(GET_CONTATTI, {
    variables: {
      id: 66,
    },
  });
  const actions = useActions();
  useEffect(() => {
    actions.changePage("contatti");
    data && actions.changeImagePage(data.page.featuredImage.node.sourceUrl);
  }, []);
  return <>{data && <h1 className="page_title">{data.page.title}</h1>}</>;
};

export default withGlobalFunction("test")(Contatti);
