import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { overmind, useActions } from "../../context/overmind";
import "./Loading.scss";
import { Outlet } from "react-router-dom";

const Loading = ({ load }) => {
  const [classObject, setClassObject] = useState({
    loading: "loading",
    h1: "",
  });
  const actions = useActions();

  useEffect(() => {
    setTimeout(() => {
      setClassObject({ loading: "loading enter", h1: "active" });
    }, 100);

    setTimeout(() => {
      setClassObject({ loading: "loading exit", h1: "" });
    }, 1000);

    setTimeout(() => {
      actions.loadingState(false);
    }, 1500);
  }, [, load]);

  return (
    <>
      <div className={classObject.loading}>
        <div className="pageTitle"></div>
      </div>
    </>
  );
};
export default Loading;
