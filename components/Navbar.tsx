"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlHome } from "react-icons/sl";
import { PiAddressBookThin } from "react-icons/pi";
import { RxGrid } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { LuFileCode2 } from "react-icons/lu";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiSkypeLogo,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

// Define prop types
interface NavbarProps {
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const router = usePathname();

  useEffect(() => {
   
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true); 
      } else {
        setIsOpen(false); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    if (window.innerWidth >= 1024) return; // Close only on small screens
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen border-r border-colors-primary">
      {/* Sidebar (Navbar) */}
      <div
        className={`bg-[#002E02] text-white p-4 w-64 h-full fixed top-0 left-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl  font-bold">
            SAR<span className="text-[#97C93E]">O</span>WER
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)} // Hides navbar on button click
            className="fixed top-4 right-4 p-2 bg-[#97c93E] text-[#002E02] rounded-full z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex  flex-col items-center mb-6">
          <div className="relative">
            <div className=" w-48 bg-white rounded-tl-full rounded-bl-full  border-2 border-[#97C93E] rounded-br-full items-center justify-center overflow-hidden rounde">
              <Image
                src="https://i.ibb.co/yQMVtcq/sarower.png"
                alt="Profile Picture"
                className=""
                width={292}
                height={292}
              />
            </div>

            <span className="absolute bottom-1 right-4 w-4 h-4 bg-[#97c93E] rounded-full border-2 border-gray-800 animate-ping"></span>
            <span className="absolute bottom-1 right-4 w-4 h-4 bg-[#97c93E] rounded-full border-2 border-gray-800"></span>
          </div>

          <h2 className="mt-4 text-lg font-bold">Sarower Alam Zia</h2>
          <p className="text-sm text-gray-400">
            Front-End Developer & Designer{" "}
          </p>
        </div>

        <div className="border-t border-gray-600 mb-6"></div>

{/* Menu Items */}
<div className="space-y-4"> {/* This applies gap between each link */}
  <Link
    href="/"
    onClick={closeMenu}
    className={`flex items-center py-2 px-4 relative overflow-hidden group uppercase rounded-sm hover:text-[#002E02] transition-all duration-300 ease-in-out
    ${router === '/' ? 'text-white bg-[#c2c5128e] font-bold' : 'text-white'}
    shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,.5),_7px_7px_20px_0px_rgba(0,0,0,.1),_4px_4px_5px_0px_rgba(0,0,0,.1)]`}
  >
    <SlHome className={`mr-2 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:z-50 ease-in-out ${router === '/' ? 'text-white' : 'text-[#97C93E]'}`} />
    <span className={`group-hover:text-[#002E02] group-hover:font-bold group-hover:z-50`}>
      Home
    </span>
    <span
      className={`absolute inset-0 w-full h-full bg-[#97C93E] transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}
    ></span>
  </Link>

  <Link
    href="/about"
    onClick={closeMenu}
    className={`flex items-center py-2 px-4 relative overflow-hidden group uppercase rounded-sm hover:text-[#002E02] transition-all duration-300 ease-in-out
    ${router === '/about' ? 'text-white bg-[#c2c5128e] font-bold' : 'text-white'}
    shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,.5),_7px_7px_20px_0px_rgba(0,0,0,.1),_4px_4px_5px_0px_rgba(0,0,0,.1)]`}
  >
    <PiAddressBookThin className={`mr-2 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:z-50 ease-in-out ${router === '/about' ? 'text-white' : 'text-[#97C93E]'}`} />
    <span className={`group-hover:text-[#002E02] group-hover:font-bold group-hover:z-50`}>
      About
    </span>
    <span
      className={`absolute inset-0 w-full h-full bg-[#97C93E] transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}
    ></span>
  </Link>

  <Link
    href="/projects"
    onClick={closeMenu}
    className={`flex items-center py-2 px-4 relative overflow-hidden group uppercase rounded-sm hover:text-[#002E02] transition-all duration-300 ease-in-out
    ${router === '/projects' ? 'text-white bg-[#c2c5128e] font-bold': 'text-white'}
    shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,.5),_7px_7px_20px_0px_rgba(0,0,0,.1),_4px_4px_5px_0px_rgba(0,0,0,.1)]`}
  >
    <RxGrid className={`mr-2 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:z-50 ease-in-out ${router === '/projects' ? 'text-white' : 'text-[#97C93E]'}`} />
    <span className={`group-hover:text-[#002E02] group-hover:font-bold group-hover:z-50`}>
      Projects
    </span>
    <span
      className={`absolute inset-0 w-full h-full bg-[#97C93E] transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}
    ></span>
  </Link>

  <Link
    href="/blog"
    onClick={closeMenu}
    className={`flex items-center py-2 px-4 relative overflow-hidden group uppercase rounded-sm hover:text-[#002E02] transition-all duration-300 ease-in-out
    ${router === '/blog' ? 'text-white bg-[#c2c5128e] font-bold': 'text-white'}
    shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,.5),_7px_7px_20px_0px_rgba(0,0,0,.1),_4px_4px_5px_0px_rgba(0,0,0,.1)]`}
  >
    <LuFileCode2 className={`mr-2 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:z-50 ease-in-out ${router === '/blog' ? 'text-white' : 'text-[#97C93E]'}`} />
    <span className={`group-hover:text-[#002E02] group-hover:font-bold group-hover:z-50`}>
      Blog
    </span>
    <span
      className={`absolute inset-0 w-full h-full bg-[#97C93E] transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}
    ></span>
  </Link>

  <Link
    href="/contact"
    onClick={closeMenu}
    className={`flex items-center py-2 px-4 relative overflow-hidden group uppercase rounded-sm hover:text-[#002E02] transition-all duration-300 ease-in-out
    ${router === '/contact' ? 'text-white bg-[#c2c5128e] font-bold' : 'text-white'}
    shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,.5),_7px_7px_20px_0px_rgba(0,0,0,.1),_4px_4px_5px_0px_rgba(0,0,0,.1)]`}
  >
    <TfiEmail className={`mr-2 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:z-50 ease-in-out ${router === '/contact' ? 'text-white' : 'text-[#97C93E]'}`} />
    <span className={`group-hover:text-[#002E02] group-hover: text group-hover:font-bold group-hover:z-50`}>
      Contact
    </span>
    <span
      className={`absolute inset-0 w-full h-full bg-[#97C93E] transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}
    ></span>
  </Link>
</div>











        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {/* Facebook Icon */}
          <Link
            href="https://facebook.com" // Replace with your Facebook URL
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#97C93E] text-[#002E02] rounded-full hover:bg-[#002E02] hover:text-[#97C93E] transition"
          >
            <PiFacebookLogo className="w-6 h-6" />
          </Link>

          {/* Instagram Icon */}
          <Link
            href="https://instagram.com" // Replace with your Instagram URL
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#97C93E] text-[#002E02] rounded-full hover:bg-[#002E02] hover:text-[#97C93E] transition"
          >
            <PiInstagramLogo className="w-6 h-6" />
          </Link>

          {/* LinkedIn Icon */}
          <Link
            href="https://linkedin.com" // Replace with your LinkedIn URL
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#97C93E] text-[#002E02] rounded-full hover:bg-[#002E02] hover:text-[#97C93E] transition"
          >
            <PiLinkedinLogo className="w-6 h-6" />
          </Link>

          {/* Skype Icon */}
          <Link
            href="https://skype.com" // Replace with your Skype URL
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#97C93E] text-[#002E02] rounded-full hover:bg-[#002E02] hover:text-[#97C93E] transition"
          >
            <PiSkypeLogo className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 w-full p-0 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Toggle Button */}
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 p-2 bg-[#002E02] text-[#97C93E] rounded-full z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}

        {/* Render Children */}
        {children}
      </div>
    </div>
  );
};

export default Navbar;
