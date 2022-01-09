import React from "react";

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
