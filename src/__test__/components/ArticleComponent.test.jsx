import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArticleComponent from "../../components/ArticleComponent";

const mockArticles = [
   {
      img: "blog-1.png",
      title: "Title 1",
      content: "Content 1"
   },
   {
      img: "blog-2.png",
      title: "Title 2",
      content: "Content 2"
   },
   {
      img: "blog-3.png",
      title: "Title 3",
      content: "Content 3"
   }
]

describe("ArticleComponent", () => {
   test("renders blog articles from props", () => {
      render(
         <BrowserRouter>
            <ArticleComponent articles={mockArticles} />
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