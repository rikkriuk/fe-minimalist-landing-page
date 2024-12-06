import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialComponent from "../../components/TestimonialComponent";

jest.mock("../../assets/person-1.png")
jest.mock("../../assets/person-2.png")

describe("TestimonialComponent", () => {
  const testimonialData = [
    {
      name: "Person 1",
      title: "Product Manager",
      message: "Good",
      banner: "person-1.png",
    },
    {
      name: "Person 2",
      title: "CO-founder, catco",
      message: "Great",
      banner: "person-2.png",
    },
  ];

  test("renders the heading", () => {
    render(<TestimonialComponent testimonial={testimonialData} />);

    expect(
      screen.getByText("What our clients say about us")
    ).toBeInTheDocument();
  });

  test("renders all testimonials", () => {
    render(<TestimonialComponent testimonial={testimonialData} />);

    testimonialData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.message)).toBeInTheDocument();
    });
  });

  test("renders quote SVG icon", () => {
    render(<TestimonialComponent testimonial={testimonialData} />);

    const svgIcons = screen.getAllByRole("img", { hidden: true });
    expect(svgIcons.length).toBe(testimonialData.length);
  });
});
