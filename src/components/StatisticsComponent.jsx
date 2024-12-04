import React from "react";

const StatisticsComponent = () => {
   return (
      <section className="bg-[#101010] px-6 my-20 py-16 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         <div className="flex items-start lg:items-center flex-col justify-center">
            <div>
               <h4 className="text-primary font-bold text-6xl">350 +</h4>
               <p className="text-white font-normal text-[28px] mt-6">Clients Worldwide</p>
            </div>
         </div>

         <div className="flex items-start lg:items-center flex-col justify-center">
            <div>
               <h4 className="text-primary font-bold text-6xl">20 +</h4>
               <p className="text-white font-normal text-[28px] mt-6">Team Members</p>
            </div>
         </div>

         <div className="flex items-start lg:items-center flex-col justify-center">
            <div>
               <h4 className="text-primary font-bold text-6xl">100 +</h4>
               <p className="text-white font-normal text-[28px] mt-6">Projects Completed</p>
            </div>
         </div>

         <div className="flex items-start lg:items-center justify-center flex-col">
            <div>
               <h4 className="text-primary font-bold text-6xl">85M +</h4>
               <p className="text-white font-normal text-[28px] mt-6">Revenue Generated</p>
            </div>
         </div>
      </section>
   )
}

export default StatisticsComponent;