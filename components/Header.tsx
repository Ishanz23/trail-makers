"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter()

  function onLinkClick(url: string) {
    setIsNavOpen(prev => !prev);
    router.push(url)
  }
  return (
    <header className="flex items-center justify-between w-full p-4 bg-opacity-20 bg-slate-600">
      <div className="text-lg font-semibold tracking-wider">
        <a href="/">THE TRAIL MAKERS</a>
      </div>
      <nav>
        <section className="flex MOBILE-MENU">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={
              !isNavOpen
                ? `hidden`
                : `flex flex-col justify-evenly items-center bg-slate-800 absolute top-0 right-0 w-full md:w-1/4 h-screen z-10`
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8 CROSS-ICON"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-a-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/treks/all")}>All treks</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/treks/difficulty")}>Trek by difficulty</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/treks/seasons")}>Trek by season</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/treks/months")}>Trek by month</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/about")} href="/about">About</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/homestay")} href="/homestay">Pahadi Manzil</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a onClick={() => onLinkClick("/contact")}>Contact Us</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
}
