import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App"

jest.mock("../components/HeaderComponent", () => () => <div>Header</div>);
jest.mock("../components/FooterComponent", () => () => <div>Footer</div>);
jest.mock("../pages/HomePage", () => () => <div>Home Page</div>);

describe("App Component", () => {
  test("renders header and footer components", () => {
    render(<App />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("renders home page on root path", () => {
   window.history.pushState({}, "", "/");
   render(<App />);
   expect(screen.getByText("Home Page")).toBeInTheDocument();
  })
});