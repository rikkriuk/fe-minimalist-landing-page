import React from "react";
import ArticleComponent from "../components/ArticleComponent";
import BlogImg1 from "../assets/blog image/blog-1.png";
import BlogImg2 from "../assets/blog image/blog-2.png";
import BlogImg3 from "../assets/blog image/blog-3.png";

const blogs = [
   {
      img: BlogImg1,
      title: "Building a stronger brand with no-code tools",
      content: "Learn about taking on a content design mindset from an expert in brand strategy and content design."
   },
   {
      img: BlogImg2,
      title: "Copywriters and designers: How to work better together",
      content: "Good design and good copy go hand in hand. Here’s how to build closer collaboration between these two."
   },
   {
      img: BlogImg3,
      title: "A guide to photography website design",
      content: "A collection of resources for photography website design covering everything"
   }
];

const ArticleContainer = () => {
   return (
      <ArticleComponent articles={blogs} />
   )
}

export default ArticleContainer;