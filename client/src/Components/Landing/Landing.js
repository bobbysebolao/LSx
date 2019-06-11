import React from "react";
import Button from "../Buttons/Button.js";
import {ReactComponent as Sign}  from "../../content/signpost-edited.svg";
import { Nav, Main } from "./Landing.style";

const Signpost = props => { 
  return (
 <Sign/>
);}


const Landing = props => {
  return (
    <Main>
      <h1>LSx</h1>
      <h2>Action Planner</h2>
      <Button> Start Learning </Button>
      <Button> Make Action Plan </Button>
      <Nav>
      <Signpost />
      </Nav>
    </Main>
  );
};

export default Landing;
