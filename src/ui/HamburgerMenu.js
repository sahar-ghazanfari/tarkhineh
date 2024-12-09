"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hamburgerMenu = [
    { id: 1, name: "صفحه اصلی", link: "/" },
    { id: 2, name: "شعبه", link: "/branchs" },
    { id: 3, name: "منو", link: "/menu" },
    { id: 4, name: "اعطای نمایندگی", link: "/franchise" },
    { id: 5, name: "درباره ما", link: "/about-us" },
    { id: 6, name: "تماس با ما", link: "/contact-us" },
  ];

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
            {hamburgerMenu.map((item) => (
              <Link
                key={item.id}
                className="p-2 hover:bg-gray-200"
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
