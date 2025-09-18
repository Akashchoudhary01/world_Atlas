import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "../assets/unnamed.png";
import ApiData from "../Components/ApiData/ApiData";

export default function Home() {
  return (
    <div className="bg-zinc-950 h-full w-full p-10">
      <div className="max-w-5xl min-w-[20rem] m-auto">
        {/* grid for image and Slogan */}
        <div className="grid justify-center items-center grid-row md:grid-cols-2 mt-4">
          <div className="text-white text-center">
            <h1 className="text-3xl  md:text-5xl mb-8">
              Discover the World at Your Fingertips
            </h1>
            <p className="text-xl font-light ">
              Explore countries, cultures, and continents with our World Atlas.
              Discover maps, facts, and stories that bring the{" "}
              <span className="text-blue-600 font-bold">Earth</span> closer.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start mt-6">
              <button className="flex  items-center gap-2 outline-1 hover:bg-gradient-to-l from-black via-gray-700 to-black-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                Start Explore <FaArrowRightLong className="text-lg" />
              </button>
            </div>
          </div>
          <div className="md:ml-20">
            <img className="w-xl mt-5 md:mt-0" src={image} alt="" />
          </div>
        </div>

        {/*country Details */}
        {/* Country Details */}
        <div className="md:mt-12 mt-8 mb-8 flex flex-col items-center text-center">
          <h1 className="md:text-4xl text-2xl tracking-wide text-white mb-8">
            Here are Some Interesting Facts About the World
          </h1>

          <ApiData />
        </div>
      </div>
    </div>
  );
}
