import React from "react";
import CompanyLogo from "../assets/company-logo.png";
import { Link } from "react-router-dom";

const FooterComponent = () => {
   return (
        <footer className="pt-28 pb-10 lg:px-28 px-6 bg-[#101010]">
            <div className="flex justify-between flex-wrap flex-row gap-10">
               <div className="flex flex-col lg:w-2/5 w-full">
                  <img src={CompanyLogo} alt="Company-logo" width={100} height={60} />

                  <p className="text-white text-2xl my-10 font-medium">
                     Dsgnr. is an award winning creative and design agency 
                     based in New York, USA.
                  </p>

                  <div className="flex justify-start">
                     <div className="flex items-center flex-wrap gap-7 lg:gap-16 py-4 px-4 lg:px-12 border-2 border-primary w-auto">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24.375 10C26.1009 10 27.5 8.60089 27.5 6.875C27.5 5.14911 26.1009 3.75 24.375 3.75C22.6491 3.75 21.25 5.14911 21.25 6.875C21.25 8.60089 22.6491 10 24.375 10Z" fill="white"/>
                           <path d="M24.375 10C26.1009 10 27.5 8.60089 27.5 6.875C27.5 5.14911 26.1009 3.75 24.375 3.75C22.6491 3.75 21.25 5.14911 21.25 6.875C21.25 8.60089 22.6491 10 24.375 10Z" fill="white"/>
                           <path d="M25.9 11.6375C25.025 11.9125 24.0625 11.9625 23.0625 11.7125C21.3875 11.275 20.025 9.9375 19.5625 8.2625C19.3375 7.45 19.325 6.65 19.4625 5.925C19.625 5.125 19.0625 4.375 18.2625 4.375H8.75C5 4.375 2.5 6.25 2.5 10.625V19.375C2.5 23.75 5 25.625 8.75 25.625H21.25C25 25.625 27.5 23.75 27.5 19.375V12.825C27.5 12 26.7 11.375 25.9 11.6375ZM19.4 13.9375L17.925 15.1125C17.1 15.775 16.05 16.1 15 16.1C13.95 16.1 12.8875 15.775 12.075 15.1125L8.1625 11.9875C7.7625 11.6625 7.7 11.0625 8.0125 10.6625C8.3375 10.2625 8.925 10.1875 9.325 10.5125L13.2375 13.6375C14.1875 14.4 15.8 14.4 16.75 13.6375L18.225 12.4625C18.625 12.1375 19.225 12.2 19.5375 12.6125C19.8625 13.0125 19.8 13.6125 19.4 13.9375Z" fill="white"/>
                        </svg>

                        <p className="text-white text-2xl">info@dsgnr.com</p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-5">
                  <h4 className="font-bold text-2xl gap-7 text-white">What We Do</h4>
                  <ul className="flex flex-col gap-3">
                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Intro</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Home</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Work</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Pricing</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Contact Us</Link>
                     </li>
                  </ul>
               </div>

               <div className="flex flex-col gap-5">
                  <h4 className="font-bold text-2xl gap-7 text-white">What We Do</h4>
                  <ul className="flex flex-col gap-3">
                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>About</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>News</Link>
                     </li>

                     <li>
                        <Link className="text-white text-2xl font-normal" to={"/"}>Testimonial</Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center mt-14 gap-5">
               <div className="mt-7">
                  <ul className="flex gap-7">
                     <li>
                        <Link className="text-white font-normal text-2xl" to={"/"}>Privacy Policy</Link>
                     </li>

                     <li>
                        <Link className="text-white font-normal text-2xl" to={"/"}>Term</Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <ul className="flex gap-10 items-center">
                     <li>
                        <Link to={"/"}>
                           <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24.6327 2.948C23.9345 3.96915 23.0905 4.83922 22.1006 5.55819C22.111 5.70407 22.1162 5.92289 22.1162 6.21464C22.1162 7.56923 21.9183 8.92382 21.5223 10.2784C21.1264 11.6226 20.522 12.9146 19.7092 14.1546C18.9069 15.3946 17.9483 16.4939 16.8334 17.4525C15.7184 18.4007 14.3743 19.1614 12.8009 19.7345C11.2274 20.2971 9.54463 20.5785 7.75241 20.5785C4.92862 20.5785 2.34448 19.823 0 18.3122C0.364697 18.3538 0.771073 18.3747 1.21913 18.3747C3.56361 18.3747 5.6528 17.6557 7.4867 16.2178C6.39261 16.1969 5.41314 15.8635 4.54829 15.2174C3.68344 14.561 3.0895 13.7274 2.76648 12.7167C3.11034 12.7688 3.42815 12.7948 3.71991 12.7948C4.16796 12.7948 4.61081 12.7375 5.04844 12.6229C3.88141 12.3832 2.91236 11.8049 2.14129 10.888C1.38064 9.9606 1.00031 8.88735 1.00031 7.66822V7.6057C1.70886 8.00166 2.46952 8.21526 3.28227 8.24652C2.59456 7.78805 2.04751 7.1889 1.64113 6.44909C1.23476 5.70928 1.03157 4.90695 1.03157 4.04209C1.03157 3.12514 1.26081 2.27592 1.71928 1.49443C2.98009 3.04699 4.51182 4.29217 6.31446 5.22996C8.12753 6.15733 10.0656 6.67312 12.1288 6.77732C12.0454 6.38136 12.0037 5.99582 12.0037 5.62071C12.0037 4.22444 12.4935 3.03657 13.4729 2.0571C14.4628 1.06721 15.6559 0.572266 17.0522 0.572266C18.511 0.572266 19.7405 1.10368 20.7408 2.16651C21.8766 1.94769 22.9446 1.54132 23.9449 0.947382C23.5594 2.14567 22.8196 3.07304 21.7255 3.7295C22.6946 3.6253 23.6636 3.3648 24.6327 2.948Z" fill="white"/>
                           </svg>
                        </Link>
                     </li>

                     <li>
                        <Link to={"/"}>
                           <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13.879 0.758848V4.88513H11.4251C10.529 4.88513 9.9246 5.07269 9.612 5.44781C9.2994 5.82292 9.1431 6.3856 9.1431 7.13583V10.0899H13.7227L13.1131 14.7163H9.1431V26.5794H4.36037V14.7163H0.374756V10.0899H4.36037V6.68256C4.36037 4.74446 4.9022 3.244 5.98587 2.18117C7.06954 1.10791 8.5127 0.571289 10.3153 0.571289C11.8471 0.571289 13.0349 0.633809 13.879 0.758848Z" fill="white"/>
                        </svg>

                        </Link>
                     </li>

                     <li>
                        <Link to={"/"}>
                           <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22.5918 11.8418C22.5918 14.0091 22.1386 15.942 21.232 17.6405C20.3255 19.3285 19.0334 20.6466 17.3558 21.5948C15.6782 22.5534 13.7557 23.0328 11.5884 23.0328C10.0358 23.0328 8.551 22.7306 7.13389 22.1262C5.71678 21.5219 4.49765 20.7091 3.4765 19.688C2.45535 18.6668 1.6426 17.4477 1.03825 16.0306C0.433891 14.6135 0.131714 13.1286 0.131714 11.5761C0.131714 10.0235 0.433891 8.53867 1.03825 7.12156C1.6426 5.70445 2.45535 4.48532 3.4765 3.46417C4.49765 2.44302 5.71678 1.63027 7.13389 1.02592C8.551 0.421562 10.0358 0.119385 11.5884 0.119385C14.5685 0.119385 17.1266 1.1197 19.2627 3.12032L16.1523 6.10562C14.9332 4.92817 13.4119 4.33945 11.5884 4.33945C10.3068 4.33945 9.11888 4.66246 8.02479 5.3085C6.94112 5.95453 6.08148 6.83501 5.44587 7.94994C4.81025 9.05445 4.49244 10.2632 4.49244 11.5761C4.49244 12.889 4.81025 14.1029 5.44587 15.2178C6.08148 16.3223 6.94112 17.1976 8.02479 17.8436C9.11888 18.4897 10.3068 18.8127 11.5884 18.8127C12.4533 18.8127 13.2452 18.6929 13.9641 18.4532C14.6935 18.2135 15.2927 17.9166 15.7616 17.5623C16.2305 17.1976 16.6368 16.786 16.9807 16.3275C17.335 15.8691 17.5903 15.4366 17.7466 15.0303C17.9133 14.6239 18.0279 14.2384 18.0904 13.8737H11.5884V9.93494H22.4043C22.5293 10.5914 22.5918 11.227 22.5918 11.8418ZM36.1429 9.93494V13.2172H32.8763V16.4838H29.594V13.2172H26.3274V9.93494H29.594V6.6683H32.8763V9.93494H36.1429Z" fill="white"/>
                        </svg>
                        </Link>
                     </li>
                  </ul>
               </div>

            </div>

            <div className="flex justify-center items-center mt-20">
               <p className="font-medium text-2xl text-gray-600">Made with ❤️ by <Link className="border-b-2 border-gray-600" to={"/"}>moyin</Link></p>
            </div>
        </footer>
    )
}

export default FooterComponent;