import React from "react";
import PersonImg from "../assets/person-3.png";
import FormComponent from "../components/FormComponent";

const FormContainer = () => {
   return (
      <main>
         <section className="px-6 lg:px-20 grid grid-col-2 gap-10 xl:gap-0 xl:grid-cols-2 py-32">
            <div>
               <img src={PersonImg} alt="person image" width={622} height={891} />
            </div>

            <FormComponent />
         </section>
      </main>
   )
}

export default FormContainer;