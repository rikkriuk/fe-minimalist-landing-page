import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ArticleComponent = ({ articles }) => {
   console.log("articles", 900)
   return (
      <section className="flex flex-col gap-10 md:gap-20 my-20">
         <nav className="flex gap-7 flex-col lg:flex-row justify-around items-center mt-20 px-6 md:px-0">
            <div className="xl:ml-0">
               <h3 className="text-[44px] font-bold">Our Work So Far</h3>
            </div>

            <Link className="text-xl text-[#101010] py-1 font-bold border-b-2 border-black" to={"/"}>SEE ALL</Link>
         </nav>

         <div className="flex justify-center px-6 items-start flex-wrap gap-32">
            {articles.map((article, index) => (
               <div key={index} className="flex flex-col justify-between w-[337px] h-[580px]">
                  <div>
                     <img src={article.img} alt={article.title}/>

                     <div>
                        <h4 className="text-2xl font-bold my-6 line-clamp-2">{article.title}</h4>
                        <p className="font-normal text-base text-gray-500 line-clamp-3">{article.content}</p>
                     </div>
                  </div>
                  <Link className="flex items-center gap-3 mt-6 font-bold text-base" to={"/"}>
                     Read More
                     <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.6967C14.4645 0.403807 13.9896 0.403807 13.6967 0.6967C13.4038 0.989594 13.4038 1.46447 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM-6.55671e-08 6.75L19 6.75L19 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="#101010"/>
                     </svg>
                  </Link>
               </div>
            ))}
         </div>
      </section>
   )
}

ArticleComponent.propTypes = {
   articles: PropTypes.arrayOf(
      PropTypes.shape({
         img: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         content: PropTypes.string.isRequired,
      })
   ),
};

export default ArticleComponent;