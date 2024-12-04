import React from "react";
import HeadComponent from "../components/HeadComponent";
import HeroContainer from "../containers/HeroContainer";
import PortfolioDetailComponent from "../components/PortfolioDetailComponent";
import BannerComponent from "../components/BannerComponent";

const BlogsDetailPage = () => {
   return (
      <main>
         <HeadComponent
            title="Blogs Detail - dsgnr."
            description="dsgnr. blogs detail page."
            keywords="dsgnr., blog, blogs detail, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page="blogsDetail" />
         <PortfolioDetailComponent />
         <BannerComponent />
      </main>
   )
}

export default BlogsDetailPage;