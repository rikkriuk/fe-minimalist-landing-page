import React from "react";
import HeroContainer from "../containers/HeroContainer";
import ArticleContainer from "../containers/ArticleContainer";
import BannerComponent from "../components/BannerComponent";
import TrustedContainer from "../containers/TrustedContainer";
import HeadComponent from "../components/HeadComponent";

const BlogsPage = () => {
   return (
      <main>
         <HeadComponent
            title="Blogs - dsgnr."
            description="dsgnr. blogs page."
            keywords="dsgnr., blog, blogs, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page="blogs"/>
         <ArticleContainer page="blogs" />
         <BannerComponent />
         <TrustedContainer page="blogs" />
      </main>
   )
}

export default BlogsPage;