"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { useState } from "react";

import {
  TEXT_CURSOR_STYLE,
  TEXTCOLOR,
  BACKGROUNDCOLOR,
} from "@/constants/ColorConstants";
import { ROUTES } from "@/constants/RoutesConstants";
import { PAGE_NAMES } from "@/constants/RoutesConstants";
import { NAVIGATION_MENU_ITEMS } from "@/constants/RoutesConstants";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={BACKGROUNDCOLOR}>
      <nav className="w-full flex justify-center md:justify-between px-6 items-center md:px-4 relative">
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href={ROUTES.HOME}>
            <Image
              src={logo}
              alt="Header"
              width={150}
              //height={20}
              className="mt-2 md:ml-auto rounded-l  overflow-auto"
            />
          </Link>
        </div>
        <div className="flex md:hidden order-1">
          <button onClick={toggleMenu}>
            <span className={`${TEXTCOLOR} text-[40px]`}>&#8801;</span>
          </button>
        </div>

        <ul className="md:flex hidden ">
          {(Object.keys(NAVIGATION_MENU_ITEMS) as Array<keyof typeof NAVIGATION_MENU_ITEMS>).map((key) => (
            <li
              key={NAVIGATION_MENU_ITEMS[key]}
              className={`${TEXTCOLOR} ${TEXT_CURSOR_STYLE}`}
            >
              <Link href={ROUTES[key]}>{NAVIGATION_MENU_ITEMS[key]}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <>
          <div className="fixed top-0 right-0 h-full w-50 bg-white shadow-xl  flex flex-col md:hidden animate-slide-in">
            <div className="flex justify-start p-4 text-black">
              <button
                className={`${TEXTCOLOR} animate-slide-out`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-xl">&lt;</span>
              </button>
            </div>
            <ul className="flex flex-col gap-4 px-6">
              {(Object.keys(NAVIGATION_MENU_ITEMS) as Array<keyof typeof NAVIGATION_MENU_ITEMS>).map((key) => (
                <li
                  key={NAVIGATION_MENU_ITEMS[key]}
                  className={`${TEXTCOLOR} ${TEXT_CURSOR_STYLE}`}
                >
                  <Link href={ROUTES[key]} onClick={() => setIsMenuOpen(false)}>
                    {NAVIGATION_MENU_ITEMS[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;