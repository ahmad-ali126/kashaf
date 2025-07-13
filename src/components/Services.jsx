import React from "react";
import ServicesCard from "./ServicesCard";
import { FaPalette } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const Services = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          My <span className="text-primary">Services</span>
        </h1>
        <p className="text-secondary text-sm">What I Offer</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ServicesCard
          icon={<VscCode />}
          service="Web Development"
          description="We offer expert full-stack development and UI/UX design services that elevate user experiences through thoughtful research, intuitive layouts, and visually engaging interfaces. From backend architecture to frontend precision, we ensure your digital products are fast, accessible, and truly user-friendly—designed to not only function flawlessly but also connect with users on every screen."
        />
        <ServicesCard
          icon={<FaGlobe />}
          service="Backend Development"
          description="Our design solutions go beyond code—we offer creative graphic design services tailored to elevate your brand. From logos and branding to marketing materials and digital graphics, every asset is crafted to enhance your visual identity and connect with your audience. Whether you're launching a startup or refreshing your brand, we blend design precision with a strategic approach to ensure your message stands out."
        />
        <ServicesCard
          icon={<MdOutlineDesignServices />}
          service="Web Designing"
          description="Our web design services transform ideas into visually stunning and user-focused digital experiences. We specialize in intuitive layouts, responsive design, clean aesthetics, and seamless user journeys—ensuring your website not only looks great but also connects, engages, and converts your audience."
        />
      </div>
    </div>
  );
};

export default Services;
