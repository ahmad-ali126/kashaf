"use client";

import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Name"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
        />
        <input
          type="text"
          placeholder="Subject"
          className="bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
        />
        <textarea
          placeholder="Enter your message"
          rows={8}
          className="resize-none bg-primary/10 rounded-md px-4 py-2 focus:outline-primary"
        ></textarea>
      </div>
      <Button type="submit">
        Send Message
        <span>
          <FaArrowRight />
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
