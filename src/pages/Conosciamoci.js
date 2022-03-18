import Header from "../components/Header";
import { gql, useQuery } from "@apollo/client";
import withGlobalFunction from "../context/withGlobalFunction";
import { useEffect } from "react";
import { useActions } from "../context/overmind";
import texture from "../images/Pablo-picasso_bassa.jpeg";

const GET_CONOSCIAMOCI = gql`
  query conosciamoci($id: ID!) {
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

const Conosciamoci = (props) => {
  const { data, error, loading } = useQuery(GET_CONOSCIAMOCI, {
    variables: {
      id: 118,
    },
  });
  const actions = useActions();
  useEffect(() => {
    actions.changePage("conosciamoci");
    data && actions.changeImagePage(data.page.featuredImage.node.sourceUrl);
  }, []);
  return <>{"conosciamoci"}</>;
};

export default withGlobalFunction()(Conosciamoci);
