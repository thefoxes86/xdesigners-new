import React from "react";
import Loading from "../components/Loading";
import { overmind } from "./overmind";

const withGlobalFunction = (props) => (WrappedComponent) => {
  class WithGlobalFunction extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {}

    render() {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    }
  }

  return WithGlobalFunction;
};

export default withGlobalFunction;
