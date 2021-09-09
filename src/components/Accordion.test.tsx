
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  afterEach(cleanup);

  it("renders successfully", () => {
    render(<Accordion />);
    expect(screen.getByText(/Text from this component/i)).toBeInTheDocument();
  });

  it("has more than one test", () => {
    expect(false);
  });
});
