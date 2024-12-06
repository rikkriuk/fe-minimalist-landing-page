import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TeamComponent = ({ teams }) => {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
         {teams?.map((team, index) => (
            <div key={index} className="flex flex-col gap-5 p-6 shadow-lg">
               <img src={team.photo} alt={team.name} className="border-4 w-[493px] h-[476px] object-cover" />

               <div className="flex flex-col gap-5">
                  <h5 className="text-[34px] font-bold">{team.name}</h5>

                  <p className="font-normal text-2xl text-gray-600">{team.title}</p>

                  <div className="flex gap-10">
                     <Link className="text-xl font-semibold text-gray-500 flex gap-2 items-center" target="_blank" to={team.linkedin_url || "/"} rel="noreferrer">
                        LINKEDIN
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path opacity="0.5" d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM1.70711 10.7071L10.7071 1.70711L9.29289 0.292893L0.292893 9.29289L1.70711 10.7071Z" fill="#101010"/>
                        </svg>
                     </Link>
                     <Link className="text-xl font-semibold text-gray-500 flex gap-2 items-center" target="_blank" to={team.ig_url || "/"} rel="noreferrer">
                        INSTAGRAM
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path opacity="0.5" d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM1.70711 10.7071L10.7071 1.70711L9.29289 0.292893L0.292893 9.29289L1.70711 10.7071Z" fill="#101010"/>
                        </svg>
                     </Link>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

TeamComponent.propTypes = {
   teams: PropTypes.array,
}

export default TeamComponent;