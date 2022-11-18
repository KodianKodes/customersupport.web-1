import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should render without issues", () => {
    render(<App />);
  });
  it("Should have a class called  'App'", () => {
    render(<App />);
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });
});
