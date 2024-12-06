import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioById } from "../redux/slices/portfolioSlice";
import { getBlogBySlug } from "../redux/slices/blogSlice";

const PortfolioDetailComponent = () => {
   const location = useLocation();
   const { id, slug } = useParams();
   const dispatch = useDispatch();
   const { portfolio, loading } = useSelector((state) => state.portfolio);
   const { blogDetail } = useSelector((state) => state.blog);
   const pathSegments = location.pathname.split("/");
   const section = pathSegments[1];

   useEffect(() => {
      if (section === "our-works") {
         dispatch(getPortfolioById(id))
      } else {
         dispatch(getBlogBySlug(slug))
      }
   }, [section]);

   const sanitizedHtml = DOMPurify.sanitize(section === "our-works" ? portfolio?.content : blogDetail?.content);
   if (loading) {
      return <div className="flex justify-center items-center">
         <p>Loading...</p>
      </div>
   }
   return (
      <section className="px-6 lg:px-40 flex flex-col gap-12 mt-20">
         <div>
            <img src={section === "our-works" ? portfolio?.banner : blogDetail?.banner} alt={section === "our-works" ? portfolio?.title : blogDetail?.title} className="object-cover w-full h-[500px]" />
         </div>

         <div className="flex flex-col gap-10">
            {section !== "our-works" && (
               <p>Published: {new Date(blogDetail?.updated_at).toLocaleString("id-ID")}</p>
            )}
            <h2 className="text-4xl md:text-6xl font-bold">{section === "our-works" ? portfolio?.title : blogDetail?.title}</h2>

            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
         </div>
      </section>
   )
}

export default PortfolioDetailComponent;