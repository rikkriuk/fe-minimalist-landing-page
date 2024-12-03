import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent";

describe("FooterComponent", () => {
   test("renders company logo", () => {
      render(
        <BrowserRouter>
          <FooterComponent />
        </BrowserRouter>
      );
  
      const logoImage = screen.getByAltText("Company-logo");
      expect(logoImage).toBeInTheDocument();
   });

   test("renders 'What We Do' section", () => {
      const { container } = render(
         <BrowserRouter>
           <FooterComponent />
         </BrowserRouter>
       );
     
      const footer = container.querySelector("footer");
      const sectionHeading = footer.querySelector("h4");
      expect(sectionHeading).toHaveTextContent("What We Do");
   }); 
  
   test("renders email address", () => {
      render(
        <BrowserRouter>
          <FooterComponent />
        </BrowserRouter>
      );
  
      const emailText = screen.getByText("info@dsgnr.com");
      expect(emailText).toBeInTheDocument();
   });
  
   test("renders links correctly", () => {
      render(
        <BrowserRouter>
          <FooterComponent />
        </BrowserRouter>
      );

      const linkItems = ["Intro", "Home", "Work", "Pricing", "Contact Us", "About", "News", "Testimonial"];
   
      linkItems.forEach((link) => {
         expect(screen.getByText(link)).toBeInTheDocument();
      })
   });
})