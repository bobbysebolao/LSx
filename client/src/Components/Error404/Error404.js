import React from "react";
import Oldlady from "../Oldlady/Oldlady.js";
import { Button } from "../Buttons/Button.js";

const Error404 = () => {
  return (
    <React.Fragment>
      <h1>404!</h1>
      <h2>Sorry, the page you are looking for is unavailable.</h2>
      <Button link="/#signpost">Back</Button>
      <Oldlady />
    </React.Fragment>
  );
};

export default Error404;
