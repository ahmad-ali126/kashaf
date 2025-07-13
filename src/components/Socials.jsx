import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const Socials = ({ styles, content, linkStyle }) => {
  return (
    <div
      className={`flex items-center gap-4 text-lg mt-5 text-white ${styles}`}
    >
      <Link
        href=""
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Linkedin" : ""}
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://www.instagram.com/kashaf_x_code?utm_source=qr&igsh=MWs0YXB3Z2Q4eG1scQ=="
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Instagram" : ""}
        <FaInstagram />
      </Link>
      <Link
        href="https://wa.me/+92316-2538705"
        className={`bg-primary/90 p-2 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110 ${linkStyle}`}
        target="_blank"
      >
        {content ? "Whatsapp" : ""}
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Socials;
