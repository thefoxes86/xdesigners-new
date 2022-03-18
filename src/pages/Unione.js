import withGlobalFunction from "../context/withGlobalFunction";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useActions, useAppState } from "../context/overmind";
import texture from "../images/Marina-Abramovic_bassa.jpeg";

const GET_UNIONE = gql`
  query unione($id: ID!) {
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

const Unione = (props) => {
  const { data, error, loading } = useQuery(GET_UNIONE, {
    variables: {
      id: 68,
    },
  });
  const actions = useActions();
  useEffect(() => {
    actions.changePage("unione");
    data && actions.changeImagePage(data.page.featuredImage.node.sourceUrl);
  }, []);
  return <>{"unione"}</>;
};

export default withGlobalFunction()(Unione);
