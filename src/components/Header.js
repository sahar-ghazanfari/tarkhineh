"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import SearchInput from "ui/SearchInput";
import { usePathname, useRouter } from "next/navigation";
import HamburgerMenu from "ui/HamburgerMenu";
import AuthModal from "./AuthModal";
import logo from "../../public/images/logo.svg";
import { useAuth } from "context/AuthContext";

const listItem = [
  { id: 1, links: "/", name: "صفحه‌اصلی" },
  { id: 2, links: "/branchs", name: "شعبه" },
  { id: 3, links: "/menu", name: "منو" },
  { id: 4, links: "/franchise", name: "اعطای‌نمایندگی" },
  { id: 5, links: "/about-us", name: "درباره‌ما" },
  { id: 6, links: "/contact-us", name: "تماس‌باما" },
];

function Header() {
  const { isLoggedIn } = useAuth();
  const [searchInput, setSearchInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearchInputOpen = () => {
    setSearchInput(!searchInput);
  };

  const handleOpenModalOrUserAuth = () => {
    if (isLoggedIn) {
      router.push("/user");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const isActive = (path) => pathname === path;

  return (
    <div className="flex justify-around p-5 lg:py-9  items-center w-42">
      <div className="relative z-10 lg:hidden">
        <HamburgerMenu />
      </div>
      <div className="relative w-24 h-12">
        <Image src={logo} alt="logo" fill sizes="(max-width: 768px) 100vw" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-x-6 text-Gray-7 items-center">
          {listItem.map((item) => (
            <Link
              key={item.id}
              className="cursor-pointer hover:font-semibold hover:text-primary hover:pb-2 hover:border-b-2 border-b-primary"
              href={item.links}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-2 lg:w-44 justify-end">
        <button className="bg-Tint-1 hidden xl:block p-2 rounded">
          <div className="flex gap-x-4">
            {searchInput && <SearchInput />}
            <FiSearch
              color="#417f56"
              size={25}
              onClick={handleSearchInputOpen}
            />
          </div>
        </button>
        <Link
          href="/shoppingCart"
          className={`p-2 rounded ${
            isActive("/shoppingCart")
              ? "bg-primary text-white"
              : "bg-Tint-1 text-primary"
          }`}
        >
          <RiShoppingCartLine size={25} />
        </Link>
        <button
          onClick={handleOpenModalOrUserAuth}
          className={`p-2 rounded ${
            isActive("/user")
              ? "bg-primary text-white"
              : "bg-Tint-1 text-primary"
          }`}
        >
          <FiUser size={25} />
        </button>
        <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Header;
