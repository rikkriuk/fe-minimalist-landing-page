import React from "react";
import PortfolioDetailImg from "../assets/portfolio-8.png"

const AboutUsComponent = () => {
   return (
      <section className="px-6 lg:px-40 my-20">
         <div className="mb-10 gap-7 md:gap-0 grid grid-cols-1 md:grid-cols-[60%,40%]">
            <div>
               <h3 className="text-3xl font-bold mb-6">Who we are</h3>

               <p className="font-normal text-xl text-gray-700">
               We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
               </p> 
            </div>

            <div className="flex justify-end items-end">
               <h3 className="text-[44px] text-gray-500 font-bold">EST. 2020</h3>
            </div>
         </div>

         <div>
            <img src={PortfolioDetailImg} alt="Portfolio image" />
         </div>
      </section>
   )
}

export default AboutUsComponent;