"use client";

import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import ExpContent from "./ExpContent";
import { useState } from "react";

const Experience = () => {
  const [sectionStatus, setSectionStatus] = useState("education");
  const toggleSection = (status) => {
    setSectionStatus(status);
  };
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex items-center justify-center sm:gap-10 flex-col sm:flex-row gap-5">
        <button
          className="flex items-center text-xl bg-primary/10 px-4 py-2 rounded-md gap-2 font-semibold"
          onClick={() => toggleSection("education")}
        >
          <span className="text-primary text-2xl">
            <FaGraduationCap />
          </span>
          <span>Education</span>
        </button>
        <button
          className="flex items-center text-xl bg-primary/10 px-4 py-2 rounded-md gap-2 font-semibold"
          onClick={() => toggleSection("work")}
        >
          <span className="text-primary text-2xl">
            <MdWorkHistory />
          </span>
          <span>Work</span>
        </button>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:w-[80%] lg:mx-auto">
        {sectionStatus === "education" ? (
          <>
            <ExpContent
              name="Matric"
              location="Govt. School"
              city="Qadir Pur"
              date="2019 - 2021"
            />
            <ExpContent
              name="Intermediate"
              location="Aspire College"
              city="Zahir Pir"
              date="2012 - 2024"
            />
          </>
        ) : (
          <>
            <ExpContent
              name="Computer Course"
              city="Zahir Pir"
              date="2024 - 2024"
            />
            <ExpContent
              name="Web Development"
              city="Zahir Pir"
              date="2024 - 2025"
            />
            <ExpContent
              name="Web Internship"
              city="Zahir Pir"
              date="2025 - Present"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;
