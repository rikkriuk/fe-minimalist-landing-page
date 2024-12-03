import React from "react";
import ThreeHandBannerImg from "../assets/three-hand-banner.png";

const BannerComponent = () => {
   return (
      <section className="relative flex flex-col justify-center items-start md:items-center bg-[#FEC00A] px-6 py-28 mt-48 mb-20">
         <div className="block md:absolute -left-10 -z-0 ">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-10 md:mb-20">dsgnr.</h1>
         </div>

         <div className="flex pb-16 md:pb-3 items-start md:items-center gap-16 flex-col md:flex-row md:justify-center lg:justify-end">
            <h4 className="font-bold w-full md:w-2/5 text-[44px]">Grow Your Business. 
            Build Great Products.</h4>
            <button className="font-semibold text-2xl px-8 py-5 bg-black text-white">
               Book a free call
            </button>
         </div>

         <div className="absolute right-16 bottom-0 z-0">
            <img src={ThreeHandBannerImg} alt="Three hand banner" width={369} />
         </div>
      </section>
   )
}

export default BannerComponent;