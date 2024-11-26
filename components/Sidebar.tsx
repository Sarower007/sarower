'use client';

import React from "react";
import { FaBlog, FaProjectDiagram } from "react-icons/fa";
import gsap from "gsap";

const Sidebar = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".sidebar-item",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="w-60 bg-secondary text-white h-full flex flex-col">
      <div className="p-4 text-center font-bold text-xl">Menu</div>
      <div className="flex flex-col gap-4 mt-4 px-4">
        <div className="sidebar-item flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded">
          <FaBlog />
          <span>Blog</span>
        </div>
        <div className="sidebar-item flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded">
          <FaProjectDiagram />
          <span>Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
