import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div className="w-full px-[6%] sm:px-[12%] py-8 sm:py-10 scroll-mt-20 min-h-screen" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20 my-12 sm:my-16 lg:my-20">
        <div className="w-48 sm:w-64 md:w-80 rounded-3xl max:w-none">
          <Image
            src={assets.user_image}
            alt="profile imgage"
            className="w-full rounded-3xl"
          ></Image>
        </div>

        <div className="flex-1 w-full">
          <p className="mb-8 sm:mb-10 max-w-full sm:max-w-2xl font-Ovo text-base sm:text-lg md:text-xl">
            I am a Fullstack Developer passionate about building seamless web
            applications. I specialize in crafting responsive interfaces and
            reliable backend systems, turning complex problems into efficient
            solutions. Constantly learning and experimenting with new
            technologies, I aim to deliver clean, high-quality code and
            user-friendly experiences.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full sm:max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="
                                 border-[0.5px]
                                 border-gray-400 
                                 rounded-xl 
                                 p-4 sm:p-6 
                                 cursor-pointer
                                 hover:bg-lightHover 
                                 hover:-translate-y-1
                                 transition
                                 duration-300
                                 hover:shadow-black
                                 dark:border-white 
                                 dark:hover:shadow-white
                              dark:hover:bg-darkHover/50
                                  "
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3"
                ></Image>
                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">
                  {" "}
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-4 sm:my-6 text-gray-700 font-Ove dark:text-white/80 text-sm sm:text-base">
            Tools I use
          </h4>

          <ul className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="
                        flex 
                        items-center 
                        justify-center 
                        w-10 
                        sm:w-12 
                        md:w-14 
                        aspect-square 
                        border 
                        border-gray-400 
                        rounded-lg 
                        cursor-pointer
                        hover:-translate-y-1
                        duration-300
                        "
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-5 md:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
