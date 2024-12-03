import React from "react";
import HandImg from "../assets/hand.png";
import BgTrush from "../assets/bg-trush.png";

const HeroComponent = () => {
   return (
      <section className="bg-primary h-screen relative">
      <img 
         src={HandImg} 
         alt="Hand" 
         className="absolute z-10 left-0 right-0 bottom-0"
      />

      <img 
         src={BgTrush} 
         alt="Background trush" 
         className="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
         width={1500}
      />

      <div className="absolute z-50 left-0 top-1/3 transform -translate-y-1/3 pl-0 md:pl-28 lg:pl-44 xl:pl-72 w-full flex flex-col gap-14 md:gap-28 mt-0 md:mt-12">
         <h1 className="text-5xl pl-6 md:pl-0 md:text-7xl lg:text-8xl font-bold text-[#101010] leading-tight w-full md:w-3/4 lg:w-4/5 xl:w-[750px]">
            Let’s create something great together.
         </h1>

         <div className="flex items-center relative pl-6 md:pl-0">
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.755859" y="0.333496" width="60" height="60" rx="30" fill="white"/>
            </svg>

            <button className="text-lg lg:text-2xl absolute left-9 md:left-4 font-bold text-[#101010] ml-4 flex items-center gap-6">
               BOOK A FREE CALL
               <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.463 9.0406C20.8535 8.65008 20.8535 8.01692 20.463 7.62639L14.099 1.26243C13.7085 0.871905 13.0753 0.871905 12.6848 1.26243C12.2943 1.65295 12.2943 2.28612 12.6848 2.67664L18.3416 8.3335L12.6848 13.9904C12.2943 14.3809 12.2943 15.014 12.6848 15.4046C13.0753 15.7951 13.7085 15.7951 14.099 15.4046L20.463 9.0406ZM0.755859 9.3335L19.7559 9.3335L19.7559 7.3335L0.755859 7.3335L0.755859 9.3335Z" fill="#101010"/>
               </svg>
            </button>
         </div>
      </div>
      </section>

   )
}

export default HeroComponent;