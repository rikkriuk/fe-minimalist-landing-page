import React from "react";

const getBorderClasses = (index) => {
   const isFourth = index + 1 === 4;
   const isEighth = index + 1 === 8;
   const isSeventh = index + 1 === 7;
   const isEven = (index + 1) % 2 === 0;
   const isAfterFourthAndNotMultipleOfFour = (index + 1) > 4 && (index + 1) % 4 !== 0;
 
   return `
     border-b-2 md:border-r-2 xl:border-b-2 border-gray-300 p-16 flex justify-center items-center
     ${isFourth ? "xl:border-r-0" : ""}
     ${isEighth ? "md:border-b-0 xl:border-b-0 xl:border-r-0" : ""}
     ${isSeventh ? "xl:border-r-2 md:border-b-0 lg:border-b-0" : ""}
     ${isEven ? "md:border-r-0 lg:border-r-0 xl:border-r-2" : ""}
     ${isAfterFourthAndNotMultipleOfFour ? "xl:border-b-0" : ""}
   `;
 };


const TrustedComponent = ({ logos, page }) => {
   return (
         <section className="py-52 flex flex-col gap-20 justify-center items-center">
            {page !== "home" && (
               <div className="flex justify-center items-center px-6 w-full md:w-4/5 xl:w-2/5 text-center">
                  <h3 className="text-[44px] font-bold">We worked with the world’s biggest brands and the most innovative startups</h3>
               </div>
            )}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:px-20 xl:px-52">
            {logos.map((svg, index) => (
               <div
                  key={index}
                  className={getBorderClasses(index)}
               >
                  <img src={svg} alt="Company Logo" />
               </div>
            ))}

            </div>
         </section>

   )
}

export default TrustedComponent;