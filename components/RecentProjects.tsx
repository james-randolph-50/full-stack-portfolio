"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h2 className="heading relative">
        A selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 mt-5 gap-4 lg:gap-24">
        {projects.map((item) => (
          <a key={item.id} target="_blank" href={item.link}>
            <div
              className="lg:min-h-[27.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              
            >
              <PinContainer
                title="View"
                href=""
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[10vh] lg:h-[15vh] mb-10">
                  {/* <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  > */}
                  {/* <img src="/bg.png" alt="bgimg" /> */}
                  {/* </div> */}
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div> */}

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.cta}
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </a>
        ))}
      </div>
    </div >
  );
};

export default RecentProjects;
