import React, { useEffect } from "react";
import TeamComponent from "../components/TeamComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../redux/slices/teamSlice";

const TeamsContainer = () => {
   const dispatch = useDispatch();
   const { teams } = useSelector((state) => state.team);

   useEffect(() => {
      dispatch(getTeams());
   }, []);

   return (
      <section className="px-6 lg:px-40 mb-20 flex flex-col items-center">
         <div className="my-20">
            <h4 className="text-[44px] font-bold">Meet the heroes behind the magic</h4>
         </div>
         <TeamComponent teams={teams} />
      </section>
   )
}

export default TeamsContainer;