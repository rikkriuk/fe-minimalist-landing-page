import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { sendContact } from "../redux/slices/contactSlice";

const FormComponent = () => {
   const [errorValidation, setErrorValidation] = useState({});
   const dispatch = useDispatch();
   const { loading, error } = useSelector((state) => state.contact);
   const { values, setValues, handleChange } = useForm({
      name: "",
      email: "",
      website: "",
      message: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      let errors = {};

      if (values.name.trim() === "") {
         errors.name = "Name is required";
      }

      if (values.email.trim() === "") {
         errors.email = "Email is required";
      }

      if (values.website.trim() === "") {
         errors.website = "Website is required";
      }

      if (!values.website.startsWith("http://") && !values.website.startsWith("https://")) {
         errors.website = "URL must start with http:// or https://";
       }

      if (values.message.trim() === "") {
         errors.message = "Message is required";
      }

      if (Object.keys(errors).length > 0) {
         setErrorValidation(errors);
         return
      }
      dispatch(sendContact(values)).then(() => {
         alert("Your message has been sent successfully");
      })

      setErrorValidation({});
      setValues({
         name: "",
         email: "",
         website: "",
         message: "",
      })
   };

   return (
      <div className="flex flex-col items-end">
         <h3 className="lg:w-3/6 text-[44px] font-bold text-end">We'd love to hear from you</h3>

         <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full mt-7">
            <div className="w-full">
               <input disabled={loading} onChange={handleChange} value={values.name} className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="name" name="name" type="text" placeholder="Name*"/>
               {errorValidation?.name && <p className="text-red-500 mt-2">{errorValidation.name}</p>}
            </div>

            <div className="w-full">
               <input disabled={loading} onChange={handleChange} value={values.email} className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="email" name="email" type="email" placeholder="Email*"/>
               {errorValidation?.email && <p className="text-red-500 mt-2">{errorValidation.email}</p>}
            </div>

            <div className="w-full">
               <input disabled={loading} onChange={handleChange} value={values.website} className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7" id="website-url" name="website" type="text" placeholder="Website URL*"/>
               {errorValidation?.website && <p className="text-red-500 mt-2">{errorValidation.website}</p>}
            </div>

            <div className="w-full">
               <textarea disabled={loading} onChange={handleChange} value={values.message} className="text-2xl border border-gray-500 w-full text-gray-700 placeholder:text-gray-700 placeholder:text-2xl focus:outline-none py-4 px-7 h-72" name="message" id="message" placeholder="Project Details*"></textarea>
               {errorValidation?.message && <p className="text-red-500 mt-2">{errorValidation.message}</p>}
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button disabled={loading} type="submit" className="bg-black text-white py-6 font-normal text-[28px]">Send Proposal</button>
         </form>
      </div>
   )
}

export default FormComponent;