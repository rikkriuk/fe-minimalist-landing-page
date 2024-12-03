import React, { useEffect, useState } from "react";
import CompanyLogo from "../assets/company-logo.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   
   useEffect(() => {
      const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
     
     window.addEventListener("scroll", handleScroll);
     return () => {
        window.removeEventListener("scroll", handleScroll);
     };
   }, []);
 
   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };
   return (
     <header
       className={`flex justify-between py-5 px-6 md:px-24 z-[100] w-full fixed items-center transition-colors duration-300 ${
         isScrolled ? "bg-primary shadow-md" : "bg-transparent"
       }`}
     >
         <div>
            <img src={CompanyLogo} alt="Company Logo" width={83} height={28} />
         </div>

         <button onClick={toggleNav}>
            <svg
               width="45"
               height="45"
               viewBox="0 0 66 66"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect
                  x="3.99988"
                  y="4"
                  width="58"
                  height="58"
                  fill="white"
                  stroke="white"
                  strokeWidth="8"
               />
               <line
                  x1="16.9999"
                  y1="20.5"
                  x2="49.9999"
                  y2="20.5"
                  stroke="#101010"
                  strokeWidth="5"
               />
               <line
                  x1="16.9999"
                  y1="42.5"
                  x2="49.9999"
                  y2="42.5"
                  stroke="#101010"
                  strokeWidth="5"
               />
            </svg>
         </button>

         <nav
            className={`border-2 border-gray-400 bg-white py-5 px-14 fixed top-16 right-12 md:right-32 origin-top-right transform transition-transform duration-500 ${
               isNavOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
         >
            <ul className="flex flex-col gap-8 text-center overflow-hidden">
               <li className="text-[#1A1A1A] hover:scale-110 transition-transform duration-200">
                  <Link to={"/"} className="px-4 py-2">HOME</Link>
               </li>
               <li className="text-[#1A1A1A] hover:scale-110 transition-transform duration-200">
                  <Link to={"/about"} className="px-4 py-2">ABOUT</Link>
               </li>
               <li className="text-[#1A1A1A] hover:scale-110 transition-transform duration-200">
                  <Link to={"/contact"} className="px-4 py-2">CONTACT</Link>
               </li>
               <li className="text-[#1A1A1A] hover:scale-110 transition-transform duration-200">
                  <Link to={"/blogs"} className="px-4 py-2">BLOGS</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default HeaderComponent;
