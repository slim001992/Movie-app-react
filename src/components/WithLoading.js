import React from 'react';
import Spinner from "react-bootstrap/Spinner";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
        <Spinner animation="border" variant="primary" className="centered-spinner" />
    );
  }
}
export default WithLoading;