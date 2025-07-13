import "./globals.css";
import "../../public/Poppins.css";
import ToastContainer from "@/utils/ToastContainer";

export const metadata = {
  title: "Kashaf Rana - Web Developer",
  description:
    "Showcasing expert MERN Stack development, responsive web design, UI/UX, graphic design, and cinematic video editing services. Transform your ideas into high-performing, visually stunning digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
