import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Lenkeliste from "./Lenkeliste";

describe("Tester Lenkeliste komponenten", () => {
  test("Lenkeliste rendrer uten links", () => {
    const { container } = render(<Lenkeliste links={[]} />);
    expect(container).toBeInTheDocument();
  });
});
