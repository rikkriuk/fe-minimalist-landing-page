import React from "react";
import OfficeImg from "../assets/office.png";
import LocationCardComponent from "../components/LocationCardComponent";

const OfficeContainer = () => {
   return (
      <section className="px-6 lg:px-20 py-24">
         <h3 className="font-bold text-[44px] text-center">Come stop by our office sometime</h3>

         <div className="mt-16 relative">
            <img className="object-cover" src={OfficeImg} alt="Office image" />
            <div className="lg:absolute bottom-2 left-2 xl:bottom-12 xl:left-8">
               <LocationCardComponent />
            </div>
         </div>
      </section>
   )
}

export default OfficeContainer;