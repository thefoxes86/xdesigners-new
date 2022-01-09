import withGlobalFunction from "../context/withGlobalFunction";
import { useEffect } from "react";
import { useActions } from "../context/overmind";
import { gql, useQuery } from "@apollo/client";
import texture from "../images/Marcel-Proust_bassa.jpeg";

const GET_PORTFOLIO = gql`
  query portfolio($id: ID!) {
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

const Porfolio = (props) => {
  const { data, error, loading } = useQuery(GET_PORTFOLIO, {
    variables: {
      id: 56,
    },
  });
  const actions = useActions();
  useEffect(() => {
    actions.changePage("portfolio");
    data && actions.changeImagePage(data.page.featuredImage.node.sourceUrl);
  });
  return "Portfolio";
};

export default withGlobalFunction()(Porfolio);
