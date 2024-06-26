"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set a timeout to update the state after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Adjust the delay as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only on component mount

  return (
    <main>
      <div
        className={`fixed flex flex-col w-screen h-screen z-10 bg-white text-center pt-20 gap-8 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-3xl" href="/">
          Home
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/howitworks">
          How it Works
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/websites">
          Websites
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/social">
          Social Media
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/advertising">
          Advertising
        </Link> */}
        {/* <Link onClick={handleClick} className="text-3xl" href="/testimonials">
          Testimonials
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/contact">
          Contact
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/about">
          About
        </Link>
      </div>
      <header className="flex flex-wrap gap-10 py-4 items-center w-screen lg:flex-row lg:justify-between lg:px-20 lg:h-28 lg:mb-[0px] bg-[#283618] text-white">
        <Link
          href={"/"}
          className="font-Playfair flex flex-col lg:flex-row lg:items-center lg:justify-center lg:p-2 tracking-widest text-xl z-0 bg-white"
        >
          <p className="text-[45px] flex flex-col lg:flex-row text-[#606C38]">
            <span className="text-[#283618]">GROW</span>GREEN
          </p>
          <div className="flex flex-col text-[#283618]">
            <p className="text-base lg:mt-auto">Lawn</p>
            <p className="text-base lg:mt-auto">
              <span>&</span>Landscaping
            </p>
          </div>
        </Link>

        <Link href={"/contact"} className="hidden lg:inline lg:flex gap-1">
          <Image src={PhoneSvg} alt="pfp" width={23} />
          <span>Connect With Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height=""
            viewBox="0 0 90 78"
          >
            <path
              d="M0 12V78h90V12H0zm45 38.5L7.138 16.5h75.724L45 50.5zm-11-5.5L4 72.195V17.805L34 45zm2.958 2.714L45 57.918l8.943-8.204 28.919 26.53H7.138l28.82-26.816zm20.943-2.714L86 17.805v53.39L58.901 45z"
              fill="white"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </Link>

        <div className="hidden lg:flex gap-6">
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/"
          >
            Home
          </Link>
          {/* <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/websites"
          >
            Websites
          </Link>
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/social"
          >
            Social Media
          </Link> */}
          {/* <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/advertising"
          >
            Advertising
          </Link> */}
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="flex gap-4 px-2 z-0">
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={23} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a> */}
        </div>
        <button
          onClick={handleClick}
          className="inline flex flex-col justify-center items-center z-20 lg:hidden"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
                    }`}
          ></span>
        </button>
      </header>
    </main>
  );
}
