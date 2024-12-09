"use client";
import Slider from "components/Slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useRef, useState } from "react";
import Link from "next/link";
import FoodCart from "./foodcart/page";

function Menu() {
  const scrollContainerRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
   const [searchQuery, setSearchQuery] = useState(""); 

  const scrollContent = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      container.scrollLeft += direction === "right" ? -300 : +300;

      if (
        container.scrollLeft + container.clientWidth <=
        container.scrollWidth
      ) {
        setIsEnd(!isEnd);
      } else if (container.scrollLeft === 0) {
        setIsEnd(!isEnd);
      }
    }
  };

  const images = [
    {
      id: 1,
      img: "/images/slider_menu/slide1.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
    {
      id: 2,
      img: "/images/slider_menu/slide2.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
    {
      id: 3,
      img: "/images/slider_menu/slide3.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
    {
      id: 4,
      img: "/images/slider_menu/slide4.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
    {
      id: 5,
      img: "/images/slider_menu/slide5.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
    {
      id: 6,
      img: "/images/slider_menu/slide6.png",
      description: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
  ];

  const foodFilter = [
    { id: 1, name: "غذاهای ایرانی" },
    { id: 2, name: "غذاهای غیر ایرانی" },
    { id: 3, name: "پیتزاها" },
    { id: 4, name: "ساندویچ‌ها" },
    { id: 5, name: "پرفروش ترین" },
    { id: 6, name: "اقتصادی ترین" },
  ];

  return (
    <div>
      <Slider images={images} buttonShowing={false} />
      <div className="bg-Gray-3 relative z-10 flex text-lg md:text-xl gap-x-4 md:gap-x-8 text-Gray-7 lg:px-28">
        <Link
          href="#"
          className="menu-cateegory"
        >
          غذای اصلی
        </Link>
        <Link
          href="#"
          className="menu-cateegory"
        >
          پیش غذا
        </Link>
        <Link
          href="#"
          className="menu-cateegory"
        >
          دسر
        </Link>
        <Link
          href="#"
          className="menu-cateegory"
        >
          نوشیدنی
        </Link>
      </div>
      <div className="lg:mx-28 mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative my-4">
          <div
            ref={scrollContainerRef}
            className="flex items-center mb-4 gap-x-2 overflow-x-auto hide-scrollbar"
            style={{ scrollBehavior: "smooth", padding: "0 0.5rem" }}
          >
            {foodFilter.map((item) => (
              <button
                key={item.id}
                className="flex w-fit text-Gray-8 p-1 rounded-full items-center bg-Gray-3"
              >
                <span className="text-nowrap">{item.name}</span>
                <IoIosArrowBack />
              </button>
            ))}
          </div>
          <div className="w-full justify-self-center relative max-w-2xl">
            <div className="absolute left-2 top-1.5">
              <FiSearch size="30" />
            </div>
            <input
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="جستجو"
              className="outline-none w-full p-2 border-2 border-Gray-4 placeholder:text-Gray-8 rounded-lg"
            />
            <button
              onClick={() => scrollContent(isEnd ? "left" : "right")}
              className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 bg-Gray-1 text-white rounded-md z-10"
            >
              <IoIosArrowForward
                className={`text-Gray-6 ${isEnd ? "" : "rotate-180"}`}
              />
            </button>
          </div>
        </div>
        <FoodCart searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Menu;
