"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    // sideMenuRef.current.style.transform = 'translateX(-16rem)';
    sideMenuRef.current.classList.add("transform-minus-16");
    sideMenuRef.current.classList.remove("transform-plus-16");
  };
  const closeMenu = () => {
    // sideMenuRef.current.style.transform = 'translateX(16rem)';
    sideMenuRef.current.classList.add("transform-plus-16");
    sideMenuRef.current.classList.remove("transform-minus-16");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 sm:w-10/12 md:w-9/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header-bg-color"
          className="w-full"
        ></Image>
      </div>

      <nav
        className={`w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-20 sm:w-24 md:w-28 cursor-pointer mr-8 sm:mr-12 md:mr-14"
            alt="logo"
          ></Image>
        </a>

        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-6 sm:px-8 lg:px-12 py-2 sm:py-3 absolute left-1/2 -translate-x-1/2
            ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            } `}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-5 sm:w-6 cursor-pointer "
              alt="moon icon"
            ></Image>
          </button>

          {/* <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10
                        py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo  dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow icon"
            ></Image>
          </a> */}

          <button className="block md:hidden ml-2 sm:ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-5 sm:w-6 cursor-pointer "
              alt="menu icon"
            ></Image>
          </button>
        </div>

        {/*  ----- mobile menu --------  */}
        <ul
          className="flex md:hidden flex-col gap-6 sm:gap-8 py-16 sm:py-20 px-8 sm:px-10 fixed -right-64
                top-0 bottom-0 w-64 sm:w-72 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
          ref={sideMenuRef}
        >
          {/* close btn */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-4 sm:w-5 cursor-pointer"
            ></Image>
          </div>

          <li>
            <a className="font-Ovo text-lg sm:text-xl" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg sm:text-xl" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg sm:text-xl" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg sm:text-xl" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg sm:text-xl" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      
      </nav>
    </div>
  );
};

export default Navbar;
