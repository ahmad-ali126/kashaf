import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import KashafRana from "@/assets/kashaf_rana.jpg";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="bg-primary/10">
      <div className="wrapper lg:flex lg:py-10">
        <div className="flex justify-center items-center lg:items-start flex-col gap-3 py-20 lg:w-[51%]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-xl lg:text-sm">Hello there, I&#39;m</h1>
            <h1 className="font-bold text-4xl lg:text-5xl text-primary">
              Kashaf Rana
            </h1>
          </div>
          <p className="text-secondary font-[500]">Full stack developer</p>
          <p className="text-center text-secondary lg:text-start">
            As a passionate MERN Stack Developer with 2 years of experience, I
            specialize in building dynamic, responsive, and user-focused web
            applications.
          </p>
          <Link href="#contact" className="group">
            <Button>
              Contact Me{" "}
              <span className="group-hover:translate-x-2 transition-all duration-300">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
          <Socials />
        </div>
        <div className="flex justify-center items-center py-10 lg:w-[50%]">
          <div>
            <span className="rounded-main h-[20rem] w-80 block overflow-hidden">
              <Image src={KashafRana} alt="kashaf-rana-hero-image" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
