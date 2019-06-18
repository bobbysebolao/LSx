import React from "react";
import { render, cleanup } from "@testing-library/react";
import Clouds from "./Clouds";

afterEach(cleanup);

test("Clouds contains 2 svgs if successfully rendered ", () => {
  const { getByTestId } = render(<Clouds />);
  expect(getByTestId("svg1"));
  expect(getByTestId("svg2"));
});
