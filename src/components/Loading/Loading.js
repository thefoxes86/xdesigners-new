import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { overmind, useActions } from "../../context/overmind";
import "./Loading.scss";
import { Outlet } from "react-router-dom";

const Loading = ({ load }) => {
  const [classLoading, setClassLoading] = useState("loading");
  const actions = useActions();

  useEffect(() => {
    setTimeout(() => {
      setClassLoading("loading enter");
    }, 100);

    setTimeout(() => {
      setClassLoading("loading exit");
    }, 2000);

    setTimeout(() => {
      actions.loadingState(false);
    }, 5000);
  }, [, load]);

  return (
    <>
      <div className={classLoading}>{overmind.state.page}</div>
    </>
  );
};
export default Loading;
