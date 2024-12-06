import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PortfolioComponent from "../../components/PortfolioComponent";

describe("PortfolioComponent", () => {
  const renderComponent = (portfolio) => {
    render(
      <BrowserRouter>
        <PortfolioComponent portfolio={portfolio} />
      </BrowserRouter>
    );
  };

  test("renders home type portfolio with title and navbar", () => {
    const portfolio = {
      type: "home",
      title: "Home Portfolio",
      navbar: ["All", "Web Design", "App Design", "Branding"],
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    };

    renderComponent(portfolio);
    expect(screen.getByText("Home Portfolio")).toBeInTheDocument();

    portfolio.navbar.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    portfolio.images.forEach((_, index) => {
      expect(
        screen.getByAltText(`Portfolio ${index + 1}`)
      ).toBeInTheDocument();
    });
  });

  test("renders feature type portfolio with title and navbar text", () => {
    const portfolio = {
      type: "feature",
      title: "Feature Portfolio",
      navbar: "Featured Projects",
      images: ["feature1.jpg", "feature2.jpg"],
    };

    renderComponent(portfolio);

    expect(screen.getByText("Feature Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();

    portfolio.images.forEach((_, index) => {
      expect(
        screen.getByAltText(`Portfolio ${index + 1}`)
      ).toBeInTheDocument();
    });
  });

  test("applies correct classes for home type", () => {
    const portfolio = {
      type: "home",
      title: "Home Portfolio",
      navbar: ["All"],
      images: ["image1.jpg"],
    };

    renderComponent(portfolio);

    const nav = screen.getByText("Home Portfolio").closest("nav");
    expect(nav).toHaveClass("flex-col lg:flex-row md:px-24");

    const imageContainer = screen.getByAltText("Portfolio 1").closest("div");
    expect(imageContainer).toHaveClass("h-[432px] portfolio1");
  });

  test("applies correct classes for feature type", () => {
    const portfolio = {
      type: "feature",
      title: "Feature Portfolio",
      navbar: "Featured Projects",
      images: ["feature1.jpg"],
    };

    renderComponent(portfolio);

    const nav = screen.getByText("Feature Portfolio").closest("nav");
    expect(nav).toHaveClass("lg:mx-40 xl:mx-64 flex-col");

    const imageContainer = screen.getByAltText("Portfolio 1").closest("div");
    expect(imageContainer).toHaveClass("xl:w-[629px] xl:h-[629px]");
  });
});