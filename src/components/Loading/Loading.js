import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { overmind } from "../../context/overmind";
import "./Loading.scss";

const Loading = () => {
  const [classLoading, setClassLoading] = useState("loading");

  useEffect(() => {
    setClassLoading("loading");

    setTimeout(() => {
      setClassLoading("loading enter");
    }, 100);

    setTimeout(() => {
      setClassLoading("loading exit");
    }, 4000);
  }, [overmind.state.page]);

  return <div className={classLoading}>{overmind.state.page}</div>;
};
export default Loading;
