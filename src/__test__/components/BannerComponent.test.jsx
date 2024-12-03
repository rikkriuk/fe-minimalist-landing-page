import React from "react";
import { render, screen } from "@testing-library/react";
import BannerComponent from "../../components/BannerComponent";

describe("BannerComponent", () => {
   test("renders the title", () => {
      render(<BannerComponent />);
      expect(screen.getByText("dsgnr.")).toBeInTheDocument();
      expect(screen.getByText("Grow Your Business. Build Great Products.")).toBeInTheDocument();
   });

   test("renders the button", () => {
      render(<BannerComponent />);
      expect(screen.getByText("Book a free call")).toBeInTheDocument();
   })

   test("matches the snapshot", () => {
      const { asFragment } = render(<BannerComponent />);
      expect(asFragment()).toMatchSnapshot();
   });
})