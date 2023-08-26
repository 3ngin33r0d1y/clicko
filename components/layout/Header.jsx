"use client";

import BrandText from "./BrandText";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState();

  useEffect(() => {

    window.addEventListener('scroll', handler, false);
    window.addEventListener('onload', handler, false);

    function handler() {
      if (window.scrollY <= window.innerHeight - 128) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });

  const bgColor = isScrolled ? "bg-palette-100" : "bg-palette-200";
  const aboutColor = isScrolled ? "text-palette-800" : "text-neutral-500";
  const featureColor = !isScrolled ? "text-palette-800" : "text-neutral-500";

  return (
    <header
      className={`w-full h-20 px-8 flex items-center justify-between fixed z-50 ${bgColor} backdrop-filter backdrop-blur-sm bg-opacity-10`}
    >
      <a href="/" className="text-3xl">
        <BrandText />
      </a>
      <nav className="flex">
        <ul className="flex items-center space-x-6 px-6 text-neutral-500 font-medium">
          <li>
            <a
              href="#hero"
              className={`${aboutColor} hover:text-palette-800 transition-all duration-300`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`${featureColor} hover:text-palette-800 transition-all duration-300`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-palette-800 transition-all duration-300"
            >
              Docs
            </a>
          </li>
        </ul>
        <a href="">
          <button className="bg-palette-800 text-palette-100 font-semibold px-4 py-2 rounded-md">
            Sign In
          </button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
