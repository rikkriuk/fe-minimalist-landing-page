import React, { useEffect } from "react";
import ArticleComponent from "../components/ArticleComponent";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../redux/slices/blogSlice";

const ArticleContainer = ({ page }) => {
   const dispatch = useDispatch();
   const { blog } = useSelector((state) => state.blog);
   useEffect(() => {
      dispatch(getBlog());
   }, [])
   const sliceArticles = page === "home" ? blog.slice(0, 3) : blog;
   return (
      <section>
         <ArticleComponent articles={sliceArticles} page={page} />
         {page === "blogs" && (
            <div className="text-center mb-16">
               <button className="font-semibold text-2xl px-8 py-5 bg-black text-white">
                  Load More
               </button>
            </div>
         )}
      </section>
   )
}

export default ArticleContainer;