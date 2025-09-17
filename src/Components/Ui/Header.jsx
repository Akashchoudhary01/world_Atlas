import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handelShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-r  from-blue-600 via-zinc-600 to-zinc-950 w-full py-8 px-5">
      {/* */}
      {/* Left Side - Logo */}
      <h1 className="tracking-[12px]  md:tracking-[15px]  font-extralight text-3xl md:text-4xl text-white">
        World-Atlas
      </h1>

      {/* desktop view */}
      {/* Right Side - Nav Links */}
      <ul className="hidden md:flex gap-8 text-2xl  text-white">
        <Link to={"/"}>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>
        </Link>
        <Link to={"/country"}>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Country
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact-us
          </li>
        </Link>
      </ul>

      {/* Hamburger menu btn */}
      <div className="md:hidden text-2xl">
        <button className="text-white" onClick={handelShowMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* mobile Menu */}

      {showMenu && (
        <ul className=" md:hidden absolute top-0 right-0 bg-gradient-to-r  from-zinc-600 to-zinc-950 w-ful text-white shadow-md w-48 flex flex-col gap-4 py-6 px-4 text-lg font-medium transition-all ease-in-out duration-700">
          {/* Close Button inside menu */}
          <button className="self-end text-3xl mb-4" onClick={handelShowMenu}>
            <IoCloseSharp />
          </button>
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="cursor-pointer hover:text-blue-600 transition">
              About
            </li>
          </Link>
          <Link to={"/country"}>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Country
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Contact-us
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
