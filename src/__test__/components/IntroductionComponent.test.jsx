import React from "react";
import { render, screen } from "@testing-library/react";
import IntroductionComponent from "../../components/IntroductionComponent";

describe("IntroductionComponent", () => {
   test("renders the main heading and description", () => {
      render(<IntroductionComponent />);
      expect(screen.getByText("hello")).toBeInTheDocument();
      expect(screen.getByText("Award winning agency specializing in creative design")).toBeInTheDocument();
      expect(screen.getByText("We help businesses grow, launch products and build enduring relationships with our communities.")).toBeInTheDocument();
   });

   test("renders all the features", () => {
      render(<IntroductionComponent />);
      const features = [
         "EXCEPTIONAL DESGIN",
         "IN-DEPTH RESEARCH",
         "PRODUCT MANAGEMENT",
         "NO-CODE DEVELOPMENT",
      ]

      features.forEach((feature) => {
         expect(screen.getByText(feature)).toBeInTheDocument();
      });
   })

   test("renders 'OUR INFO' action", () => {
      render(<IntroductionComponent />);
      expect(screen.getByText("OUR INFO")).toBeInTheDocument();
   });
});
