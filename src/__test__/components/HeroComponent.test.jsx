import React from "react";
import { render, screen } from "@testing-library/react";
import HeroComponent from "../../components/HeroComponent";

jest.mock("../../assets/bg-trush.png", () => "BgTrush");

describe("HeroComponent", () => {
  const heroProps = {
    actionType: "button",
    handImg: "hand-image.png",
    title: "Hero Title",
    type: "home",
  };

  test("renders the hero title correctly", () => {
    render(<HeroComponent hero={heroProps} />);
    const titleElement = screen.getByText(heroProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-5xl");
  });

  test("renders hand image with correct src and alt text", () => {
    render(<HeroComponent hero={heroProps} />);
    const handImage = screen.getByAltText("Hand image");
    expect(handImage).toBeInTheDocument();
    expect(handImage).toHaveAttribute("src", heroProps.handImg);
  });

  test("renders background trush image", () => {
    render(<HeroComponent hero={heroProps} />);
    const bgImage = screen.getByAltText("Background trush");
    expect(bgImage).toBeInTheDocument();
    expect(bgImage).toHaveAttribute("src", "BgTrush");
  });

  test("renders button if actionType is button", () => {
    render(<HeroComponent hero={heroProps} />);
    const buttonElement = screen.getByText("BOOK A FREE TO CALL");
    expect(buttonElement).toBeInTheDocument();
  });

  test("does not render button if actionType is not button", () => {
    const updatedHeroProps = { ...heroProps, actionType: "mouse" };
    render(<HeroComponent hero={updatedHeroProps} />);
    const buttonElement = screen.queryByText("BOOK A FREE TO CALL");
    expect(buttonElement).not.toBeInTheDocument();
  });

  test("renders mouse icon if actionType is mouse", () => {
    const updatedHeroProps = { ...heroProps, actionType: "mouse" };
    render(<HeroComponent hero={updatedHeroProps} />);
    const svgElement = screen.getAllByRole("img");
    expect(svgElement.length).toBeGreaterThan(0);
  });

  test("applies correct height class based on actionType", () => {
    const { rerender } = render(<HeroComponent hero={heroProps} />);
    const sectionElement = screen.getByRole("hero-section");
    expect(sectionElement).toHaveClass("h-screen");

    const updatedHeroProps = { ...heroProps, actionType: "mouse-bottom" };
    rerender(<HeroComponent hero={updatedHeroProps} />);
    expect(sectionElement).toHaveClass("h-[90vh]");
  });

  test("renders mouse-bottom SVG when actionType is mouse-bottom", () => {
    const updatedHeroProps = { ...heroProps, actionType: "mouse-bottom" };
    render(<HeroComponent hero={updatedHeroProps} />);
    const svgElement = screen.getAllByRole("img");
    expect(svgElement.length).toBeGreaterThan(0);
  });

  test("handles propTypes validation", () => {
    console.error = jest.fn();

    render(<HeroComponent hero={{}} />);
    expect(console.error).toHaveBeenCalled();
  });
});
