import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-3">
        <span className="text-primary text-2xl">
          <FaPhoneAlt />
        </span>
        <div>
          <h1 className="font-semibold">Call me</h1>
          <Link
            href="https://wa.me/+92316-2538705"
            className="text-secondary"
            target="_blank"
          >
            +92316-2538705
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary text-2xl">
          <FaEnvelope />
        </span>
        <div>
          <h1 className="font-semibold">Email</h1>
          <Link
            href="mailto:kashafrana5911@gmail.com"
            className="text-secondary"
            target="_blank"
          >
            kashafrana5911@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary text-2xl">
          <FaLocationDot />
        </span>
        <div>
          <h1 className="font-semibold">Location</h1>
          <Link
            href="https://maps.app.goo.gl/hHhLK5PRdjxTNTM99"
            className="text-secondary"
            target="_blank"
          >
            Zahir Pir, Punjab, Pakistan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
