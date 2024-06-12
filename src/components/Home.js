import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../media/hero-image.png";
import HeroImageMobile from "../media/hero-image-mobile.png";
import { WrenchIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <h2 className="absolute text-3xl italic font-thin text-white top-24 sm:top-40 bg-gray-800/70 p-1">
        Designer & Developer
      </h2>
      <button
        className="absolute rounded-full  sm:text-4xl text-2xl p-4 z-1 w-50 top-40 sm:top-60 
      hover:bg-gray-800/85
      hover:border-cyan-500/90
      hover:text-white
      border-2 border-white/90 bg-cyan-500/90 text-gray-800"
      >
        <NavLink className="flex" to="/projects">
          <WrenchIcon className="sm:w-10 w-8 mr-3" /> My Garage
        </NavLink>
      </button>
      <div
        className="h-screen w-screen bg-no-repeat bg-cover sm:hidden"
        style={{ backgroundImage: `url(${HeroImageMobile})` }}
      ></div>

      <div
        className="h-screen w-screen bg-cover bg-no-repeat sm:bg-[-250px] lg:bg-[0px] max-sm:hidden"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
    </div>
  );
}
