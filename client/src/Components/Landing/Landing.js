import React from "react";
import Button from "../Buttons/Button.js";
import { Background } from "./Landing.style.js";

const Landing = props => {
  return (
    <Background>
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <Button />
    </Background>
  );
};

export default Landing;
