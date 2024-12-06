import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../../public/favicon.ico", () => "WebLogo");
jest.mock("../components/HeaderComponent", () => () => <div>Header</div>);
jest.mock("../pages/HomePage", () => () => <div>Home Page</div>);
jest.mock("../pages/OurWorkPage", () => () => <div>Our Works</div>);
jest.mock("../pages/OurWorkDetailPage", () => () => <div>Our Works Detail</div>);
jest.mock("../pages/ContactUsPage", () => () => <div>Contact Us</div>);
jest.mock("../pages/BlogsPage", () => () => <div>Blogs</div>);
jest.mock("../pages/BlogsDetailPage", () => () => <div>Blogs Detail</div>);
jest.mock("../pages/AboutUsPage", () => () => <div>About Us</div>);
jest.mock("../components/FooterComponent", () => () => <div>Footer</div>);

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
  });

  test("renders Our Work page on '/our-works' path", () => {
    window.history.pushState({}, "", "/our-works");
    render(<App />);
    expect(screen.getByText("Our Works")).toBeInTheDocument();
  });

  test("renders Our Work page on '/our-works/detail' path", () => {
    window.history.pushState({}, "", "/our-works/1");
    render(<App />);
    expect(screen.getByText("Our Works Detail")).toBeInTheDocument();
  });

  test("renders Contact Us page on '/contact-us' path", () => {
    window.history.pushState({}, "", "/contact-us");
    render(<App />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("renders Blogs page on '/blogs' path", () => {
    window.history.pushState({}, "", "/blogs");
    render(<App />);
    expect(screen.getByText("Blogs")).toBeInTheDocument();
  });

  test("renders Blogs page on '/blogs/detail' path", () => {
    window.history.pushState({}, "", "/blogs/1");
    render(<App />);
    expect(screen.getByText("Blogs Detail")).toBeInTheDocument();
  });

  test("renders Blogs page on '/about-us' path", () => {
    window.history.pushState({}, "", "/about-us");
    render(<App />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  test("renders 404 page for unknown routes", () => {
    window.history.pushState({}, "", "/invalid-router");
    render(<App />);
    expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
  });
});
