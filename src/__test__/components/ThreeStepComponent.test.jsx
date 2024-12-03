import React from "react";
import { render, screen } from "@testing-library/react";
import ThreeStepComponent from "../../components/ThreeStepComponent";

jest.mock("../../assets/handphone.png", () => "mocked-handphone.png");

describe("ThreeStepComponent", () => {
   test("renders the main heading", () => {
      render(<ThreeStepComponent />);
      expect(screen.getByText("A simple, yet effective three step process.")).toBeInTheDocument();
   })

   test("renders the three steps", () => {
      render(<ThreeStepComponent />);

      const steps = [
         "Idea Initiation",
         "Execution",
         "Launch",
      ]

      steps.forEach((step) => {
         expect(screen.getByText(step)).toBeInTheDocument();
      })
   })

   test("renders the call to action", () => {
      render(<ThreeStepComponent />);
      expect(screen.getByText(/Wherever you are in your journey, we’d love to hear from you/i)).toBeInTheDocument();
      expect(screen.getByText("Book a free call")).toBeInTheDocument();
   })

   test("renders the image", () => {
      render(<ThreeStepComponent />);
      const img = screen.getByAltText("Handphone");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "mocked-handphone.png");
   })
})
