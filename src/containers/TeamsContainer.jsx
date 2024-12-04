import React from "react";
import TeamComponent from "../components/TeamComponent";
import Team1Img from "../assets/team-1.png";
import Team2Img from "../assets/team-2.png";
import Team3Img from "../assets/team-3.png";

const teams = [
   {
      name: "Esther Howard",
      job: "Founder",
      img: Team1Img
   },
   {
      name: "Cody Fisher",
      job: "Developer",
      img: Team2Img
   },
   {
      name: "Brooklyn Simmons",
      job: "Desginer",
      img: Team3Img
   }
]

const TeamsContainer = () => {
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