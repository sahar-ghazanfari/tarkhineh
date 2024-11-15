"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-2xl focus:outline-none">
        <RxHamburgerMenu
          size={25}
          className="block lg:hidden"
          color="#417f56"
        />
      </button>
      {isOpen && (
        <nav className="absolute bg-white shadow-md rounded-md mt-2 w-48">
          <ul className="flex flex-col">
            <li className="p-2 hover:bg-gray-200">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link href="/branchs">شعبه</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link href="/menu">منو</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link href="/franchise">اعطای‌نمایندگی</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link href="/contact-us">تماس با ما</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
