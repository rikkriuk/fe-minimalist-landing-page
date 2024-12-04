import React from "react";

const FormComponent = () => {
   return (
      <div className="flex flex-col items-end">
         <h3 className="lg:w-3/6 text-[44px] font-bold text-end">We'd love to hear from you</h3>

         <form className="flex flex-col gap-8 w-full mt-7">
            <div className="w-full">
               <input className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="name" name="name" type="text" placeholder="Name*" required/>
            </div>

            <div className="w-full">
               <input className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="email" name="email" type="email" placeholder="Email*" required/>
            </div>

            <div className="w-full">
               <input className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="website-url" name="website-url" type="text" placeholder="Website URL*" required/>
            </div>

            <div className="w-full">
               <textarea className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7 h-72" name="project-detail" id="project-detail" placeholder="Project Details*"></textarea>
            </div>

            <button className="bg-black text-white py-6 font-normal text-[28px]">Send Proposal</button>
         </form>
      </div>
   )
}

export default FormComponent;