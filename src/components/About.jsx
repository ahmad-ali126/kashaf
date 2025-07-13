import Image from "next/image";
import ShoaibKhan from "@/assets/kashaf_rana.jpg";
import Count from "./CountUp";
import Link from "next/link";
import Button from "./Button";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">About</span> Me
        </h1>
        <p className="text-secondary text-sm">A Short Intro To Myself</p>
      </div>
      <div className="mt-10 flex flex-col gap-10 lg:gap-5 lg:flex-row">
        <div className="flex items-center justify-center lg:w-[50%]">
          <Image
            src={ShoaibKhan}
            alt="ahmad-nadeem-about-img"
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
          <p className="text-secondary text-center lg:text-start">
            ✨As a passionate MERN Stack Developer, I specialize in building
            full-stack web applications that are both functional and visually
            engaging. I focus on creating digital experiences that combine
            clean, efficient code with intuitive user interfaces. With expertise
            across MongoDB, Express.js, React, and Node.js, I bring ideas to
            life—from backend logic to polished frontend layouts. Whether it’s
            crafting responsive web dashboards, dynamic APIs, or modern SPAs, I
            ensure each project is scalable, fast, and user-centered. Over the
            past 2 years, I’ve worked on a range of development projects
            including e-commerce platforms, portfolio websites, admin panels,
            and custom web solutions. Let’s collaborate to turn your vision into
            a powerful, high-performing application!
          </p>
          <div className="grid grid-cols-3 text-center gap-5 w-full">
            <Count start={0} end={2} text="Years experience" />
            <Count start={0} end={30} text="Projects Completed" />
            <Count start={0} end={40} text="Satisfied Clients" />
          </div>
          <Link href="/kashaf_rana.pdf" download={true}>
            <Button>
              Download CV{" "}
              <span>
                <FaDownload />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
