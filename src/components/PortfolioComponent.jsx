import React from "react";
import { Link } from "react-router-dom";
import PortfolioImg1 from "../assets/portfolio-1.png";
import PortfolioImg2 from "../assets/portfolio-2.png";
import PortfolioImg3 from "../assets/portfolio-3.png";
import PortfolioImg4 from "../assets/portfolio-4.png";
import PortfolioImg5 from "../assets/portfolio-5.png";
import PortfolioImg6 from "../assets/portfolio-6.png";
import PortfolioImg7 from "../assets/portfolio-7.png";

const PortfolioComponent = () => {
  const portfolioImages = [
    PortfolioImg1,
    PortfolioImg2,
    PortfolioImg3,
    PortfolioImg4,
    PortfolioImg5,
    PortfolioImg6,
    PortfolioImg7,
  ];

  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <nav className="flex gap-7 flex-col lg:flex-row justify-between items-center mt-20 px-6 md:px-24">
        <div className="xl:ml-56">
          <h3 className="text-[44px] font-bold">Our Work So Far</h3>
        </div>

        <ul className="flex gap-8 flex-wrap">
          <li className="text-xl text-[#101010] py-1 font-bold border-b-2 border-black">
            <Link to={"/"}>ALL</Link>
          </li>
          <li className="text-xl text-gray-500 py-1 font-bold">
            <Link to={"/"}>BRANDING</Link>
          </li>
          <li className="text-xl text-gray-500 py-1 font-bold">
            <Link to={"/"}>ILLUSTRATION</Link>
          </li>
          <li className="text-xl text-gray-500 py-1 font-bold">
            <Link to={"/"}>PRODUCT DESIGN</Link>
          </li>
        </ul>
      </nav>

      <div className="grid-image-container grid">
        {portfolioImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full h-[432px] object-cover portfolio${index + 1}`}
            alt={`Portfolio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioComponent;
