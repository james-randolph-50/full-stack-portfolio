"use client";

import React from "react";

import { skills } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-col sm:flex-row text-center flex-wrap items-center justify-center mt-16 gap-4 md:gap-16 max-lg:mt-10">
          {skills.map((skill) => (
            <React.Fragment key={skill.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <p>{skill.name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
