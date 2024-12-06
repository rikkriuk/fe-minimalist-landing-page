import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArticleComponent from "../../components/ArticleComponent";

const mockArticles = [
   {
      banner: "blog-1.png",
      title: "Title 1",
      content: "Content 1"
   },
   {
      banner: "blog-2.png",
      title: "Title 2",
      content: "Content 2"
   },
   {
      banner: "blog-3.png",
      title: "Title 3",
      content: "Content 3"
   }
];

describe("ArticleComponent", () => {
   test("renders blog article header when page prop is 'home'", () => {
      render(
         <BrowserRouter>
            <ArticleComponent articles={mockArticles} page={"home"} />
         </BrowserRouter>
      );

      expect(screen.getByText("Our Work So Far")).toBeInTheDocument();
      expect(screen.getByText("SEE ALL")).toBeInTheDocument();
   });

   test("renders blog article header when page prop is not 'home'", () => {
      render(
         <BrowserRouter>
            <ArticleComponent articles={mockArticles} page={"about"} />
         </BrowserRouter>
      );

      expect(screen.getByText("Check out our interesting articles")).toBeInTheDocument();
   });

   test("renders blog articles from props", () => {
      render(
         <BrowserRouter>
            <ArticleComponent articles={mockArticles} page={"home"} />
         </BrowserRouter>
      );

      mockArticles.forEach((article) => {
         expect(screen.getByText(article.title)).toBeInTheDocument();
         expect(screen.getByText(article.content)).toBeInTheDocument();
      });

      const images = screen.getAllByRole("img");
      expect(images.length).toBe(mockArticles.length);
   });
});
