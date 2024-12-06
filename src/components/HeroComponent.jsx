import React from "react";
import BgTrush from "../assets/bg-trush.png";
import PropTypes from "prop-types";

const HeroComponent = ({ hero }) => {
   return (
      <section>
         <div role="hero-section" className={`bg-primary ${hero.actionType === "mouse-bottom" ? "h-[90vh]" : "h-screen"} relative overflow-hidden`}>
            <img 
               src={hero.handImg} 
               alt="Hand image" 
               className={`absolute z-10 
                  ${(hero.type === "ourWorkDetail" || 
                     hero.type === "contactUs" || 
                     hero.type === "blogs" ||
                     hero.type === "blogsDetail") 
                     ? "right-20 bottom-0 w-1/2" : "left-0 right-0 bottom-0"}`}
            />

            <img 
               src={BgTrush} 
               alt="Background trush" 
               className="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
               width={1500}
            />

            <div className={`absolute z-50 left-0 top-1/3 transform -translate-y-1/3 pl-0 ${hero.type === "home" ? "md:pl-28 lg:pl-44 xl:pl-72 gap-14 md:gap-28" : "items-center text-center gap-6"} w-full flex flex-col mt-0 md:mt-12`}>
               <h1 className="text-5xl px-6 md:pl-0 md:text-7xl lg:text-8xl font-bold text-[#101010] leading-tight w-full md:w-3/4 lg:w-4/5 xl:w-[850px]">
                  {hero.title}
               </h1>

               <div className={`flex items-center relative ${hero.type === "home" ? "pl-6 md:pl-0" : "pl-0"}`}>
               {hero.actionType === "button" && (
                     <>
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.755859" y="0.333496" width="60" height="60" rx="30" fill="white"/>
                        </svg>

                        <button className="text-lg lg:text-2xl absolute left-9 md:left-4 font-bold text-[#101010] ml-4 flex items-center gap-6">
                           BOOK A FREE TO CALL
                           <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M20.463 9.0406C20.8535 8.65008 20.8535 8.01692 20.463 7.62639L14.099 1.26243C13.7085 0.871905 13.0753 0.871905 12.6848 1.26243C12.2943 1.65295 12.2943 2.28612 12.6848 2.67664L18.3416 8.3335L12.6848 13.9904C12.2943 14.3809 12.2943 15.014 12.6848 15.4046C13.0753 15.7951 13.7085 15.7951 14.099 15.4046L20.463 9.0406ZM0.755859 9.3335L19.7559 9.3335L19.7559 7.3335L0.755859 7.3335L0.755859 9.3335Z" fill="#101010"/>
                           </svg>
                        </button>
                     </>
                  )}

               {(hero.actionType === "mouse" && hero.type !== "ourWorkDetail") && (
                  <svg width="64" height="62" viewBox="0 0 64 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32 58.7709C19.8667 58.7709 10 49.2126 10 37.4584V24.5417C10 12.7876 19.8667 3.22925 32 3.22925C44.1333 3.22925 54 12.7876 54 24.5417V37.4584C54 49.2126 44.1333 58.7709 32 58.7709ZM32 7.10425C22.08 7.10425 14 14.9317 14 24.5417V37.4584C14 47.0684 22.08 54.8959 32 54.8959C41.92 54.8959 50 47.0684 50 37.4584V24.5417C50 14.9317 41.92 7.10425 32 7.10425Z" fill="#101010"/>
                     <path d="M32 30.3542C28.6933 30.3542 26 27.745 26 24.5417V19.375C26 16.1717 28.6933 13.5625 32 13.5625C35.3067 13.5625 38 16.1717 38 19.375V24.5417C38 27.745 35.3067 30.3542 32 30.3542ZM32 17.4375C30.9067 17.4375 30 18.3158 30 19.375V24.5417C30 25.6008 30.9067 26.4792 32 26.4792C33.0933 26.4792 34 25.6008 34 24.5417V19.375C34 18.3158 33.0933 17.4375 32 17.4375Z" fill="#101010"/>
                     <path d="M32 17.4376C30.9067 17.4376 30 16.5592 30 15.5001V5.16675C30 4.10758 30.9067 3.22925 32 3.22925C33.0933 3.22925 34 4.10758 34 5.16675V15.5001C34 16.5592 33.0933 17.4376 32 17.4376Z" fill="#101010"/>
                  </svg>

               )}
               </div>
            </div>
         </div>
         
         {hero.actionType === "mouse-bottom" && (
            <div className="flex justify-center items-center py-5">
               <svg width="64" height="62" viewBox="0 0 64 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 58.7709C19.8667 58.7709 10 49.2126 10 37.4584V24.5417C10 12.7876 19.8667 3.22925 32 3.22925C44.1333 3.22925 54 12.7876 54 24.5417V37.4584C54 49.2126 44.1333 58.7709 32 58.7709ZM32 7.10425C22.08 7.10425 14 14.9317 14 24.5417V37.4584C14 47.0684 22.08 54.8959 32 54.8959C41.92 54.8959 50 47.0684 50 37.4584V24.5417C50 14.9317 41.92 7.10425 32 7.10425Z" fill="#101010"/>
                  <path d="M32 30.3542C28.6933 30.3542 26 27.745 26 24.5417V19.375C26 16.1717 28.6933 13.5625 32 13.5625C35.3067 13.5625 38 16.1717 38 19.375V24.5417C38 27.745 35.3067 30.3542 32 30.3542ZM32 17.4375C30.9067 17.4375 30 18.3158 30 19.375V24.5417C30 25.6008 30.9067 26.4792 32 26.4792C33.0933 26.4792 34 25.6008 34 24.5417V19.375C34 18.3158 33.0933 17.4375 32 17.4375Z" fill="#101010"/>
                  <path d="M32 17.4376C30.9067 17.4376 30 16.5592 30 15.5001V5.16675C30 4.10758 30.9067 3.22925 32 3.22925C33.0933 3.22925 34 4.10758 34 5.16675V15.5001C34 16.5592 33.0933 17.4376 32 17.4376Z" fill="#101010"/>
               </svg>
            </div>
         )}
      </section>

   )
}

HeroComponent.propTypes = {
  hero: PropTypes.shape({
    actionType: PropTypes.string.isRequired,
    handImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};


export default HeroComponent;