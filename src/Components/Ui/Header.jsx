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
    <header className="w-full bg-gradient-to-r from-blue-600 via-zinc-600 to-zinc-950 py-6 px-5">
      <div className="flex justify-between items-center max-w-7xl min-w-[20rem] mx-auto">
        {/* Logo */}
        <h1 className="tracking-[12px] md:tracking-[15px] font-extralight text-3xl md:text-4xl text-white">
          World-Atlas
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-2xl text-white">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="cursor-pointer hover:text-blue-600 transition">About</li>
          </Link>
          <Link to={"/country"}>
            <li className="cursor-pointer hover:text-blue-600 transition">Country</li>
          </Link>
          <Link to={"/contact"}>
            <li className="cursor-pointer hover:text-blue-600 transition">Contact-us</li>
          </Link>
        </ul>

        {/* Hamburger / Close Btn */}
        <div className="md:hidden text-3xl text-white">
          <button onClick={handelShowMenu}>
            {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-full bg-gradient-to-r from-zinc-600 to-zinc-950 text-white shadow-md w-60 flex flex-col gap-6 py-10 px-6 text-lg font-medium transform transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to={"/"} onClick={handelShowMenu}>
          <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
        </Link>
        <Link to={"/about"} onClick={handelShowMenu}>
          <li className="cursor-pointer hover:text-blue-600 transition">About</li>
        </Link>
        <Link to={"/country"} onClick={handelShowMenu}>
          <li className="cursor-pointer hover:text-blue-600 transition">Country</li>
        </Link>
        <Link to={"/contact"} onClick={handelShowMenu}>
          <li className="cursor-pointer hover:text-blue-600 transition">Contact-us</li>
        </Link>
      </ul>
    </header>
  );
}
