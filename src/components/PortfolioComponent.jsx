import React from "react";
import { Link } from "react-router-dom";

const PortfolioComponent = ({ portfolio }) => {
  return (
    <section className="flex flex-col mt-16 gap-10 md:gap-20">
      <nav className={`flex gap-7 px-6 justify-between items-center mt-20 ${portfolio.type === "home" ? "flex-col lg:flex-row md:px-24" : " lg:mx-40 xl:mx-64 flex-col"}`}>
        <div className={`${portfolio.type === "home" ? "xl:ml-56" : "w-full"}`}>
          <h3 className="text-[44px] font-bold">{portfolio.title}</h3>
        </div>

        {portfolio.type === "home" && (
          <ul className="flex gap-8 flex-wrap">
          {portfolio.navbar.map((item, index) => (
            <li key={index} className={`text-xl text-[#101010] py-1 ${index === 0 && "font-bold border-b-2 border-black"}`}>
            <Link
              to={"/"}
            >
              {item}
            </Link>
            </li>
          ))}
          </ul>
        )}

        {portfolio.type === "feature" && (
          <div className="flex justify-end w-full text-end mr-0 md:mr-16">
            <p className="text-xl w-96 text-[#101010] py-1">{portfolio.navbar}</p>
          </div>
        )}
      </nav>

      <div className={`${portfolio.type === "home" ? "grid-image-container" : "gird-cols-1 md:grid-cols-2 mx-6 lg:mx-40 xl:mx-72 gap-4 lg:gap-16 place-items-center"} grid`}>
      {portfolio.images.map((image, index) => (
        <div
          key={index}
          className={`relative ${portfolio.type === "home" ? "h-[432px]" : "xl:w-[629px] xl:h-[629px] lg:w-[429px] lg:h-[429px] w-full"} group ${portfolio.type === "home" && `portfolio${index + 1}`}`}
        >
          <img
            src={image.banner}
            className="w-full h-full object-cover"
            alt={`Portfolio ${index + 1}`}
          />

          <Link
            to={`${image.id}`}
            className="text-[32px] font-bold absolute bottom-0 left-0 right-0 text-white bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center py-4"
          >
            {image.title}
          </Link>
        </div>
      ))}

      </div>
    </section>
  );
};

export default PortfolioComponent;
