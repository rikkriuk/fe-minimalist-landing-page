import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderComponent from "../../components/HeaderComponent";
import { BrowserRouter } from "react-router-dom";

describe("HeaderComponent", () => {
   test("renders logo image", () => {
      render(
         <BrowserRouter>
            <HeaderComponent />
         </BrowserRouter>
      );

      expect(screen.getByAltText("Company Logo")).toBeInTheDocument();
   })

   test("renders navigation links", () => {
      render(
         <BrowserRouter>
            <HeaderComponent />
         </BrowserRouter>
      );

      const linkItems = ["HOME", "OUR WORKS", "ABOUT US", "CONTACT US", "BLOGS"];
      linkItems.forEach((item) => {
         expect(screen.getByText(item)).toBeInTheDocument();
      });
   })

   test("toggles nav menu on button click", () => {
      render(
         <BrowserRouter>
            <HeaderComponent />
         </BrowserRouter>
      );
    
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("scale-0");
    
      const navButton = screen.getByRole("button");
      fireEvent.click(navButton);
    
      expect(nav).toHaveClass("scale-100");
    
      fireEvent.click(navButton);    
      expect(nav).toHaveClass("scale-0");
   });

   test("changes background color when scrolling", () => {
      render(
         <BrowserRouter>
            <HeaderComponent />
         </BrowserRouter>
      );
    
      const header = screen.getByRole("banner");
      expect(header).toHaveClass("bg-transparent");
    
      fireEvent.scroll(window, { target: { scrollY: 60 } });
      expect(header).toHaveClass("bg-primary");
   });
})