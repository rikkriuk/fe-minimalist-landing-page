import React from "react";
import HeroContainer from "../containers/HeroContainer";
import ArticleContainer from "../containers/ArticleContainer";
import BannerComponent from "../components/BannerComponent";
import TrustedContainer from "../containers/TrustedContainer";

const BlogsPage = () => {
   return (
      <main>
         <HeroContainer page="blogs"/>
         <ArticleContainer page="blogs" />
         <BannerComponent />
         <TrustedContainer page="blogs" />
      </main>
   )
}

export default BlogsPage;