"use client";

import BrandText from "./BrandText";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const bgColor = isScrolled ? "bg-palette-100" : "bg-palette-200";

  return (
    <header
      className={`w-full h-20 px-8 flex items-center justify-between fixed z-50 ${bgColor} backdrop-filter backdrop-blur-sm bg-opacity-10`}
    >
      <BrandText />
      <nav className="flex">
        <ul className="flex items-center space-x-6 px-6 text-neutral-500 font-medium">
          <li>
            <a
              href=""
              className="text-palette-800 hover:text-palette-800 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-palette-800 transition-all duration-300"
            >
              Recources
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
