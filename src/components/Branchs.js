"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Branchs() {
  const [isHovering, setIsHovering] = useState(-1);

  const showBtnHandler = (id) => {
    setIsHovering(id);
  };

  const hideBtnHandler = () => {
    setIsHovering(-1);
  };

  const branchs = [
    {
      img: "/images/branchs/shobe1.svg",
      description: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    },
    {
      img: "/images/branchs/shobe2.svg",
      description: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    },
    {
      img: "/images/branchs/shobe3.svg",
      description: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    },
    {
      img: "/images/branchs/shobe4.jpg",
      description: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-lg lg:text-2xl my-4 lg:my-8">
        ترخینه گردی
      </h2>
      <div className="grid mx-5 lg:grid-cols-4 grid-cols-1 gap-y-3 lg:gap-x-11 lg:mx-11">
        {branchs.map((item, id) => (
          <div
            key={id + 1}
            onMouseEnter={() => showBtnHandler(id)}
            onMouseLeave={hideBtnHandler}
            className={`grid lg:grid-cols-1 grid-cols-2 transition-all duration-100 ease-in rounded-lg overflow-hidden ${
              isHovering === id
                ? "shadow-sm border border-primary "
                : "shadow-none border border-Gray-4"
            }`}
          >
            <div className="relative lg:aspect-video object-cover">
              <Image
                sizes="(max-width: 768px) 100vw"
                src={item.img}
                fill
                alt={item.description}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col lg:mx-2 my-8 justify-center items-center">
              <h3 className="font-bold text-xl">{item.description}</h3>
              <p className="text-Gray-7 line-clamp-2">{item.address}</p>
            </div>
            <div>
              {isHovering === id ? (
                <div className="flex justify-center">
                  <div className="hidden lg:block transition-all duration-1000 ease-in ">
                    <Link
                    href={"/branchs"}
                      className="flex px-6 py-2 items-center mb-3 font-semibold text-primary border rounded border-primary"
                    >
                      صفحه شعبه <IoIosArrowBack />
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <button className="hidden lg:block px-6 py-2 mb-3 text-transparent font-semibold">
                    صفحه شعبه <IoIosArrowBack />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branchs;
