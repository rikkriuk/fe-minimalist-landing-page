import React from "react";
import { Link } from "react-router-dom";

const LocationCardComponent = () => {
   return (
      <div className="px-6 xl:pt-28 py-10 flex flex-col gap-7 h-full w-full shadow-xl lg:shadow-none xl:w-[381px] xl:h-[437px] bg-[#FFFFFF]">
         <h4 className="font-bold text-[34px]">New York, USA</h4>
         <div>
            <p className="font-normal text-2xl text-gray-500">7626 W. 8th St.</p>
            <p className="font-normal text-2xl text-gray-500">Massapequa, NY 11758</p>
         </div>

         <div>
            <Link to={"/"} className="text-[#4589F7] text-2xl">info@dsgnr.com</Link>
            <p className="text-2xl text-[#101010]">(543)890 98</p>
         </div>

         <Link to={"/"} className="flex items-center gap-2">
            GET DIRECTIONS
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.435 8.20711C13.8256 7.81658 13.8256 7.18342 13.435 6.79289L7.07107 0.428932C6.68054 0.0384078 6.04738 0.0384078 5.65685 0.428932C5.26633 0.819457 5.26633 1.45262 5.65685 1.84315L11.3137 7.5L5.65685 13.1569C5.26633 13.5474 5.26633 14.1805 5.65685 14.5711C6.04738 14.9616 6.68054 14.9616 7.07107 14.5711L13.435 8.20711ZM0 8.5H12.7279V6.5H0L0 8.5Z" fill="#101010"/>
            </svg>
         </Link>
      </div>
   )
}

export default LocationCardComponent;