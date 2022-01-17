import { useMatch, useResolvedPath } from "react-router-dom";

const MyRoute = ({ path, element }) => {
  const resolvedPath = useResolvedPath(path);
  const match = useMatch(resolvedPath.pathname);
  return (
    <div in={match != null} timeout={300} classNames="page" unmountOnExit>
      <div>{element}</div>
    </div>
  );
};

export default MyRoute;
