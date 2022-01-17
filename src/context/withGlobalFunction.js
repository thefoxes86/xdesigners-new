import React from "react";
import Loading from "../components/Loading";

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
          <Loading />
          <WrappedComponent {...props} />
        </>
      );
    }
  }

  return WithGlobalFunction;
};

export default withGlobalFunction;
